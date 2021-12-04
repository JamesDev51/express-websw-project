//const signupBtn= document.querySelector(".signupBtn");
const loginId= document.querySelector(".loginId");
const loginPw=document.querySelector(".loginPw");
const loginForm = document.querySelector(".loginForm")
//정규식
let regPassword = /^[a-zA-Z0-9]{4,12}$/


function regexCheck(reg, what, message) {
        if(reg.test(what.value)) {
            return true;
        }
        alert(message);
        what.value = "";
        what.focus();
        //return false;
}


function handleLoginBtnClick(){ //로그인 버튼 눌렀을 때

    if(loginId.value===""){
        //아이디 비어있는지 검사
        alert("아이디를 입력해주세요.");
        loginId.focus();
        return false;
    }
    if(loginPw.value===""){
        //패스워드 비어있는지 검사
        alert("패스워드를 입력해주세요.")
        loginPw.focus();
        return false;
    }
    loginForm.submit()
    alert("로그인 되었습니다.")
// headers: {"Content-Type": "application/json; charset=utf-8"},
    // fetch("/login", {
    // method :"POST",
    // body: data
    // }).then((response) => {
    //     if(response.status===200){
    //         alert("로그인되었습니다")
    //         location.href="/"
    //     }
    // })  
}

//회원 가입버튼을 눌렀을 때 실행
function logining() {
    const loginBtn= document.querySelector(".loginBtn");
    if(loginBtn){
    loginBtn.addEventListener("click", handleLoginBtnClick)
    }
}

logining()