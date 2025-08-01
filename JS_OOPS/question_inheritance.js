

class A {

    functionInsideA() { }
}
class B {

    functionInsideB() { }
}

const b = new B()

// Attach A.prototype to b’s prototype chain
b.__proto__.__proto__ = A.prototype;

b.functionInsideA()