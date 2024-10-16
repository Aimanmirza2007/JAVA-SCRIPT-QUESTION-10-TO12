// //-------------------------------------- IF ELSE STATE MENT QUESTION--------------------------------------//

// //---------------------------------------QUESTION NO 6--------------------------------------------------//

let userInput = prompt("Enter your number");

if (userInput % 2 === 0) {

    alert("your number is even")
}
else {

    alert("your number is odd")
}


// //---------------------------------------QUESTION NO 6--------------------------------------------------//

// //---------------------------------------QUESTION NO 7--------------------------------------------------//

let score = prompt("Enter your percentage")
if (score >= 85) {

    alert("Your grade is A")
}
else if (score >= 70) {

    alert("Your grade is B")
}
else if (score >= 60) {

    alert("Your grade is C")
}
else if (score >= 45) {

    alert("Your grade is D")
}
else {
    alert("Your grade is F")
}

// //---------------------------------------QUESTION NO 8--------------------------------------------------//

// //---------------------------------------QUESTION NO 8--------------------------------------------------//
const askLeap = prompt("Enter a year")

if (askLeap % 4 == 0) {

    console.log(`${askLeap} is a leap year`)
}
else if (askLeap % 400 == 0) {

    console.log(`${askLeap} is a leap year`)
}
else {

    console.log(`${askLeap} is not a leap year`);

}

// //---------------------------------------QUESTION NO 8--------------------------------------------------//

// //---------------------------------------QUESTION NO 9--------------------------------------------------//

let num1 = prompt("Enter the first number:");

let num2 = prompt("Enter the second number:");

let num3 = prompt("Enter the third number:");

if (num1 >= num2 && num1 >= num3) {

    console.log("The largest number is: " + num1);

}
else if (num2 >= num1 && num2 >= num3) {

    console.log("The largest number is: " + num2);

}
else {

    console.log("The largest number is: " + num3);
}
// //---------------------------------------QUESTION NO 9--------------------------------------------------//

// //---------------------------------------QUESTION NO 10--------------------------------------------------//

let orignalPrice = prompt("Enter the orignal price of an item $")

if (orignalPrice < 50) {

    discount = 0

    alert("No discount applied")
}
else if (orignalPrice >= 50) {

    discount = 0.10
}
else if (orignalPrice > 100) {

    discount = 0.20
}
let finalPrice = orignalPrice - discount

alert("The final price after discount is " + finalPrice)


// //---------------------------------------QUESTION NO 10--------------------------------------------------//

// //---------------------------------------CHAPTER 10. FUNCTIO-------------------------------------------------//
// //---------------------------------------QUESTION NO 01--------------------------------------------------//

function sum(num1, num2) {

    return num1 + num2
}
console.log("the sum of 10 + 18 = " + sum(10, 18))

// //---------------------------------------QUESTION NO 01--------------------------------------------------//

// //---------------------------------------QUESTION NO 02--------------------------------------------------//
let temprature = prompt("What is the temperature of the weather today?")

function convertion() {

    let F = temprature * 9 / 5 + 32

    console.log(F)

}

convertion()

// //---------------------------------------QUESTION NO 02--------------------------------------------------//
// //---------------------------------------QUESTION NO 03--------------------------------------------------//
let Number = prompt("Enter a number")


function PrimeNuber() {

    for (let i = 2; i < Number; i++) {

        if (Number % i === 0) {
            var res = (`${Number} is not a prime number`)
            break;
        }

        else {
            var res = (`${Number} is  a prime number`)
        }
        console.log(res)
    }
}
PrimeNuber()

//---------------------------------------QUESTION NO 03--------------------------------------------------//

//---------------------------------------QUESTION NO 04--------------------------------------------------//
function reverseString(str) {

    const strRev = str.split('').reverse().join('');

    console.log(strRev);
}
reverseString("Hello World");

reverseString("Welcome");

reverseString("Javascript");

//---------------------------------------QUESTION NO 04--------------------------------------------------//

//---------------------------------------QUESTION NO 05--------------------------------------------------//




