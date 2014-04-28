$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var topOffset = $("#summary").offset().top;
    if (scroll >= topOffset-80) {
        $("header").addClass("nav-absolute");
        $("header").removeClass("nav-fixed");
        $("#goToResume").addClass("animated fadeInDown");
        $("#goToTop").addClass("goToTop-on animated fadeInDown");
        $("#goToTop").removeClass("fadeOutUp");
    } else if (scroll < topOffset) {
        $("header").addClass("nav-fixed");
        $("header").removeClass("nav-absolute");
        $("#goToTop").addClass("fadeOutUp");
        $("#goToTop").removeClass("fadeInDown");
        $("#goToSummary").css("top",scroll * 9/19 + 400);
    }
});



$(document).ready(function() { 
    $('#main-nav').addClass('animated fadeInDown');    
    $('#main-content').fadeIn(600);

    $("#goToTop").click(function (){
        $('html, body').animate({
            scrollTop: $("#hero").offset().top
        }, 1000);
    });

    $("#goToSummary").click(function (){
        $('html, body').animate({
            scrollTop: $("#summary").offset().top
        }, 1000);
    });

    $("#goToResume").click(function (){
        $('html, body').animate({
            scrollTop: $("#resume").offset().top
        }, 1000);
    });
    
    $("#goToWork").click(function (){
        $('html, body').animate({
            scrollTop: $("#work").offset().top
        }, 1000);
    });
    
    $("#goToAbout").click(function (){
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });
    
    $("#goToFun").click(function (){
        $('html, body').animate({
            scrollTop: $("#fun").offset().top
        }, 1000);
    });
    
    $("#goToContact").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });
    
    //SNAKE GAME CODE
    
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    ctx.fillStyle = "#4166ad";
    ctx.fillRect (0, 0, 900, 600);
    
    function start() {
           
    }

    var clear = function() {
         ctx.clearRect(0, 0, 900, 600); // clear canvas
    };

    var draw = function(x, y) {
        ctx.fillStyle = "#4166ad";
        ctx.fillRect (0, 0, 900, 600);
        ctx.fillStyle = "#f1f1f1";
        ctx.fillRect (x, y, 15, 15);


    };

    var x = 50;
    var y = 50;
    var speed = 15;
    var currentDir = "r";

    draw(x,y);

    setInterval(onTimerTick, 33); // 33 milliseconds = ~ 30 frames per sec


    function onTimerTick() {

    }

    var setCurrentDir = function(dir){
        if(currentDir != "r" && dir != "l"){
          currentDir = dir;
          console.log(currentDir);
        } else if (currentDir != "l" && dir != "r"){
          currentDir = dir;
          console.log(currentDir);
        } else if (currentDir != "u" && dir != "d"){
          currentDir = dir;
          console.log(currentDir);
        } else if (currentDir != "d" && dir != "u"){
          currentDir = dir;
          console.log(currentDir);
        }

    }
    
    $("#canvas")
    // Add tab index to ensure the canvas retains focus
    .attr("tabindex", "0")
    // Mouse down override to prevent default browser controls from appearing
    .mousedown(function(){ $(this).focus(); return false; }) 
    .keydown(function(e){
        
        if (e.keyCode==37) {
            clear();
            setCurrentDir('l');
            x = x - speed;
            draw(x,y);
        } else if (e.keyCode==40) {
            e.preventDefault();
            clear();
            setCurrentDir('d');
            y = y + speed;
            draw(x,y);
        } else if (e.keyCode==39) {
            clear();
            setCurrentDir('r');
            x = x + speed;
            draw(x,y);
        } else if (e.keyCode==38) {
            e.preventDefault();
            clear();
            setCurrentDir('u');
            y = y - speed;
            draw(x,y);
        }
    return false; });
    
    // Add content editable to help ensure the canvas retains focus
    $("#canvas").attr("contentEditable", "true")
    $("#canvas")[0].contentEditable = true;
    

});


