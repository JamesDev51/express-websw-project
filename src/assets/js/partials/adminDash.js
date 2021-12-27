const reservationsInputHidden = document.getElementById("reservationsData")
if(reservationsInputHidden){
    const reservationData=JSON.parse(reservationsInputHidden.value)
    const body = document.querySelector('.main'); //전체 바디
    const reservationListContainer = document.createElement('div'); //예약정보 전체 묶는 컨테이너
    reservationListContainer.classList.add('reservationListContainer'); //컨테이너의css
    
    function createReservationList(obj) { //객체 받아오기
        
        for (key in obj) { //객체에서 키값 꺼내기
            const reservation = document.createElement('div'); //예약정보 하나 묶는 컨테이너
            reservation.classList.add('reservation'); //해당 css
            
            const card = document.createElement('div');
            card.classList.add('card');
            const cardHeader = document.createElement('div');
            cardHeader.classList.add('card-header');
            cardHeader.innerHTML="성함: "+obj[key].name
            const ul=document.createElement("ul")
            ul.classList.add('list-group');
            ul.classList.add('list-group-flush');
            let li1=document.createElement("li")
            li1.innerHTML="프로그램명: " + obj[key].program
            let li2=document.createElement("li")
            li2.innerHTML="이메일: " + obj[key].email
            let li3=document.createElement("li")
            li3.innerHTML="아이디: " + obj[key]._id
            let li4=document.createElement("li")
            li4.innerHTML="전화번호: " + obj[key].phoneNumber


            reservationInfo.innerHTML =    + "<br/>" +  + "<br/>" +   + "<br/>" + "인원수: " + obj[key].peopleNum + "<br/>"+ "문의사항: " + obj[key].message;
            reservation.appendChild(reservationInfo);
            reservationListContainer.appendChild(reservation);
            
        }
    }
    createReservationList(reservationData);
    body.appendChild(reservationListContainer);
}