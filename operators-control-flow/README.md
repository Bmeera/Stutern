Question 1

List the symbols for each of the below Javascript operators

1. Arithmetic Operators
   Addition: +
   Subtraction: -
   Multiplication: \*
   Division: /
   Modulo: %

2. Assignment Operators
   Assignment: =
   Addition Assignment: +=
   Subtraction Assignment: -=
   Multiplication Assignment: \*=
   Division Assignment: /=
   Modulo Assignment: %=

3. Comparison Operators
   Equal to: ==
   Strict equal to: ===
   Not equal to: !=
   Strict not equal to: !==
   Greater than: >
   Greater than or equal to: >=
   Less than: <
   Less than or equal to: <=

4. Logical Operators
   AND: &&
   OR: ||
   NOT: !

5)Bitwise Operators
Bitwise AND: &
Bitwise OR: |
Bitwise XOR: ^
Bitwise NOT: ~
Left shift: <<
Right shift: >>
Zero-fill right shift: >>>

Question 2
For each JavaScript Operator, write 2 examples.

1. Arithmetic Operator
   Ex. 1)
   let x = 20;
   let y = 23;
   let sum = x + y
   console.log(sum);
   //Answer is 43

Ex. 2
let x = 20;
let y = 2;
let mod = x % y;
console.log(mod); //Answer is 0
}

2. Assigment Operator
   Ex. 1)
   let x = 20;

Ex. 2
let y = 5;
y \*= 2;
console.log(y); //Answer is 10
}

3. Comparison Operators
   Ex.1)

let a = 30;
let b = 6;
console.log(a > b); //Answer is true

Ex.2)

let a = 15;
let b = 15;
console.log(a >= b); //Answer is true

4. Logical Operators
   Ex. 1)

let a = 5<10
let b = 9>3
console.log(a && b); //Answer is true

Ex. 2)
let a = 12<10
let b = 9<7
console.log(a || b); //Answer is false

5. Bitwise Operators
   Ex. 1) &

let a = 3; // 0111
let b = 2; // 0010
let bitand = 3 & 2; //0010 in binary or 2 in decimal
console.log(bitand); //2

Ex. 1) |

let a = 4; // 0100 in binary
let b = 8; // 1000 in binary
let bitor = 4 | 8; //1100 in binary or 12 in decimal
console.log(bitor); //12

Question 4

What is the result when the following program is executed?

for (let i = 1; i < 20; i += 7){
console.log(i);
}
Answer:
1
8
15
