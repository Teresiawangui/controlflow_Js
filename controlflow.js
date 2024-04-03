//Write a program that takes in an array of numbers and consoles the first four items multiplied by itself
//and the last two added by 10. Return the array with the new values

function manipulateArray(arr){
    for(let i = 0; i <4; i++){
arr[i] = arr[i]*arr[i];
    }
    for (let i = arr.length-2; i< arr.length; i++){
        arr[i] = arr[i] + 10;
    }
    return arr;
}
let arr = [1,2,3,4,5,6,7,8,9,];
let manipulatedArray = manipulateArray(arr);
console.log(manipulatedArray);

//Write a program that takes in the following array and use a while loop to iterate and break when the item
 //is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
let arrNum = [1,2,3,4,5,6,7,8,9];
let i = 0;
while(i < arrNum.length){
    if(i ===4){
        break;
    }
    console.log(arrNum[i]);
    i++;
}
//Write a function that takes in a an array of strings and use a continue statement when the item is at the
//second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
function continueFruits(arr){
    for(let i =0; i < arr.length; i++){
        if(i ===2){
            continue;
        }
        console.log(arr[i]);
    }
}

let fruits = ['apple','plum','banana','strawberries','kiwi']
continueFruits(fruits);

//Write a function that accepts an array of strings and console.logs each element using a for loop.
function acceptArray(arr){
    for(let i=0; i <arr.length; i++){
        console.log(arr[i]);
    }
}
let arrStrings = ['Water','juice','wine','champaign'];
acceptArray(arrStrings);

//Write a JavaScript function that takes a string as input and reverses it using a while loop.
// The function should return the reversed string. 
function reverseString(string){
    let reversed = '';
    let i = string.length -1;

    while (i>=0){
        reversed += string[i];
        i--;
    }
    return reversed;
}
console.log(reverseString('I love coding'));
