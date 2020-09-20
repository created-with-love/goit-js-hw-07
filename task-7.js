const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeControlEl.addEventListener('input', onFontSizeChange);

function onFontSizeChange(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}
