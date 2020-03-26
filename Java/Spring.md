# Spring IOC 

描述：IOC控制反转即 把对象组件的控制权从程序代码本身转移到容器，由容器来创建并管理对象之间的依赖关系。

实现原理：通过 JAVA 反射创建实例对需要注入的接口实现类进行赋值

 

## Spring AOP

描述：AOP面向切面编程，它允许程序员对横切关注点进行模块化管理，即将影响多个类的行为封装到可重用的模块中。EG:日志管理、访问权限管理、事务管理等。

实现原理：动态代理（JDK动态代理、CGLib动态代理）AOP的处理原则：如果类实现了接口则会JDK动态代理否则用 CGLIB动态代理。

区别：JDK动态代理只能代理接口实现类，其原理是代理模式 基于 JAVA反射 采用运行时动态地在内存中临时生成临时代理类的方式来实现AOP代理。不需要引入第三方库。

CGLIB 动态代理：通过CGLIB字节码技术，在运行时动态生成一个类的子类来实现动态代理。需要引入第三方库CGLIB，CGLIB简单来说就是一个代码生成类库，它可以在运行时动态生成某个类的子类。

 

## Spring事务

事务隔离级别

1.read_uncommited 可以读取未提交的事务，存在脏读问题

2.read_commited 只能读取提交的事务，能避免脏读问题，默认级别

3.readRepeatable_read 表示一个事务在整个过程中可以多次重复查询 ，能防止脏读和不可重复读

4.serializable 所有事务逐个执行，各事务间完全不产生干扰，可防止脏读、不可重复读以及幻读

事务的传播行为

1.propagation_required 如果当前存在事务则加入，否则创建一个新事务

2.propagation_requires_new 创建一个新事务，如果当前存在事务则将当前事务挂起

3.propagation_supports 如果当前存在事务则加入，否则以非事务的方式运行

4.propagation_not_supported 以非事务运行，如果存在事务则把当前事务挂起

5.propagation_never 以非事务方式运行，如果存在事务则抛出异常

6.propagation_mandatory 如果存在事务则加入 否则 抛出异常

7.propagation_nested 如果存在则创建一个事务嵌套进来，没有则创建一个新事务

 

## Spring Bean的生命周期管理

1.实例化开始

2.填充属性:Spring 将值和 bean 的引用注入到 bean 对应的属性中

3.如果 bean 实现了 BeanNameAware 接口， Spring 将 bean 的 ID 传递给 setBeanName() 方法

4.如果 bean 实现了 BeanFactoryAware 接口，Spring 将调用 setBeanFactory() 方法，将 BeanFactory 容器实例传入

5.如果 bean 实现了 ApplicaitonContextAware 接口，Spring 将调用 setApplicationContext() 方法，将 bean 所在的应用上下文的引用传入进来

6.如果 bean 实现了 BeanPostProccessor 接口，Spring 将调用它们的 postProcessorBeforeInitiazation() 方法

7.如果 bean 实现了 InitializingBean 接口，Spring 将调用它们的 afterPropertiesSet() 方法，类似地，如果 bean 使用了 init-method 声明了初始方法，该方法也会被调用

8.如果 bean 实现了 BeanPostProcessor 接口，Spring 将调用它们的 postProcessorAfterInitiazation() 方法

9.此时， bean 已经准备就绪，可以被应用程序使用了，它们将一直驻留在应用上下文中，直到该应用上下文被销毁。

10.如果 bean 实现了 DisposableBean 接口，Spring 将调用它的 destory() 方法。同样，如果 bean 使用了 destory-method 声明了销毁方法，该方法也会被调用

 