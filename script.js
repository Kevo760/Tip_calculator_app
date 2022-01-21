let billTotal = document.getElementById("bill_total").value;
let numPeps = document.getElementById("num_peps");

// Tips Section
let fivePercent = document.getElementById("five_percent").value;
let tenPercent = document.getElementById("ten_percent").value;
let fifthteenPercent = document.getElementById("fifthteen_percent").value;
let twentyFivePercent = document.getElementById("twenty_five_percent").value;
let fiftyPercent = document.getElementById("fifty_percent").value;
let customTip = document.getElementById("custom_tip").value;

// Totals
let tipAmount = document.getElementById("tip_amount");
let totalAmount = document.getElementById("total_amount");

// Tip amount
let tipTotal = fivePercent * billTotal;


function resetToZero() {
    billTotal.value = "";
    numPeps.value = "";
    customTip.value = "";
    tipAmount.innerText = "$0.00";
    totalAmount.innerText = "$0.00";
    zero.classList.remove("error");
}

function checkZero() {
    let zero = document.getElementById("zero");
    if (numPeps.value == 0) {
        zero.classList.add("error")
    } else {
        zero.classList.remove("error")
    }
}



console.log(tipTotal)





