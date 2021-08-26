const billAmount = document.querySelector('#bill-amount');
const cashgiven = document.querySelector('#cash-given');
const checkButton = document.querySelector('#check-button');
const message = document.querySelector("#Error-message")
const Notes = [2000, 500, 100, 20, 10, 5, 1]
const NumofNotes = document.querySelectorAll(".NumofNotes")

checkButton.addEventListener('click', function validateAmountAndCash() {
    message.style.display = "none";
    if (billAmount.value > 0) {
        console.log(billAmount.value)
        if (Number(cashgiven.value)  >= Number(billAmount.value)) {
            const amountToBeReturned = cashgiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } else {
            console.log(cashgiven.value)
            showMessage("The cash provided should be atleast be equal to the bill amount!!!");
        }
    } else {
        showMessage("Invalid Bill Amount!!");

    }
});
  
function calculateChange(amountToBeReturned) {
    console.log(amountToBeReturned)
    for (let i = 0; i < Notes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / Notes[i])
        console.log(numberOfNotes, Notes[i])
        amountToBeReturned = amountToBeReturned % Notes[i]
        NumofNotes[i].innerText = numberOfNotes

    }

}
function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}