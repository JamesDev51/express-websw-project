const reservationsInputHidden = document.getElementById("reservationsData")
if(reservationsInputHidden){
    const reservationData=JSON.parse(reservationsInputHidden.value)
    console.log("reservationData : ",reservationData)
    
    const body = document.querySelector('.main'); //전체 바디
    const reservationListContainer = document.createElement('div'); //예약정보 전체 묶는 컨테이너
    reservationListContainer.classList.add('reservationListContainer'); //컨테이너의css
    
    function createReservationList(obj) { //객체 받아오기
        
        for (key in obj) { //객체에서 키값 꺼내기
            console.log("key : ", key)
            const reservation = document.createElement('div'); //예약정보 하나 묶는 컨테이너
            reservation.classList.add('reservation'); //해당 css
            
            const reservationInfo = document.createElement('div');
            reservationInfo.classList.add('reservationInfo');
            reservationInfo.innerHTML = "성함: "+obj[key].name+"<br/>"+ "프로그램명: " + obj[key].program + "<br/>" + "이메일: " + obj[key].email + "<br/>" + "아이디: " + obj[key]._id + "<br/>" +  "전화번호: " + obj[key].phoneNumber + "<br/>" + "인원수: " + obj[key].peopleNum + "<br/>"+ "문의사항: " + obj[key].message;
           
            reservation.appendChild(reservationInfo);
            reservationListContainer.appendChild(reservation);
            
        }
    }
    createReservationList(reservationData);
    body.appendChild(reservationListContainer);
}