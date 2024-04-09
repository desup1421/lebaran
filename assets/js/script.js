var audio = document.querySelector(".audio");
var rotation = document.querySelector(".cd");

$(".click-me").click(function(){
  audio.play();
  $(".mail-lid").addClass("rotated");
  $(".click-me").addClass("d-none");
  setTimeout(function(){
    $("#mail-img").addClass("slide-up");
    $("#mail-img").addClass("d-flex");
  }, 50); 
  setTimeout(function(){
    $(".mail-section").removeClass("d-flex").addClass("d-none");
    $(".main-section").removeClass("d-none");
  }, 2000); 
});

$(".cd").click(function(){
  if (audio.paused) {
    audio.play();
    rotation.style.animationPlayState = "running";
  } else{
    audio.pause();
    rotation.style.animationPlayState = "paused";
  }
})
