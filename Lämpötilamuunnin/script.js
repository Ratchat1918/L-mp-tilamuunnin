const Mysubmit=document.getElementById("Btn");
const SelectionCheck=document.getElementById("selection")
const astetta=document.getElementById("textBox");
const result = document.getElementById("result");

let degrees=0;

function convert(){
    const SelectionValue=SelectionCheck.value;
    if(SelectionValue==="toCelcius"){
        degrees=Number(astetta.value);
        degrees=(degrees-32)*(5/9);
        result.textContent=degrees;
    }
    if(SelectionValue==="toFahrenheit"){
        degrees=Number(astetta.value);
        degrees=degrees *9/5+32;
        result.textContent=degrees;
    }
}
Mysubmit.addEventListener("click", convert);