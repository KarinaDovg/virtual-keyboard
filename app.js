/* eslint-disable import/extensions */
import keyboardRussian from './assets/russian.js';
import keyboardEnglish from './assets/english.js';

function initialization() {
  if (localStorage.getItem('Language') === null) {
    localStorage.setItem('Language', 'en');
    document.body.innerHTML = keyboardEnglish;
  } else if (localStorage.getItem('Language') === 'en') {
    document.body.innerHTML = keyboardEnglish;
  } else {
    document.body.innerHTML = keyboardRussian;
  }
}

function changeLanguage() {
  if (localStorage.getItem('Language') === 'en') {
    document.body.innerHTML = keyboardRussian;
    localStorage.setItem('Language', 'ru');
  } else {
    document.body.innerHTML = keyboardEnglish;
    localStorage.setItem('Language', 'en');
  }
}

initialization();

document.addEventListener('keydown', (event) => {
  if (event.key === 'CapsLock') {
    changeLanguage();
  }
});
