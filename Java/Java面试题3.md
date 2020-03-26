# 1.JAVA的四个基本特征 

a.抽象:抽象是将一类对象的共同特征总结出来构造类的过程。包括数据抽象和行为抽象两方面，抽象只关心对象有哪些属性和行为，并不关心这些行为的细节是什么。

b.继承:继承是从已有类得到继承信息创建新类的过程，提供继承的类被称为父类，得到继承信息的类被称为子类，继承让变化中的软件系统有了一定的延续性，同时也是封装程序中可变因素的重要手段。

c.封装:封装是指把数据和操作数据的方法绑定起来，对数据的访问只能通过已经定义的接口。

d.多态:多态性是指允许不同子类型的对象对同一消息作出不同的响应。多态的实现方式：方法重载（实现的是编译时的多态性）、方法重写（实现的是运行时的多态性，是面向对象的精髓）

 

## 2.面向对象的基本原则

a.单一职责：一个类只做一件事

b.开闭原则: 对扩展开放，对修改关闭

c.里氏替换原则：任务时候都可以用子类去替换父类

d.依赖倒置：面向接口编程

e.接口隔离：接口要小而专，避免大而全。即接口也应该是高内聚的，只描述一种类型的能力。

 

## 3.static 与 final 的区别和用途

a.static

a.1 修饰变量：静态变量随类加载时完成初始化，内存中只有一个，JVM也只会为它分配一次内存，不依赖于实例，可通过类直接调用。

a.2 修饰方法：在类加载的时候就存在，不依赖任何实例，静态方法必须实现且不能用 abstract 修饰

a.3 修饰代码块：在类加载时就会执行代码块中的内容

b.final

b.1 修改变量：基本类型（类加载后完成初始化，编译后可带入到任何计算中，保持不变性）、引用类型（引用不可变、但引用的对象内容可变）

b.2 修饰方法：不能被继承、不能被子类修改

b.3 修饰类：不能被继承

b.4 修饰形参：形参不可变

 

## 4.HashMap 与 HashTable 的区别

a.HashTable 是线程安全的，HashMap是非线程安全的

b.HashTable 不允许 NULL 值（key和value都不行），HashMap 允许 NULL值 （key 和 value 都行）

c.HashTable 使用 Enumeration 进行遍历，HashMap 使用 Iterator

d.hash算法不同，HashTable 直接使用对象的 hashCode ,而 HashMap 根据对象的hashCode 进行了二次计算

e.HashTable 默认大小为 11 且扩容为 2*old + 1 ,key的定位使用 hash值与size 进行取模，HashMap 默认大小为 16 且一定是2的指数值，扩容为原来的2倍，key的定位使用 hash值与 size-1 进行与运算

f.HashTable 基于 Dictionary类，而 HashMap 基于 AbstractMap 类

 

## 5.HashMap 中的 key 可以为任何对象或数据类型吗

可以为 NULL，但不能为可变对象，因为如果对象变化后其 hashCode 也会进行相应的改变，导致下次如果准确查找对象。除非能保证对象可变后的 hashCode值不变。可以通过重写对象的 hashCode 与 equals 方法来实现

 

## 6.ConcurrentHashMap 与 HashTable的区别

a.ConcurrentHashMap 底层数据结构为 Segment数组与HashEntry数组，通过分段加锁将锁下放到各个 Segment ，使得位于不同 Segment 上的数据在多线程情况下不存在锁竞争，大大提升了并发效率。而 hashTable 是锁全表。

b.ConcurrentHashMap 的 get 操作不加锁，因为 ConcurrentHashMap中的 HashEntry 对象中的 value 与 next 均采用 volatile 修饰，由JVM内存模型确保了其在多线程并发读写情况下的可见性。

 

c.ConcurrentHashMap 的 size 会先进行两次不加锁获取，只有在两次不加锁获取期间存在并发修改时才进行加锁获取，大大降低了锁的使用频率，提升了效率。

d.ConcurrentHashMap 的 hash 算法 采用 Wang/Jenkins 这种具备雪崩性（参数中的任何一位变动即会引起输出一半以上的位变化）的算法进行了二次 hash ，目的是为了让 key值均匀的分布到各个 segment 中。

