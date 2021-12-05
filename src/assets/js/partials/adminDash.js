const ul = document.querySelector('.adminMember'); //리스트로 받아오기

function createNode(element){
    return document.createElement(element);
}

function append(parent, el){
    return parent.appendChild(el);
}

function userFetch(){
    fetch('/api/program/reserve')
        .then((resp) => resp.json()) //데이터->json
        .then(function(data){
            //받아올 데이터
            let members = data.reservationData;
            //console.log(members);
            return members.map(function(member){
                let li = createNode('li'),
                name = createNode('h2'),
                span = createNode('span');

                name.innerHTML = `${member.name}`;
                span.innerHTML = `이메일:${member.email} <br>전화번호: ${member.phoneNumber} <br> 인원:${member.peopleNum} <br> 남기신 메세지:${member.message} <br> 프로그램명:${member.program} <br> 예약번호:${member.reservationCode} <br> 아이디:${member._id} <br> ${member.__v}`;

                append(li, name)
                append(li, span);
                append(ul, li);
            })

        })
        .catch(err => console.log(err));
}


/*function getUserInfo() {
        
    const config = {
        method: "get"
    };

    fetch("/api/program/reserve", config)
        .then(response => response.json())
        .then(data => {
            const reservationData = document.createElement("div");
            const user = document.createElement("div");
            reservationData.textContent = data.reservationData;
            user.textContent = data.user;
            const userInfo = document.getElementById("userInfo");
            userInfo.appendChild(reservationData);
            userInfo.appendChild(user);
         
        })
        .catch(error => console.log(error));
}

function viewInfo() {
    const adminBtn= document.querySelector(".adminBtn");
    if(adminBtn){
        adminBtn.addEventListener("click", getUserInfo)
    }
}

viewInfo()
*/