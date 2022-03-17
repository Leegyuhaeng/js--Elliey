function append(value, array = []) {
    array.push(value)
    return array
  }
  
  console.log( append(1))  // [1]
  console.log(append(2))  // [2], [1, 2]가 아니라
 

  function multiply(a, b = 1) {
    return a*b
  }
  
  console.log(multiply(5, 2))           // 10
 console.log( multiply(5))             // 5
  console.log(multiply(5, undefined))   // 5

 let a =  function (a,b){
      return a+b      
  }
 
  
//  console.log(a(3,5))
let b =   function (a=1,b,c=2){
      return a*b*c
  }
  (a(7,5),12)
  console.log(b)

// 함수 선언문으로는 하기 힘들다
  abc("출력")//함수에 표현식으로 이름을 붙이게 되면 즉시실행이 위에있어도 출력이된다
  function abc(text){
      console.log(text)
  }


  function random (a,b,c){
      (a==="frontend")?b():c()

  }


let clear = ()=>{
  return  console.log("정답")

}

let error = ()=>{
  return  console.log("오답")

}
  document.querySelector("#button").addEventListener("click",function(){
      let text = document.querySelector("#text").value
      random(text,clear,error)
  })

function calcuate(a,b=1,c=1){
    // let number
    switch(a){
        case "add":
        return b+c
        case "add2":
        return b-c
        case "add3":
        return  b*c
        case "add4":
        return  Math.ceil(b/c)
    }
    // return Math.ceils(number)
}

console.log(calcuate("add4",7,3))
