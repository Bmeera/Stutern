/*Q. 1
What are the differences between mutating array methods and non-mutation array methods in JavaScript. 
List 5 array methods that fall under each of them.

Mutating Array methods are also called destructive array methods. They mutate or change the original array. Whereas Non-mutating array methods do not change or mutate the original array, rather, they create a new array containing the change that has been implemented.

Mutating (Destructive) Array Methods:

push(): Adds one or more elements to the end of an array and returns the new length of the array.
pop(): Removes the last element from an array and returns that element.
splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
sort(): Sorts the elements of an array in place, modifying the array.
reverse(): Reverses the order of the elements in an array in place.
Non-Mutating (Non-Destructive) Array Methods:

concat(): Combines two or more arrays and returns a new array without modifying the original arrays.
slice(): Returns a shallow copy of a portion of an array into a new array, without modifying the original array.
map(): Creates a new array with the results of calling a provided function on every element in the original array.
filter(): Creates a new array with all elements that pass a provided test implemented by a function.
join(): Joins all elements of an array into a string, optionally separated by a specified separator, without modifying the original array.

*/


/*
Q. 2. Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 

a) Add ‘Kotlin’ to the end of the array

*/
const arrayOfPLs = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
arrayOfPLs.push("Kotlin");
console.log(arrayOfPLs);

// b) Add ‘Java’ after ‘Ruby’
arrayOfPLs.splice(3,0, "Java");
console.log(arrayOfPLs);

// c) Remove the first item in the array
arrayOfPLs.shift();
console.log(arrayOfPLs);

// d) Add ’Scala’ and ‘Swift’ to the beginning of the array
arrayOfPLs.unshift("Scala", "Swift");
console.log(arrayOfPLs);

// e) Replace ‘PHP’ with ‘Go’ and ‘Rust’
arrayOfPLs.splice(5,1, "Go", "Rust");
console.log(arrayOfPLs);

/*
Q. 3. 

What will be the value of fruit after calling the function changeFruit?


let fruit = ["apple", "mango", "banana"];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}

*/

//Answer: The value of fruit will be ["apple", "mango", "orange" ]


/*Q. 4 
Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
e.g., max([4, 5, 10, -2]) // maximum value is 10
*/


function maxValueOfArray(array){
    if(array.length === 0) {
    //Return an appropriate value when the array is empty
    return null;
    }

    return Math.max(...array)
}

const arrOfNumbers = [0, -5, 8, 9, 98,5, 8, 21]
let max = maxValueOfArray(arrOfNumbers);
console.log("The Maximum value in the array is " + max);

/*
Q. 5.  
Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
e.g.,
 valTimesIndex([1,2,3]) // [0,2,6]
		valTimesIndex([5,10,15]) // [0,10,30]
*/

function valTimesIndex(arrayofNumbers){
        const result = [];

        for (let i = 0; i< arrayofNumbers.length; i++){
            result.push(i * arrayofNumbers[i]);
            //where element in the array is arrayofNumbers[i] and i is the index
        }
        return result;

}

const arrayofNos = [1, 2, 3, 4, 5, 6];
const valTimesIndexArray = valTimesIndex(arrayofNos);
console.log("Original array is " + arrayofNos + "\nNew array using valTimesIndex() is " + valTimesIndexArray);
s