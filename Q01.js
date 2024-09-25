// Conditional - Statement that help us to execute a piece of logic based on a particular condition.
// and conditions work on boolean values, true or false.if it is true if it meets the requirement, 
// false otherwise.expressions evaluated to be true or false.

//  Types of conditional statements
// 1. if statements -> Used to specify a block of code to be executed, if a specified condition is true.
// Ex - adding two no.
let a = 5;
let b = 4;
let result;
if(a != 0 && b != 0){
    result = a + b;
    console.log(result)
}


// 2. Else statement -> used to specify a block of code to be executed, if the same condition is false. 
// Ex - program that determines whether a given number is positive or negative.
let c = 48;
if(c > 0){
    console.log("positive");
} else {
    console.log("negative");
}


// 3. Else if statement -> used to specify a new condition to test, if the first condition is false
// Ex - calculate the Body Mass Index (BMI) and categorizes it. 
// The formula for BMI is: weight / (height * height).

let weight = 75;
let height = 5.6;

if(height === 0 && weight === 0){
    console.log("Enter Weight and Height first")
}else {
    console.log("According to given details -->")
}
let BMI = ((weight) / ((height * 0.3048) ** 2));
let category;
if(BMI < 18.5){
    category = "Under Weight";
} else if(BMI < 24.9){
    category = "Normal Weight";
} else if(BMI < 29.9){
    category = "Over weight";
} else if (BMI >= 29.9 >= 50) {
    category = "obese";
}else {
    category = "Expired";
}
console.log("BMI: "+ BMI)
console.log("Category: "+ category)

// 4. Nested if statement -> We can nest if else statements inside another if else statements.