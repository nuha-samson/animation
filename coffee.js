//menu show Y hidden
const navMenu = document.getElementById('nav-menu'), 
   toggleMenu = document.getElementById('nav-toggle'),
  closeMenu = document.getElementById('nav-close');
  //show
  toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
  });
//hidden
 closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
  }); 