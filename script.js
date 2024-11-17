const Mysubmit = document.getElementById("Btn");
const SelectionCheck = document.getElementById("selection");
const astetta = document.getElementById("textBox");
const result = document.getElementById("result");

let degrees = 0;

function convert() {
    const SelectionValue = SelectionCheck.value;
    if (SelectionValue === "toCelcius") {
        degrees = Number(astetta.value);
        degrees = (degrees - 32) * (5 / 9);

        if (document.getElementById("desimaali1").checked) {
            degrees = degrees.toFixed(1);
            result.textContent = degrees;
        } else if (document.getElementById("desimaali2").checked) {
            degrees = degrees.toFixed(2);
            result.textContent = degrees;
        } else if (document.getElementById("desimaali3").checked) {
            degrees = degrees.toFixed(3);
            result.textContent = degrees;
        } else {
            result.textContent = degrees;
        }
    }
    if (SelectionValue === "toFahrenheit") {
        degrees = Number(astetta.value);
        degrees = degrees * 9 / 5 + 32;

        if (document.getElementById("desimaali1").checked) {
            degrees = degrees.toFixed(1);
            result.textContent = degrees;
        } else if (document.getElementById("desimaali2").checked) {
            degrees = degrees.toFixed(2);
            result.textContent = degrees;
        } else if (document.getElementById("desimaali3").checked) {
            degrees = degrees.toFixed(3);
            result.textContent = degrees;
        } else {
            result.textContent = degrees;
        }
    }
}


function uncheckOthers(checkedId) {
    const checkboxes = ["desimaali1", "desimaali2", "desimaali3"];
    checkboxes.forEach(id => {
        if (id !== checkedId) {
            document.getElementById(id).checked = false;
        }
    });
}


document.getElementById("desimaali1").addEventListener("change", () => uncheckOthers("desimaali1"));
document.getElementById("desimaali2").addEventListener("change", () => uncheckOthers("desimaali2"));
document.getElementById("desimaali3").addEventListener("change", () => uncheckOthers("desimaali3"));

Mysubmit.addEventListener("click", convert);
