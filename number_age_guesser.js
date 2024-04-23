let birthday_value;

const yearAdd = 8;
const yesRadio = document.getElementById('yesRadio');
const noRadio = document.getElementById('noRadio');
const myText = document.getElementById('myText');
const mySubmit = document.getElementById('mySubmit');
const yourNumber = document.getElementById('yourNumber');
const yourAge = document.getElementById('yourAge');
const error = document.getElementById('error');


mySubmit.onclick = function(){

    calculated_answer = Number(myText.value);

    if (yesRadio.checked){

        birthday_value = 1766;
        error.textContent = 'You have selected yes';

    }

    else if (noRadio.checked){

        birthday_value = 1765;
        error.textContent = 'You have selected no';

    }

    else{

        error.textContent = 'PLEASE SELECT YES OR NO';
    
    }

    let final_answer = String(calculated_answer + birthday_value + yearAdd);

    
    let final_number = final_answer.slice(0,-2);
    let final_age = final_answer.slice(-2);

    yourNumber.textContent = `Your number is: ${final_number}`
    yourAge.textContent = `Your age is: ${final_age}`
}