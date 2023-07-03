// 访问者
class Visitor {
  constructor() {}
  visitConcreteElement(ConcreteElement) {
    ConcreteElement.operation()
  }
}
// 元素类
class ConcreteElement{
  constructor() {
  }
  operation() {
    console.log("ConcreteElement.operation invoked");
  }
  accept(visitor) {
    visitor.visitConcreteElement(this)
  }
}
// client
let visitor = new Visitor()
let element = new ConcreteElement()
element.accept(visitor)

/**
 * 场景例子
     对象结构中对象对应的类很少改变，但经常需要在此对象结构上定义新的操作
     需要对一个对象结构中的对象进行很多不同的并且不相关的操作，而需要避免让这些操作"污染"这些对象的类，也不希望在增加新操作时修改这些类。
 * */

/**
 * 优点
     符合单一职责原则
     优秀的扩展性
     灵活性
 * */

/**
 *缺点
   具体元素对访问者公布细节，违反了迪米特原则
   违反了依赖倒置原则，依赖了具体类，没有依赖抽象。
   具体元素变更比较困难
 * */
