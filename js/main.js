function burgerMenu() {
  const menu = document.querySelector('#menu');
  const burger = document.querySelector('.burger');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
  });
}

burgerMenu();

// dark mode
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

const modeBtn = document.querySelector('#mode');

modeBtn.addEventListener('click', () => {
  document.querySelector('html').classList.toggle('dark');

  if (document.querySelector('html').classList.contains('dark')) {
    localStorage.theme = 'dark';
  } else {
    localStorage.theme = 'light';
  }
});
