const button = document.querySelector('#button');
const options = document.querySelectorAll('input[name="score"]'); 

button.addEventListener ('click', showThankCard)

function showThankCard () {
  document.querySelector(".card_thanks").style.display = "flex";
  document.querySelector("#card").style.display = "none"

  let selectedOption ; 

  for (const option of options) {
    if (option.checked) {
      selectedOption = option.value ; 
      break;
    }
  }

  rank.innerText = selectedOption ? `You selected ${selectedOption} out of 5` : `You haven't selected`;

}

