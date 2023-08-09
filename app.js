// Problem-no1
// let num1 = +prompt("Enter  Number");
// if(num1 % 3 == 0){
//     console.log("This Number is Divisible By 3");
// }else{
//     console.log("This Number is not diviseble by 3")
// };

// Problem-no2
// let num2 = +prompt("Enter The Number and chak even or odd");
// if(num2 % 2 == 0){
//     console.log("This number is even");
// }else{
//     console.log("This number is odd");
// }

// Problem-no3

// let num3 = +prompt("Enter your age");
// if(num3 >= 18){
//     console.log("Old Enough")
// }else{
//     console.log("Too Young")
// }

// Problem-no4

// let name1 = prompt("Enter Your Name");
// if(name1 === "Ahsan"){
//     // console.log("Wellcome To my Demo Page")
//     document.write("Wellcome");
// }else{
//     // console.log("Enter Correct Data");
//     document.write("Enter Correct Data");
// }

// Problem-no5

// let num4 = +prompt("Enter Your Number");
// switch(0){
//     case(num4 % 3):
//     console.log("This Number is Divisible By 3")
//     break
//     default:
//         console.log("This Number is Not Divisible By 3")
// }

// Problem-no6

// let num5 = +prompt("Enter a Number");
// let operator = prompt("Enter Operator");
// let num6 = +prompt("Enter a Number");

// if(operator === "+"){
//     let sum = num5 + num6
//     console.log(sum);
// }else if (operator === "-"){
//     let sub = num5 - num6
//     console.log(sub);
// }else if (operator === "*"){
//     let Multiply = num5 * num6
//     console.log(Multiply);
// }else if (operator === "/"){
//     let Divid = num5 / num6
//     console.log(Divid);
// }else if (operator === "%"){
//     let Modulus = num5 % num6
//     console.log(Modulus);
// }else{
//     console.log("please enter the correct values in prompt")
// }

let num5 = +prompt("Enter a Number");
let operator = prompt("Enter Operator");
let num6 = +prompt("Enter a Number");

switch (operator) {
    case ("+"):
        let sum = num5 + num6
        console.log(sum)
        break;

    case ("-"):
        let sub = num5 - num6
        console.log(sub)
        break;

        case ("*"):
        let Multiply = num5 * num6
        console.log(Multiply)
        break;

        case ("/"):
        let Divid = num5 / num6
        console.log(Divid)
        break;

        case ("%"):
        let Modulus = num5 % num6
        console.log(Modulus)
        break;
        default:{
            console.log("Please Enter The Correct input in data filed")
        }
}