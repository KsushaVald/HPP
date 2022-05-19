document.addEventListener ('DOMContentLoaded', function() {
  const serachBtn = document.querySelector('.js-search-btn');
  const searchBlock = document.querySelector('.js-search-block');
  const searchCloseBtn = document.querySelector('.js-search-close');
  const btnBurger = document.querySelector('.js-burger');
  const menu = document.querySelector('.js-menu');
  const btnMenuClose = document.querySelector('.js-menu-close');
  const contactCloseBtn = document.querySelector('.js-contact-close');
  const contacts = document.querySelector('.js-contacts');
  const contactReturnBtn = document.querySelector('.js-contact-return');
  let tlCloseX = gsap.timeline();
  tlCloseX.pause();
  tlCloseX.add('start')
    .to(contacts, {x: "-87%", duration: 0.7}, 'start')
    .to(contactCloseBtn, {opacity: 0, display: 'none', duration: 0.7}, 'start')
    .to(contactReturnBtn, {display: 'block', opacity: 1, duration: 0.7})

  let tlReturnX = gsap.timeline();
  tlReturnX.pause();
  tlReturnX.add('start')
    .to(contacts, {x: "0%", duration: 0.7}, 'start')
    .to(contactReturnBtn, {display: 'none', opacity: 0, duration: 0.7}, 'start')
    .to(contactCloseBtn, {opacity: 1, display: 'block', duration: 0.7})



  let tlCloseY = gsap.timeline();
  tlCloseY.pause();
  tlCloseY.add('start')
    .to(contacts,{y: "65%", duration: 0.7}, 'start')
    .to(contactCloseBtn, {opacity: 0, display: 'none', duration: 0.7}, 'start')
    .to(contactReturnBtn, {display: 'block', opacity: 1, duration: 0.7});

  serachBtn.addEventListener('click', function(){
    serachBtn.classList.add('close');
    searchBlock.classList.remove('close');
  });

  let tlReturnY = gsap.timeline();
  tlReturnY.pause();

  tlReturnY.add('start')
  .to(contacts,{y: "0%", duration: 0.7}, 'start')
  .to(contactReturnBtn, {display: 'none', opacity: 0, duration: 0.7}, 'start')
  .to(contactCloseBtn, {opacity: 1, display: 'block', duration: 0.7});



  searchCloseBtn.addEventListener('click', function(){
    searchBlock.classList.add('close');
    serachBtn.classList.remove('close');
  });

  btnBurger.addEventListener('click', function(){
    menu.classList.remove('close');
  })

  btnMenuClose.addEventListener('click', function(){
    menu.classList.add('close');
  })


  contactCloseBtn.addEventListener('click', function(){
   if (window.innerWidth>1024){
    tlCloseX.restart();
   }
   else {
    tlCloseY.restart();
   }
  });

  contactReturnBtn.addEventListener('click', function(){
    if (window.innerWidth>1024){
      tlReturnX.restart();
     }
     else {
      tlReturnY.restart();
     }
  })

  new JustValidate('.section-about__form', {
    colorWrong: '#F06666',
    rules: {
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      email: 'Недопустимый формат',
    },
  });

  new JustValidate('.section-contacts__form', {
    colorWrong: '#FF3030',
    rules: {
      email: {
        required: true,
        email: true,
      },
      name: {
        required: true,
        minLength: 2,
        maxLength: 10,
      }
    },
    messages: {
      email: 'Недопустимый формат',
      name: 'Недопустимый формат'
    },
  });


  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
      center: [55.760135, 37.618649],
      zoom: 13,
      controls: []
    });
    var myPlacemark = new ymaps.Placemark([55.769527, 37.638467], {}, {
      iconLayout: 'default#image',
      iconImageHref: '/img/Ellipse.png',
      iconImageSize: [12, 12],
    });
    myMap.geoObjects.add(myPlacemark);
  }

});
