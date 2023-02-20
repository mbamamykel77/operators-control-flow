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

console.log(5*3)
// Answer: 15

// example
console.log(40 + 10;
// Answer: 400

console.log(3+6)
// Answer: 11

// example
console.log(10-6)
// Answer: 4

console.log(15-7)
// Answer: 8

// example
console.log(20/2)
// Answer: 10

console.log(100/3)
// Answer: 33.3


-------------------------------------------------------------------------------------

2. Assignment operators

// example
let myName = 'mykel';
console.log(myName)

// Answer: mykel

let car = 'toyota';
console.log(car)
// Answer: toyota

let x = 10;
x += 5;
console.log(x)
// Answer: 15

let text = "Hello"; 
text += " World";
console.log(text)
// Answer: Hello World

// example 
let x = 10;
x -= 5;
console.log(x)
// Answer: 5

let y = 20
y -= 10;
console.log(10)

let multiply = 10;
multiply *= 5;
console.log(add)
// Answer: 50

let multiply2 = 20
multiply2 *= 2;
console.log(multiply2)
// Answe: 40

---------------------------------------------------------------------------------------

3. Comparison operators

// exmaple 
let myName = 'mykel';
 (myName === 'mykel') ? console.log('true') : console.log('false')
 // Answer: true

// example
 let track = 'backend';
 let program = 'frontend';
 console.log(track == program) 
 // Answer: false

example
 console.log(5 > 3)
 // Answer: false

 console.log(50 > 40)
// Answer: true

example
consoe.log(4 < 6)
// Answer: true

console.log (10 < 7)
Answer: false

example
console.log(10 >= 20)
// Answer: false

console.log(5 >= 4)
// Answer: true

example
console.log(15 <= 10)
// Answer: false

console.log(20 <= 30)
// Answer: true

example
console.log(2 === '2')
// Answer: false

console.log('five' === 5)
// Answer: false
-----------------------------------------------------------------------------------------

 4. Logical Operators
! logical not
 
 // example
 console.log(15 > 36 || 10 < 7)
 // Answer: false

 console.log(10 < 5 || 20 > 6)
 // Answer: true
    
example
console.log("hello " && "world")
// Answer: world

 console.log(14 > 7 && 5 <= 5)
// Answer: true

example
const a = 3;
const b = -2;
console.log(!(a > 0 || b > 0));
// Answer: false    

console.log(!"Cat")
// Answer: false
-----------------------------------------------------------------------------------------

 5. Bitwise Operators
 // example 
 let x = 5 | 1;
 console.log(x)
 // Answer: 5

let x = 10;
x |= 5;
console.log(x)
// Answer: 101

 // example 
 let n = ~5;
 console.log(n)
// Answer: -6

let d = ~15
console.log(d)
// Answer: -16

exmaple
let do = 10;
do ^= 5;
console.log(do)
// Answer: 97

let skill = 20
skill ^=10;
console.log(skill)
// Answer: 30

example
let x = -100;
x <<= 5;
console.log(x)
// Answer: -3200

let x = 50;
x <<= 12;
console.log(x)
// Answer: 204800   


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
