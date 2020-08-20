// Your code goes in here
// debugger;
document.querySelector('#header').innerText = 'Tip Calculator';
function calculateTip() {
  const billAmount = document.getElementById('bill-amount');
  const serviceRating = document.getElementById('service-rating');
  const peopleCount = document.getElementById('people-count');
  const calculate = document.getElementById('calculate');
  const output = document.getElementById('tip-amount');
  calculate.addEventListener('click', calculateTip);

  billAmount.value === billAmount.innerText;

  return (output.innerText = (billAmount.value * 10) / 100);
}

// console.log(billAmount.value);
calculateTip();
