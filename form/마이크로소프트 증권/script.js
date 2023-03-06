let ham = document.querySelector('.ham');
ham.addEventListener('click' , function(){
  document.querySelector('.side-bar').style.transform = 'translateX(0)'; 
});

let clobtn = document.querySelector('.clobtn');
clobtn.addEventListener('click' , function(){
  document.querySelector('.side-bar').style.transform = 'translateX(-300px)';
})


$('.nana').hover(function(){
  $(this).find('.sub-mm').stop().slideDown(500);
}, function(){
  $(this).find('.sub-mm').stop().slideUp(500);
})




let btn1 = document.querySelector('.btn1');
btn1.addEventListener('mouseover', function(){
  document.querySelector('.imga').style.transform = 'translateX(0)';
});

let btn2 = document.querySelector('.btn2');
btn2.addEventListener('mouseover', function(){
  document.querySelector('.imga').style.transform = 'translateX(-1000px)';
});

let btn3 = document.querySelector('.btn3');
btn3.addEventListener('mouseover', function(){
  document.querySelector('.imga').style.transform = 'translateX(-2000px)';
});

let btn4 = document.querySelector('.btn4');
btn4.addEventListener('mouseover', function(){
  document.querySelector('.imga').style.transform = 'translateX(-3000px)';
});

let btn5 = document.querySelector('.btn5');
btn5.addEventListener('mouseover', function(){
  document.querySelector('.imga').style.transform = 'translateX(-4000px)';
});

let btn6 = document.querySelector('.btn6');
btn6.addEventListener('mouseover', function(){
  document.querySelector('.imga').style.transform = 'translateX(-5000px)';
});

let btn7 = document.querySelector('.btn7');
btn7.addEventListener('mouseover', function(){
  document.querySelector('.imga').style.transform = 'translateX(-6000px)';
});

let btn8 = document.querySelector('.btn8');
btn8.addEventListener('mouseover', function(){
  document.querySelector('.imga').style.transform = 'translatex(-7000px)';
});

let btn9 = document.querySelector('.btn9');
btn9.addEventListener('mouseover', function(){
  document.querySelector('.imga').style.transform = 'translateX(-8000px)';
});

let btn10 = document.querySelector('.btn10');
btn10.addEventListener('mouseover', function(){
  document.querySelector('.imga').style.transform = 'translateX(-9000px)';
});

$('.nana').hover



// $(function () {
//   $(".gnb > li").hover(function () {
//     // sub menu가 보이게 
//     $(this).find("ul").stop().slideDown(500);
//     $(this).children("a").addClass("on");
//   }, function () {
//     $(this).find("ul").stop().slideUp(500);
//     $(this).children("a").removeClass("on");
//   })
// });