function facto (numb) {

    n = prompt("Enter a numbar :")

    if (numb < 0) {

        return "Factorial is not defined for negative numbers.";

    }
    else if (numb === 0 || n === 1) {

        return 1;
    }
    else {

        let result = 1;

        for (let i = 2; i <= n; i++) {

            result = result * i;
        }

        return result;
    }
}


let fact = facto();

console.log(`the factorial of a number is ${fact}`)

//---------------------------------------QUESTION NO 05--------------------------------------------------//

//---------------------------------------QUESTION NO 06--------------------------------------------------//
function print() {

    return "Hello Welcome!"
}

let greet = print()

console.log(greet)

// //---------------------------------------QUESTION NO 06--------------------------------------------------/
// //---------------------------------------QUESTION NO 07--------------------------------------------------/
function name(Name) {

    return Name = prompt("What is your name")

}
let final = name()

console.log(`Hello ${final}`)


// //---------------------------------------QUESTION NO 07--------------------------------------------------/

// //---------------------------------------QUESTION NO 08--------------------------------------------------/
function sum(number1, number2) {

    return number1 + number2
}
let add = sum(20, 35)

console.log("the sum of 20 + 35 = " + add)
// //---------------------------------------QUESTION NO 08--------------------------------------------------/
// //---------------------------------------QUESTION NO 9--------------------------------------------------/
function random() {

    return 14
}
let randonNumber = random()
console.log(randonNumber)
// //---------------------------------------QUESTION NO 9--------------------------------------------------/
// //---------------------------------------QUESTION NO 10--------------------------------------------------//
function age(personAge) {

    personAge = prompt("How old are You")

    if (personAge >= 18) {

        return true
    }
    else {

        return false
    }
}
let checkAge = age()

console.log(checkAge)
// //---------------------------------------QUESTION NO 10--------------------------------------------------


// //---------------------------------------CHAPTER 10. FUNCTION-------------------------------------------------//

// //---------------------------------------CHAPTER 11.ARROW FUNCTION-------------------------------------------------//

// //--------------------------------------QUESTION NUMBER 01--------------------------------------------------------//
let userNumber = prompt("Enter a number")

const square = () => {

    return userNumber * userNumber
}
let ans = square()

console.log(ans)

// //--------------------------------------QUESTION NUMBER 01--------------------------------------------------------//

// //--------------------------------------QUESTION NUMBER 02--------------------------------------------------------//

let evenFunc = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    let result = arr.filter(num => num % 2 === 0)

    return result
}

let newArray = evenFunc()

console.log(newArray)
// //--------------------------------------QUESTION NUMBER 02--------------------------------------------------------//

// //--------------------------------------QUESTION NUMBER 03--------------------------------------------------------//

let str = (a, b) => {
    return a + b
}
console.log(str("Hello", "World"))

// //--------------------------------------QUESTION NUMBER 03--------------------------------------------------------//


// //--------------------------------------QUESTION NUMBER 04--------------------------------------------------------//

let maxNumber = [1, 2, 3, 4, 5, 6, 8]

let checkMax =maxNumber.reduce (prev,curr) => {

    return prev > cuur ? prev : curr;
}
console.log("the maximum number in array is " + checkMax);

// //--------------------------------------QUESTION NUMBER 04--------------------------------------------------------//

// //--------------------------------------QUESTION NUMBER 05--------------------------------------------------------//

let marks = [2, 5, 7, 3, 1, 4]
let sumNum = 0

marks.forEach(element => {

    sumNum = sumNum + element

});
console.log(sumNum)

// //--------------------------------------QUESTION NUMBER 05--------------------------------------------------------//

// //--------------------------------------QUESTION NUMBER 06--------------------------------------------------------//

let greeting = () => {
    console.log("Hello World")
}
greeting()

// //--------------------------------------QUESTION NUMBER 06--------------------------------------------------------//

// //--------------------------------------QUESTION NUMBER 07--------------------------------------------------------//

let multiply = (num) => {

    return num * num;
}

let result = multiply(15);
console.log(result);


// //--------------------------------------QUESTION NUMBER 07--------------------------------------------------------//

// //--------------------------------------QUESTION NUMBER 08--------------------------------------------------------//
let checkNumber = (num) => {

    if (num >= 1) {

        return true
    }
    else {

        return false
    }
}
let checkAns = checkNumber()

