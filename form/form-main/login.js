$('#submit-btn').on('click', function(e) {
 
  let idBox = $('#id').val();
  let pwBox = $('#pw').val();
  console.log(idBox, pwBox);
  
  if(idBox == '') {
    // alert('아이디를 입력하세요.');
    $('.id-alert').css('display' , 'block');
    $('.id-alert').html('아이디를 입력하세요');
    e.preventDefault();
  } else if (pwBox == '') {
    // alert('비밀번호를 입력하세요');
    $('.pw-alert').css('display' , 'block');
    $('.pw-alert').html('비밀번호를 입력하세요');
    e.preventDefault();
  } else if (pwBox !='' && pwBox.length < 6) {
    //pwBox가 빈칸이 아니고 6자 보다 작을때 
    //pw-alert의 display -> Block
    //pw-alert 안에 텍스트를 비밀번호를 6자 이상으로 설정하세요
    $('.pw-alert').css('display' , 'block');
    $('.pw-alert').html('비밀번호를 6자 이상으로 설정하세요');
    e.preventDefault();


  }

});






//   if('#id'==''){
//     alert('아이디를 입력해 주세요');
//   } else if('#pw'==''){
//     alert('비밀번호를 입력해 주세요');
//   }

// })

// document.getElementById('submit-btn').addEventListener('click', function(e){
//   e.preventDefault();
//   let idBox = document.getElementById('id-box').value;
//   // value라는 것은 input 박스 안에 들어간 값을 말한다. 즉 이 값을 받는 것을 의미한다.
//   let pwBox = document.getElementById('pw-box').value;
//   console.log(idBox, pwBox);
// })



//   조건문
// if(조건) {
//   // 실행할 코드
//   // 즉 조건이 맞으면 실행이 되는 거시다.
// }

// if(3<1) {
//   console.log('정답입니다.')
// } else {
//   console.log('바보')
// }

// if(10 == 1) {
//   console.log('정답 아닙니다.')
// } else if(10 != 1){
//   console.log('정답')
// }

// if(조건) {
//   console.log('정답 아닙니다.')
// } else if(1또 다른 조건){
//   console.log('정답')
// }

// 비교연산자
// A > B : A가 B보다 크다
// A >= B : A가 B보다 크거나 같다
// A < B : A가 B보다 작다
// A <= B : A가 B보다 작거나 같다
// A == B : A와 B가 같다 / 데이터만 일치해도 TRUE / 느슨한 비교 / 3=='3' 같다.
// A != B : A와 B가 같지 않다 / 느슨한 비교
// A === B : A와 B가 같다인데 데이터랑 형 모두 일치해야 TRUE / 엄격한 비교
// A !== B : A와 B가 같다인데 데이터랑 형 모두 일치 안 해야 TRUE / 엄격한 비교 / 3=='3' 안 같다.

// 논리연산자
// 1. A || B : or  A 조건 또는 B 조건 둘 중 하나 일치할 때
// 2. A && B : AND A 조건 과 B 조건 둘 다 일치할 때
// 3. ! : not 논리부정 ex) !(10 == 1) 즉 10과 1은 같지 않다. 가로로 묶어야 한다.

// if(조건) {
//   console.log('참')
// } else {
//   console.log('거짓')




