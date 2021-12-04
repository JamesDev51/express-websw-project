
//const signupBtn= document.querySelector(".signupBtn");
const signupId= document.querySelector(".signupId");
const signupPw=document.querySelector(".signupPw");
const signupName= document.querySelector(".signupName");
const signupPn = document.querySelector(".signupPn");
const signUpform = document.getElementById("signupForm")
const signupEmail=document.querySelector(".signupEmail");

//정규식
let regPassword = /^[a-zA-Z0-9]{4,12}$/
let regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; 
let regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

function regexCheck(reg, what, message) {
        if(reg.test(what.value)) {
            return true;
        }
        alert(message);
        what.value = "";
        what.focus();
        //return false;
}

//회원가입 진행 함수
function handleSignUpBtnClick(){ //회원가입 버튼 눌렀을 때
    
    if(signupId.value===""){
        //아이디 비어있는지 검사
        alert("아이디를 입력해주세요.");
        signupId.focus();
        return false;
    }

    if(signupPw.value===""){
        //패스워드 비어있는지 검사
        alert("패스워드를 입력해주세요.");
        signupPw.focus();
        return false;
    }

    if(!regexCheck(regPassword,signupPw,"비밀번호는 4~12자의 영문 대소문자와 숫자로만 입력 가능합니다.")){
        //패스워드 유효성 검사
        return false;
    }

    if(signupName.value===""){
        //이름이 비어있는지 검사
        alert("이름을 입력해주세요.");
        signupName.focus();
        return false;
    }
    if(!regexCheck(regPhone,signupPn,"정확한 전화번호를 입력해주세요.")){
        //폰 번호 유효성 검사
        return false;
    }
    if(signupEmail.value===""){
        //이메일이 비어있는지 검사
        alert("이메일을 입력해주세요.");
        signupEmail.focus();
        return false;
    }
    if(!regexCheck(regEmail,signupEmail,"적합하지 않는 이메일 형식입니다.")){
        return false;
    }
    let data = Object.fromEntries(new FormData(signUpform))
    fetch("/signup", {
    method :"POST",
    headers: {"Content-Type": "application/json; charset=utf-8"},
    dataType:"json",
    body: JSON.stringify(data)
    }).then((response) => {
        console.log(response) 
        location.href=response.url

    })  



    // signUpform.submit()

}

//회원 가입버튼을 눌렀을 때 실행
function signing() {
    const signupBtn= document.querySelector(".signupBtn");
    if(signupBtn){
    signupBtn.addEventListener("click", handleSignUpBtnClick)
    }
}

signing()