 //'파일 선택'클릭하면 도움말 띄우기
function popUp() {
    alert("ctrl 또는 shift를 누른 상태로 파일을 여러 개 선택할 수 있습니다.");
}
//폼 제출 전 유효성 검사
function validate() {
    const uploadCategory = document.querySelector('.cat');
    const uploadWriter = document.querySelector('.writer');
    const uploadTitle = document.querySelector('.title');
    const uploadContent = document.querySelector('.content');
    
    if(uploadCategory.value===''){
        alert("카테고리를 선택해주세요");
        uploadCategory.focus();
        return false;
    }
    if(uploadWriter.value===''){
        alert("작성자를 입력해주세요");
        uploadWriter.focus();
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
    //검사 후 문제 없으면 폼 제출
    alert("제출 완료되었습니다");
};

// fetch("/api/program/edit/${id}", {
//     method: "POST", 
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         //요청본문 이거 맞는지 몰겟
//         uploadCategory,
//         uploadWriter,
//         uploadTitle,
//         uploadContent
        
//     }),
// })
//     .then((response) => response.json())
//     .then((data) => console.log(data));


    