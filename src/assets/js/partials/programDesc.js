const programDetail = document.getElementById("programDetail")
if(programDetail){
    // const programInputHidden = document.getElementById("programDataDetail")
    // const programData=JSON.parse(programInputHidden.value)
    
    const programContainer = document.createElement('div');
    
    
    const body = document.querySelector('body');
    programContainer.classList.add('programContainer');
    body.appendChild(programContainer);
    
    function createProgram(obj) {
        
        const programTitle = document.createElement('div');
        programTitle.classList.add('programTitle');
        programTitle.innerHTML = obj.title;
        
        const programDesc = document.createElement('div');
        programDesc.classList.add('programDesc');
        
        const programImg = document.createElement('div');
        programImg.classList.add('programImg');
        programImg.style.backgroundImage = `url('${obj.photoUrls[0]}')`
        
        const programContent = document.createElement('div');
        programContent.classList.add('programContent');
        programContent.innerHTML = obj.content;
        
        
        
        programDesc.appendChild(programImg);
        programDesc.appendChild(programContent);
        programContainer.appendChild(programTitle);
        programContainer.appendChild(programDesc);
        
    }
    const programData = JSON.parse(localStorage.getItem('programData'));
    console.log("programData",programData)
    console.log(programData.title);
    createProgram(programData);
    
}
