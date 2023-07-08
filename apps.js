// Exercise 1:
 const destructureExample =(param_obj, param_array)=>{
        const {name,age} = param_obj
        const [index_zero, ,index2]= param_array
        const newVar = {name, age, index_zero, index2};
        return newVar
 }
 obj = { name: 'John', age: 30, city: 'New York' };
 arr = [10, 20, 30, 40];
 //console.log(destructureExample(obj,arr))

//Exercise 2:
const sumNumbers = (...numbers)=> numbers.reduce((a,b)=>a+b,0)
//console.log(sumNumbers(1, 2, 3, 4, 5));

//Exercise 3:
const createGreeting = (name)=> `Hello, ${name}! Welcome to our website.`
//console.log(createGreeting('Alice'))

//Exercise 4:
const isEven = (number) => (number % 2==0)?`Number: ${number} is even number` : `Number: ${number} is odd number`
//console.log(isEven(99));

//Exercise 5:
const multiply = (a, b) =>  a * b
//console.log(multiply(10,10))

//Exercise 6:
const getLargestNumber = (number1, number2)=> (number1 > number2) ? number1 : number2
//console.log(getLargestNumber(100,99))

//Exercise 7:
const getAddressCity = (args) => args.city ? args : 'unknown'
const address = { street: '123 Main St', country: 'USA' };
//console.log(getAddressCity(address))

//Exercise 8:
const doubleNumbers =(args)=> args.map((item)=> item*2 )
//console.log(doubleNumbers([1, 2, 3, 4, 5]))

//Exercise 9:

const filterEvenNumbers = (args) => args.filter((item)=> item % 2 === 0 )
//console.log(filterEvenNumbers([1, 2, 3, 4, 5]))

//Exercise 10:
const sumArray = (numbers) => numbers.reduce((a,b)=>a+b,0)
//console.log(sumArray([1, 2, 3, 4, 5]))

//Exercise 11:
const sortNumbers = (numbers) => numbers.sort((a,b)=>a-b)
console.log(sortNumbers([5, 2, 8, 1, 4]))