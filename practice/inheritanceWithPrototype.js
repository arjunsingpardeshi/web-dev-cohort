class A{
    insideA(){
        console.log(`inside A`);
    }
}
class B {
     constructor(){
     }
    insideB(){
        console.log(`inside B`);       
    }
}

//B.prototype.__proto__ = A.prototype //work
B.prototype.__proto__ = Object.create(A.prototype); //work

//Object.setPrototypeOf(B.prototype, A.prototype); //work
const obj = new B();
obj.insideA();
obj.insideB()