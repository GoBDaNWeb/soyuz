$(function () {

  $('.menu__btn').on('click', function(){
    $('.menu__btn').toggleClass('menu__btn--active');
  });

  $('.menu__list-link').on('click', function(){
    $('.menu__btn').removeClass('menu__btn--active');
  });

  let header = $('.header');
  let hederHeight = header.height();
  $(window).scroll(function () {
    if($(this).scrollTop() > 1){
      header.addClass('header__fixed');
      $('body').css({
        'paddingTop': hederHeight + 'px'
      });
    } else {
      header.removeClass('header__fixed');
      $('body').css({
        'paddingTop': 0
      })
    }
  });

  $(".select-trigger").click(function () {

    $(this).toggleClass("active");
  
    $(".select-dropdown").fadeToggle(150);
  
  });
  
  $("body").on("click", function (e) {
  
    if (!$(e.target).hasClass("select-trigger") && !$(e.target).parents().hasClass("select-trigger") && !$(e.target).hasClass("select-wrapper") && !$(e.target).parents().hasClass("select-wrapper")) {
  
      $(".select-trigger").removeClass("active");
  
      $(".select-dropdown").fadeOut(150);
  
    }
  
  
  });

});

ymaps.ready(function () {

  var myMap = new ymaps.Map('footerMap', {
      center: [56.893741, 53.238628],
      zoom: 16,
      controls: []
    }, {}),

    myPlacemark1 = new ymaps.Placemark([56.893741, 53.238628], {
      hintContent: '',
      balloonContent: ''
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'images/map-pin.svg',
      // Размеры метки.
      iconImageSize: [30, 30],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-15, -15]
    });



  myMap.behaviors.disable('scrollZoom');

  myMap.geoObjects
    .add(myPlacemark1);

});

