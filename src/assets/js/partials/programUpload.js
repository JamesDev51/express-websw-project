const programUploadBtn= document.querySelector(".programUploadBtn")
const uploadCategory = document.querySelector('.cat');
const uploadTitle = document.querySelector('.title');
const uploadContent = document.querySelector('.content');


//폼 제출 전 유효성 검사
function handleProgramUploadBtnClick() {
    const form = document.querySelector(".uploadForm")
    const data = new FormData(form)
    
    if(uploadCategory.value===''){
        alert("카테고리를 선택해주세요");
        uploadCategory.focus();
        return false;
    }
    if(uploadTitle.value===''){
        alert("제목 입력해주세요");
        uploadTitle.focus();
        return false;
    }
    if(uploadContent.value===''){
        alert("내용을 입력해주세요");
        uploadContent.focus();
        return false;
    }

    fetch("/programs/upload", {
        method: "POST",
        headers: {},
        body: data
    })
    .then((response) => {
        if(response.status===200){
            alert("프로그램 업로드가 완료되었습니다.")
            location.href=response.url
        }
    })
};

if(programUploadBtn){
    programUploadBtn.addEventListener("click",handleProgramUploadBtnClick)
    document.querySelector(".uploadDate").valueAsDate=new Date()

    //'파일 선택'클릭하면 도움말 띄우기
    document.getElementById("chooseFile").onclick = function() {
        alert("ctrl 또는 shift를 누른 상태로 파일을 여러 개 선택할 수 있습니다.");
    }

    //파일 개수 제한
    document.querySelector("#chooseFile").onchange = function() {
        var fileInput = document.querySelector("#chooseFile");
        var files = fileInput.files;
        var fl = files.length;
        if ( fl > 5 ) {
            alert("파일은 최대 5개까지 선택할 수 있습니다");
            fileInput.value=""
        }
    }
}    