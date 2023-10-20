const maxImg = document.querySelector('.right-panel img');
const select = document.querySelector('select');
const allLang = ['en', 'ru', 'ua'];

document.querySelectorAll('.left-panel img').forEach(item => item.onmouseenter = (event) => maxImg.src = event.target.src);

// select.addEventListener('change', changeURLLanguage);