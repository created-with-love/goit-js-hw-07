const validationBtnEl = document.querySelector('#validation-input');

validationBtnEl.addEventListener('blur', onBlurCheck);
const validBtnClassList = validationBtnEl.classList;

function onBlurCheck(event) {
  if (validationBtnEl.value.length === Number(validationBtnEl.dataset.length)) {
    validBtnClassList.add('valid');
    validBtnClassList.remove('invalid');
  } else {
    validBtnClassList.remove('valid');
    validBtnClassList.add('invalid');
  }
}
