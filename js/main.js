// // 
// var menuBar = document.getElementById('menu-bar');
// menuBar.addEventListener('click', function(){
//     var menu = document.getElementById('mobile-nav');
//     console.log(1);
    
    
// } );
// function toggleMenu(){
//     // menu.className += 'display';
// }
$(document).ready(function(){

    $('#menu-bar').on('click', function(){
        console.log($('#mobile-nav').toggleClass('open'));
        // $('#mobile-nav').style.height = '100px';
    });
    // console.log('hey');
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

