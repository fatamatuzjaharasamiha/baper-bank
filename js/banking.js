//Handle depopsite button event

document.getElementById('deposit-button').addEventListener('click', function () {
    // kaj kre kina dekhar jnno console kre dekhbo
    // console.log('deposite button clicked');

    // 1st step:------get the amount deposited/////////////
    // button click kre input k dhre anar jnno
    const depositInput = document.getElementById("deposit-input");
    //inputer vetrer amount dhorar jnno
    const newdepositeAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newdepositeAmountText);

    const depositTotal = document.getElementById('deposit-total');

    const previousDepositTxt = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositTxt);

    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;





    //clear the deposit input field
    depositInput.value = '';
})