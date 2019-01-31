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

    

            /*Scroll to top when arrow up clicked BEGIN*/
        $(window).scroll(function() {
            var height = $(window).scrollTop();
            if (height > 100) {
                $('#back2Top').fadeIn();
            } else {
                $('#back2Top').fadeOut();
            }
        });
        $(document).ready(function() {
            $("#back2Top").click(function(event) {
                event.preventDefault();
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });

});
 /*Scroll to top when arrow up clicked END*/
            
        // ===== CounterUp ===== ;
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
});


