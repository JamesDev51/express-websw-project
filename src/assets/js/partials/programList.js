//프로그램명 받아오기
const programInputHidden = document.getElementById("programData")
if(programInputHidden){
    const programData=JSON.parse(programInputHidden.value)
    console.log("programData : ",programData)
    
    const body = document.querySelector('.main');
    const programListContainer = document.createElement('div');
    programListContainer.classList.add('programListContainer');
    
    function createProgramList(obj) {
        
        for (key in obj) {
            console.log("key : ",key)
            const program = document.createElement('div');
            program.classList.add('program');
            program.dataset.key = key;
            
            const programImg = document.createElement('div');
            programImg.classList.add('programImg');
            programImg.style.backgroundImage = "url(" + obj[key].photoUrls[0] + ")";
            
            
            
            const programTitle = document.createElement('div');
            programTitle.classList.add('programTitle');
            programTitle.innerHTML = obj[key].title;
            
            
            program.appendChild(programImg);
            program.appendChild(programTitle);
            programListContainer.appendChild(program);
            
            program.addEventListener('click', (e) => {
                
                console.log(obj[e.currentTarget.dataset.key].title);
                localStorage.setItem('programData', JSON.stringify(obj[e.currentTarget.dataset.key]));
                //이부분 수정한 부분
                location.href = `/programs/${obj[key]._id}`;
                //
            });
            
        }
    }
    createProgramList(programData);
    body.appendChild(programListContainer);
}