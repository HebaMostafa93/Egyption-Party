$(document).ready(function(){

// Home sidebar -----------------

let width = $(".innerBox").outerWidth()
$(".sidebar").css({left:`-${width}`})

 $(".openBtn").click(function(){
    $(".sidebar").animate({left:"0"},500)
    $(".home-content").animate({marginLeft:`${width}`} , 500)
})
$("#closeIcon").click(function(){
    $(".sidebar").animate({left:`-${width}`} , 500)
    $(".home-content").animate({marginLeft:"0"} , 500)
})

// scroll------------------------------
$(".innerBox a").click(function(){
    var hrefVal= $(this).attr("href");
    var sectionPos = $(hrefVal).offset().top;
    $("html , body").animate({scrollTop:sectionPos} , {duration:1000 , queue:false});
})

let sectionTop = $("#sliderDown").offset().top
$(window).scroll(function(){
    let scrollTop = $(window).scrollTop()
    if(scrollTop >= sectionTop) {
        $(".openBtn").css("display" , "none")
    }
    else{
        $(".openBtn").css("display" , "flex")
    }

})
// SlideDown ---------------------
$(".singerNum").click(function(){
    $(this).next().slideToggle(500);
    $(".item").not($(this).next()).slideUp(500)
})

// Counter-------------------------

countDownToTime("10 october 2023 9:56:00");

function countDownToTime(countTo) {
  
    let futureDate = new Date(countTo);
futureDate = (futureDate.getTime()/1000);

let now = new Date();
now = (now.getTime()/1000);

timeDifference = (futureDate - now);
    
let days = Math.floor( timeDifference / (24*60*60));
let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))

$(".days").html(`${days} D`);
$(".hours").html(`${hours} h`);
$(".minutes").html(`${ mins } m`);
$('.seconds').html(`${ secs} s`)

setInterval(function() {  countDownToTime(countTo); }, 1000);

}

// Textarea---------------------
let maxLength = 100;
$("textarea").keyup(function() {
    var length = $(this).val().length;
    var AmountLeft = maxLength - length;
    if(AmountLeft <= 0)
        {
            $("#chars").text("your available character finished"); 
        }
        else{
        $("#chars").text(AmountLeft);
        }
  });

})





