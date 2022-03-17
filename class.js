'use strict';
class Person{
     // constructor 객체 생성및 this 활용
    constructor(name,age){
        this.name = name
        this.age = age
    }
    methods(){
        console.log(`${this.name}hello`)
    }
}
let arr =  new Person('gyuheng',20)

console.log(arr.name)
console.log(arr.age)
arr.methods()

class user{
    // constructor 객체 생성및 this 활용
    constructor(name,lastname,age){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        //1. this.age를 찾자마자 바로 get으로 넘어간다
        //3. = age를 설정하는순간 set으로 넘어가게 된다 
    }
    get age(){
        return this._age
        //2. 가져온것을 그대로 set으로 넘겨야되서 바로 값을 그대로 return을 시킨다
        // 다만 이때 _ 기호를 붙이지 않는다면 무한 루프로 set ,get 을 계속 호출하게 되어서  를_ 붙여사용하게 된다
    }
    set age(value){
        // 4. 인자값은 = 이된 age를 인자값으로 사용하여 아래에서 조건을 걸어 오류를 잡아내고 자동으로 리턴이 된다
        this._age = (value<0)?0:value
    }
}
const user1 = new user("steve","job",0)
console.log(user1.age)

class Shape{
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        document.getElementById("body").innerHTML += `<div style='width:${this.width}px; height:${this.height}px; background-color:${this.color};' ></div>`
    }
    log(){
        console.log(`drawing ${this.color} color of`)
    }
    getArea(){
        return this.width*this.height
    }
}
// class Rectangle 를 만들어 Shape 의 기능들을 상속시켜준다
class Rectangle extends Shape{}
class Triangle extends Shape{
    // log(){
    //     // super.log()
    //이런경우에선 구지 super을 안써도된다 
    // 만약 사용한다면 부모의 log함수를 가져오는것이다
    // }
    getArea(){
        return (this.width*this.height)/2
    }
}

const rectangle= new Rectangle(20,20,'blue')
rectangle.log()
rectangle.draw()
console.log(rectangle.getArea())
const triangle = new Triangle(20,20,'yellow')
triangle.log()
triangle.draw()
console.log(triangle.getArea())