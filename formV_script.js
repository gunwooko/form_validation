//let elemUsername = document.querySelector('#username');
//let elemPassword = document.querySelector('#password');
//let elemButton = document.querySelector('#button');

// function handleClick() {
//     if(!Alert()) {
//       // 아이디 길이가 모자르다고 피드백 줘야함
//       printErrorMessage('아이디 길이가 모자라')
//     }
// }

function printErrorMessage() {
    let newAlert = document.querySelector('#password');
    let elemUsername = document.querySelector('#username'); 

    if(elemUsername.value.length < 4 ){
        
        return alert("다시 아이디를 입력해주세요!");
    }
    else if(newAlert.value.length < 7){
        return alert("다시 비밀번호를 입력해주세요!");
    }
    else{
        return alert("감사합니다!")
    }
}

let buttonCheck = document.querySelector('#button');

buttonCheck.onclick = printErrorMessage;

