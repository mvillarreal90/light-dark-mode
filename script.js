const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';
let currentTheme = '';

function imageMode (theme) {
  image1.src = `img/undraw_proud_coder_${theme}.svg`;
  image2.src = `img/undraw_feeling_proud_${theme}.svg`;
  image3.src = `img/undraw_conceptual_idea_${theme}.svg`;
}

function toogleDarkLightMode (theme) {
  nav.style.backgroundColor = theme === DARK_THEME ? 'rgb(0 0 0 /50%)' : 'rgb(255 255 255 /50%)';
  textBox.style.backgroundColor = theme === DARK_THEME ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = theme === DARK_THEME ? "Dark Mode" : "Light Mode";
  theme === DARK_THEME ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  imageMode(theme);
}

function switchTheme(event) {
  if (event.target.checked) {
    currentTheme = DARK_THEME;
  } else {
    currentTheme = LIGHT_THEME;
  }
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('theme', currentTheme);
  toogleDarkLightMode(currentTheme);
}

toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for theme
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
  document.documentElement.setAttribute('data-theme', storedTheme);
  debugger;
  if (storedTheme === DARK_THEME) {
    toggleSwitch.checked = true;
    toogleDarkLightMode(DARK_THEME);
  }
}