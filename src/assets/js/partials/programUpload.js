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
}    