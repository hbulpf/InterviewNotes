(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{351:function(v,_,l){"use strict";l.r(_);var i=l(42),e=Object(i.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h1",{attrs:{id:"java面试题1"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#java面试题1"}},[v._v("#")]),v._v(" Java面试题1")]),v._v(" "),l("p",[v._v("1.面向对象编程的四大特性及其含义？")]),v._v(" "),l("ul",[l("li",[v._v("技术点：面向对象编程特点")]),v._v(" "),l("li",[v._v("思路：分条简述每个特性的含义")]),v._v(" "),l("li",[v._v("参考回答：\n"),l("ul",[l("li",[v._v("抽象：对现实世界的事物进行概括，抽象为在计算机虚拟世界中有意义的实体")]),v._v(" "),l("li",[v._v("封装：将某事物的属性和行为包装到对象中，构成一个不可分割的独立实体，数据被保护在抽象数据类型的内部，并且尽可能地隐藏内部的细节，只保留一些对外接口使之与外部发生联系")]),v._v(" "),l("li",[v._v("继承：子类继承父类，不仅可以有父类原有的方法和属性，也可以增加自己的或者重写父类的方法及属性")]),v._v(" "),l("li",[v._v("多态：允许不同类的对象对同一消息做出各自的响应")])])])]),v._v(" "),l("ol",[l("li",[v._v("String、StringBuffer和StringBuilder的区别？")])]),v._v(" "),l("ul",[l("li",[v._v("技术点：String")]),v._v(" "),l("li",[v._v("参考回答：\n"),l("ul",[l("li",[v._v("String是字符串常量，而StringBuffer、StringBuilder都是字符串变量，即String对象一创建后不可更改，而后两者的对象是可更改的：")]),v._v(" "),l("li",[v._v("StringBuffer是线程安全的，而StringBuilder是非线程安全的，这是由于StringBuffer对方法加了同步锁或者对调用的方法加了同步锁")]),v._v(" "),l("li",[v._v("String更适用于少量的字符串操作的情况，StringBuilder适用于单线程下在字符缓冲区进行大量操作的情况，StringBuffer适用于多线程下在字符缓冲区进行大量操作的情况")])])])]),v._v(" "),l("ol",[l("li",[v._v('String a=""和String a=new String("")的的关系和异同？')])]),v._v(" "),l("ul",[l("li",[v._v("技术点：String")]),v._v(" "),l("li",[v._v("参考回答：\n"),l("ul",[l("li",[v._v('通过String a=""直接赋值的方式得到的是一个字符串常量，存在于常量池；注意，相同内容的字符串在常量池中只有一个，即如果池已包含内容相等的字符串会返回池中的字符串，反之会将该字符串放入池中')]),v._v(" "),l("li",[v._v('通过new String("")创建的字符串不是常量是实例对象，会在堆内存开辟空间并存放数据，且每个实例对象都有自己的地址空间')])])]),v._v(" "),l("li",[v._v('引申：对于用String a=""和String a=new String("")两种方式定义的字符串，判断使用equals()、"=="比较结果是什么')])]),v._v(" "),l("ol",[l("li",[v._v("Object的equal()和==的区别？")])]),v._v(" "),l("ul",[l("li",[v._v("技术点：equal()、==")]),v._v(" "),l("li",[v._v("参考回答：\n"),l("ul",[l("li",[v._v("equals()：是Object的公有方法，具体含义取决于如何重写，比如String的equals()比较的是两个字符串的内容是否相同")]),v._v(" "),l("li",[v._v('"==" ：对于基本数据类型来说，比较的是两个变量值是够是否相等，对于引用类型来说，比较的是两个对象的内存地址是否相同')])])]),v._v(" "),l("li",[v._v('引申：对于用String a=""和String a=new String("")两种方式定义的字符串，判断使用equals()、"=="比较结果是什么')])]),v._v(" "),l("ol",[l("li",[v._v("装箱、拆箱什么含义？")])]),v._v(" "),l("ul",[l("li",[v._v("技术点：装箱、拆箱")]),v._v(" "),l("li",[v._v("参考回答：装箱就是自动将基本数据类型转换为包装器类型，拆箱就是自动将包装器类型转换为基本数据类型")])]),v._v(" "),l("ol",[l("li",[v._v("int和Integer的区别？")])]),v._v(" "),l("ul",[l("li",[v._v("技术点：基本数据类型、引用类型")]),v._v(" "),l("li",[v._v("参考回答：\n"),l("ul",[l("li",[v._v("Integer是int的包装类，int则是java的一种基本数据类型")]),v._v(" "),l("li",[v._v("Integer变量必须实例化后才能使用，而int变量不需要")]),v._v(" "),l("li",[v._v("Integer实际是对象的引用，当new一个Integer时，实际上是生成一个指针指向此对象；而int则是直接存储数据值")]),v._v(" "),l("li",[v._v("Integer的默认值是null，int的默认值是0")])])])]),v._v(" "),l("ol",[l("li",[v._v("遇见过哪些运行时异常？异常处理机制知道哪些？")])]),v._v(" "),l("ul",[l("li",[l("p",[v._v("技术点：Java异常机制")])]),v._v(" "),l("li",[l("p",[v._v("思路：对Throwable异常进行分类说明每种异常的特点和常见问题，简述几种常见异常处理机制，详见"),l("a",{attrs:{href:"https://www.jianshu.com/p/3718766df5ba",target:"_blank",rel:"noopener noreferrer"}},[v._v("Java基础之异常机制"),l("OutboundLink")],1)])]),v._v(" "),l("li",[l("p",[v._v("参考回答：")])]),v._v(" "),l("li",[l("p",[v._v("（1） Throwable继承层次结构，可见分成两大类Error和Exception：")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("Error（错误）:指程序"),l("strong",[v._v("无法")]),v._v("恢复的异常情况，表示运行应用程序中较严重的问题；发生于虚拟机自身、或者在虚拟机试图执行应用时，如Virtual MachineError（Java虚拟机运行错误）、NoClassDefFoundError（类定义错误）；属于"),l("strong",[v._v("不可查")]),v._v("异常，即不强制程序员必须处理，即使不处理也不会出现语法错误。")])]),v._v(" "),l("li",[l("p",[v._v("Exception（异常）:指程序")]),v._v(" "),l("p",[v._v("有可能")]),v._v(" "),l("p",[v._v("恢复的异常情况，表示程序本身可以处理的异常。又分两大类：")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("RuntimeException（运行时异常）：由程序"),l("strong",[v._v("自身")]),v._v("的问题导致产生的异常；如NullPointerException（空指针异常）、IndexOutOfBoundsException（下标越界异常）；属于"),l("strong",[v._v("不可查")]),v._v("异常。")])]),v._v(" "),l("li",[l("p",[v._v("非运行时异常：由程序")]),v._v(" "),l("p",[v._v("外部")]),v._v(" "),l("p",[v._v("的问题引起的异常；除了RuntimeException以外的异常，如FileNotFoundException（文件不存在异常）；属于")]),v._v(" "),l("p",[v._v("可查")]),v._v(" "),l("p",[v._v("异常，即强制程序员必须进行处理，如果不进行处理则会出现语法错误。")]),v._v(" "),l("p",[v._v("![img](file:///C:/Users/hudal/Documents/My Knowledge/temp/904fe720-b024-4bd5-b95a-3adb329760d8/128/index_files/0.7123040762828401.png)")])])])])])]),v._v(" "),l("li",[l("p",[v._v("（2）常见的异常处理机制有：")]),v._v(" "),l("ul",[l("li",[v._v("捕捉异常：由系统自动抛出异常，即try捕获异常-catch处理异常-finally 最终处理")]),v._v(" "),l("li",[v._v("抛出异常：在方法中将异常对象"),l("strong",[v._v("显性")]),v._v("地抛出，之后异常会沿着调用层次向上抛出，交由调用它的方法来处理。配合throws声明抛出的异常和throw抛出异常")]),v._v(" "),l("li",[v._v("自定义异常：继承Execption类或其子类")])])])]),v._v(" "),l("ol",[l("li",[v._v("什么是反射，有什么作用和应用？")])]),v._v(" "),l("ul",[l("li",[v._v("技术点：反射")]),v._v(" "),l("li",[v._v("思路：简述反射的定义、功能和应用，详见"),l("a",{attrs:{href:"https://www.jianshu.com/p/fcdfb8234b66",target:"_blank",rel:"noopener noreferrer"}},[v._v("Java基础之泛型&反射"),l("OutboundLink")],1)]),v._v(" "),l("li",[v._v("参考回答：\n"),l("ul",[l("li",[l("strong",[v._v("含义")]),v._v("：在运行状态中，对于任意一个类都能知道它的所有属性和方法，对于任何一个对象都能够调用它的任何一个方法和属性。")]),v._v(" "),l("li",[l("strong",[v._v("功能")]),v._v("：动态性，体现在：在运行时判断任意一个类所具有的属性和方法； 在运行时判断任意一个对象所属的类；在运行时构造任意一个类的对象；在运行时调用任意一个对象的方法；生成动态代理")]),v._v(" "),l("li",[v._v("应用：反射&泛型")])])]),v._v(" "),l("li",[v._v("引申：是否在项目中使用过反射机制，有什么优缺点")])]),v._v(" "),l("ol",[l("li",[v._v("什么是内部类？有什么作用？静态内部类和非静态内部类的区别？")])]),v._v(" "),l("ul",[l("li",[v._v("技术点：内部类")]),v._v(" "),l("li",[v._v("思路：")]),v._v(" "),l("li",[v._v("参考回答：内部类就是定义在另外一个类里面的类。它隐藏在外部类中，封装性更强，不允许除外部类外的其他类访问它；但它可直接访问外部类的成员。静态内部类和非静态内部类的区别有：\n"),l("ul",[l("li",[v._v("静态内部类是指被声明为static的内部类，可不依赖外部类实例化；而非静态内部类需要通过生成外部类来间接生成。")]),v._v(" "),l("li",[v._v("静态内部类只能访问外部类的静态成员变量和静态方法，而非静态内部类由于持有对外部类的引用，可以访问外部类的所用成员")])])]),v._v(" "),l("li",[v._v("引申：谈谈匿名内部类")])]),v._v(" "),l("ol",[l("li",[v._v("final、finally、finalize()分别表示什么含义")])]),v._v(" "),l("ul",[l("li",[v._v("技术点：final、finally、finalize()")]),v._v(" "),l("li",[v._v("参考回答：\n"),l("ul",[l("li",[v._v("final关键字表示不可更改，具体体现在：\n"),l("ul",[l("li",[v._v("final修饰的变量必须要初始化，且赋初值后不能再重新赋值")]),v._v(" "),l("li",[v._v("final修饰的方法不能被子类重写")]),v._v(" "),l("li",[v._v("final修饰的类不能被继承")])])]),v._v(" "),l("li",[v._v("finally：和try、catch成套使用进行异常处理，无论是否捕获或处理异常，finally块里的语句都会被执行，在以下4种特殊情况下，finally块才不会被执行：\n"),l("ul",[l("li",[v._v("在finally语句块中发生了异常")]),v._v(" "),l("li",[v._v("在前面的代码中用了"),l("code",[v._v("System.exit()")]),v._v("退出程序")]),v._v(" "),l("li",[v._v("程序所在的线程死亡")]),v._v(" "),l("li",[v._v("关闭CPU")])])]),v._v(" "),l("li",[v._v("finalize()：是Object中的方法，当垃圾回收器将回收对象从内存中清除出去之前会调用finalize()，但此时并不代表该回收对象一定会“死亡”，还有机会“逃脱”")])])])]),v._v(" "),l("ol",[l("li",[v._v("重写和重载的区别？")])]),v._v(" "),l("ul",[l("li",[v._v("技术点：重写、重载")]),v._v(" "),l("li",[v._v("参考回答：重写表示子类重写父类的方法；重载表示有多个同名函数同时存在，区别在于有不同的参数个数或类型")]),v._v(" "),l("li",[v._v("引申：谈谈动态分派和静态分派")])]),v._v(" "),l("ol",[l("li",[v._v("抽象类和接口的异同？")])]),v._v(" "),l("ul",[l("li",[v._v("技术点：抽象类、接口")]),v._v(" "),l("li",[v._v("参考回答：\n"),l("ul",[l("li",[v._v("使用上的区别：一个类只能继承一个抽象类却可以实现多个接口")]),v._v(" "),l("li",[v._v("设计上的区别：接口是对行为的抽象，无需有子类的前提，是自上而下的设计理念；抽象类是对类的抽象，建立于相似子类之上，是自下而上的设计理念")])])])]),v._v(" "),l("ol",[l("li",[v._v("为什么匿名内部类中使用局部变量要用final修饰？")])]),v._v(" "),l("ul",[l("li",[v._v("技术点：匿名内部类")]),v._v(" "),l("li",[v._v("参考回答：一方面，由于方法中的局部变量的生命周期很短，一旦方法结束变量就要被销毁，为了保证在内部类中能找到外部局部变量，通过final关键字可得到一个外部变量的引用；另一方面，通过final关键字也不会在内部类去做修改该变量的值，保护了数据的一致性。")])]),v._v(" "),l("ol",[l("li",[v._v("Object有哪些公有方法？")])]),v._v(" "),l("ul",[l("li",[l("p",[v._v("技术点：Object")])]),v._v(" "),l("li",[l("p",[v._v("思路：列举常见的几个公有方法")])]),v._v(" "),l("li",[l("p",[v._v("参考回答：")]),v._v(" "),l("ul",[l("li",[v._v("equals()： 和==作用相似")]),v._v(" "),l("li",[v._v("hashCode()：用于哈希查找，重写了equals()一般都要重写该方法")]),v._v(" "),l("li",[v._v("getClass()： 获取Class对象")]),v._v(" "),l("li",[v._v("wait()：让当前线程进入等待状态，并释放它所持有的锁")]),v._v(" "),l("li",[v._v("notify()&notifyAll()： 唤醒一个（所有）正处于等待状态的线程")]),v._v(" "),l("li",[v._v("toString()：转换成字符串")])])]),v._v(" "),l("li",[l("p",[v._v("引申：equals()和==的不同、在synchronized 同步代码块里wait()和notify()&notifyAll()如何配合、hashCode()和equals()的关系、获取Class对象还有什么方法")])]),v._v(" "),l("li",[l("p",[l("a",{attrs:{href:"https://www.jianshu.com/p/7b9abda70c8f",target:"_blank",rel:"noopener noreferrer"}},[v._v("集合"),l("OutboundLink")],1)])])]),v._v(" "),l("ol",[l("li",[v._v("Java集合框架中有哪些类？都有什么特点")])]),v._v(" "),l("ul",[l("li",[v._v("技术点：集合框架")]),v._v(" "),l("li",[v._v("思路：分条解释每种类的特点")]),v._v(" "),l("li",[v._v("参考回答：可将Java集合框架大致可分为Set、List、Queue 和Map四种体系\n"),l("ul",[l("li",[v._v("Set：代表"),l("strong",[v._v("无序、不可重复")]),v._v("的集合，常见的类如HashSet、TreeSet")]),v._v(" "),l("li",[v._v("List：代表"),l("strong",[v._v("有序、可重复")]),v._v("的集合，常见的类如动态数组ArrayList、双向链表LinkedList、可变数组Vector")]),v._v(" "),l("li",[v._v("Map：代表具有"),l("strong",[v._v("映射关系")]),v._v("的集合，常见的类如HashMap、LinkedHashMap、TreeMap")]),v._v(" "),l("li",[v._v("Queue：代表一种"),l("strong",[v._v("队列")]),v._v("集合")])])])]),v._v(" "),l("ol",[l("li",[v._v("集合、数组、泛型的关系，并比较")])]),v._v(" "),l("ul",[l("li",[v._v("技术点：集合、数组、泛型")]),v._v(" "),l("li",[v._v("参考回答：")]),v._v(" "),l("li",[v._v("（1）集合和数组的区别：\n"),l("ul",[l("li",[v._v("数组元素可以是基本类型，也可以是对象；数组长度限定；数组只能存储一种类型的数据元素")]),v._v(" "),l("li",[v._v("集合元素只能是对象；集合长度可变；集合可存储不同种的数据元素")])])]),v._v(" "),l("li",[v._v("（2）泛型相比与集合的好处在于它"),l("strong",[v._v("安全简单")]),v._v("。具体体现在提供编译时的强类型检查，而不用等到运行；可避免类类型强制转换")])]),v._v(" "),l("ol",[l("li",[v._v("ArrayList和LinkList的区别？")])]),v._v(" "),l("ul",[l("li",[v._v("技术点：List对比")]),v._v(" "),l("li",[v._v("参考回答：\n"),l("ul",[l("li",[l("strong",[v._v("ArrayList")]),v._v("的底层结构是"),l("strong",[v._v("数组")]),v._v("，可用索引实现快速查找；是动态数组，相比于数组容量可实现动态增长")]),v._v(" "),l("li",[l("strong",[v._v("LinkedList")]),v._v("底层结构是"),l("strong",[v._v("链表")]),v._v("，增删速度快；是一个"),l("strong",[v._v("双向循环")]),v._v("链表，也可以被当作堆栈、队列或双端队列")])])])]),v._v(" "),l("ol",[l("li",[v._v("ArrayList和Vector的区别？")])]),v._v(" "),l("ul",[l("li",[v._v("技术点：List对比")]),v._v(" "),l("li",[v._v("参考回答：\n"),l("ul",[l("li",[l("strong",[v._v("ArrayList")]),v._v("非线程安全，建议在单线程中才使用ArrayList，而在多线程中可以选择Vector或者CopyOnWriteArrayList；默认初始容量为10，每次扩容为原来的1.5倍")]),v._v(" "),l("li",[l("strong",[v._v("Vector")]),v._v("使用了synchronized关键字，是"),l("strong",[v._v("线程安全")]),v._v("的，比ArrayList开销更大，访问更慢；默认初始容量为10，默认每次扩容为原来的2倍，可通过"),l("strong",[v._v("capacityIncrement")]),v._v("属性设置")])])])]),v._v(" "),l("ol",[l("li",[v._v("HashSet和TreeSet的区别？")])]),v._v(" "),l("ul",[l("li",[v._v("技术点：Set对比")]),v._v(" "),l("li",[v._v("参考回答：\n"),l("ul",[l("li",[l("strong",[v._v("HashSet")]),v._v("不能保证元素的排列顺序；使用"),l("strong",[v._v("Hash算法")]),v._v("来存储集合中的元素，有良好的存取和查找性能；通过"),l("code",[v._v("equal()")]),v._v("判断两个元素是否相等，并两个元素的"),l("code",[v._v("hashCode()")]),v._v("返回值也相等")]),v._v(" "),l("li",[l("strong",[v._v("TreeSet")]),v._v("是SortedSet接口的实现类，根据元素"),l("strong",[v._v("实际值的大小")]),v._v("进行排序；采用"),l("strong",[v._v("红黑树")]),v._v("的数据结构来存储集合元素；支持两种排序方法："),l("strong",[v._v("自然排序")]),v._v("（默认情况）和"),l("strong",[v._v("定制排序")]),v._v("。前者通过实现"),l("strong",[v._v("Comparable接口")]),v._v("中的"),l("code",[v._v("compareTo()")]),v._v("比较两个元素之间大小关系，然后按升序排列；后者通过实现"),l("strong",[v._v("Comparator接口")]),v._v("中的"),l("code",[v._v("compare()")]),v._v("比较两个元素之间大小关系，实现定制排列")])])])]),v._v(" "),l("ol",[l("li",[v._v("HashMap和Hashtable的区别？")])]),v._v(" "),l("ul",[l("li",[v._v("技术点：Map对比")]),v._v(" "),l("li",[v._v("参考回答：\n"),l("ul",[l("li",[l("strong",[v._v("HashMap")]),v._v("基于AbstractMap类，实现了Map、"),l("strong",[v._v("Cloneable")]),v._v("（能被克隆）、"),l("strong",[v._v("Serializable")]),v._v("（支持序列化）接口； "),l("strong",[v._v("非线程安全")]),v._v("；允许存在一个为null的key和任意个为null的value；采用"),l("strong",[v._v("链表散列")]),v._v("的数据结构，即数组和链表的结合；初始容量为16，填充因子默认为0.75，扩容时是当前容量翻倍，即2capacity")]),v._v(" "),l("li",[l("strong",[v._v("Hashtable")]),v._v("基于Map接口和Dictionary类；"),l("strong",[v._v("线程安全")]),v._v("，开销比HashMap大，如果多线程访问一个Map对象，使用Hashtable更好；不允许使用null作为key和value；底层基于哈希表结构；初始容量为11，填充因子默认为0.75，扩容时是容量翻倍+1，即2capacity+1")])])])]),v._v(" "),l("ol",[l("li",[v._v("HashMap在put、get元素的过程？体现了什么数据结构？")])]),v._v(" "),l("ul",[l("li",[v._v("技术点：HashMap")]),v._v(" "),l("li",[v._v("参考回答：\n"),l("ul",[l("li",[v._v("向Hashmap中put元素时，首先判断key是否为空，为空则直接调用putForNullKey()，不为空则计算key的hash值得到该元素在数组中的下标值；如果数组在该位置处没有元素，就直接保存；如果有，还要比较是否存在相同的key，存在的话就覆盖原来key的value，否则将该元素保存在链头，先保存的在链尾。")]),v._v(" "),l("li",[v._v("从Hashmap中get元素时，计算key的hash值找到在数组中的对应的下标值，返回该key对应的value即可，如果有冲突就遍历该位置链表寻找key相同的元素并返回对应的value")]),v._v(" "),l("li",[v._v("由此可看出HashMap采用"),l("strong",[v._v("链表散列")]),v._v("的数据结构，即数组和链表的结合，在Java8后又结合了红黑树，当链表元素超过8个将链表转换为红黑树")])])])]),v._v(" "),l("ol",[l("li",[v._v("如何解决Hash冲突？")])]),v._v(" "),l("ul",[l("li",[v._v("技术点：Hash冲突")]),v._v(" "),l("li",[v._v("参考回答：\n"),l("ul",[l("li",[v._v("开放定址法：常见的线性探测方式，在冲突发生时，顺序查看表中下一单元，直到找出一个空单元或查遍全表")]),v._v(" "),l("li",[v._v("链地址法：将有冲突数组位置生出链表")]),v._v(" "),l("li",[v._v("建立公共溢出区：将哈希表分为基本表和溢出表两部分，和基本表发生冲突的元素一律填入溢出表")]),v._v(" "),l("li",[v._v("再哈希法：构造多个不同的哈希函数，有冲突使用下一个哈希函数计算hash值")])])])]),v._v(" "),l("ol",[l("li",[v._v("如何保证HashMap线程安全？什么原理？")])]),v._v(" "),l("ul",[l("li",[v._v("技术点：ConcurrentHashMap")]),v._v(" "),l("li",[v._v("思路：这里回答一种办法，使用ConcurrentHashMap")]),v._v(" "),l("li",[v._v("参考回答：ConcurrentHashMap是线程安全的HashMap，它采取锁分段技术，将数据分成一段一段的存储，然后给每一段数据配一把锁，当一个线程占用锁访问其中一个段数据的时候，其他段的数据也能被其他线程访问。在JDK1.8中对ConcurrentHashmap做了两个改进：\n"),l("ul",[l("li",[v._v("取消segments字段，直接采用"),l("code",[v._v("transient volatile HashEntry[] table")]),v._v("保存数据，将数组元素作为锁，对每一行数据进行加锁，可减少并发冲突的概率")]),v._v(" "),l("li",[v._v("数据结构由“数组＋单向链表”变为“数组＋单向链表＋红黑树”，使得查询的时间复杂度可以降低到O(logN)，改进一定的性能。")])])]),v._v(" "),l("li",[v._v("引申：LinkHashMap线程安全的底层实现")])]),v._v(" "),l("ol",[l("li",[v._v("HashMap是有序的吗？如何实现有序？")])]),v._v(" "),l("ul",[l("li",[v._v("技术点：LinkHashMap")]),v._v(" "),l("li",[v._v("思路：这里回答一种办法，使用LinkedHashMap")]),v._v(" "),l("li",[v._v("参考回答：HashMap是无序的，而LinkedHashMap是有序的HashMap，默认为插入顺序，还可以是访问顺序，基本原理是其内部通过Entry维护了一个双向链表，负责维护Map的迭代顺序")]),v._v(" "),l("li",[v._v("引申：LinkHashMap有序的底层实现")])]),v._v(" "),l("ol",[l("li",[v._v("HashMap是如何扩容的？如何避免扩容？")])]),v._v(" "),l("ul",[l("li",[v._v("技术点：HashMap")]),v._v(" "),l("li",[v._v("参考回答：\n"),l("ul",[l("li",[v._v("HashMap几个默认值，初始容量为16、填充因子默认为0.75、扩容时容量翻倍。也就是说当HashMap中元素个数超过"),l("code",[v._v("16*0.75=12")]),v._v("时会把数组的大小扩展为"),l("code",[v._v("2*16=32")]),v._v("，然后重新计算每个元素在数组中的位置")]),v._v(" "),l("li",[v._v("由于每次扩容还需要重新计算元素Hash值，损耗性能，所以建议在使用HashMap时，最好先估算Map的大小，设置初始值，避免频繁扩容")])])])]),v._v(" "),l("ol",[l("li",[v._v("hashcode()的作用，与equal()有什么区别？")])]),v._v(" "),l("ul",[l("li",[l("p",[v._v("技术点：Hash值")])]),v._v(" "),l("li",[l("p",[v._v("参考回答：hashCode()用于计算对象的Hash值，确认对象在散列存储结构中的存储地址。和equal()的区别：")]),v._v(" "),l("ul",[l("li",[v._v("equals()比较两个对象的地址值是否相等 ；hashCode()得到的是对象的存储位置，可能不同对象会得到相同值")]),v._v(" "),l("li",[v._v("有两个对象，若equals()相等，则hashcode()一定相等；hashcode()不等，则equals()一定不相等；hashcode()相等，equals()可能相等、可能不等")]),v._v(" "),l("li",[v._v("使用equals()比较两个对象是否相等效率较低，最快办法是先用hashCode()比较，如果hashCode()不相等，则这两个对象肯定不相等；如果hashCode()相等，此时再用equal()比较，如果equal()也相等，则这两个对象的确相等，反之")])])]),v._v(" "),l("li",[l("p",[v._v("并发")])])]),v._v(" "),l("ol",[l("li",[v._v("同步和非同步、阻塞和非阻塞的概念")])]),v._v(" "),l("ul",[l("li",[v._v("技术点：同步、阻塞")]),v._v(" "),l("li",[v._v("参考回答：\n"),l("ul",[l("li",[v._v("同步和异步体现的是消息的通知机制：所谓同步，方法A调用方法B后必须等到方法B返回结果才能继续后面的操作；所谓异步，方法A调用方法B后可让方法B在调用结束后通过回调等方式通知方法A")]),v._v(" "),l("li",[v._v("阻塞和非阻塞侧重于等待消息时的状态：所谓阻塞，就是在结果返回之前让当前线程挂起；所谓非阻塞，就是在等待时可做其他事情，通过轮询去询问是否已返回结果")])])])]),v._v(" "),l("ol",[l("li",[v._v("Thread的join()有什么作用？")])]),v._v(" "),l("ul",[l("li",[v._v("技术点：线程相关方法")]),v._v(" "),l("li",[v._v("参考回答：Thread的join()的含义是等待该线程终止，即将挂起调用线程的执行，直到被调用的对象完成它的执行。比如存在两个线程t1和t2，下述代码表示先启动t1，直到t1的任务结束，才轮到t2启动。")])]),v._v(" "),l("p",[v._v("t1.start();\nt1.join();\nt2.start();")]),v._v(" "),l("ol",[l("li",[v._v("线程的有哪些状态？")])]),v._v(" "),l("ul",[l("li",[l("p",[v._v("技术点：线程状态")])]),v._v(" "),l("li",[l("p",[v._v("思路：可分条解释每种状态的特点以及如何转换。详见"),l("a",{attrs:{href:"https://www.jianshu.com/p/90a036212cb4",target:"_blank",rel:"noopener noreferrer"}},[v._v("要点提炼| 理解JVM之内存模型&线程"),l("OutboundLink")],1)])]),v._v(" "),l("li",[l("p",[v._v("参考回答：在任意一个时间点，一个线程只能有且只有其中的一种状态：")]),v._v(" "),l("ul",[l("li",[l("p",[l("strong",[v._v("新建")]),v._v("（New）：线程创建后尚未启动")])]),v._v(" "),l("li",[l("p",[l("strong",[v._v("运行")]),v._v("（Runable）：包括正在执行（Running）和等待着CPU为它分配执行时间（Ready）两种")])]),v._v(" "),l("li",[l("p",[v._v("无限期等待")]),v._v(" "),l("p",[v._v("（Waiting）：该线程不会被分配CPU执行时间，要等待被其他线程显式地唤醒。以下方法会让线程陷入无限期等待状态：")]),v._v(" "),l("ul",[l("li",[v._v("没有设置Timeout参数的"),l("code",[v._v("Object.wait()")])]),v._v(" "),l("li",[v._v("没有设置Timeout参数的"),l("code",[v._v("Thread.join()")])]),v._v(" "),l("li",[l("code",[v._v("LockSupport.park()")])])])]),v._v(" "),l("li",[l("p",[v._v("限期等待")]),v._v(" "),l("p",[v._v("（Timed Waiting）：该线程不会被分配CPU执行时间，但在一定时间后会被系统自动唤醒。以下方法会让线程进入限期等待状态：")]),v._v(" "),l("ul",[l("li",[l("code",[v._v("Thread.sleep()")])]),v._v(" "),l("li",[v._v("设置了Timeout参数的"),l("code",[v._v("Object.wai()")])]),v._v(" "),l("li",[v._v("设置了Timeout参数的"),l("code",[v._v("Thread.join()")])]),v._v(" "),l("li",[l("code",[v._v("LockSupport.parkNanos()")])]),v._v(" "),l("li",[l("code",[v._v("LockSupport.parkUntil()")])])])]),v._v(" "),l("li",[l("p",[l("strong",[v._v("阻塞")]),v._v("（Blocked）：线程被阻塞。和等待状态不同的是，阻塞状态表示在等待获取到一个"),l("strong",[v._v("排他锁")]),v._v("，在另外一个线程放弃这个锁的时候发生；而等待状态表示在等待一段"),l("strong",[v._v("时间")]),v._v("或者"),l("strong",[v._v("唤醒动作")]),v._v("的发生，在程序等待进入同步区域的时候发生。")])]),v._v(" "),l("li",[l("p",[v._v("结束")]),v._v(" "),l("p",[v._v("（Terminated）：线程已经结束执行")]),v._v(" "),l("p",[v._v("![img](file:///C:/Users/hudal/Documents/My Knowledge/temp/904fe720-b024-4bd5-b95a-3adb329760d8/128/index_files/0.5876930050946625.png)")])])])])]),v._v(" "),l("ol",[l("li",[v._v("什么是线程安全？保障线程安全有哪些手段？")])]),v._v(" "),l("ul",[l("li",[l("p",[v._v("技术点：线程安全")])]),v._v(" "),l("li",[l("p",[v._v("思路：详见"),l("a",{attrs:{href:"https://www.jianshu.com/p/ca8801044352",target:"_blank",rel:"noopener noreferrer"}},[v._v("要点提炼| 理解JVM之线程安全&锁优化"),l("OutboundLink")],1)])]),v._v(" "),l("li",[l("p",[v._v("参考回答：线程安全就是当多个线程访问一个对象时，如果不用考虑这些线程在运行时环境下的调度和交替执行，也不需要进行额外的同步，或者在调用方进行任何其他的协调操作，调用这个对象的行为都可以获得正确的结果，那这个对象是线程安全的。保证线程安全可从多线程三特性出发：")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("原子性")]),v._v(" "),l("p",[v._v("（Atomicity）：单个或多个操作是要么全部执行，要么都不执行")]),v._v(" "),l("ul",[l("li",[v._v("Lock：保证同时只有一个线程能拿到锁，并执行申请锁和释放锁的代码")]),v._v(" "),l("li",[v._v("synchronized：对线程加独占锁，被它修饰的类/方法/变量只允许一个线程访问")])])]),v._v(" "),l("li",[l("p",[v._v("可见性")]),v._v(" "),l("p",[v._v("（Visibility）：当一个线程修改了共享变量的值，其他线程能够立即得知这个修改")]),v._v(" "),l("ul",[l("li",[v._v("volatile：保证新值能"),l("strong",[v._v("立即")]),v._v("同步到主内存，且每次使用前立即从主内存刷新；")]),v._v(" "),l("li",[v._v("synchronized：在释放锁之前会将工作内存新值更新到主存中")])])]),v._v(" "),l("li",[l("p",[v._v("有序性")]),v._v(" "),l("p",[v._v("（Ordering）：程序代码按照指令顺序执行")]),v._v(" "),l("ul",[l("li",[v._v("volatile： 本身就包含了禁止指令重排序的语义")]),v._v(" "),l("li",[v._v("synchronized：保证一个变量在同一个时刻只允许一条线程对其进行lock操作，使得持有同一个锁的两个同步块只能串行地进入")])])])])])]),v._v(" "),l("ol",[l("li",[v._v("ReentrantLock和synchronized的区别?")])]),v._v(" "),l("ul",[l("li",[l("p",[v._v("技术点：线程安全（ReentrantLock、synchronized）")])]),v._v(" "),l("li",[l("p",[v._v("思路：详见"),l("a",{attrs:{href:"https://www.jianshu.com/p/ca8801044352",target:"_blank",rel:"noopener noreferrer"}},[v._v("要点提炼| 理解JVM之线程安全&锁优化"),l("OutboundLink")],1)])]),v._v(" "),l("li",[l("p",[v._v("参考回答： ReentrantLock与synchronized的")]),v._v(" "),l("p",[v._v("不同")]),v._v(" "),l("p",[v._v("在于ReentrantLock：")]),v._v(" "),l("ul",[l("li",[l("strong",[v._v("等待可中断")]),v._v("：当持有锁的线程长期不释放锁的时候，正在等待的线程可以选择放弃等待，改为处理其他事情。")]),v._v(" "),l("li",[l("strong",[v._v("公平锁")]),v._v("：多个线程在等待同一个锁时，必须按照申请锁的时间顺序来依次获得锁。而synchronized是非公平的，即在锁被释放时，任何一个等待锁的线程都有机会获得锁。ReentrantLock默认情况下也是非公平的，但可以通过带布尔值的构造函数改用公平锁。")]),v._v(" "),l("li",[l("strong",[v._v("锁绑定多个条件")]),v._v("：一个ReentrantLock对象可以通过多次调用newCondition()同时绑定多个Condition对象。而在synchronized中，锁对象wait()和notify()或notifyAl()只能实现一个隐含的条件，若要和多于一个的条件关联不得不额外地添加一个锁。")])])])]),v._v(" "),l("ol",[l("li",[v._v("synchronized和volatile的区别？")])]),v._v(" "),l("ul",[l("li",[v._v("技术点：线程安全（synchronized、volatile）")]),v._v(" "),l("li",[v._v("参考回答：\n"),l("ul",[l("li",[v._v("synchronized能保证操作的原子性，而volatile不可以，假设线程A和线程B同时读取到变量a值，A修改a后将值更新到主内存，同时B也修改a值会覆盖A的修改操作")]),v._v(" "),l("li",[v._v("synchronized可修饰变量、方法和类，而volatile只能修饰变量")]),v._v(" "),l("li",[v._v("synchronized可能会造成线程阻塞，而volatile不会造成线程的阻塞")])])])]),v._v(" "),l("ol",[l("li",[v._v("synchronized同步代码块还有同步方法本质上锁住的是谁？为什么？")])]),v._v(" "),l("ul",[l("li",[v._v("技术点：线程安全（synchronized）")]),v._v(" "),l("li",[v._v("参考回答：本质上锁住的是对象。在java虚拟机中，每个对象和类在逻辑上都和一个监视器相关联，synchronized本质上是对一个对象监视器的获取。当执行同步代码块或同步方法时，执行方法的线程必须先获得该对象的监视器，才能进入同步代码块或同步方法；而没有获取到的线程将会进入阻塞队列，直到成功获取对象监视器的线程执行结束并释放锁后，才会唤醒阻塞队列的线程，使其重新尝试对对象监视器的获取。")])]),v._v(" "),l("ol",[l("li",[v._v("sleep()和wait()的区别？")])]),v._v(" "),l("ul",[l("li",[l("p",[v._v("技术点：sleep()、wait()")])]),v._v(" "),l("li",[l("p",[v._v("参考回答：")]),v._v(" "),l("ul",[l("li",[v._v("sleep()来自Thread类；wait()来自Object类")]),v._v(" "),l("li",[v._v("sleep()用于线程控制自身流程；而wait()用于线程间通信，配合notify()/notifyAll()在同步代码块或同步方法里使用")]),v._v(" "),l("li",[v._v("sleep()的线程不会释放对象锁；wait()会释放对象锁进入等待状态，使得其他线程能使用同步代码块或同步方法")])])]),v._v(" "),l("li",[l("p",[v._v("Java新动态")])])]),v._v(" "),l("ol",[l("li",[v._v("是否了解Java1.x的特性吗？"),l("code"),v._v("1. 谈谈对面向过程编程、面向对象编程还有面向切面编程的理解")])]),v._v(" "),l("ul",[l("li",[v._v("可能意图：了解候选者对Java和其他语言的关注度和看法、学习主动性、平时学习习惯")]),v._v(" "),l("li",[v._v("思路：Oracle技术网（Java）：https://www.oracle.com/technetwork/cn/java/index.html 、开源中国：https://www.oschina.net ，了解最新动态")])])])}),[],!1,null,null,null);_.default=e.exports}}]);