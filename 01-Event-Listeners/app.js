// Click
const buttonTwo = document.querySelector('.button-2');
function alertBtn(){
    alert("Exmaple 2");
}
buttonTwo.addEventListener("click",alertBtn);


// Mouseover
const bgColor = document.querySelector('.button-3');
function changebgColor(){
    bgColor.style.background = "green";
}
bgColor.addEventListener("mouseover",changebgColor);


// Mouseout
const removebg = document.querySelector('.button-3');
function removebgColor(){
    removebg.style.background = 'linear-gradient(rgb(65, 102, 156), rgb(64, 176, 165))';
}
removebg.addEventListener('mouseout',removebgColor)