e.定位算法不同，ConcurrentHashMap 先根据 hash 值进行移位后与segments.size -1 进行与运算得到对应的 segments ，然后再根据 hash值与 HashEntry.size -1 进行与运算，两次与运算的值不一样是为了避免 key 在Segment上分布均匀而在HashEntry数组上分布不均。

f.扩容方式不同，ConcurrentHashMap 是在 segment上进行扩容，HashTable是在整个 table 中扩容。

 

## 7.String 、 StringBuilder 与 StringBuffer

a.都是 final 类、都不允许继承

b.String 的长度是不可变的 ，StringBuilder StringBuffer 的长度是可变的

c.StringBuffer 是线程安全的，StringBuilder 不是，但它们的方法一样。StringBuffer在 StringBuilder的方法之上加上了 synchronized 修饰。但其实一般不存在对字符串进行并发操作，所以对于多个字符串拼接用 StringBuilder 就好

d.在多字符串拼接时 StringBuilder 拥有更好的性能

f.String 不变性的理解

g.用 + 号连接时会创建新的字符串tring s = new String("Hello") 可能创建两个对象或者一个对象，如果静态区中有 Hello 字符串常量的话，仅在堆中创建一个对象即可，如果没有则需要在堆和静态区中都需要创建对象

 

## 8.sleep()和 wait()的区别

a.sleep 是 Thread 中的静态方法，执行此方法后当前线程将让出 CPU，但是线程的状态并不会改变，如果线程持有锁，锁也不会被释放

b.wait 是 Object 类中的方法，只能在监视器上执行，执行此方法后当前线程将进入到监视器的等待队列中，同时会释放当前线程持有的锁。需要 notify 或 notifyAll 方法的唤醒

 

## 9.synchronized 与 lock 的区别

a.lock 能实现 synchronized的全部功能，同时 lock 还提供了更为高级的特性。可定时的锁、可轮询的锁、可中断的锁、公平队列、非块结构的锁

b.synchronized 是托管给 JVM 执行的，而 lock 是 JAVA 写的控制锁的代码， synchronized 不需要手工释放锁，lock 则必须手工释放锁

c.synchronized 语义更清晰，在1.6后 JVM进行了优化，提供了 自适应自旋锁、锁削除、锁粗化、轻量级锁、偏向锁等 性能得到提升

d.synchronized 是基于悲观锁机制 LOCK 是基于 乐观锁机制

 

10.JAVA 中的 BIO NIO AIO 分别指什么

a.BIO: 同步阻塞 服务器实现模式为一个连接一个线程 容易造成线程的浪费

b.NIO: 同步非阻塞 服务器实现模式为 将客户发送的连接请求注册到 selector上，通过轮询来处理准备好的请求。利用于高并发短请求 eg:聊天服务器

c.AIO: 异步非阻塞 服务器实现为 一个请求一个线程，客户端请求接收后即返回，服务端完成后再回调

 

 

## 11.String 有重写 hashCode 和 toString 吗 ，如果重写 equals 而不重写 hashCode 会出现什么问题？

a. String 重写了 Object 的 hashCode 和 toString 方法

b.当 equals 重写后必须重写 hashCode ，根据协议 a.equal(b) 为 true 则必定有 a.hashCode() == b.hashCode() ,a.hashCode != b.hashCode() 则必定 a.equals(b) 为 false , a.hashCode()==b.hashCode()则不一定 a.equals(b)为true 如果重写了 equals 而不重写 hashCode 则会导致在集体中存储 a 和 b 时会存储 2份值而 a.equals(b) 是相等的，从而产生混淆和错误。

 

## 12.JAVA 序列化、如何实现序列化与反序列化，常见的序列化协议有哪些

a.JAVA序列化定义: 将对象转换成一个字节序列，并能够在以后将这个字节序列完全恢复为原来的对象，序列化可以弥补不同操作系统之间的差异。

b.实现序列化的方法

 实现 Serializable 接口：该接口是一个可序列化的标志，并没有包含实现的属性和方法。为了保证安全可以使用 transient 关键字对不必进行序列化的属性进行修饰。 static 修改的属性也不会被序列化

 实现 Externalizable 接口：自己对要序列的内容进行控制和管理。

c.反序列化

 实现 Serializable 接口的类实例在反序死时不需要调用构造函数，完全基于字节

 实现 Externalizable 接口的类实例在反序列化时需要调用构造方法

