    QUESTION 1
List the symbols for each of the below Javascript operators

1. Arithmetic Operators
+	Addition	+
-	Subtraction	-
*	Multiplication	
/	Division


2. Assignment Operators
=	assignment
+=	add and assignment
-=	subtract and assignment
*=	multiply and assignment


3. Comparison Operators
> greater than
< less than
>= greater than equals to
<= less than equals to
=== strict equality
!== strictly inequality

4. Logical Operators
&& And
|| or 
! logical not


5. Bitwise Operators
|	OR	Sets each bit to 1 if one of two bits is 1
^	XOR	Sets each bit to 1 if only one of two bits is 1
~	NOT	Inverts all the bits
<<	Zero fill left shift

---------------------------------------------------------------------------------

QUESTION 2
For each JavaScript Operator, write 2 examples.

Arithemtic operation 

// example
1. function multiply (number1, number2) {
    return number1 * number2;
}
console.log(multiply(20, 5))
// Answer: 100

example
console.log(100/3)
// Answer: 33.3


-------------------------------------------------------------------------------------

2. Assignment operators

// example
let myName = 'mykel';
console.log(myName)
// Answer: mykel

let x = 10;
x += 5;
console.log(x)
// Answer: 15

---------------------------------------------------------------------------------------

3. Comparison operators

// example
 let track = 'backend';
 let program = 'frontend';
 console.log(track == program) 
 // Answer: false

console.log(5 >= 4)
// Answer: true

-----------------------------------------------------------------------------------------

 4. Logical Operators

example
 console.log(14 > 7 && 5 <= 5)
// Answer: true

example
const a = 3;
const b = -2;
console.log(!(a > 0 || b > 0));
// Answer: false    

-----------------------------------------------------------------------------------------

 5. Bitwise Operators
 // example 
 let x = 5 | 1;
 console.log(x)
 // Answer: 5

example
let x = -100;
x <<= 5;
console.log(x)
// Answer: -3200

------------------------------------------------------------------------------------------

Question 4

What is the result when the following program is executed?
for (let i = 1; i < 20; i += 7) {
    console.log(i)
 }

 Answer:
 1
 8
 15