console.log(checkNumber(65))

// //--------------------------------------QUESTION NUMBER 08--------------------------------------------------------//

// //--------------------------------------QUESTION NUMBER 09--------------------------------------------------------//
let randonmNumber = () => {

    return 45
}

let rendomAns = randonmNumber()

console.log(rendomAns);



// //--------------------------------------QUESTION NUMBER 09--------------------------------------------------------//

// //--------------------------------------QUESTION NUMBER 10--------------------------------------------------------//

let minutes = (min) => {

    return min * 60
}

console.log(minutes(4))



// //--------------------------------------QUESTION NUMBER 10--------------------------------------------------------//

// //---------------------------------------CHAPTER 11 ARROW FUNCTION-------------------------------------------------//

// //---------------------------------------CHAPTER 12 .Annoynumus Function-------------------------------------------------//

// //--------------------------------------QUESTION NUMBER 01--------------------------------------------------------//
let word = function () {

    console.log("Hello");

};

word()


// //--------------------------------------QUESTION NUMBER 01--------------------------------------------------------//

// //--------------------------------------QUESTION NUMBER 02--------------------------------------------------------//
let twoNum = function (a, b) {

    return a + b
};

let twoSum = twoNum(5, 7)

console.log(twoSum);

// //--------------------------------------QUESTION NUMBER 02--------------------------------------------------------//

// //--------------------------------------QUESTION NUMBER 03--------------------------------------------------------//

let assendingNum = [2, 8, 4, 6, 1, 5, , 9, 3]

assendingNum.sort(function (a, b) {

    return a - b
})

console.log(assendingNum)

// //--------------------------------------QUESTION NUMBER 03--------------------------------------------------------//

// //--------------------------------------QUESTION NUMBER 04--------------------------------------------------------//

let userNa = function (name) {

    console.log(`Hello ${name}`)
}

userNa("Aiman mirza")

// //--------------------------------------QUESTION NUMBER 04--------------------------------------------------------//

// //--------------------------------------QUESTION NUMBER 05--------------------------------------------------------//

let isEven = function (check) {

    if (check % 2 === 0) {

        console.log(`Number is Even ${check}`);

    }
    else {

        console.log(`Number is odd ${check}`);
    }
}

isEven(5)

// //--------------------------------------QUESTION NUMBER 05--------------------------------------------------------//

// //--------------------------------------QUESTION NUMBER 06--------------------------------------------------------//

let odd = [1, 2, 3, 6, 8, 9, 5, 7, 16, 4]

let newOdd = odd.filter((val) => {

    return val % 2 !== 0
});

console.log(newOdd)

// //--------------------------------------QUESTION NUMBER 06--------------------------------------------------------//
// //--------------------------------------QUESTION NUMBER 07--------------------------------------------------------//

const factorial = function (n) {

    if (n < 0) return undefined;

    if (n === 0 || n === 1) return 1;

    return n * factorial(n - 1);

};

console.log(factorial(5));

console.log(factorial(0));

console.log(factorial(3));

console.log(factorial(7));

console.log(factorial(-1));

// //--------------------------------------QUESTION NUMBER 07--------------------------------------------------------//

// //--------------------------------------QUESTION NUMBER 09--------------------------------------------------------//

let sumAll = [1, 2, 3, 4, 5, 6, 7]

let output = sumAll.reduce((prev, curr) => {

    return prev + curr
});

console.log(`the sum of all number in arrray is = ${output}`)
// //--------------------------------------QUESTION NUMBER 09--------------------------------------------------------//

// //--------------------------------------QUESTION NUMBER 10--------------------------------------------------------//

let vote = function (eligiblity) {

    if (eligiblity >= 18) {

        console.log(`your age is ${eligiblity} you can vote`);

    }
    else {

        console.log(`your age is ${eligiblity} you can  not vote`);
    }
}
vote(20)

vote(16)

vote(15)


// //--------------------------------------QUESTION NUMBER 10--------------------------------------------------------//
// //---------------------------------------CHAPTER 12 .Annoynumus Function-------------------------------------------------//

