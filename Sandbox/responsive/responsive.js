/*
Get the elements what we want to modify
figure out when the modifciation should occur
for each element  
    figuegoure outwhich one it is]
    output that number.

Figure out where/ how we will display a message/
*/

function displayWelcome(){
    const headerEl = document.querySelector('header');
    const dayIndex = new Date().getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const message = `Happy ${days[dayIndex]}`;
    const messageEl = document.createElement('p');
    messageEl.textContent = message;
    headerEl.append(messageEl);
}

function renderNumber(element, index) {
    const number= document.createElement('span');
    number.textContent = index + 1;
    element.prepend(number);
}

function addIndex(){
const scriptureElements = document.querySelectorAll('.scripture');
console.log(scriptureElements);
scriptureElements.forEach(renderNumber);
}

function toggleMenu() {
    navEl.classList.toggle("hide");
    menuBtn.classList.toggle("change");
}

//document.querySelector(".menu-btn").addEventListener("click", toggleMenu);

addIndex();
displayWelcome();

const menuBtn = document.querySelector(".menu-btn")
const navEl = document.querySelector(".main-nav")


menuBtn.addEventListener("click", toggleMenu);


