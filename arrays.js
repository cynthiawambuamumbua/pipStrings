// Given an array of strings, use a function to reverse all the elements in the string
//  in ascending order and the specific elements in descending order
function reverseElements(array){
    let newString=""
    return reverseElements=array.reverse("").join("")
    

}
array=["fransisco","cynthia","jane","cdhy"]
console.log(reverseElements(array));

// Given an array of objects, each object representing a person 
// with a name and age property, write a function that
//  returns the sum of all people who are less than 18 years.
const people = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
  ];

function SumPeople(array){
 return array.filter(people=>people.age<18,
    people=>people.name)
}
console.log(SumPeople(people))
  
// Using JS functions and an array of numbers, return positive if an element 
// within the array is positive, negative if an element is negative, else zero
function arrayNumbers(array){

}

// Given an array of objects, where each object represents an employee
//  with an id, name, and salary property, write a function that 
// returns a new array of employee objects sorted by their salary in ascending order.
function Employees(array){
    let salary=a
    let employeeObject=b
    let Employees = array.slice().sort((a, b));
    return Employees;

}
const employees = [
    { id: 1, name: 'cynthia', salary: 100000 },
    { id: 2, name: 'Baby', salary: 4000 },
    { id: 3, name: 'judie', salary: 8975000 },
    { id: 4, name: 'weru', salary: 1000 },
  ];
//   const Employees = salary(employees);
  console.log(Employees(array));