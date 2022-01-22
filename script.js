let billTotal = document.getElementById("bill_total");
let numPeps = document.getElementById("num_peps");

// Tips Section
let fivePercent = document.getElementById("five_percent");
let tenPercent = document.getElementById("ten_percent");
let fifthteenPercent = document.getElementById("fifthteen_percent");
let twentyFivePercent = document.getElementById("twenty_five_percent");
let fiftyPercent = document.getElementById("fifty_percent");
let customTip = document.getElementById("custom_tip");



// Totals
let tipAmount = document.getElementById("tip_amount");
let totalAmount = document.getElementById("total_amount");


// Reset button that resets bill, custom tip, and number of people
function resetToZero() {
    billTotal.value = "";
    numPeps.value = "";
    customTip.value = "";
    tipAmount.innerText = "$0.00";
    totalAmount.innerText = "$0.00";
    zero.classList.remove("error");
}


// Adds .error class on num of peeople
function checkZero() {
    let zero = document.getElementById("zero");
    if (numPeps.value == 0) {
        zero.classList.add("error")
    } else {
        zero.classList.remove("error")
    }
}


// When click on custom tip it deselects other tip radio button
function otherTip(){
    a=document.getElementById('other');
    a.checked=true;
    }

    function pickTip(){
    a=document.getElementById('custom_tip');
    a.value="";
    }




// if bill equals != "" && num of peps !0 && tip


let form = document.querySelector('input[type = radio]:checked').value;



// TEST
let test = document.getElementById("test");

function testTip() {
//    let convertTip = customTip.value * .01;
//    let testTipv1 = convertTip * billTotal.value;
//    return test.textContent=testTipv1.toFixed(2);
return alert(form);
}







