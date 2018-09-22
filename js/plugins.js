$(document).ready(function(){
    $('#btnn1').click(function(){
        $('#media').slideToggle();
    })
})

$(document).ready(function(){
    $('#btnn2').click(function(){
        $('#media1').slideToggle();
    })
})

$(document).ready(function(){
    $('#btnn3').click(function(){
        $('#media2').slideToggle();
    })
})




$(document).ready(function(){
    $('#btnn1').click(function(){
        $(this).css("color","#03A9F4")
    })
})

$(document).ready(function(){
    $('#btnn2').click(function(){
        $(this).css("color","#03A9F4")
    })
})

$(document).ready(function(){
    $('#btnn3').click(function(){
        $(this).css("color","#03A9F4")
    })
})

/* Read More */

$('.readmore1').click(function(){
    $('#none1').slideToggle();
});

$('.readmore2').click(function(){
    $('#none2').slideToggle();
});

$('.readmore3').click(function(){
    $('#none3').slideToggle();
});


// Modal

// Get Modal Element
var modal = document.getElementById('simpleModal');
//Get Open Modal
var modalBtn = document.getElementById('modalBtn');
// Get Close Button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

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



