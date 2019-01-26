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

    // ==== Progress Bar =====
    var progress_circle1 = $(".progress-bar1").circularProgress({
            // options here
            line_width: 6,
            color: "#ee534f ",
            starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
            percent: 0, // percent starts from
            percentage: true
            // text: "More power behind every pixel"
            }).circularProgress('animate', 80, 3000);
        // });
        var progress_circle2 = $(".progress-bar2").circularProgress({
            // options here
            line_width: 6,
            color: "#ee534f ",
            starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
            percent: 0, // percent starts from
            percentage: true
            // text: "More power behind every pixel"
            }).circularProgress('animate', 74, 3000);
        var progress_circle3 = $(".progress-bar3").circularProgress({
            // options here
            line_width: 6,
            color: "#ee534f ",
            starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
            percent: 0, // percent starts from
            percentage: true
            // text: "More power behind every pixel"
            }).circularProgress('animate', 56, 3000);
        var progress_circle4 = $(".progress-bar4").circularProgress({
            // options here
            line_width: 6,
            color: "#ee534f ",
            starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
            percent: 0, // percent starts from
            percentage: true
            // text: "More power behind every pixel"
            }).circularProgress('animate', 24, 3000);
        var progress_circle5 = $(".progress-bar5").circularProgress({
            // options here
            line_width: 6,
            color: "#ee534f ",
            starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
            percent: 0, // percent starts from
            percentage: true
            // text: "More power behind every pixel"
            }).circularProgress('animate', 80, 3000);
        var progress_circle6 = $(".progress-bar6").circularProgress({
            // options here
            line_width: 6,
            color: "#ee534f ",
            starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
            percent: 0 // percent starts from
            // percentage: false
            // text: "More power behind every pixel"
            }).circularProgress('animate', 10, 3000);

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
            
});


