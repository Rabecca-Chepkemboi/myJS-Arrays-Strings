
const name1 = "Jane";
const name2 = "Clarah";
const result = `the winners are ${name1} and ${name2}`;
console.log (result);


// 2. Write a function that takes an array of numbers as input and 
//returns the product of all the numbers in the array.

let nums = [4, 6, 5, 3, 7, 9];
const ans = nums.map(                   //use.map to create a new array
(number)=>{
    return number * 2
}
)
console.log(ans);


// 3. Write a function that takes a string as input and returns a new 
//string with the first letter of each word capitalized.

    let arry = "this is my first and huge experience"
    arry = arry.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
console.log(arry);                     //.chatAt to change the elements at endex 0 to be capitalised and .substring to extract a part of a given string
 

// 4. Write a function that takes two arrays of numbers as input and returns
// a new array with the elements that are unique to each array.

const arry1 = ["cheap", "buy", "cheap", "sell", "buy", "you"];
const unique = arry1 =>{
    const les = [];                                      //create an empty variable to store the unique array
    for(let i = 0; i < arry1.length; i++){               //check the length of the array and add it to the empty variable  
        if(arry1.lastIndexOf(arry1[i]) !== arry1.indexOf(arry1[i])){
           continue;
        };
    les.push(arry1[i]);                                 //.push to add a specified element at the end of an array
 };
 return les;
};
console.log(unique(arry1));


                            //  TAKEAWAY KEYS
// 1. Strings are immutable therefore, once created they cannot be changed.

// 2. You can access individual elements in an array using the bracket notation or the chatat() inbuilt function. 
                            
// 3. Arrays are mutable and therefore you can change there values by accessing and modifying individual elements.
                                          

