
## 进程相关

```
pgrep <process_name> #查看进程相关进程号
pkill <process_name>  #杀死某进程名所有进程
ps axf   以树的形式查看进程
```



## 杀死僵尸进程

今天在维护服务器的时候，发现有5个nova-novncproxy的僵尸进程。

```
`26327 ?    S   0:05 \_ /usr/bin/python /usr/bin/nova-novncproxy --config-file=/etc/nova/nova.conf`` ``4765 ?    Z   0:00   \_ [nova-novncproxy] `` ``4766 ?    Z   0:00   \_ [nova-novncproxy] `` ``4767 ?    Z   0:00   \_ [nova-novncproxy] `` ``4768 ?    Z   0:00   \_ [nova-novncproxy] `` ``4769 ?    Z   0:00   \_ [nova-novncproxy] `
```

之前对于僵尸进程的了解并不深，赶紧找了[篇相关文章](http://blog.51osos.com/linux/linux-how-to-kill-zombie-process/)来学习一下，该如何处理。

**定义**

In UNIX System terminology, a process that has terminated,but whose parent has not yet waited for it, is called a zombie.

   在UNIX 系统中,一个进程结束了,但是他的父进程没有等待(调用wait / waitpid)他, 那么他将变成一个僵尸进程. 在fork()/execve()过程中，假设子进程结束时父进程仍存在，而父进程fork()之前既没安装SIGCHLD信号处理函数调用 waitpid()等待子进程结束，又没有显式忽略该信号，则子进程成为僵尸进程。

如何查看linux系统上的僵尸进程，如何统计有多少僵尸进程？

\#ps -ef | grep defunct

或者查找状态为Z的进程，Z就是代表zombie process,僵尸进程的意思。

另外使用top命令查看时有一栏为S,如果状态为Z说明它就是僵尸进程。

Tasks: 95 total,  1 running, 94 sleeping,  0 stopped,  **0 zombie**

top命令中也统计了僵尸进程。或者使用下面的命令：

ps -ef | grep defunct | grep -v grep | wc -l

#### 如何杀死僵尸进程呢？

一般僵尸进程很难直接kill掉，不过您可以kill僵尸爸爸。父进程死后，僵尸进程成为”孤儿进程”，过继给1号进程init，init始终会负责清理僵尸进程．它产生的所有僵尸进程也跟着消失。

ps -e -o ppid,stat | grep Z | cut -d” ” -f2 | xargs kill -9

或

kill -HUP `ps -A -ostat,ppid | grep -e ’^[Zz]‘ | awk ’{print $2}’`

当然您可以自己编写更好的shell脚本，欢迎与大家分享。

我将nova-novncproxy stop后再start，僵尸进程即消失，问题解决。

另外子进程死后，会发送SIGCHLD信号给父进程，父进程收到此信号后，执行waitpid()函数为子进程收尸。就是基于这样的原理：就算父进程没有调用wait，内核也会向它发送SIGCHLD消息，而此时，尽管对它的默认处理是忽略，如果想响应这个消息，可以设置一个处理函数。

#### 如何避免僵尸进程呢？

处理SIGCHLD信号并不是必须的。但对于某些进程，特别是服务器进程往往在请求到来时生成子进程处理请求。如果父进程不等待子进程结束，子进程将成为僵尸进程（zombie）从而占用系统资源。如果父进程等待子进程结束，将增加父进程的负担，影响服务器进程的并发性能。在Linux下 可以简单地将 SIGCHLD信号的操作设为SIG_IGN。
signal(SIGCHLD,SIG_IGN);
这样，内核在子进程结束时不会产生僵尸进程。这一点与BSD4不同，BSD4下必须显式等待子进程结束才能释放僵尸进程

或者

用两次fork()，而且使紧跟的子进程直接退出，是的孙子进程成为孤儿进程，从而init进程将负责清除这个孤儿进程。

来源： https://www.cnblogs.com/yuxc/archive/2012/11/04/2753391.html



## dd命令

1.将本地的/dev/hdb整盘备份到/dev/hdd
dd if=/dev/hdb of=/dev/hdd
2.将/dev/hdb全盘数据备份到指定路径的image文件
dd if=/dev/hdb of=/root/image
3.将备份文件恢复到指定盘
dd if=/root/image of=/dev/hdb
4.备份/dev/hdb全盘数据，并利用gzip工具进行压缩，保存到指定路径
dd if=/dev/hdb | gzip > /root/image.gz
5.将压缩的备份文件恢复到指定盘
gzip -dc /root/image.gz | dd of=/dev/hdb
6.备份磁盘开始的512个字节大小的MBR信息到指定文件
dd if=/dev/hda of=/root/image count=1 bs=512
count=1指仅拷贝一个块；bs=512指块大小为512个字节。
恢复：
dd if=/root/image of=/dev/hda
7.备份软盘
dd if=/dev/fd0 of=disk.img count=1 bs=1440k
(即块大小为1.44M)
8.拷贝内存内容到硬盘
dd if=/dev/mem of=/root/mem.bin bs=1024
(指定块大小为1k)
9.拷贝光盘内容到指定文件夹，并保存为cd.iso文件
dd if=/dev/cdrom(hdc) of=/root/cd.iso
10.增加swap分区文件大小
第一步：创建一个大小为256M的文件：
dd if=/dev/zero of=/swapfile bs=1024 count=262144
第二步：把这个文件变成swap文件：
mkswap /swapfile
第三步：启用这个swap文件：
swapon /swapfile
第四步：编辑/etc/fstab文件，使在每次开机时自动加载swap文件：
/swapfile swap swap defaults 0 0
11.销毁磁盘数据
dd if=/dev/urandom of=/dev/hda1
注意：利用随机的数据填充硬盘，在某些必要的场合可以用来销毁数据。
12.测试硬盘的读写速度
dd if=/dev/zero bs=1024 count=1000000 of=/root/1Gb.file
dd if=/root/1Gb.file bs=64k | dd of=/dev/null
通过以上两个命令输出的命令执行时间，可以计算出硬盘的读、写速度。
13.确定硬盘的最佳块大小：
dd if=/dev/zero bs=1024 count=1000000 of=/root/1Gb.file
dd if=/dev/zero bs=2048 count=500000 of=/root/1Gb.file
dd if=/dev/zero bs=4096 count=250000 of=/root/1Gb.file
dd if=/dev/zero bs=8192 count=125000 of=/root/1Gb.file
通过比较以上命令输出中所显示的命令执行时间，即可确定系统最佳的块大小。
14.修复硬盘
dd if=/dev/sda of=/dev/sda
当硬盘较长时间（比如1，2年）放置不使用后，磁盘上会产生magnetic fluxpoint。当磁头读到这些区域时会遇到困难，并可能导致I/O错误。当这种情况影响到硬盘的第一个扇区时，可能导致硬盘报废。上边的命令有可能使这些数据起死回生。且这个过程是安全，高效的。
15.dd命令做usb启动盘
dd if=xxx.iso of=/dev/sdb bs=1M
root用户或者sudo，用以上命令前必须卸载u盘,sdb是你的u盘,bs=1M是块的大小,后面的数值大,写的速度相对块一点,但也不是无限的,我一般选2M,注意,执行命令后很块完成,但u盘还在闪,等不闪了,安全移除。
来源： https://baike.baidu.com/item/dd%E5%91%BD%E4%BB%A4/1063989?fr=aladdin