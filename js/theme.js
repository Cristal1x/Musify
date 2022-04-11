
const checkbox = document.querySelector('.header__checkbox');

checkbox.addEventListener("click", function() {
  if (checkbox.checked) {
    const dark = document.createElement('link');
    dark.rel = 'stylesheet';
    dark.type = 'text/css';
    dark.href = 'css/dark-style.css';
    dark.id = 'dark';
    document.head.appendChild(dark);
    document.body.classList.add('transition');
  } else {
    document.head.removeChild(dark);
  }
});