d.JAVA 序列化的作用: 1.JAVA远程方法的调用(RPC) 2.对JavaBean进行序列化

e.常见的序列化协议

 XML：跨机器、跨语言、性能较差、简洁性差

 JSON:跨机器、跨语言、简洁、易读、扩展、兼容性好、符合对象的理解

 Protobuf：简洁、紧凑、解析速度快

 

13.JAVA中创建线程的方式有几种、分别是什么

a.继承 Thread 类，重写 run 函数

b.实现 Runnable 接口，重写 run 函数，然后将其做为参数去创建 Thread 对象

c.实现 Runnable 接口可以避免 JAVA 单继承带来的局限性，增加代码的健壮性。

d.线程的启动都是调用 start 方法。

 

## 14.什么叫线程安全，如何保证线程安全

a.线程安全简单来说就是指某个类的行为在多线程的情况下与单线程的情况下表现一致。

b.确保线程安全的机制:1.使用 volatile 对变量进行修饰，确保变量在多线程情况下的可见性。2. 使用 synchronized 或 lock 等同步机制。

15.多线程如何进行通信

a.利用 wait / notify 机制进行通信

b.利用全局变量进行通信 利用volatile 修饰可以确保多线程之间的可见性

c.利用中断机制

## 16.什么是线程池 线程池的原理及如何合理配置

a.线程池定义: 线程池 顾名思义就是利用一个容器来管理多个线程、线程的创建、销毁都由容器来维护，达到对线程进行重复利用，从而降低系统消耗，因为创建线程与销毁需要消耗较多的系统资源。

b.线程池的创建与配置

 corePoolSize:核心线程数，当线程池中线程的数量少于当前值时，新任务到达即使有空闲线程也会创建新的线程去执行任务。

 maximumPoolSize:最大线程数。当线程池中的线程数量等于最大值且任务队列已满后，新任务将执行饱和策略

 keepAliveTime:空闲线程存活时间。当空闲线程存活时间大于此值时，将会被回收。

 

 TimeUnit:空闲线程存活时间的单位

 runnableTaskQueue:任务队列，当线程数达到corePoolSize时用于保存待执行的任务

 ArrayBlockingQueue:基于数组结构的阻塞队列，FIFO

 LinkedBlockingQueue:基于链表的阻塞队列

 SynchronizedQueue:不存储元素的阻塞队列

 PriorityBlockingQueue:一个具有优先级的阻塞队列

 ThreadFactory：线程创建工厂，可以为线程池的线程定义一个独特的线程前缀，方便区分。

 

 AbortPolicy:饱和策略

AbortPolicy:直接抛出异常，默认策略

​    CallerRunsPolicy:调用者所在线程来处理任务

​    DiscardOldestPolicy:丢弃队列中最老的一个任务，并执行当前任务。

​    DiscardPolicy:不处理，直接丢弃掉

​    自定义实现 RejectedExecutionHander接口来定义策略。

 

## 17.线程池使用的优化

a.利用 prestartCoreThread（预热一个线程） 或 prestartAllCoreThreads（预热所有核心线程）来预热线程池

b.对于 CPU 密集型 可配置 N 个

d.对于 I/O 密集型 可配置 2N+1 个

e.使用无界队列 和 不设置线程的最大数都可能导致 OOM ，要避免那样做

 

## 18.如何判断 JAVA 内存溢出

a.通过配置 -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=D:\heapdump JVM参数，利用 MemoryAnalyzer工具对内存快照进行分析。

b.代码层分析:1.检查全局集合变量的引用 2. 检查单例模式中是否存在外部对象的引用 3. 检查物理连接：DB连接、网络连接

 

19.concurrent 包下面有哪些类

 

atomic 下的各种类 ：AtomicInteger AtomicLong AtomicBoolean 等支持对基本类型在并发环境下的准确操作locks 下的锁 ReentrantLock ReentrantReadWriteLock.ReadLock ReentrantReadWriteLock.WriteLock

ArrayBlockingQueue LinkedBlockingQueue SynchronousQueue PriorityBlockingQueue 等阻塞队列

CountDownLatch CyclicBarrier Semaphore 等并发控制类

Executors ExecutorService SechdultExecutorService ThreadPoolExecutor Future FutureTask 等线程池相关类

TimeUnit 时间类

ThreadLocalRandom 线程本地随机类

