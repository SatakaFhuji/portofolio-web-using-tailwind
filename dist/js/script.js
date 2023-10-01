// navbar fixed
window.onscroll = () => {
    const header = document.querySelector('header');
    const fixNav = header.offsetTop;
    const backToTop = document.querySelector('#back-to-top');


    if(window.pageYOffset > fixNav) {
        header.classList.add('navbar-fixed')
        backToTop.classList.remove('hidden')
        backToTop.classList.add('flex')
    }else {
        header.classList.remove('navbar-fixed')
        backToTop.classList.add('hidden')
        backToTop.classList.remove('flex')
    }
}

// humberger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

// click on html element navbar menu in mobile phone gone
window.addEventListener('click', e => {if (e.target != hamburger && e.target != navMenu) {hamburger.classList.remove('hamburger-active');navMenu.classList.add('hidden');}})

// dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', () => {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
})

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}