// Tips
const button5 = document.getElementById("tip-button-5");
const button10 = document.getElementById("tip-button-10");
const button15 = document.getElementById("tip-button-15");
const button25 = document.getElementById("tip-button-25");
const button50 = document.getElementById("tip-button-50");
const custonTip = document.getElementById("custon-tip");

//Reset
const reset = document.getElementById("reset-button");
reset.addEventListener('click', () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => input.value = "");
    tipPerPerson.textContent = "$0.00";
    toltalPerPerson.textContent = "$0.00";
})

// Bill
const bill = document.getElementById("bill-input");

// Num of people
const people = document.getElementById("num-people-input");
const errorMsg = document.getElementById("error-msg-span");

// Results
const tipPerPerson = document.getElementById("tip-per-person");
const toltalPerPerson = document.getElementById("total-per-person");

function calculateTip(total, numOfPeople, percentege){
    let tip = total / 100 * percentege;
    let tipPerson = tip / numOfPeople;
    let totalAmount = (total + tip) / numOfPeople;

    tipPerPerson.textContent = tipPerson.toFixed(2);
    toltalPerPerson.textContent = totalAmount.toFixed(2);
}

function verifyNumofPeople(numOfPeople, func) {
    if (numOfPeople <= 0) {
        errorMsg.style.display = 'block';
        people.style.border = '1px solid red';
    } else {
        errorMsg.style.display = 'none';
        people.style.border = 'none';
        func();
    }
}

button5.addEventListener("click", () => {
    verifyNumofPeople(Number(people.value, 
    calculateTip(Number(bill.value), Number(people.value), 5)))
});

button10.addEventListener("click", () => {
    verifyNumofPeople(Number(people.value,
    calculateTip(Number(bill.value), Number(people.value), 10)))
});

button15.addEventListener("click", () => {
    verifyNumofPeople(Number(people.value,
    calculateTip(Number(bill.value), Number(people.value), 15)))
});

button25.addEventListener("click", () => {
    verifyNumofPeople(Number(people.value,
    calculateTip(Number(bill.value), Number(people.value), 25)))
    
});

button50.addEventListener("click", () => {
    verifyNumofPeople(Number(people.value, 
    calculateTip(Number(bill.value), Number(people.value), 50)))
});

custonTip.addEventListener("click", () => {
    verifyNumofPeople(Number(people.value, 
    calculateTip(Number(bill.value), Number(people.value), Number(custonTip.value))))
});