function addNums(num1, num2){
    return num1+num2;

}

console.log(addNums(5,4));

//Arrow function

// const addNums1 = (num1, num2)  => {
//     return num1+num2;
// }

//much better way to do it
const addNums1 = num1  => num1+5;

console.log(addNums1(5));

//