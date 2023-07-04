window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrolled = window.scrollY;
    if (scrolled === 0) {
      navbar.classList.add('transparent');
      navbar.classList.remove('white');  
    } else {
      navbar.classList.add('white');
      navbar.classList.remove('transparent');
    }
  });

  window.addEventListener('scroll', function() {
    var navitem = document.querySelector('.nav-item');
    var scrolled = window.scrollY;
    if (scrolled === 0) {
      navitem.classList.add('branco');
      navitem.classList.remove('purble');  
    } else {
      navitem.classList.add('purble');
      navitem.classList.remove('branco');
    }
  });

  window.addEventListener('scroll', function() {
    var navitem2 = document.querySelector('.nav-item2');
    var scrolled = window.scrollY;
    if (scrolled === 0) {
      navitem2.classList.add('branco');
      navitem2.classList.remove('purble');  
    } else {
      navitem2.classList.add('purble');
      navitem2.classList.remove('branco');
    }
  });

  window.addEventListener('scroll', function() {
    var navitem3 = document.querySelector('.nav-item3');
    var scrolled = window.scrollY;
    if (scrolled === 0) {
      navitem3.classList.add('branco');
      navitem3.classList.remove('purble');  
    } else {
      navitem3.classList.add('purble');
      navitem3.classList.remove('branco');
    }
  });
  
  window.addEventListener('scroll', function() {
    var logo = document.querySelector('.logo');
    var scrolled = window.scrollY;
    if (scrolled === 0) {
      logo.src = './img/Logo.png';
    } else {
      logo.src = './img/LogoPurble.png';
    }
  });
  
//Carrossel

document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector('.carousel');
  const prevArrow = document.querySelector('.prev-arrow');
  const nextArrow = document.querySelector('.next-arrow');

  nextArrow.addEventListener('click', () => {
    carousel.scrollBy({ left: carousel.offsetWidth, behavior: 'smooth' });
  });

  prevArrow.addEventListener('click', () => {
    carousel.scrollBy({ left: -carousel.offsetWidth, behavior: 'smooth' });
  });
});
