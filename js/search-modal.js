const search = document.querySelector('.header__search-button');
const searchInput = document.querySelector('.header__search');

search.addEventListener('click', (e) => {
  e.preventDefault;
  if (searchInput.style.display == 'none' || searchInput.style.display == '') {
    searchInput.style.display = 'block';
  } else {
    searchInput.style.display = 'none';
  }
});