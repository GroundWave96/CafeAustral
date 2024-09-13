var swiper = new Swiper(".mainCarousel", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".products", {
  slidesPerView: 4,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".productsMobile", {
  slidesPerView: 2,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* var swiper = new Swiper(".productsMobile", {
  slidesPerView: 2,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
}); */

/* window.addEventListener('resize', function () {
  if (window.matchMedia('(max-width: 1250px)').matches) {
    var swiper = new Swiper(".products", {
      slidesPerView: 2,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {
    var swiper = new Swiper(".products", {
      slidesPerView: 4,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}); */

const btnMobile = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const body = document.body;

function toggleMenu(event) {
  if (event.type == 'touchstart') event.preventDefault();

  nav.classList.toggle('active');

  body.classList.toggle('menu-open');
}

function closeMenu() {
  if (nav.classList.contains('active')) {
    nav.classList.remove('active');
    body.classList.remove('menu-open');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

nav.addEventListener('mouseleave', closeMenu);