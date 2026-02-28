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

  //mousemove home img
  document.addEventListener('mousemove', move);
  function move(e){
    this.querySelectorAll('.img').forEach(layer => {
      const speed = layer.getAttribute('data-speed')
      const x = (window.innerWidth - e.pageX*speed) / 120
      const y = (window.innerWidth - e.pageY*speed) / 120
      layer.style.transform = `translateX(${x}px) translateY(${y}px)`

    })
  }
