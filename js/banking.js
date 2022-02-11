// handle deposte button event
// vedio 06
document.getElementById('deposit-button').addEventListener('click', function(){
     // update deposite total

      const depositeInput = document.getElementById('deposit-input');
      const newDepositeAmountText = depositeInput.value ;
      const newDepositeAmount = parseFloat(newDepositeAmountText);
      //  console.log(depositeAmount);

      const depositeTotal = document.getElementById('deposite-total');
      const previousDepositeText = depositeTotal.innerText;
      const previousDepositeAmount = parseFloat(previousDepositeText);
     
       const newDepositeTotal = previousDepositeAmount + newDepositeAmount;
       depositeTotal.innerText = newDepositeTotal;

      // clean the deposite input field 

       depositeInput.value = ''


       // update account balance 
       const balanceTotal = document.getElementById('balance-total')
      const balanceTotalText = balanceTotal.innerText;
      const previousBalanceTotal = parseFloat(balanceTotalText);
      const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
      balanceTotal.innerText = newBalanceTotal;

});

// handle withdraw event handlar

document.getElementById('withdraw-button').addEventListener('click', function(){
      const withdrawInput = document.getElementById('withdraw-input');
      const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
//     console.log(newWithdrawAmount);

    // set withdrawToatal

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
//     console.log(previousWithdrawAmount);
const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

withdrawTotal.innerText = newWithdrawTotal;


//update balance
const balanceTotal = document.getElementById('balance-total'); 
const previousBalanceText = balanceTotal.innerText;
const previouBalanceTotal = parseFloat(previousBalanceText);
// console.log(previouBalanceAmount);
const newBalanceTotal = previouBalanceTotal - newWithdrawAmount;
balanceTotal.innerText = newBalanceTotal;

// clear withdraw input field
 withdrawInput.value = '';
})