const myArr =[1,2,5,6,8,4]
const immutable_array =[...myArr,99]
//console.log(myArr)
//console.log(immutable_array)

// array filter method
const filterArr = myArr.filter((item,index)=> item !==1 && index !==2)
//console.log(filterArr)

//array map methid

const ArrMap = myArr.map((item)=> `can add anything in array`)
//console.log(ArrMap)

const conditional_apparMap = myArr.map((item)=> (item===8) ? 88 : item)
//console.log(conditional_apparMap)
// array concatination

  const concatArray = [...myArr,...conditional_apparMap]
//console.log(concatArray)

//filter and maping comboned
const EvenNumber_then_doubne = myArr.filter((item)=> item % 2 ===0).map((item)=> item*2).sort((a,b)=>a-b)
//console.log(EvenNumber_then_doubne);

// immutuable object
const originalObject = { name: 'John', age: 25 };
const immutuable = {...originalObject, city: 'Bangladesh'}
//console.log(immutuable)

// nested immutable object

const StudentInfo ={
    name:"jone",
    age: 35,
    address: {
        Country:'Bangladesh',
        city: 'Dhaka',
    }
}

const NewObject ={
    ...StudentInfo,
    address:{
        ...StudentInfo.address,
        city:'Rajshahi',
        district: 'Natore'
    }
}
console.log(NewObject)
