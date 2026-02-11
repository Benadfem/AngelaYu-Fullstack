// document.querySelector(".set").addEventListener("click", handleClick);

// function handleClick(){
//     alert("I just got clicked!");
// }

// using the concept of loop and anonimous function for the challenge 
// let's create a function using while loop
let i = 0;

let numberOfDrum = document.querySelectorAll(".drum").length;

// putting the while condition 
while (i <= numberOfDrum){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        alert("I just got clicked!");
    });
    i++;
}