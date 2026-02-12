// document.querySelector(".set").addEventListener("click", handleClick);

// function handleClick(){
//     alert("I just got clicked!");
// }

// using the concept of loop and anonimous function for the challenge 
// let's create a function using while loop

// this takes the click button listener
let i = 0;

// the the DOM for the drum be given a variable 
let drumEvent = document.querySelectorAll(".drum");

// putting the while condition 
while (i < drumEvent.length){
    drumEvent[i].addEventListener("click", function (){
        let buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    });
    i++;
}
// this takes the Keybaord listener
// keypress is deprecated. so use keydown to perform an action taken through the keyboard 
document.addEventListener("keydown", function (event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(){
      switch (key) {
            case "w":
                let tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();                
                break;

            case "a":
                let tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();                
                break;

            case "s":
                let tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;

        case "d":
            let tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play()
            break;
        case "j":
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        
        case "l":
            let kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
            break;

            default:
                console.log(this.innerHTML)
        }
}

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100);
}