## 20.volatile有什么用？能否用一句话说明下volatile的应用场景

a.volatile的作用是保持变量在多线程情况下的可见性

b.应用场景： 1 写 N 读 eg:活动开关、发布开关

c.多线程情况下正确使用 volatile 的条件:1.对于变量的写操作不依赖于变量的当前值。(如果值只从单线程写入则可以忽略这个条件) 2.该变量没有包含在具有其他变量的不变式中。

 

## 21.说明下java的内存模型及其工作流程

a.JAVA内存模型分为主内存和工作内存

b.JAVA 内存模型规定所有的变量都存储在主内存中，每个线程有自己的工作内存，保存了被线程使用到的变量的主内存副本拷贝。

c.线程对变量的所有操作（读取 、赋值等）都必须在工作内存中进行，而不能直接读写主内存中的变量。

d.不同的线程之间无法直接访问对方工作内存中的变量。线程间变量值的传递都需要通过主内存来完成。

e.这里的变量是指对象、静态字段、构成数组对象的元素 不包括局部变量与方法参数。

 

## 22.JAVA内存屏障

a.程序次序规则：一个线程内，按照控制流程序依次执行

b.监控器原则：对于同一个对象的解锁操作 优先于 加锁操作

c.volatile变量规则：对一个 volatile 变量的写操作优先于读操作

d.线程启动规则：Thread对象的 start 方法优先于此线程中的每一个动作

e.线程终止规则：线程中的所有操作优先于此线程的终止检测。eg : Thread.join()Thread.isAlive()

f.线程中断规则：线程的 interrupt() 方法的调用优先于 Thread.interrupted() 方法检测到是否发生。

g.对象终结规则：一个对象的初始化完成优先于它的 finalize() 方法

h.传递性：A 优先于 B ，B 优先于 C 那么 A 优先于 C 。

 

## 23.JAVA 虚拟机的模块划分

a.程序计数器：线程私有 纪录当前执行位置

b.虚拟机栈：每个线程都拥有自己的线程栈，为线程私有，线程栈中存放线程调用的方法及当前执行点的相关信息

c.本地方法栈：为线程执行本地方法时服务

d.堆：被所有线程共享。用于存放 JAVA 程序中创建的所有对象 GC管理的主要区域 物理上不连续 逻辑上连续 无法扩展时产生 OOM

e.方法区：线程共享 用于存放虚拟机加载的类信息 常量 静态变量又称永久区

f.运行时常量池：无法扩展时会产生OOM

 

 

## 24.如何实现乐观锁（CAS）？如何避免ABA问题

a.乐观锁利用 CAS原语实现：CAS原语有三个值，一个是内存值，一个是期望值，一个是写入值。读取内存值 -> 内存值== 期望值 ? 更新成功返回 : 设定期望值为当前内存值再次更新

b.通过带入版本号来解决 ABA 问题，即替换时还需要进行版本号判断

 

## 25.什么时候进行 MinGC FullGc

a.MinGC: 新生代中的垃圾收集动作，采用的是复制算法。对于较大的对象，在 MinGC 的时候会进入到老年代

b.FullGC: 老年代的垃圾收集动作，采用的是标记-整理算法。由于老年代的对象一般存活时间久，FullGC 次数不会有 MinGC 那么频繁

 

## 26.GC Roots的节点主要有哪些

a.全局性的引用 eg:常量 、类静态属性

b.执行上下文 eg:栈帧中的本地变量表。

 

## 27.JAVA 如何加载一个类

a.虚拟机把类的数据从 class 文件加载到内存需要经历以下几个步骤：加载->验证->准备->解析->初始化->使用->卸载

b.JAVA类加载的时机

 遇到　new getstatic putstatic invokestatic 这4条字节码指令时。

 使用 java.lang.reflect 包中的方法对类进行反射调用的时候

 当初始化一个类时发现其父类还未初始化，则需要先初始化父类

 当虚拟机启动时，用户指定要执行的主类(包含 main 方法的那个类)

 当使用 JDK 1.7的动态语言支持时，如果一个 java.lang.invoke.MethodHandle实例最后的解析结果为 REF_getStatic REF_putStatic REF_invokeStatic 的方法句柄且其对应的类没有初始化。

 

## 28.类加载器

