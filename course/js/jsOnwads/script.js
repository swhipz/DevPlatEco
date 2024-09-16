const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const boxSection = document.getElementById("boxes");

// Going to add the text "green box" to the green box.

box3.innerText = "Green box"
const company = document.getElementById('company');
const modifyHref = (x) => company.href= x;

const navArea = document.querySelector('nav');
const navUl = document.querySelector('nav ul');
const navLi = document.querySelector('nav li');
const navA = document.querySelector('nav a');

const newNavButton = document.createElement('li');
newNavButton.append(
    document.createElement('a')
);

//make pink box purple or something
box4.style.backgroundColor = 'cyan';


// taking input from an input-field

const inputField = document.querySelector('#writeBox');
const sendButton = document.querySelector('#sendButton');
const storeList = document.getElementById('storeList');

sendButton.addEventListener('click', () => {
    newListElement = document.createElement('li');
    rawText = inputField.textContent.toLowerCase;
    listInput = newListElement.append(rawText);
    


;

})












