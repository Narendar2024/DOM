
// Event Delegation...
// ***** It allows users to append a SINGLE event listener to a parent
    //  element that adds it to all of its present AND future descendants
    //  that match a selector...  ***** //







// document.querySelector('#cricket').addEventListener("click",function(e){
//     console.log("cricket is selected");

//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey';
//     }
// });

// document.querySelector('#badminton').addEventListener("click",function(e){
//     console.log("badminton is selected");

//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey';
//     }
// });

// document.querySelector('#football').addEventListener("click",function(e){
//     console.log("football is selected");

//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey';
//     }
// });

// document.querySelector('#volleyball').addEventListener("click",function(e){
//     console.log("volleyball is selected");

//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey';
//     }
// });

// document.querySelector('#basketball').addEventListener("click",function(e){
//     console.log("basketball is selected");

//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey';
//     }
// });


document.querySelector('#sports').addEventListener("click",function(e){
    console.log(e.target.getAttribute('id')+' is selected');

    const target = e.target;
    if(target.matches('li')){
        target.style.backgroundColor = "lightgrey";
    }
});


// Adding new sports(element);

const sports = document.querySelector('#sports');
const newSports = document.createElement('li');

newSports.innerText = 'Rugby';
newSports.setAttribute('id','Rugby');

sports.appendChild(newSports);

