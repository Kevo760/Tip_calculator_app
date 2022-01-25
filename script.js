let billTotal = document.getElementById("bill_total");
let numPeps = document.getElementById("num_peps");

// Tips Section
let other = document.getElementById('other');
let tips = document.getElementsByName('tips');
let customTip = document.getElementById('custom_tip');





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
    tips[0].checked=true;
}


// Adds .error class on num of people
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




// function to convert selected tip to 1/100 of a decimal
function tipConversion() {
for (var i = 0; i < tips.length; i++) {   
    if (tips[i].checked) {
        other.value = customTip.value;
        return tips[i].value * .01;
   }

}
}

//Calculates tips per person
function tipPerPerson() {
    let tip = tipConversion();

    if (billTotal.value == '') {
        billTotal.value === 0;
    } else if (numPeps.value == '') {
        numPeps.value === 0;
    } else {
        let totalTip = parseFloat(billTotal.value) * tip;
        let TipPerPerson =  totalTip / numPeps.value;
        return TipPerPerson.toFixed(2);
    }

}


//Calculates bill total with tips per person
function totalPerPerson() {

    let tipsPerP = tipPerPerson();

    
     if (billTotal.value == '') {
        billTotal.value === 0;
    } else if (numPeps.value == '') {
        numPeps.value === 0;
    } else if (tipsPerP == undefined) {
        tipsPerP === 0;
    } else {
        let billPerP = billTotal.value / numPeps.value;
        let tipsBillPerPerson = parseFloat(tipsPerP) + billPerP;
        return tipsBillPerPerson.toFixed(2);
    }

}


// calculates both tipsPerPerson and TotalPerPerson Function
function calculate() {
    let tipPP = tipPerPerson();
    let totalPP = totalPerPerson();

    if (tipPP == undefined) {
        tipPP == 0.00;
    } else if (totalPP == undefined) {
        totalPP == 0.00
    } else {
    tipAmount.innerText = "$" + tipPP;
    totalAmount.innerText = "$" + totalPP;
    }

}


// recalculates when selecting different tip amount and sets custom tip to no value
function radioChange() {
    calculate();
return customTip.value = "";
}




