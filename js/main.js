// ===================== Mobile Menu ===================== //
const burger = document.querySelector('.menu__icon')
const menu = document.querySelector('.menu')
const body = document.body

if (burger && menu) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active')
        menu.classList.toggle('active')
        body.classList.toggle('lock')
    })

    menu.addEventListener('click', e => {
      if (e.target.classList.contains('menu')) {
        menu.classList.remove('active')
        burger.classList.remove('active')
        body.classList.remove('lock')
      }
    })
  
    menu.querySelectorAll('.menu__link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active')
        burger.classList.remove('active')
        body.classList.remove('lock')
      })
    })
}


// ===================== Header Blur ===================== //
const scrollHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}
window.addEventListener('scroll', scrollHeader)


// ===================== Dropdown Menu ===================== //
const filter = document.querySelector('.filter')

if (filter) {
  const items = Array.from(document.querySelectorAll('.block-filter'))

  items.forEach(item => {
    item.addEventListener('click', event => {
      item.querySelector('.filter__block-dropdown').classList.toggle('active')
      item.querySelector('.filter__block-icon').classList.toggle('active')

      if (event.target.classList.contains('filter__block-item')) {
        item.querySelector('.filter__block-value').textContent = event.target.textContent;
      }
    })
  })
}


// ===================== Smooth Transition By ID ===================== //
const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
})


// ===================== Swiper ===================== //
const residenceSlider = new Swiper('.residence__swiper', {
    grabCursor: true,
    spaceBetween: 20,
    slidesPerView: 1.19,

    // Navigation arrows
    navigation: {
      nextEl: '.residence__slider-next',
      prevEl: '.residence__slider-prev',
    },
    
    breakpoints: {
        997.98: {
            slidesPerView: 3,
        },
        676.98: {
            slidesPerView: 2,
        }
    }
});


// ===================== Swiper ===================== //
const reviewsSlider = new Swiper('.reviews__slider', {
  grabCursor: true,
  spaceBetween: 20,
  slidesPerView: 1,
  autoHeight: true, 

  // Navigation arrows
  navigation: {
    nextEl: '.reviews__slider-next',
    prevEl: '.reviews__slider-prev',
  },
});


// ===================== Gallery Swiper ===================== //
const galleryItems = document.querySelectorAll('.gallery__item')

if(galleryItems.length > 0) {
  galleryItems.forEach(item => {
    new Swiper(item, {
      slidesPerView: 1,
      autoplay: {
        delay: 7000,
      },
      effect: 'fade',
    })
  })
}


// ===================== Scroll Reveal Animation ===================== //
const scrollReveal = ScrollReveal ({
  origin: 'top',
  distance: '30px',
  duration: 1500,
  delay: 400,
})

scrollReveal.reveal(`.hero__title, .advances__title, .gallery__title, .footer__content`)
scrollReveal.reveal(`.residence__button, .reviews__quotes, .hero__subtitle, .reviews__slide-text, .gallery__subtitle, .begin__text`, {delay: 600,})
scrollReveal.reveal(`.hero__filter, .reviews__slide-info, .gallery__content, .begin__content`, {delay: 800,})
scrollReveal.reveal(`.hero__image`, {origin: 'right', delay: 600,})
scrollReveal.reveal(`.feature__title, .residence__title, .residence__slider-next`, {origin: 'left', distance: '60px',})
scrollReveal.reveal(`.residence__slider-prev`, {origin: 'right'})
scrollReveal.reveal(`.reviews__slider-prev`, {origin: 'right', distance: '15px', delay: 700,})
scrollReveal.reveal(`.reviews__slider-next`, {origin: 'left', distance: '15px', delay: 700,})
scrollReveal.reveal(`.begin__tagline`, {origin: 'left',})
scrollReveal.reveal(`.feature__logo, .advances__item`, {origin: 'left', interval: 150, delay: 700,})
scrollReveal.reveal(`.residence__slide, .gallery__item-wrapper, .footer__list`, {origin: 'right', interval: 250, delay: 700,})
scrollReveal.reveal(`.footer__copy`, {origin: 'bottom',})