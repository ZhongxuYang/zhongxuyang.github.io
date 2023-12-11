---
doc_type: weread-highlights-reviews
bookId: "27337473"
author: 曾探
cover: https://cdn.weread.qq.com/weread/cover/90/YueWen_27337473/t7_YueWen_27337473.jpg
reviewCount: 0
noteCount: 1
isbn: 9787115388889
category: 计算机-编程设计
lastReadDate: 2021-08-04
---


---
# 元数据
> [!abstract] JavaScript设计模式与开发实践
> - ![ JavaScript设计模式与开发实践|200](https://cdn.weread.qq.com/weread/cover/90/YueWen_27337473/t7_YueWen_27337473.jpg)
> - 书名： JavaScript设计模式与开发实践
> - 作者： 曾探
> - 简介： 本书是根据JavaScript语言的特性专门针对JavaScript语言全面总结的设计模式。全书共分为三个部分，第一部分讲解了JavaScript语言面向对象和函数式编程的知识及其在设计模式方面的作用；第二部分通过一步步完善的代码示例，由浅入深地讲解了16个设计模式；第三部分讲述了面向对象的设计原则及其在设计模式中的体现，以及一些常见的面向对象编程技巧和日常开发中的代码重构。    书中所有示例均来自作者长期的开发实践，与实际开发密切相关，适合Web前端开发人员阅读。
> - 出版时间 2015-05-12 00:00:00
> - ISBN： 9787115388889
> - 分类： 计算机-编程设计
> - 出版社： 人民邮电出版社
> - PC地址：https://weread.qq.com/web/reader/6bf3215071a123016bf0b74

# 高亮划线

## 1.4 原型模式和基于原型继承的JavaScript对象系统


- 📌 下面这段代码来理解new运算的过程：￼         function Person( name ){￼             this.name = name;￼         };￼ ￼         Person.prototype.getName = function(){￼             return this.name;￼         };￼ ￼         var objectFactory = function(){￼             var obj = new Object(),    // 从Object.prototype上克隆一个空的对象￼               Constructor = [].shift.call( arguments );    // 取得外部传入的构造器，此例是Person￼             obj.__proto__ = Constructor.prototype;    // 指向正确的原型￼             var ret = Constructor.apply( obj, arguments );    // 借用外部传入的构造器给obj设置属性￼ ￼             return typeof ret === 'object' ? ret : obj;     // 确保构造器总是会返回一个对象￼         };￼ ￼         var a = objectFactory( Person, 'sven' );￼ ￼         console.log( a.name );    // 输出：sven￼         console.log( a.getName() );     // 输出：sven￼         console.log( Object.getPrototypeOf( a ) === Person.prototype );      // 输出：true我们看到，分别调用下面两句代码产生了一样的结果：￼         var a = objectFactory( A, 'sven' );￼         var a = new A( 'sven' );  ^27337473-12-9467-10499
    - ⏱ 2021-08-04 08:53:10 
# 读书笔记

# 本书评论
