const name = 'gyuhaeng';
const age = '5';
const gh = {name:'gyehaeng',age:5}  //오브젝트 리터널
// const gh = new Object()  //오브젝트 constructop

// 오브젝트는 {key:value 의 집합체}
// console.log(name,age);
print(gh)
function print(ob){
console.log(ob.name)
console.log(ob.age)
}
gh.hasjob = true
// 수동적인 객체 추가 방법
console.log(gh)

delete gh.hasjob
console.log(gh)

// 2.Computed properties
console.log(gh.name)
console.log(gh['name'])
gh['hasjob']=true
console.log(gh.hasjob)

function obvalue(ob,val){
    console.log(ob[val])
}
obvalue(gh,'name')
obvalue(gh,'age')

// 3. Property value shorthand
const person1 = {name:'bob' , age:2}
const person2 = {name:'bob' , age:3}
const person3 = {name:'bob' , age:4}
const person4 = makePerson('Gyehaeng',25)

console.log(person4)
function makePerson(name,age){
    return{
        name,
        age,
        // name:name,
        // age:age,
    };
}

// Constuctor function

// const person4 = new Person('Gyehaeng',25)
function Person(name,age){    
    // this={}  this란 이런형식
    // 자동으로 {}가 되어 안에 key value 로 등록이 된다
    this.name=name;
    this.age=age;
    return this;
}

// in operator check(key in obj)
console.log('name' in gh)   //true
console.log('age' in gh)    //true
console.log('random' in gh) //false

console.clear()

// for in   //키값을 가져옴
for (key in gh){
    console.log(key)
}
// for of   //value값을 가져옴
const array = [1,2,4,5]
for(value of array)console.log(value)


// cloning 가배열
const user = {name:'gyehaeng' , age:'20'};
const user2 = user
user2.name = 'coder'
// 이런식으로 user2 = user 을 한다음 user2 를 바꾸면 본 user도 바뀌게 된다 
console.log(user)
// 위 사항을 방지하기 위해 아래형식의 코드를 작성한다 

// 옛날버전 가배열 만드는방법
const user3 = {}
for(key in user){
    user3[key] = user[key]
}
console.log(user3)

// const user4 ={}
// Object.assign(user4,user)
// Object.assign(클론배열,복사할배열)

// 둘중에 하나 선택

const user4 = Object.assign({},user);
console.log(user4)

const fulte1 = {color:'red',ea:"21"};
const fulte2 = {color:'blue',size:'big'};
const mix = Object.assign({},fulte1,fulte2)
// 뒤로온 배열을 덮어쓰기 뒤에온것이 최신화
console.log(mix)