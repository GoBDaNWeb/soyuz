const swiper1 = new Swiper(".ease-scaff-hero-swiper", {
  // Optional parameters
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: ".ease-scaff-hero-next",
    prevEl: ".ease-scaff-hero-prev",
  },
});
const swiper2 = new Swiper(".main-construction", {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: ".main-construction-next",
    prevEl: ".main-construction-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
const swiper3 = new Swiper(".additional-construction", {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: ".additional-construction-next",
    prevEl: ".additional-construction-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
const swiper4 = new Swiper(".connection-swiper", {
  // Optional parameters
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: ".connection-next",
    prevEl: ".connection-prev",
  },
  pagination: {
    el: ".connection-pagination",
    type: "fraction",
  },
});

const swiper5 = new Swiper(".scaff-swiper", {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: ".scaff-next",
    prevEl: ".scaff-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