a.启动类加载器（Bootstrap ClassLoader）:负责加载 JAVA_HOME\lib 目录下的类，如 rt.jar 启动类加载器无法被 JAVA 程序直接引用

b.扩展类加载器（Extension ClassLoader）:负责加载 JAVA_HOME\lib\ext 目录下的类或被 java.ext.dirs 系统变量所指定的路径中的所有类库

c.应用程序类加载器( Application ClassLoader):负责加载用户类路径 CLASS_PATH 上所指定的类库，开发者也可以直接使用这个类加载器

d.类在加载过程中使用 双亲委派机制，要求除顶层的启动类加载器外，其余的类加载器都应该有自己的父类加载器。这里的父子关系不是继承而是组合 .自定义类加载器 -> 应用程序类加载器 -> 扩展类加载器 -> 启动类加载器

 

## 29.类加载过程中的双亲委派机制

a.双亲委派模型的工作过程：如果一个类加载器收到了类加载的请求，它首先不会自己去尝试加载这个类，而是把这个请求委派给父类加载器去完成，每一个层次的类加载器都是如此。因此所有的加载请求最终都应该传送到顶层的启动类加载器中，只有当父加载器反馈自己无法完成这个加载请求时（它的搜索范围中没有找到所需的类），子加载器才会尝试自己去加载。

b.好处：双亲委派模型使用JAVA类随着它的类加载器一起具备了一种带有优先级的层次关系。使得 JDK中的一些基础类不会被用户定义的类所覆盖掉。对于保证JAVA程序的稳定运作非常重要。

 

## 29.进程间通信的方式

a.消息队列

b.信号量

c.数据共享

d.管道

e.RFC

 

## 30.JAVA常用垃圾收集算法

a.标记清除算法：1.标记 -> 从根节点出发，标记可到达的对象 2.清理->清除未被标记的对象。缺点：回收后空间不连续，存在大量的内存碎片。

b.复制算法：适用于新生代回收的算法 1.复制 -> 将内存分为两块，垃圾回收时将存活对象复制到未使用的内存中。2.清理 -> 将正在使用的内存中的所有对象清除，交换两个内存的角色。缺点：内存被折半，当存活对象多时效率低。

c.标记压缩算法：适用于老年代回收的算法。1.标记 -> 歌词可到达的对象 2.压缩 -> 将所有存活对象压缩到内存的一端 3.清理 -> 清理边界外的所有内存。

d.分代收集算法：根据垃圾回收对象的特性，对不同阶段的对象采用最合适的收集算法，年轻代采用复制算法回收，老年代采用标记清除或标记压缩算法。它将内存区间根据对象的特点分为3块。Elden FromSurvivor ToSurvivor 。

 

## 31.JAVA常用的垃圾收集器

a.Serial收集器：历史最久的单线程收集器 采用复制算法

b.ParNew 收集器：Serial的多线程版。可以配合CMS用于收集年轻代。

c.CMS 收集器：基于标记-清除算法的并发收集器，用于老年代对象收集。收集过程分为4步：初始标记->并发标记->重新标记->并发清除其中初始标记与重新标记仍需要STW(Stop The World) 优点在于并发标记及并发清除期间可以与用户线程一起并发。回收的线程数默认为(CPU数量+3)/4 。由于使用标记-清除算法，存在内存碎片，遇到大对象时会造成FULL GC

d.G1收集器：基于标记-整理算法，过程分为4步：初始标记->并发标记->最终标记->筛选回收。无内存碎片。

 

## 32.JVM常用监控工具

a. jstat：用于监视虚拟机各种运行状态信息，可以显示JVM进程中的类装载、内存、垃圾回收、JTI编译等数据。 jstat option pid intervals count 。eg: jstat -gcutil 2764 查看 2764进程的垃圾回收情况 jstat -class 2764 查看 2764的类加载情况

b. jinfo: 用于实时查看和调整JVM各项参数。jinfo option pid

c. jmap: 用于生成堆转储快照。jmap option pid . eg:jmap -dump:format=b,file=test.bin 3500

d. jhat: 用于分析 dump 快照 ，但一般不用 ，而是去用 visualVm 或 MAT l

e. jstack: 用于生成虚拟机当前时刻的线程快照，主要用于定位线程间死锁、死循环、请求外部资源的长时间等待。记住 用 jstack 命令时要切换到进程用户。