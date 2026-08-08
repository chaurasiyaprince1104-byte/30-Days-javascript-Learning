// console.log("hey this is contional function")
// let age = 0;
//  let update = 8;
//  update += age;
//  console.log(update)
//  console.log(age + update)
// if (age == 18){
//     console.log("you are eligible to drive");
// }
// else if (age == 0){
//     console.log("are you kidding::");
// }
// else{
//     console.log("you are not eligible");
// }
// let age = Number(prompt("Enter your age:"));

// if (age >= 10 && age <= 20) {
//     console.log("Your age lies between 10 and 20.");
// } else {
//     console.log("Your age does not lie between 10 and 20.");
// }
// let num = number(prompt("enter a number::"));
// if(num % 2 == 0 || num % 3 == 0){
//     console.log("number are divisional by 2 and 3");
// }
// else{
//  //console.log("otherwise other number");
// }

let num = Number(prompt("Enter a number:"));

if (num % 2 === 0 || num % 3 === 0) {
    console.log("The number is divisible by either 2 or 3.");
} else {
    console.log("The number is not divisible by 2 or 3.");
}

let day = Number(prompt("Enter a number (1-7):"));

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day number");
}
