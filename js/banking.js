//Handle depopsite button event
document.getElementById('deposit-button').addEventListener('click', function () {
    // kaj kre kina dekhar jnno console kre dekhbo
    // console.log('deposite button clicked');

    // 1st step:------get the amount deposited/////////////
    // button click kre input k dhre anar jnno
    const depositInput = document.getElementById('deposit-input');
    //inputer vetrer amount dhorar jnno
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    console.log(newDepositAmount);
    // //update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTxt = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositTxt);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    // // //update account balance
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear the deposit input field 
    depositInput.value = '';
})

//handle withdraw with event handler
//Handle depopsite button event

document.getElementById('withdraw-button').addEventListener('click', function () {
    // kaj kre kina dekhar jnno console kre dekhbo
    // console.log('withdrawe button clicked');

    // 1st step:------get the amount withdrawed/////////////
    // button click kre input k dhre anar jnno
    const withdrawInput = document.getElementById('withdraw-input');
    //inputer vetrer amount dhorar jnno
    const newwithdrawAmountText = withdrawInput.value;
    const newwithdrawAmount = parseFloat(newwithdrawAmountText);
    console.log(newwithdrawAmount);
    // //update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previouswithdrawTxt = withdrawTotal.innerText;
    const previouswithdrawAmount = parseFloat(previouswithdrawTxt);
    const newwithdrawTotal = previouswithdrawAmount + newwithdrawAmount;
    withdrawTotal.innerText = newwithdrawTotal;
    // // //update account balance
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newwithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear the withdraw input field 
    withdrawInput.value = '';
})

//handle withdraw with event handler
