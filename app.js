const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');
const specialChars = ["-","+","=","*","/"];

let output = ""

function calculate(BtnValue){
    /* if the btn pressed is the "=" symbol and the value of the output vairable is
     not an empty string, then the string will be evaluated*/ 
    if(BtnValue === "=" && output !== ""){
        //the string inside the output variable is evaluated mathemethically here
        output= eval(output);
        //if the btn pressed is "AC", then clear content of the out variable i.e clear the screen
    }else if(BtnValue === "Ac"){
        //output is updated with the value of an empty string
        output ="";
        
    }else if(BtnValue === "Del"){
         /* if the pressed btn is "Del" & the value of output is not an empty string,
         then delete the last character of the string*/
        output = output.toString().slice(0, -1);
    }else{
        if(output === "" && specialChars.includes(BtnValue))return;
        output += BtnValue;
    }

    display.value = output;
}



// forEach method that iterates through the buttons html collection 
buttons.forEach((button)=>{
    /* we add an eventListener to each button that calls the calculate and 
    takes the value of the clicked button as an argument.*/
    button.addEventListener('click',(e)=>{
        calculate(e.target.dataset.value)
    })
})