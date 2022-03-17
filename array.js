'use strict'
// Array

// 배열 만드는 방법
const arr1 = new Array();
const arr2 = [1,2];

const fruits=['사과','바나나']
// console.log(fruits[0])
for(let key of fruits){
    // console.log(key)
}
for(let key2 in fruits){
    // console.log(fruits[key2])
}
fruits.forEach((element,index)=>{
    console.log(element)

})
// 배열 기능 추가 삭제 등등
fruits.push('딸기','복숭아')
// push 배열을 맨뒤로 추가
console.log(fruits)

fruits.pop()
// pop 배열의 맨뒤를 삭제
console.log(fruits)

fruits.unshift('레몬','수박');
//push 맨앞 배열값 추가
console.log(fruits)

fruits.shift()
// 맨앞 데이터 삭제
console.log(fruits)


fruits.push('용과','파인애플','망고')
console.log(fruits)

// fruits.splice(시작지점,몇개를 삭제할건지)
// fruits.splice(2)
// 하나만 입력하게되면 그 인덱스부터 끝까지 지워진다

fruits.splice(3,1,'포도','산딸기')
// 이런식으로 값을 입력하게되면 몇개를 삭제하고 그위치에 새로운 값을 추가할수있다
console.log(fruits)

const fruits2 = ['배','오렌지','코코넛']
const mixfruits = fruits.concat(fruits2)
// concat 자동으로 리턴이 되기때문에 값을 받을 변수를 만들어줘야한다
console.log(mixfruits)

console.clear()
console.log(mixfruits.indexOf('용과'))
console.log(mixfruits.includes('용과'))
// index of 해당 값의 value 를 찾아 index위치를 알려줌 없으면 -1이 뜸  
// 배열값이 중복일경우 가장 앞에 있는 값의 위치를 알려준다

// includes 해당결과를 true false로 리턴을 함