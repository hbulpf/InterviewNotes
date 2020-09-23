(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{364:function(e,n,t){"use strict";t.r(n);var i=t(42),r=Object(i.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"activity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#activity"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://www.jianshu.com/p/602b1ec4ca7a",target:"_blank",rel:"noopener noreferrer"}},[e._v("Activity"),t("OutboundLink")],1)]),e._v(" "),t("ol",[t("li",[e._v("说下Activity的生命周期？\n技术点：Activity生命周期\n思路：分条解释Activity从创建到销毁整个生命周期中涉及到的方法及作用\n参考回答：在Activity的生命周期涉及到七大方法，分别是：\nonCreate()表示Activity 正在创建，常做初始化工作，如setContentView界面资源、初始化数据\nonStart()表示Activity 正在启动，这时Activity 可见但不在前台，无法和用户交互\nonResume()表示Activity 获得焦点，此时Activity 可见且在前台并开始活动\nonPause()表示Activity 正在停止，可做 数据存储、停止动画等操作\nonStop()表示activity 即将停止，可做稍微重量级回收工作，如取消网络连接、注销广播接收器等\nonDestroy()表示Activity 即将销毁，常做回收工作、资源释放\n另外，当Activity由后台切换到前台，由不可见到可见时会调用onRestart()，表示Activity 重新启动")]),e._v(" "),t("li",[e._v("onStart()和onResume()/onPause()和onStop()的区别？\n技术点：Activity生命周期\n思路：可从使用细节出发\n参考回答：onStart()与onStop()是从Activity是否可见这个角度调用的，onResume()和onPause()是从Activity是否显示在前台这个角度来回调的，在实际使用没其他明显区别。")]),e._v(" "),t("li",[e._v("Activity A启动另一个Activity B会回调哪些方法？如果Activity B是完全透明呢？如果启动的是一个Dialog呢？\n技术点：Activity生命周期\n参考回答：Activity A启动另一个Activity B会回调的方法：Activity A的onPause() --\x3eActivity B的onCreate()--\x3eonStart()--\x3eonResume()--\x3eActivity A的onStop()；如果Activity B是完全透明的，则最后不会调用Activity A的onStop()；如果是Dialog，同后种情况。")]),e._v(" "),t("li",[e._v("谈谈onSaveInstanceState()方法？何时会调用？\n技术点：Activity重建\n思路：可从使用场景、调用次序上解释\n参考回答：当非人为终止Activity时，比如系统配置发生改变时导致Activity被杀死并重新创建、资源内存不足导致低优先级的Activity被杀死，会调用 onSavaInstanceState() 来保存状态。该方法调用在onStop之前，但和onPause没有时序关系。\n引申：可再谈谈它和onRestoreInstanceState()的关系以及后者的作用")]),e._v(" "),t("li",[e._v("onSaveInstanceState()与onPause()的区别？\n技术点：Activity重建\n思路：可从适用场景出发\n参考回答：onSaveInstanceState()适用于对临时性状态的保存，而onPause()适用于对数据的持久化保存。")]),e._v(" "),t("li",[e._v('如何避免配置改变时Activity重建？\n技术点：Activity重建\n思路：一种解决思路是设置配置文件中Activity的configChanges属性\n参考回答：为了避免由于配置改变导致Activity重建，可在AndroidManifest.xml中对应的Activity中设置android:configChanges="orientation|keyboardHidden|screenSize"。此时再次旋转屏幕时，该Activity不会被系统杀死和重建，只会调用onConfigurationChanged。因此，当配置程序需要响应配置改变，指定configChanges属性，重写onConfigurationChanged方法即可。')]),e._v(" "),t("li",[e._v("优先级低的Activity在内存不足被回收后怎样做可以恢复到销毁前状态？\n技术点：Activity重建\n思路：可从Activity重建会被调用的方法出发\n参考回答：优先级低的Activity在内存不足被回收后重新打开会引发Activity重建。Activity被重新创建时会调用onRestoreInstanceState（该方法在onStart之后），并将onSavaInstanceState保存的Bundle对象作为参数传到onRestoreInstanceState与onCreate方法。因此可通过onRestoreInstanceState(Bundle savedInstanceState)和onCreate((Bundle savedInstanceState)来判断Activity是否被重建，并取出数据进行恢复。但需要注意的是，在onCreate取出数据时一定要先判断savedInstanceState是否为空。另外，谷歌更推荐使用onRestoreInstanceState进行数据恢复。")]),e._v(" "),t("li",[e._v("说下Activity的四种启动模式？（有时会出个实际问题来分析返回栈中Activity的情况）\n技术点：Activity启动模式\n思路：分条解释四个启动模式的特点\n参考回答：\nstandard标准模式：每次启动一个Activity就会创建一个新的实例\nsingleTop栈顶复用模式：如果新Activity已经位于任务栈的栈顶，就不会重新创建，并回调 onNewIntent(intent) 方法\nsingleTask栈内复用模式：只要该Activity在一个任务栈中存在，都不会重新创建，并回调 onNewIntent(intent) 方法。如果不存在，系统会先寻找是否存在需要的栈，如果不存在该栈，就创建一个任务栈，并把该Activity放进去；如果存在，就会创建到已经存在的栈中\nsingleInstance单实例模式：具有此模式的Activity只能单独位于一个任务栈中，且此任务栈中只有唯一一个实例")]),e._v(" "),t("li",[e._v("谈谈singleTop和singleTask的区别以及应用场景\n技术点：Activity启动模式\n思路：可先解释两个启动模式的含义（见上一个问题），再总结不同点，最后给出应用实例\n参考回答：singleTop和singleTask的含义分别是......，可见两者大致区别有：\nsingleTop：同个Activity实例在栈中可以有多个，即可能重复创建；该模式的Activity会默认进入启动它所属的任务栈，即不会引起任务栈的变更；为防止快速点击时多次startActivity，可以将目标Activity设置为singleTop\nsingleTask：同个Activity实例在栈中只有一个，即不存在重复创建；可通过android：taskAffinity设定该Activity需要的任务栈，即可能会引起任务栈的变更；常用于主页和登陆页")]),e._v(" "),t("li",[e._v("onNewIntent()调用时机？\n技术点：Activity启动模式\n参考回答：启动模式为singleTop或singleTask的Activity在以下情况会回调onNewIntent()：\nsingleTop：如果新Activity已经位于任务栈的栈顶，就不会重新创建，并回调 onNewIntent(intent) 方法\nsingleTask：只要该Activity在一个任务栈中存在，都不会重新创建，并回调 onNewIntent(intent) 方法")]),e._v(" "),t("li",[e._v("了解哪些Activity启动模式的标记位？\n技术点：Activity启动模式\n参考回答：常见的两个标记为：\nFLAG_ACTIVITY_SINGLE_TOP:对应singleTop启动模式\nFLAG_ACTIVITY_NEW_TASK ：对应singleTask模式\n引申：可再谈谈singleTop和singleTask具体效果")]),e._v(" "),t("li",[e._v("如何启动其他应用的Activity？\n技术点：Activity启动、IntentFilter匹配\n思路：可从隐式Intent角度出发\n参考回答：在保证有权限访问的情况下，通过隐式Intent进行目标Activity的IntentFilter匹配，原则是：\n一个intent只有同时匹配某个Activity的intent-filter中的action、category、data才算完全匹配，才能启动该Activity。\n一个Activity可以有多个 intent-filter，一个 intent只要成功匹配任意一组 intent-filter，就可以启动该Activity。\n引申：如有必要可展开说明action、category、data的具体匹配规则")]),e._v(" "),t("li",[e._v("Activity的启动过程？\n技术点：Activity启动、ActivityManagerServie、ApplicationThread\n思路：可大致介绍Activity启动过程涉及到的类，尤其是ActivityManagerServie、ApplicationThread从中发挥的作用。详见"),t("a",{attrs:{href:"https://www.jianshu.com/p/37f366064b98",target:"_blank",rel:"noopener noreferrer"}},[e._v("要点提炼|开发艺术之四大组件"),t("OutboundLink")],1),e._v("\n参考回答：调用startActivity()后经过重重方法会转移到ActivityManagerService的startActivity()，并通过一个IPC回到ActivityThread的内部类ApplicationThread中，并调用其scheduleLaunchActivity()将启动Activity的消息发送并交由Handler H处理。Handler H对消息的处理会调用handleLaunchActivity()->performLaunchActivity()得以完成Activity对象的创建和启动。\n引申：由于ActivityManagerService是一个Binder对象，可引申谈谈Binder机制\n"),t("a",{attrs:{href:"https://www.jianshu.com/p/184f0c8857d6",target:"_blank",rel:"noopener noreferrer"}},[e._v("# Fragment"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("谈一谈Fragment的生命周期？\n技术点：Fragment生命周期\n思路：分条解释Fragment从创建到销毁整个生命周期中涉及到的方法及作用\n参考回答：Fragment从创建到销毁整个生命周期中涉及到的方法依次为：onAttach()->onCreate()-> onCreateView()->onActivityCreated()->onStart()->onResume()->onPause()->onStop()->onDestroyView()->onDestroy()->onDetach()，其中和Activity有不少名称相同作用相似的方法，而不同的方法有:\nonAttach()：当Fragment和Activity建立关联时调用\nonCreateView()：当Fragment创建视图时调用\nonActivityCreated()：当与Fragment相关联的Activity完成onCreate()之后调用\nonDestroyView()：在Fragment中的布局被移除时调用\nonDetach()：当Fragment和Activity解除关联时调用")]),e._v(" "),t("li",[e._v("Activity和Fragment的异同？\n技术点：Fragment作用\n思路：分别解释“异”“同”\n参考回答：\nActivity和Fragment的相似点在于，它们都可包含布局、可有自己的生命周期，Fragment可看似迷你活动。\n不同点是，由于Fragment是依附在Activity上的，多了些和宿主Activity相关的生命周期方法，如onAttach()、onActivityCreated()、onDetach()；另外，Fragment的生命周期方法是由宿主Activity而不是操作系统调用的，Activity中生命周期方法都是protected，而Fragment都是public，也能印证了这一点，因为Activity需要调用Fragment那些方法并管理它。\n引申：可具体谈谈Activity和Fragment的关系")]),e._v(" "),t("li",[e._v("Activity和Fragment的关系？\n技术点：Fragment作用\n思路：可从Fragment出现的目的、两者数量关系、调用关系展开\n参考回答：\n正如Fragment的名字“碎片”，它的出现是为了解决Android碎片化 ，它可作为Activity界面的组成部分，可在Activity运行中实现动态地加入、移除和交换。\n一个Activity中可同时出现多个Fragment，一个Fragment也可在多个Activity中使用。\n另外，Activity的FragmentManager负责调用队列中Fragment的生命周期方法，只要Fragment的状态与Activity的状态保持了同步，宿主Activity的FragmentManager便会继续调用其他生命周期方法以继续保持Fragment与Activity的状态一致。")]),e._v(" "),t("li",[e._v("何时会考虑使用Fragment?\n技术点：Fragment作用\n思路：列举更适合使用Fragment的情况\n参考回答：非常经典的例子，即用两个Fragment封装两个界面模块，这样只使一套代码就能适配两种设备，达到两种界面效果；单一场景切换时使用Fragment更轻量化，如ViewPager和Fragment搭配使用")])]),e._v(" "),t("h1",{attrs:{id:"service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://www.jianshu.com/p/1959eb5c99f5",target:"_blank",rel:"noopener noreferrer"}},[e._v("Service"),t("OutboundLink")],1)]),e._v(" "),t("ol",[t("li",[e._v("谈一谈Service的生命周期？\n技术点：Service生命周期\n思路：分条解释Service从创建到销毁整个生命周期中涉及到的方法及作用\n参考回答：在Service的生命周期涉及到六大方法，分别是：\nonCreate（）：服务第一次被创建时调用\nonStartComand（）：服务启动时调用\nonBind（）：服务被绑定时调用\nonUnBind（）：服务被解绑时调用\nonDestroy（）：服务停止时调用\n引申：谈谈相对应的两种启动方式")]),e._v(" "),t("li",[e._v("Service的两种启动方式？区别在哪？\n技术点：Service生命周期\n思路：分别解释两种启动模式如何启动和停止Service，并引起生命周期怎样的变化\n参考回答：\n第一种，其他组件调用Context的 startService() 方法可以启动一个Service，并回调服务中的onStartCommand()。如果该服务之前还没创建，那么回调的顺序是onCreate()->onStartCommand()。服务启动了之后会一直保持运行状态，直到 stopService() 或 stopSelf() 方法被调用，服务停止并回调onDestroy()。另外，无论调用多少次startService()方法，只需调用一次stopService()或stopSelf()方法，服务就会停止了。\n第二种，其它组件调用Context的 bindService() 可以绑定一个Service，并回调服务中的onBind()方法。类似地，如果该服务之前还没创建，那么回调的顺序是onCreate()->onBind()。之后，调用方可以获取到onBind()方法里返回的IBinder对象的实例，从而实现和服务进行通信。只要调用方和服务之间的连接没有断开，服务就会一直保持运行状态，直到调用了 unbindService() 方法服务会停止，回调顺序onUnBind()->onDestroy()。")]),e._v(" "),t("li",[e._v("一个Activty先start一个Service后，再bind时会回调什么方法？此时如何做才能回调Service的destory()方法？\n技术点：Service生命周期\n参考回答：startService()启动Service之后，再bindService()绑定，此时只会回调onBind()方法；若想回调Service的destory()方法，需要同时调用 stopService()和 unbindService()方法才能让服务销毁掉。")]),e._v(" "),t("li",[e._v("Service如何和Activity进行通信？\n技术点：Service信息传递\n思路：简单介绍Service如何和Activity双向通信的流程\n参考回答：通过bindService()可以实现Activity调用Service中的方法，具体步骤见"),t("a",{attrs:{href:"https://www.jianshu.com/p/1959eb5c99f5",target:"_blank",rel:"noopener noreferrer"}},[e._v("学习笔记| AS入门（十） 组件篇之Service"),t("OutboundLink")],1),e._v("； 通过广播实现Service向Activity发送消息\n引申：谈谈底层的Binder机制")]),e._v(" "),t("li",[e._v("用过哪些系统Service？\n技术点：Service类型（系统Service）\n参考回答：")])]),e._v(" "),t("p",[e._v("![img](file:///C:/Users/hudal/Documents/My Knowledge/temp/e525cf84-c22a-48a6-a055-31571b82e6d4/128/index_files/0.236907181201079.png)")]),e._v(" "),t("ol",[t("li",[e._v("是否能在Service进行耗时操作？如果非要可以怎么做？\n技术点：Service使用注意\n参考回答：Service默认并不会运行在子线程中，也不运行在一个独立的进程中，它同样执行在主线程中（UI线程）。换句话说，不要在Service里执行耗时操作，除非手动打开一个子线程，否则有可能出现主线程被阻塞（ANR）的情况。\n引申：可以引申谈谈开子线程的几种方法")]),e._v(" "),t("li",[e._v("AlarmManager能实现定时的原理？\n技术点：系统服务（后台定时）\n思路：AlarmManager\n参考回答：通过调用AlarmManager的 set() 方法就可以设置一个定时任务，并提供三个参数（工作类型，定时任务触发的时间，PendingIntent对象）。其中第三个PendingIntent对象是关键，一般会调用它的 getBroadcast() 方法来获取一个能够执行广播的PendingIntent。这样当定时任务被触发的时候，广播接收器的onReceive()方法就可以得到执行。即通过服务和广播的循环触发实现定时服务。\n引申：可谈谈底层定时机制实现原理")]),e._v(" "),t("li",[e._v("前台服务是什么？和普通服务的不同？如何去开启一个前台服务？\n技术点：Service类型（前台Service）\n参考回答：和一般运行在后台的服务不同，前台服务的服务状态可以被用户一眼看到。它和普通服务最大的区别是，前者会一直有一个正在运行的图标在系统的状态栏显示，下拉状态栏后可以看到更加详细的信息，非常类似于通知的效果，且当系统内存不足服务被杀死时，通知会被移除。实现一个前台服务也非常简单，和发送一个通知非常类似，只不过在构建好一个Notification之后，不需要NotificationManager将通知显示出来，而是调用了 startForeground() 方法。")]),e._v(" "),t("li",[e._v("是否了解ActivityManagerService，谈谈它发挥什么作用？\n技术点：Service类型（ActivityManagerService）\n思路：可谈谈在四大组件创建中ActivityManagerService发挥的作用，详见"),t("a",{attrs:{href:"https://www.jianshu.com/p/37f366064b98",target:"_blank",rel:"noopener noreferrer"}},[e._v("要点提炼|开发艺术之四大组件"),t("OutboundLink")],1),e._v("\n参考回答：ActivityManagerService是Android中最核心的服务 ， 主要负责系统中四大组件的启动、切换、调度及应用进程的管理和调度等工作，其职责与操作系统中的进程管理和调度模块类似。\n引申：看源码谈谈AMS启动过程："),t("a",{attrs:{href:"https://blog.csdn.net/dutedehuai/article/details/53495185",target:"_blank",rel:"noopener noreferrer"}},[e._v("ActivityManagerService分析——AMS启动流程"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("如何保证Service不被杀死？\n技术点：Service应用\n思路：列举几种解决办法\n参考回答：可以采取以下几种解决方法：\n在Service的onStartCommand()中设置flages值为START_STICKY，使得Service被杀死后尝试再次启动Service\n提升Service优先级，比如设置为一个前台服务\n在Activity的onDestroy()通过发送广播，并在广播接收器的onReceive()中启动Service")])]),e._v(" "),t("h1",{attrs:{id:"broadcast-receiver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#broadcast-receiver"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://www.jianshu.com/p/82ecfc95924f",target:"_blank",rel:"noopener noreferrer"}},[e._v("Broadcast Receiver"),t("OutboundLink")],1)]),e._v(" "),t("ol",[t("li",[e._v("广播有几种形式？什么特点？\n技术点：Broadcast类型\n思路：分条解释每种广播类型的特点\n参考回答：常见以下四种广播：\n普通广播：一种完全异步执行的广播，在广播发出之后，所有的广播接收器几乎都会在同一时刻接收到这条广播消息，因此它们接收的先后是随机的。\n有序广播：一种同步执行的广播，在广播发出之后，同一时刻只会有一个广播接收器能够收到这条广播消息，当这个广播接收器中的逻辑执行完毕后，广播才会继续传递，所以此时的广播接收器是有先后顺序的，且优先级（priority）高的广播接收器会先收到广播消息。有序广播可以被接收器截断使得后面的接收器无法收到它。\n本地广播：发出的广播只能够在应用程序的内部进行传递，并且广播接收器也只能接收本应用程序发出的广播。\n粘性广播：这种广播会一直滞留，当有匹配该广播的接收器被注册后，该接收器就会收到此条广播。")]),e._v(" "),t("li",[e._v("广播的两种注册形式？区别在哪？\n技术点：Broadcast使用\n参考回答：广播的注册有两种方法：一种在活动里通过代码动态注册，另一种在配置文件里静态注册。两种方式的相同点是都完成了对接收器以及它能接收的广播值这两个值的定义；不同点是动态注册的接收器必须要在程序启动之后才能接收到广播，而静态注册的接收器即便程序未启动也能接收到广播，比如想接收到手机开机完成后系统发出的广播就只能用静态注册了。")])]),e._v(" "),t("h1",{attrs:{id:"contentprovider"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contentprovider"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://www.jianshu.com/p/9048b47bb267",target:"_blank",rel:"noopener noreferrer"}},[e._v("ContentProvider"),t("OutboundLink")],1)]),e._v(" "),t("ol",[t("li",[e._v("ContentProvider了解多少？\n技术点：ContentProvider\n思路：ContentProvider功能\n参考回答：作为四大组件之一，ContentProvider主要负责存储和共享数据。与文件存储、SharedPreferences存储、SQLite数据库存储这几种数据存储方法不同的是，后者保存下的数据只能被该应用程序使用，而前者可以让不同应用程序之间进行数据共享，它还可以选择只对哪一部分数据进行共享，从而保证程序中的隐私数据不会有泄漏风险。\n引申：谈谈ContentProvider底层使用Binder机制原理\n"),t("a",{attrs:{href:"https://www.jianshu.com/p/8d6acf45e9b7",target:"_blank",rel:"noopener noreferrer"}},[e._v("#  数据存储"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Android中提供哪些数据持久存储的方法？\n技术点：数据持久化\n思路：分条解释每种数据持久存储的特点\n参考回答：Android平台实现数据存储的常见几种方式：\nFile 文件存储：写入和读取文件的方法和 Java中实现I/O的程序一样。\nSharedPreferences存储：一种轻型的数据存储方式，常用来存储一些简单的配置信息，本质是基于XML文件存储key-value键值对数据。\nSQLite数据库存储：一款轻量级的关系型数据库，它的运算速度非常快，占用资源很少，在存储大量复杂的关系型数据的时可以使用。\nContentProvider：四大组件之一，用于数据的存储和共享，不仅可以让不同应用程序之间进行数据共享，还可以选择只对哪一部分数据进行共享，可保证程序中的隐私数据不会有泄漏风险。")]),e._v(" "),t("li",[e._v("Java中的I/O流读写怎么做？\n技术点：数据持久化（文件存储）\n思路：大致介绍核心类和核心方法\n参考回答：和 Java中实现I/O的程序是一样的，Context类中提供了openFileInput()和openFileOutput()方法来打开数据文件里的文件IO流，有关读写涉及的主要方法详见文章"),t("a",{attrs:{href:"https://www.jianshu.com/p/8d6acf45e9b7",target:"_blank",rel:"noopener noreferrer"}},[e._v("学习笔记| AS入门（七） 数据存储篇"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("SharePreferences适用情形？使用中需要注意什么？\n技术点：数据持久化（SharePreferences存储）\n参考回答：SharePreferences是一种轻型的数据存储方式，适用于存储一些简单的配置信息，如int、string、boolean、float和long。由于系统对SharedPreferences的读/写有一定的缓存策略，即在内存中有一份该文件的缓存，因此在多进程模式下，其读/写会变得不可靠，甚至丢失数据。\n引申：谈谈Android中多进程通信（Binder）")]),e._v(" "),t("li",[e._v("了解SQLite中的事务处理吗？是如何做的？\n技术点：数据持久化（SQLite）\n参考回答：SQLite在做CRDU操作时都默认开启了事务，然后把SQL语句翻译成对应的SQLiteStatement并调用其相应的CRUD方法，此时整个操作还是在rollback journal这个临时文件上进行，只有操作顺利完成才会更新.db数据库，否则会被回滚。\n引申：谈谈如何模仿SQLite中事务的思想更高效进行批量操作")]),e._v(" "),t("li",[e._v("使用SQLite做批量操作有什么好的方法吗？\n技术点：数据持久化（SQLite）\n思路：模仿SQLite的事务处理\n参考回答：使用SQLiteDatabase的beginTransaction()方法开启一个事务，将批量操作SQL语句转化成SQLiteStatement并进行批量操作，结束后endTransaction()")]),e._v(" "),t("li",[e._v("如果现在要删除SQLite中表的一个字段如何做？\n技术点：数据持久化（SQLite）\n参考回答：SQLite数据库只允许增加表字段而不允许修改和删除表字段，只能采取复制表思想，即创建一个新表保留原表想要的字段、再将原表删除")]),e._v(" "),t("li",[e._v("使用SQLite时会有哪些优化操作?\n技术点：数据持久化（SQLite）\n思路：列举可优化点\n参考回答：\n使用事务做批量操作：具体操作见上\n及时关闭Cursor，避免内存泄漏\n耗时操作异步化：数据库的操作属于本地IO，通常比较耗时，建议将这些耗时操作放入异步线程中处理\nContentValues的容量调整：ContentValues内部采用HashMap来存储Key-Value数据，ContentValues初始容量为8，扩容时翻倍。因此建议对ContentValues填入的内容进行估量，设置合理的初始化容量，减少不必要的内部扩容操作\n使用索引加快检索速度：对于查询操作量级较大、业务对要求查询要求较高的推荐使用索引\n"),t("a",{attrs:{href:"https://www.jianshu.com/p/1c70d7306808",target:"_blank",rel:"noopener noreferrer"}},[e._v("IPC"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Android中进程和线程的关系？\n技术点：进程、线程\n参考回答：\n形象理解：如果把安卓系统比喻成一片土壤，可以把App看做扎根在这片土壤上的工厂，每个APP一般对应一个进程，那么线程就像是工厂的生产线。其中，主线程好比是主生产线，只有一条，子线程就像是副生产线，可以有很多条。\n关系：一个APP一般对应一个进程和有限个线程\n一般对应一个进程，当然，可以在AndroidMenifest中给四大组件指定属性android:process开启多进程模式\n有限个线程：线程是一种受限的系统资源，不可无限制的产生且线程的创建和销毁都有一定的开销。")]),e._v(" "),t("li",[e._v("为何需要进行IPC？多进程通信可能会出现什么问题？\n技术点：多进程通信\n思路：讨论多进程通信会出现的问题得出IPC的必要性\n参考回答：\n（1）多进程造成的影响可总结为以下四方面：\n静态变量和单例模式失效：由独立的虚拟机造成\n线程同步机制失效：由独立的虚拟机造成\nSharedPreference的不可靠下降：不支持两个进程同时进行读写操作，即不支持并发读写，有一定几率导致数据丢失\nApplication多次创建： Android系统会为新的进程分配独立虚拟机，相当于系统又把这个应用重新启动了一次。\n（2）需要进程间通信的必要性：所有运行在不同进程的四大组件，只要它们之间需要通过内存在共享数据，都会共享失败。这是由于Android为每个应用分配了独立的虚拟机，不同的虚拟机在内存分配上有不同的地址空间，这会导致在不同的虚拟机中访问同一个类的对象会产生多份副本。\n引申： 谈谈IPC的使用场景")]),e._v(" "),t("li",[e._v("什么是序列化？Serializable接口和Parcelable接口的区别？为何推荐使用后者？\n技术点：序列化\n参考回答：序列化表示将一个对象转换成可存储或可传输的状态。序列化后的对象可以在网络上进行传输，也可以存储到本地。\n应用场景：需要通过Intent和Binder等传输类对象就必须完成对象的序列化过程。\n两种方式：实现Serializable/Parcelable接口。不同点如图：")])]),e._v(" "),t("p",[e._v("![img](file:///C:/Users/hudal/Documents/My Knowledge/temp/e525cf84-c22a-48a6-a055-31571b82e6d4/128/index_files/0.4093199145329698.png)")]),e._v(" "),t("ol",[t("li",[e._v("Android中为何新增Binder来作为主要的IPC方式？\n技术点：Binder机制\n思路：回答Binder优点\n参考回答：Binder机制有什么几条优点：\n传输效率高、可操作性强：传输效率主要影响因素是内存拷贝的次数，拷贝次数越少，传输速率越高。从Android进程架构角度分析：对于消息队列、Socket和管道来说，数据先从发送方的缓存区拷贝到内核开辟的缓存区中，再从内核缓存区拷贝到接收方的缓存区，一共两次拷贝，如图：")])]),e._v(" "),t("p",[e._v("![img](file:///C:/Users/hudal/Documents/My Knowledge/temp/e525cf84-c22a-48a6-a055-31571b82e6d4/128/index_files/0.7889018435494755.png)")]),e._v(" "),t("p",[e._v("而对于Binder来说，数据从发送方的缓存区拷贝到内核的缓存区，而接收方的缓存区与内核的缓存区是映射到同一块物理地址的，节省了一次数据拷贝的过程，如图：")]),e._v(" "),t("p",[e._v("![img](file:///C:/Users/hudal/Documents/My Knowledge/temp/e525cf84-c22a-48a6-a055-31571b82e6d4/128/index_files/0.5892473619497844.png)")]),e._v(" "),t("p",[e._v("由于共享内存操作复杂，综合来看，Binder的传输效率是最好的。\n实现C/S架构方便：Linux的众IPC方式除了Socket以外都不是基于C/S架构，而Socket主要用于网络间的通信且传输效率较低。Binder基于C/S架构 ，Server端与Client端相对独立，稳定性较好。\n安全性高：传统Linux IPC的接收方无法获得对方进程可靠的UID/PID，从而无法鉴别对方身份；而Binder机制为每个进程分配了UID/PID且在Binder通信时会根据UID/PID进行有效性检测。")]),e._v(" "),t("ol",[t("li",[e._v("使用Binder进行数据传输的具体过程？\n技术点：Binder机制\n思路：通过AIDL实现方式解释Binder数据传输的具体过程\n参考回答：服务端中的Service给与其绑定的客户端提供Binder对象，客户端通过AIDL接口中的asInterface()将这个Binder对象转换为代理Proxy，并通过它发起RPC请求。客户端发起请求时会挂起当前线程，并将参数写入data然后调用transact()，RPC请求会通过系统底层封装后由服务端的onTransact()处理，并将结果写入reply，最后返回调用结果并唤醒客户端线程。")])]),e._v(" "),t("p",[e._v("![img](file:///C:/Users/hudal/Documents/My Knowledge/temp/e525cf84-c22a-48a6-a055-31571b82e6d4/128/index_files/0.3628638175774319.png)")]),e._v(" "),t("ol",[t("li",[e._v("Binder框架中ServiceManager的作用？\n技术点：Binder机制\n思路：从Binder框架出发讨论每个元素的作用\n参考回答：在Binder框架定义了四个角色：Server，Client，ServiceManager和Binder驱动。其中Server、Client、ServiceManager运行于用户空间，Binder驱动运行于内核空间。关系如图：")])]),e._v(" "),t("p",[e._v("![img](file:///C:/Users/hudal/Documents/My Knowledge/temp/e525cf84-c22a-48a6-a055-31571b82e6d4/128/index_files/0.9255137316249766.png)")]),e._v(" "),t("p",[e._v("Server&Client：服务器&客户端。在Binder驱动和Service Manager提供的基础设施上，进行Client-Server之间的通信。\nServiceManager服务的管理者，将Binder名字转换为Client中对该Binder的引用，使得Client可以通过Binder名字获得Server中Binder实体的引用。流程如图：")]),e._v(" "),t("p",[e._v("![img](file:///C:/Users/hudal/Documents/My Knowledge/temp/e525cf84-c22a-48a6-a055-31571b82e6d4/128/index_files/0.4026837875893108.png)")]),e._v(" "),t("p",[e._v("Binder驱动：\n与硬件设备没有关系，其工作方式与设备驱动程序是一样的，工作于内核态。\n提供open()、mmap()、poll()、ioctl() 等标准文件操作。\n以字符驱动设备中的misc设备注册在设备目录/dev下，用户通过/dev/binder访问该它。\n负责进程之间binder通信的建立，传递，计数管理以及数据的传递交互等底层支持。\n驱动和应用程序之间定义了一套接口协议，主要功能由ioctl() 接口实现，由于ioctl()灵活、方便且能够一次调用实现先写后读以满足同步交互，因此不必分别调用write()和read()接口。\n其代码位于linux目录的drivers/misc/binder.c中。")]),e._v(" "),t("ol",[t("li",[e._v("Android中有哪些基于Binder的IPC方式？简单对比下？\n技术点：IPC方式\n思路：分析每种IPC方式的优缺点和使用场景的差异")])]),e._v(" "),t("p",[e._v("参考回答：")]),e._v(" "),t("p",[e._v("![img](file:///C:/Users/hudal/Documents/My Knowledge/temp/e525cf84-c22a-48a6-a055-31571b82e6d4/128/index_files/0.36211827069914504.png)")]),e._v(" "),t("ol",[t("li",[e._v("是否了解AIDL？原理是什么？如何优化多模块都使用AIDL的情况？\n技术点：AIDL\n思路：\n参考回答：\nAIDL(Android Interface Definition Language，Android接口定义语言)：如果在一个进程中要调用另一个进程中对象的方法，可使用AIDL生成可序列化的参数，AIDL会生成一个服务端对象的代理类，通过它客户端实现间接调用服务端对象的方法。\nAIDL的本质是系统提供了一套可快速实现Binder的工具。关键类和方法：\nAIDL接口：继承IInterface。\nStub类：Binder的实现类，服务端通过这个类来提供服务。\nProxy类：服务器的本地代理，客户端通过这个类调用服务器的方法。\nasInterface()：客户端调用，将服务端的返回的Binder对象，转换成客户端所需要的AIDL接口类型对象。返回对象：\n若客户端和服务端位于同一进程，则直接返回Stub对象本身；\n否则，返回的是系统封装后的Stub.proxy对象。\nasBinder()：根据当前调用情况返回代理Proxy的Binder对象。\nonTransact()：运行服务端的Binder线程池中，当客户端发起跨进程请求时，远程请求会通过系统底层封装后交由此方法来处理。\ntransact()：运行在客户端，当客户端发起远程请求的同时将当前线程挂起。之后调用服务端的onTransact()直到远程请求返回，当前线程才继续执行。\n当有多个业务模块都需要AIDL来进行IPC，此时需要为每个模块创建特定的aidl文件，那么相应的Service就会很多。必然会出现系统资源耗费严重、应用过度重量级的问题。解决办法是建立Binder连接池，即将每个业务模块的Binder请求统一转发到一个远程Service中去执行，从而避免重复创建Service。\n工作原理：每个业务模块创建自己的AIDL接口并实现此接口，然后向服务端提供自己的唯一标识和其对应的Binder对象。服务端只需要一个Service，服务器提供一个queryBinder接口，它会根据业务模块的特征来返回相应的Binder对像，不同的业务模块拿到所需的Binder对象后就可进行远程方法的调用了。流程如图：")])]),e._v(" "),t("p",[e._v("![img](file:///C:/Users/hudal/Documents/My Knowledge/temp/e525cf84-c22a-48a6-a055-31571b82e6d4/128/index_files/0.3951193305103171.png)")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.jianshu.com/p/06ff0dfeed39",target:"_blank",rel:"noopener noreferrer"}},[e._v("# View"),t("OutboundLink")],1)]),e._v(" "),t("ol",[t("li",[e._v("MotionEvent是什么？包含几种事件？什么条件下会产生？\n技术点：View触控\n参考回答：MotionEvent是手指触摸屏幕锁产生的一系列事件。包含的事件有：\nACTION_DOWN：手指刚接触屏幕\nACTION_MOVE：手指在屏幕上滑动\nACTION_UP：手指在屏幕上松开的一瞬间\nACTION_CANCEL：手指保持按下操作，并从当前控件转移到外层控件时会触发")]),e._v(" "),t("li",[e._v("scrollTo()和scrollBy()的区别？\n技术点：View滑动\n参考回答：scrollBy内部调用了scrollTo，它是基于当前位置的相对滑动；而scrollTo是绝对滑动，因此如果利用相同输入参数多次调用scrollTo()方法，由于View初始位置是不变只会出现一次View滚动的效果而不是多次。\n引申：两者都只能对view内容进行滑动，而不能使view本身滑动，且非平滑，可使用Scroller有过渡滑动的效果")]),e._v(" "),t("li",[e._v("Scroller中最重要的两个方法是什么？主要目的是？\n技术点：View滑动\n思路：从Scroller实现滑动的具体过程出发，\n参考回答：Scroller实现滑动的具体过程：\n在MotionEvent.ACTION_UP事件触发时调用startScroll()方法，该方法并没有进行实际的滑动操作，而是记录滑动相关量\n马上调用invalidate/postInvalidate()方法，请求View重绘，导致View.draw方法被执行\n紧接着会调用View.computeScroll()方法，此方法是空实现，需要自己处理逻辑。具体逻辑是：先判断computeScrollOffset()，若为true（表示滚动未结束），则执行scrollTo()方法，它会再次调用postInvalidate()，如此反复执行，直到返回值为false。流程图如下：")])]),e._v(" "),t("p",[e._v("![img](file:///C:/Users/hudal/Documents/My Knowledge/temp/e525cf84-c22a-48a6-a055-31571b82e6d4/128/index_files/0.8842445362376585.png)")]),e._v(" "),t("p",[e._v("其中，最重要的两个方法是startScroll()和computeScroll()")]),e._v(" "),t("ol",[t("li",[e._v("谈一谈View的事件分发机制？\n技术点：View事件分发\n思路：从分发本质、传递顺序、核心方法展开\n参考回答：\n事件分发本质：就是对MotionEvent事件分发的过程。即当一个MotionEvent产生了以后，系统需要将这个点击事件传递到一个具体的View上。\n点击事件的传递顺序：Activity（Window） -> ViewGroup -> View\n三个主要方法：\ndispatchTouchEvent：进行事件的分发（传递）。返回值是 boolean 类型，受当前onTouchEvent和下级view的dispatchTouchEvent影响\nonInterceptTouchEvent：对事件进行拦截。该方法只在ViewGroup中有，View（不包含 ViewGroup）是没有的。一旦拦截，则执行ViewGroup的onTouchEvent，在ViewGroup中处理事件，而不接着分发给View。且只调用一次，所以后面的事件都会交给ViewGroup处理。\nonTouchEvent：进行事件处理。")]),e._v(" "),t("li",[e._v("如何解决View的滑动冲突？\n技术点：View滑动冲突\n思路：从处理规则和具体实现方法展开讨论\n参考回答：\n（1）处理规则：\n对于由于外部滑动和内部滑动方向不一致导致的滑动冲突，可以根据滑动的方向判断谁来拦截事件。\n对于由于外部滑动方向和内部滑动方向一致导致的滑动冲突，可以根据业务需求，规定何时让外部View拦截事件何时由内部View拦截事件。\n对于上面两种情况的嵌套，相对复杂，可同样根据需求在业务上找到突破点。\n（2）实现方法：\n外部拦截法：指点击事件都先经过父容器的拦截处理，如果父容器需要此事件就拦截，否则就不拦截。具体方法：需要重写父容器的onInterceptTouchEvent方法，在内部做出相应的拦截。\n内部拦截法：指父容器不拦截任何事件，而将所有的事件都传递给子容器，如果子容器需要此事件就直接消耗，否则就交由父容器进行处理。具体方法：需要配合requestDisallowInterceptTouchEvent方法。")]),e._v(" "),t("li",[e._v("谈一谈View的工作原理？\n技术点：View工作流程\n思路：围绕三大流程展开\n参考回答：View工作流程简单来说就是，先measure测量，用于确定View的测量宽高，再 layout布局，用于确定View的最终宽高和四个顶点的位置，最后 draw绘制，用于将View 绘制到屏幕上。具体过程图见：")])]),e._v(" "),t("p",[e._v("![img](file:///C:/Users/hudal/Documents/My Knowledge/temp/e525cf84-c22a-48a6-a055-31571b82e6d4/128/index_files/0.14824757833324576.png)")]),e._v(" "),t("p",[e._v("ViewRoot对应于ViewRootImpl类，它是连接WindowManager和DecorView的纽带。\nView的绘制流程是从ViewRoot和performTraversals开始。\nperformTraversals()依次调用performMeasure()、performLayout()和performDraw()三个方法，分别完成顶级 View的绘制。\n其中，performMeasure()会调用measure()，measure()中又调用onMeasure()，实现对其所有子元素的measure过程，这样就完成了一次measure过程；接着子元素会重复父容器的measure过程，如此反复至完成整个View树的遍历。layout和draw同理。")]),e._v(" "),t("ol",[t("li",[e._v("MeasureSpec是什么？有什么作用？\n技术点：View工作流程（measure）\n思路：从MeasureSpec作用、组成、模式和决定因素展开\n参考回答：\n作用：通过宽测量值widthMeasureSpec和高测量值heightMeasureSpec决定View的大小\n组成：一个32位int值，高2位代表SpecMode(测量模式)，低30位代表SpecSize( 某种测量模式下的规格大小)。\n三种模式：\nUNSPECIFIED：父容器不对View有任何限制，要多大有多大。常用于系统内部。\nEXACTLY(精确模式)：父视图为子视图指定一个确切的尺寸SpecSize。对应LyaoutParams中的match_parent或具体数值。\nAT_MOST(最大模式)：父容器为子视图指定一个最大尺寸SpecSize，View的大小不能大于这个值。对应LayoutParams中的wrap_content。\n决定因素：值由子View的布局参数LayoutParams和父容器的MeasureSpec值共同决定。具体规则见下图：")])]),e._v(" "),t("p",[e._v("![img](file:///C:/Users/hudal/Documents/My Knowledge/temp/e525cf84-c22a-48a6-a055-31571b82e6d4/128/index_files/0.020526855484004125.png)")]),e._v(" "),t("p",[e._v("引申：直接继承View的自定义View需要重写onMeasure()并设置wrap_content时的自身大小，否则效果相当于macth_parent")]),e._v(" "),t("ol",[t("li",[e._v("自定义View/ViewGroup需要注意什么？\n技术点：自定义View\n参考回答：")])]),e._v(" "),t("p",[e._v("![img](file:///C:/Users/hudal/Documents/My Knowledge/temp/e525cf84-c22a-48a6-a055-31571b82e6d4/128/index_files/0.049499462173156594.png)")]),e._v(" "),t("ol",[t("li",[e._v("onTouch()、onTouchEvent()和onClick()关系？\n技术点：View事件分发\n参考回答：优先度onTouch()>onTouchEvent()>onClick()。因此onTouchListener的onTouch()方法会先触发；如果onTouch()返回false才会接着触发onTouchEvent()，同样的，内置诸如onClick()事件的实现等等都基于onTouchEvent()；如果onTouch()返回true，这些事件将不会被触发。\n引申："),t("a",{attrs:{href:"https://www.jianshu.com/p/4b89d681c5a0",target:"_blank",rel:"noopener noreferrer"}},[e._v("OnTouchListener、OnClickListener的冲突"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("SurfaceView和View的区别？\n技术点：View、SurfaceView\n参考回答：SurfaceView是从View基类中派生出来的显示类，他和View的区别有：\nView需要在UI线程对画面进行刷新，而SurfaceView可在子线程进行页面的刷新\nView适用于主动更新的情况，而SurfaceView适用于被动更新，如频繁刷新，这是因为如果使用View频繁刷新会阻塞主线程，导致界面卡顿\nSurfaceView在底层已实现双缓冲机制，而View没有，因此SurfaceView更适用于需要频繁刷新、刷新时数据处理量很大的页面")]),e._v(" "),t("li",[e._v("invalidate()和postInvalidate()的区别？\n技术点：View刷新\n参考回答：invalidate()与postInvalidate()都用于刷新View，主要区别是invalidate()在主线程中调用，若在子线程中使用需要配合handler；而postInvalidate()可在子线程中直接调用。\n"),t("a",{attrs:{href:"https://www.jianshu.com/p/35c7775b8202",target:"_blank",rel:"noopener noreferrer"}},[e._v("Drawable"),t("OutboundLink")],1),e._v("等资源")]),e._v(" "),t("li",[e._v("了解哪些Drawable？适用场景？\n技术点：res资源\n参考回答：BitmapDrawable表示一张图片、NinePatchDrawable可自动地根据所需的宽/高对图片进行相应的缩放并保证不失真、ShapeDrawable表示纯色、有渐变效果的基础几何图形、StateListDrawable表示一个Drawable的集合且每个Drawable对应着View的一种状态、LayerDrawable可通过将不同的Drawable放置在不同的层上面从而达到一种叠加后的效果")]),e._v(" "),t("li",[e._v("mipmap系列中xxxhdpi、xxhdpi、xhdpi、hdpi、mdpi和ldpi存在怎样的关系？\n技术点：res资源\n参考回答：表示不同密度的图片资源，像素从高到低依次排序为xxxhdpi>xxhdpi>xhdpi>hdpi>mdpi>ldpi，根据手机的dpi不同加载不同密度的图片")]),e._v(" "),t("li",[e._v("dp、dpi、px的区别？\n技术点：Android适配\n参考回答：\npx：像素，如分辨率1920x1080表示高为1920个像素、宽为1080个像素\ndpi：每英寸的像素点，如分辨率为1920x1080的手机尺寸为4.95英寸，则该手机DPI为（1920x1920+ 1080x1080）½/4.95≈445dpi\ndp：密度无关像素，是个相对值")]),e._v(" "),t("li",[e._v("res目录和assets目录的区别？\n技术点：res、assets\n参考回答：\nres/raw中的文件会被映射到R.java文件中，访问时可直接使用资源ID，不可以有目录结构\nassets文件夹下的文件不会被映射到R.java中，访问时需要AssetManager类，可以创建子文件\n"),t("a",{attrs:{href:"https://www.jianshu.com/p/10dc575896d3",target:"_blank",rel:"noopener noreferrer"}},[e._v("Animation"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Android中有哪几种类型的动画？\n技术点：动画类型\n参考回答： 常见三类动画\nView动画（View Animation）/补间动画（Tween animation）：对View进行平移、缩放、旋转和透明度变化的动画，不能真正的改变view的位置。应用如布局动画、Activity切换动画\n逐帧动画（Drawable Animation）：是View动画的一种，它会按照顺序播放一组预先定义好的图片\n属性动画（Property Animation）：对该类对象进行动画操作，真正改变了对象的属性")]),e._v(" "),t("li",[e._v("帧动画在使用时需要注意什么？\n技术点：帧动画\n参考回答：使用祯动画要注意不能使用尺寸过大的图片，否则容易造成OOM")]),e._v(" "),t("li",[e._v("View动画和属性动画的区别？\n技术点：View动画、属性动画")])]),e._v(" "),t("p",[e._v("参考回答：")]),e._v(" "),t("p",[e._v("![img](file:///C:/Users/hudal/Documents/My Knowledge/temp/e525cf84-c22a-48a6-a055-31571b82e6d4/128/index_files/0.3192198634050387.png)")]),e._v(" "),t("ol",[t("li",[e._v("View动画为何不能真正改变View的位置？而属性动画为何可以？\n技术点：View动画\n参考回答：View动画改变的只是View的显示，而没有改变View的响应区域；而属性动画会通过反射技术来获取和执行属性的get、set方法，从而改变了对象位置的属性值。")]),e._v(" "),t("li",[e._v("属性动画插值器和估值器的作用？\n技术点：属性动画\n参考回答：\n插值器(Interpolator)：根据时间流逝的百分比计算出当前属性值改变的百分比。确定了动画效果变化的模式，如匀速变化、加速变化等等。View动画和属性动画均可使用。常用的系统内置插值器：\n线性插值器(LinearInterpolator)：匀速动画\n加速减速插值器(AccelerateDecelerateInterpolator)：动画两头慢中间快\n减速插值器(DecelerateInterpolator)：动画越来越慢\n类型估值器(TypeEvaluator)：根据当前属性改变的百分比计算出改变后的属性值。针对于属性动画，View动画不需要类型估值器。常用的系统内置的估值器：\n整形估值器(IntEvaluator)\n浮点型估值器(FloatEvaluator)\nColor属性估值器(ArgbEvaluator)\n"),t("a",{attrs:{href:"https://www.jianshu.com/p/ed03aed9a4db",target:"_blank",rel:"noopener noreferrer"}},[e._v("Window"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Activity、View、Window三者之间的关系？\n技术点：Activity、View、Window联系\n思路：围绕Window是Activity和View的桥梁展开\n参考回答：在Activity启动过程其中的attach()方法中初始化了PhoneWindow，而PhoneWindow是Window的唯一实现类，然后Activity通过setContentView将View设置到了PhoneWindow上，而View通过WindowManager的addView()、removeView()、updateViewLayout()对View进行管理。")]),e._v(" "),t("li",[e._v("Window有哪几种类型？\n技术点：Window类型\n参考回答：Window有三种类型：\n应用Window：对应一个Activity。\n子Window：不能单独存在，需附属特定的父Window。如Dialog。\n系统Window： 需申明权限才能创建。如Toast。")]),e._v(" "),t("li",[e._v("Activity创建和Dialog创建过程的异同？\n技术点：Window创建\n参考回答：Dialog的Window创建过程：\n创建WindowDialog。和Activity类似，同样是通过PolicyManager.makeNewWindow() 来实现。\n初始化DecorView并将Dialog的视图添加到DecorView中去。和Activity类似，同样是通过Window.setContentView() 来实现。\n将DecorView添加到Window中显示。和Activity一样，都是在自身要出现在前台时才会将添加Window。\nDialog.show() 方法：完成DecorView的显示。\nWindowManager.remoteViewImmediate() 方法：当Dialog被dismiss时移除DecorView。\n"),t("a",{attrs:{href:"https://www.jianshu.com/p/1c79fb5296b6",target:"_blank",rel:"noopener noreferrer"}},[e._v("Handler"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("谈谈消息机制Hander？作用？有哪些要素？流程是怎样的？\n技术点：消息机制\n参考回答：\n作用：跨线程通信。当子线程中进行耗时操作后需要更新UI时，通过Handler将有关UI的操作切换到主线程中执行。\n四要素：\nMessage（消息）：需要被传递的消息，其中包含了消息ID，消息处理对象以及处理的数据等，由MessageQueue统一列队，最终由Handler处理。\nMessageQueue（消息队列）：用来存放Handler发送过来的消息，内部通过单链表的数据结构来维护消息列表，等待Looper的抽取。\nHandler（处理者）：负责Message的发送及处理。通过 Handler.sendMessage() 向消息池发送各种消息事件；通过 Handler.handleMessage() 处理相应的消息事件。\nLooper（消息泵）：通过Looper.loop()不断地从MessageQueue中抽取Message，按分发机制将消息分发给目标处理者。\n具体流程如图")])]),e._v(" "),t("p",[e._v("![img](file:///C:/Users/hudal/Documents/My Knowledge/temp/e525cf84-c22a-48a6-a055-31571b82e6d4/128/index_files/0.8242773205658953.png)")]),e._v(" "),t("p",[e._v("Handler.sendMessage()发送消息时，会通过MessageQueue.enqueueMessage()向MessageQueue中添加一条消息；\n通过Looper.loop()开启循环后，不断轮询调用MessageQueue.next()；\n调用目标Handler.dispatchMessage()去传递消息，目标Handler收到消息后调用Handler.handlerMessage()处理消息。")]),e._v(" "),t("ol",[t("li",[e._v("为什么系统不建议在子线程访问UI？\n技术点：UI线程、子线程\n参考回答：系统不建议在子线程访问UI的原因是，UI控件非线程安全，在多线程中并发访问可能会导致UI控件处于不可预期的状态。而不对UI控件的访问加上锁机制的原因有：\n上锁会让UI控件变得复杂和低效\n上锁后会阻塞某些进程的执行")]),e._v(" "),t("li",[e._v("一个Thread可以有几个Looper？几个Handler？\n技术点：Looper、Handler\n参考回答：一个Thread只能有一个Looper，可以有多个Handler\n引申：更多数量关系：Looper有一个MessageQueue，可以处理来自多个Handler的Message；MessageQueue有一组待处理的Message，这些Message可来自不同的Handler；Message中记录了负责发送和处理消息的Handler；Handler中有Looper和MessageQueue；")]),e._v(" "),t("li",[e._v("如何将一个Thread线程变成Looper线程？Looper线程有哪些特点？\n技术点：Looper\n参考回答：通过Looper.prepare()可将一个Thread线程转换成Looper线程。Looper线程和普通Thread不同，它通过MessageQueue来存放消息和事件、Looper.loop()进行消息轮询。")]),e._v(" "),t("li",[e._v("可以在子线程直接new一个Handler吗？那该怎么做？\n技术点：Handler\n参考回答：不同于主线程直接new一个Handler，由于子线程的Looper需要手动去创建，在创建Handler时需要多一些方法：\nnew Thread(new Runnable() {\n@Override\npublic void run() {\nLooper.prepare();//为子线程创建Looper\nnew Handler() {\n@Override\npublic void handleMessage(Message msg) {\nsuper.handleMessage(msg);\n//子线程消息处理\n}\n};\nLooper.loop(); //开启消息轮询\n}\n}).start();")]),e._v(" "),t("li",[e._v("Message可以如何创建？哪种效果更好，为什么？\n技术点：Message\n参考回答：创建Message对象的几种方式：\nMessage msg = new Message();\nMessage msg = Message.obtain();\nMessage msg = handler1.obtainMessage();\n后两种方法都是从整个Messge池中返回一个新的Message实例，能有效避免重复Message创建对象，因此更鼓励这种方式创建Message")]),e._v(" "),t("li",[e._v("这里的ThreadLocal有什么作用？\n技术点：ThreadLocal\n参考回答：ThreadLocal类可实现线程本地存储的功能，把共享数据的可见范围限制在同一个线程之内，无须同步就能保证线程之间不出现数据争用的问题，这里可理解为ThreadLocal帮助Handler找到本线程的Looper。\n底层数据结构：每个线程的Thread对象中都有一个ThreadLocalMap对象，它存储了一组以ThreadLocal.threadLocalHashCode为key、以本地线程变量为value的键值对，而ThreadLocal对象就是当前线程的ThreadLocalMap的访问入口，也就包含了一个独一无二的threadLocalHashCode值，通过这个值就可以在线程键值值对中找回对应的本地线程变量。")]),e._v(" "),t("li",[e._v("主线程中Looper的轮询死循环为何没有阻塞主线程？\n技术点：Looper\n参考回答：Android是依靠事件驱动的，通过Loop.loop()不断进行消息循环，可以说Activity的生命周期都是运行在 Looper.loop()的控制之下，一旦退出消息循环，应用也就退出了。而所谓的导致ANR多是因为某个事件在主线程中处理时间太耗时，因此只能说是对某个消息的处理阻塞了Looper.loop()，反之则不然。")]),e._v(" "),t("li",[e._v("使用Hanlder的postDealy()后消息队列会发生什么变化？\n技术点：Handler\n参考回答：post delay的Message并不是先等待一定时间再放入到MessageQueue中，而是直接进入并阻塞当前线程，然后将其delay的时间和队头的进行比较，按照触发时间进行排序，如果触发时间更近则放入队头，保证队头的时间最小、队尾的时间最大。此时，如果队头的Message正是被delay的，则将当前线程堵塞一段时间，直到等待足够时间再唤醒执行该Message，否则唤醒后直接执行。\n"),t("a",{attrs:{href:"https://www.jianshu.com/p/ab77a2e83c52",target:"_blank",rel:"noopener noreferrer"}},[e._v("线程"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Android中还了解哪些方便线程切换的类？\n技术点：线程通信\n参考回答：对Handler进一步的封装的几个类：\nAsyncTask：底层封装了线程池和Handler，便于执行后台任务以及在子线程中进行UI操作。\nHandlerThread：一种具有消息循环的线程，其内部可使用Handler。\nIntentService：是一种异步、会自动停止的服务，内部采用HandlerThread。\n引申：更多是对消息机制的理解")]),e._v(" "),t("li",[e._v("AsyncTask相比Handler有什么优点？不足呢？\n技术点：AsyncTask、Handler\n参考回答：\nHandler机制存在的问题：多任务同时执行时不易精确控制线程。\n引入AsyncTask的好处：创建异步任务更简单，直接继承它可方便实现后台异步任务的执行和进度的回调更新UI，而无需编写任务线程和Handler实例就能完成相同的任务。")]),e._v(" "),t("li",[e._v("使用AsyncTask需要注意什么？\n技术点：AsyncTask\n参考回答：\n不要直接调用onPreExecute()、doInBackground()、onProgressUpdate()、onPostExecute()和onCancelled()方法\n一个异步对象只能调用一次execute()方法\n引申：谈谈AsyncTask初始化、五个核心方法如何配合进而体现Handler的作用")]),e._v(" "),t("li",[e._v("AsyncTask中使用的线程池大小？\n技术点：AsyncTask\n参考回答：在AsyncTask内部实现有两个线程池：\nSerialExecutor：用于任务的排队，默认是串行的线程池，在3.0以前核心线程数为5、线程池大小为128，而3.0以后变为同一时间只能处理一个任务\nTHREAD_POOL_EXECUTOR：用于真正执行任务。\n引申：谈谈对线程池的理解")]),e._v(" "),t("li",[e._v("HandlerThread有什么特点？\n技术点：HandlerThread\n参考回答：HandlerThread是一个线程类，它继承自Thread。与普通Thread不同，HandlerThread具有消息循环的效果，这是因为它内部HandlerThread.run()方法中有Looper，能通过Looper.prepare()来创建消息队列，并通过Looper.loop()来开启消息循环。")]),e._v(" "),t("li",[e._v("快速实现子线程使用Handler\n技术点：HandlerThread\n思路：不同于之前手动在子线程创建Looper再构建Handler的想法，这里从HandlerThread角度去快速实现在子线程使用Handler\n参考回答：HandlerThread实现方法\n实例化一个HandlerThread对象，参数是该线程的名称；\n通过 HandlerThread.start()开启线程；\n实例化一个Handler并传入HandlerThread中的looper对象，使得与HandlerThread绑定；\n利用Handler即可执行异步任务；\n当不需要HandlerThread时，通过HandlerThread.quit()/quitSafely()方法来终止线程的执行。")]),e._v(" "),t("li",[e._v("IntentService的特点？\n技术点：IntentService\n思路：和普通线程和普通Service比较突出其特点\n参考回答： 不同于线程，IntentService是服务，优先级比线程高，更不容易被系统杀死，因此较适合执行一些高优先级的后台任务；不同于普通Service，IntentService可自动创建子线程来执行任务，且任务执行完毕后自动退出。")]),e._v(" "),t("li",[e._v("为何不用bindService方式创建IntentService？\n技术点：IntentService\n思路：从底层实现出发\n参考回答：IntentService的工作原理是，在IntentService的onCreate()里会创建一个HandlerThread，并利用其内部的Looper实例化一个ServiceHandler对象；而这个ServiceHandler用于处理消息的handleMessage()方法会去调用IntentService的onHandleIntent()，这也是为什么可在该方法中处理后台任务的逻辑；当有Intent任务请求时会把Intent封装到Message，然后ServiceHandler会把消息发送出，而发送消息是在onStartCommand()完成的，只能通过startService()才可走该生命周期方法，因此不能通过bindService创建IntentService。")]),e._v(" "),t("li",[e._v("线程池的好处、原理、类型？\n技术点：线程池\n参考回答：\n（1）线程池的好处：\n重用线程池中的线程，避免线程的创建和销毁带来的性能消耗；\n有效控制线程池的最大并发数，避免大量的线程之间因互相抢占系统资源而导致阻塞现象；\n进行线程管理，提供定时/循环间隔执行等功能\n（2）线程池的分类：\nFixThreadPool：线程数量固定的线程池，所有线程都是核心线程，当线程空闲时不会被回收；能快速响应外界请求。\nCachedThreadPool：线程数量不定的线程池（最大线程数为Integer.MAX_VALUE），只有非核心线程，空闲线程有超时机制，超时回收；适合于执行大量的耗时较少的任务\nScheduledThreadPool：核心线程数量固定，非核心线程数量不定；可进行定时任务和固定周期的任务。\nSingleThreadExecutor：只有一个核心线程，可确保所有的任务都在同一个线程中按顺序执行；好处是无需处理线程同步问题。\n（3）线程池的原理：实际上通过ThreadPoolExecutor并通过一系列参数来配置各种各样的线程池，具体的参数有：\ncorePoolSize核心线程数：一般会在线程中一直存活\nmaximumPoolSize最大线程数：当活动线程数达到这个数值后，后续的任务将会被阻塞\nkeepAliveTime非核心线程超时时间：超过这个时长，闲置的非核心线程就会被回收\nunit：用于指定keepAliveTime参数的时间单位\nworkQueue任务队列：通过线程池的execute()方法提交的Runnable对象会存储在这个参数中。\nthreadFactory：线程工厂，可创建新线程\nhandler：在线程池无法执行新任务时进行调度\n引申："),t("a",{attrs:{href:"https://www.jianshu.com/p/4b89d681c5a0",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用Executors各个方法创建线程池的弊端"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("ThreadPoolExecutor的工作策略？\n技术点：线程池\n参考回答：ThreadPoolExecutor的默认工作策略：\n若程池中的线程数量未达到核心线程数，则会直接启动一个核心线程执行任务。\n若线程池中的线程数量已达到或者超过核心线程数量，则任务会被插入到任务列表等待执行。\n若任务无法插入到任务列表中，往往由于任务列表已满，此时如果\n线程数量未达到线程池最大线程数，则会启动一个非核心线程执行任务；\n线程数量已达到线程池规定的最大值，则拒绝执行此任务，ThreadPoolExecutor会调用RejectedExecutionHandler的rejectedExecution方法来通知调用者。\n引申：ThreadPoolExecutor的拒绝策略")]),e._v(" "),t("li",[e._v("什么是ANR？什么情况会出现ANR？如何避免？在不看代码的情况下如何快速定位出现ANR问题所在？\n技术点：ANR\n思路：\n参考回答：\nANR（Application Not Responding，应用无响应）：当操作在一段时间内系统无法处理时，会在系统层面会弹出ANR对话框\n产生ANR可能是因为5s内无响应用户输入事件、10s内未结束BroadcastReceiver、20s内未结束Service\n想要避免ANR就不要在主线程做耗时操作，而是通过开子线程，方法比如继承Thread或实现Runnable接口、使用AsyncTask、IntentService、HandlerThread等\n引申：快读定位ANR方法：使用命令导出ANR日志，并分析关键信息，详见"),t("a",{attrs:{href:"https://www.jianshu.com/p/cfa9ed42e379",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何分析ANR"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://www.jianshu.com/p/aaafcd72c127",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bitmap"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("加载图片的时候需要注意什么？\n技术点：Bitmap高效加载\n参考回答：\n直接加载大容量的高清Bitmap很容易出现显示不完整、内存溢出OOM的问题，所以最好按一定的采样率将图片缩小后再加载进来\n为减少流量消耗，可对图片采用内存缓存策略，又为了避免图片占用过多内存导致内存溢出，最好以软引用方式持有图片\n如果还需要网上下载图片，注意要开子线程去做下载的耗时操作")]),e._v(" "),t("li",[e._v("LRU算法的原理？\n技术点：LRU算法\n参考回答：为减少流量消耗，可采用缓存策略。常用的缓存算法是LRU(Least Recently Used)：\n核心思想：当缓存满时, 会优先淘汰那些近期最少使用的缓存对象。主要是两种方式：\nLruCache(内存缓存)：LruCache类是一个线程安全的泛型类：内部采用一个LinkedHashMap以强引用的方式存储外界的缓存对象，并提供get和put方法来完成缓存的获取和添加操作，当缓存满时会移除较早使用的缓存对象，再添加新的缓存对象。\nDiskLruCache(磁盘缓存)： 通过将缓存对象写入文件系统从而实现缓存效果\n引申：感兴趣可了解具体实现算法\n"),t("a",{attrs:{href:"https://www.jianshu.com/p/81485e65c2c8",target:"_blank",rel:"noopener noreferrer"}},[e._v("性能优化"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("项目中如何做性能优化的？\n技术点：性能优化实例\n思路：举例说明项目注意了哪些方面的性能优化，如布局优化、绘制优化、内存泄漏优化、 响应速度优化、列表优化、Bitmap优化、 线程优化......")]),e._v(" "),t("li",[e._v("了解哪些性能优化的工具？\n技术点：性能优化工具\n思路：做项目时是否使用过的系统自带的性能优化工具？公司是否有自己的性能优化工具？实现原理怎样的？")]),e._v(" "),t("li",[e._v("布局上如何优化？\n技术点：布局优化\n参考回答：布局优化的核心就是尽量减少布局文件的层级，常见的方式有：\n多嵌套情况下可使用RelativeLayout减少嵌套。\n布局层级相同的情况下使用LinearLayout，它比RelativeLayout更高效。\n使用标签重用布局、标签减少层级、标签懒加载。")]),e._v(" "),t("li",[e._v("内存泄漏是什么？为什么会发生？常见哪些内存泄漏的例子？都是怎么解决的？\n技术点：内存泄漏\n参考回答：内存泄漏(Memory Leak)是指程序在申请内存后，无法释放已申请的内存空间。简单地说，发生内存泄漏是由于长周期对象持有对短周期对象的引用，使得短周期对象不能被及时回收。常见的几个例子和解决办法：\n单例模式导致的内存泄漏：单例传入参数this来自Activity，使得持有对Activity的引用。\n解决办法：传参context.getApplicationContext()\nHandler导致的内存泄漏：Message持有对Handler的引用，而非静态内部类的Handler又隐式持有对外部类Activity的引用，使得引用关系会保持至消息得到处理，从而阻止了Activity的回收。\n解决办法：使用静态内部类+WeakReference弱引用；当外部类结束生命周期时清空消息队列。\n线程导致的内存泄漏：AsyncTask/Runnable以匿名内部类的方式存在，会隐式持有对所在Activity的引用。\n解决办法：将AsyncTask和Runnable设为静态内部类或独立出来；在线程内部采用弱引用保存Context引用\n资源未关闭导致的内存泄漏：未及时注销资源导致内存泄漏，如BraodcastReceiver、File、Cursor、Stream、Bitmap等。\n解决办法：在Activity销毁的时候要及时关闭或者注销。\nBraodcastReceiver：调用unregisterReceiver()注销；\nCursor，Stream、File：调用close()关闭；\n动画：在Activity.onDestroy()中调用Animator.cancel()停止动画\n引申：谈谈项目中是如何注意内存泄漏的问题")]),e._v(" "),t("li",[e._v("内存泄漏和内存溢出的区别\n技术点：内存泄漏、内存溢出\n参考回答：\n内存泄漏(Memory Leak)是指程序在申请内存后，无法释放已申请的内存空间。是造成应用程序OOM的主要原因之一。\n内存溢出(out of memory)是指程序在申请内存时，没有足够的内存空间供其使用。")]),e._v(" "),t("li",[e._v("什么情况会导致内存溢出？\n技术点：内存溢出\n参考回答：内存泄漏是导致内存溢出的主要原因；直接加载大图片也易造成内存溢出\n引申：谈谈如何避免内存溢出（如何避免内存泄漏、避免直接加载大图片）\n开源框架（略）\n谷歌新动态")]),e._v(" "),t("li",[e._v("是否了解和使用过谷歌推出的新技术？")]),e._v(" "),t("li",[e._v("有了解刚发布的Androidx.0的特性吗？")]),e._v(" "),t("li",[e._v("Kotlin对Java做了哪些优化？\n可能意图：了解候选者对谷歌&安卓的关注度、共同探讨对新技术的看法、学习主动性、平时学习习惯\n思路：谷歌的安卓官方网站（中文版）：https://developer.android.google.cn，了解最新动态")])]),e._v(" "),t("h1",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),t("ol",[t("li",[e._v("2019校招Android面试题解1.0（上篇）. https://www.jianshu.com/p/718aa3c1a70b")]),e._v(" "),t("li",[e._v("2019校招Android面试题解1.0（中篇） . https://www.jianshu.com/p/2dd855aa1938")]),e._v(" "),t("li",[e._v("2019校招Android面试题解1.0（下篇） . https://www.jianshu.com/p/168e52336b53")])])])}),[],!1,null,null,null);n.default=r.exports}}]);