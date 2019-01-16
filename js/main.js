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
    // ===== CounterUp ===== ;
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // ==== Slider ====
    $(".center").slick({
        variableWidth: true,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        slidesToShow: 10,
        slidesToScroll: 4
      });
});

