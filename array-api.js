
// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];

    let text = fruits.join('|')
    console.log(text)
    // 배열을 전부출력 그사이의 들어갈 단어를 선택할수있음
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    let fruits2 = fruits.split(',',2)
    console.log(fruits2)
    // split 문자열을 정해진 기호나 패턴으로 배열화시킬수있다 뒤에 숫자를 입력하면 몇개까지 출력가능할지 선택할수있다
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    array.reverse()
    console.log(array)
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    // let array2 = []
    // array.forEach((element,index)=>{
    //     (element>2)&&array2.push(element)
        
    // })
    // console.log(array2)
    
    // let array2 = array.splice(0,2)
    // console.log(array)//splice 로 삭제된값
    // console.log(array2)// 삭제된것을 반환된값 자동return 됨


    // slice
    let array2 = array.slice(2,5)
    console.log(array)//본배열을 건들지 않고 내가원하는 부분만 리턴해서 받아옴
    console.log(array2)// 내가 담고싶어하는것들 2번째부터 마지막+1 까지
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
      // find 내가 원하는 첫번째값을 찾는 즉시 리턴을 시킨다 안에 함수가 있어야한다 (element,index)
    const result = students.find((item)=>{
       return  item.score>=90
    //    한줄일때는 {}이것을 빼고 자동리턴이 된다
        })
        console.log(result)
    }
  
  // Q6. make an array of enrolled students
  {
    //   let a =new Array();
    //   const result = students.forEach((element)=>{
    //     element.enrolled==false&&a.push(element)
    //   })
    //   console.log(a)

    // filter 조건을 걸고 조건에 맞으면 조건에 맞는 요소를 모두 모아 리턴을 받는다
    let result = students.filter(element=>{
      return  element.enrolled==true

    })
    console.log(result)
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    //   map  각각에 대하여 주어진 배열에 값들을 변경하여 내가 원하는것만 리턴할수있다
      let result = students.map(element=>{
          return element.score
      })
      console.log(result)
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    //   let result = students.filter(element=>{
    //     return  (element.score>50)&& element
    //   })
    //   console.log(result)

    // some 하나라도 있으면 true를 리턴
    // every 모두를 만족해야 true를 리턴
    let result = students.some(element=>{
        return element.score<50
    })
    console.log(result)

  }
  
  // Q9. compute students' average score
  {
    //   let a = 0
    //   students.forEach(element => {
    //       console.log(element.score)
    //       a+=element.score
    //       console.log(a/5)
    //   });


    // reduce 의 인자값은 a=이전값 b=다음값
    // ({},0)으로 처음값을 0으로 설정을 한후 b를 계속 더한것이다
      let result=  students.reduce((a,b)=>{
        return a+b.score
      },0)
      console.log(result/5)
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    let result =   students.map(element=>{
         return element.score
      }).filter(element=>{
          return element>=50
      }).join(',')
      console.log(result)
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
      let result = students.map(element=>element.score).sort((a,b)=>{
              return a-b
      }).join()
      console.log(result)
      

  }
//   array-api.js
//   array-api.js 표시 중입니다.