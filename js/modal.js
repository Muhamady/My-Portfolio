// // Send Message Modal
// // Modal
// var messageModal = document.getElementById('messageModal');
// /// Open Button
// var openBtn = document.getElementById('p-button');
// // Close Button
// var closeMessage = document.getElementsByClassName('pClose');

// // Event Listeners
// // Listener to Open
// openBtn.addEventListener('click', openMessage);
// // Listener to Close Btn
// closeMessage.addEventListener('click', closeModal);

// window.addEventListener('click', outsideClick)

// // Functions to Modal

// function openMessage(){
//     messageModal.style.display = 'block';
// }

// // Function to Close

// function closeModal(){
//     messageModal.style.display = 'none';
// }

// // Function to outsideClicks

// function outsideClick(e){
//     if(e.target == messageModal){
//         messageModal.style.display = 'none';
// }  }



// Modal

// Get Modal Element
var modal = document.getElementById('simpleModal2');
//Get Open Modal
var modalBtn = document.getElementById('p-button');
// Get Close Button
var closeBtn = document.getElementsByClassName('closeBtn2')[0];

// Listen for open Click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click

window.addEventListener('click', outsideClick);

// Function to open Modal

function openModal(){
    modal.style.display = 'block';
}

// Function to close Modal

function closeModal(){
    modal.style.display = 'none';
}

// Function to Outside Click

function outsideClick(e){
    if(e.target == modal){
    modal.style.display = 'none';
} }


