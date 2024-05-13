var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    loop: true
});



const goTopBtn = document.querySelector(".go-top");


window.addEventListener("scroll", trackScroll);
goTopBtn.addEventListener("click", goTop);

function trackScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    goTopBtn.classList.add("go-top--show");
  } else {
    goTopBtn.classList.remove("go-top--show");
  }
}

function goTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -75); 
    setTimeout(goTop, 0);
  }
} 

const nav = document.querySelector('#navi');
const navBtn = document.querySelector('#nav-butn');
const navBtnImg = document.querySelector('#nav-btn__img');

navBtn.onclick = () => {
  if (nav.classList.toggle('open')) {
    document.querySelector('.lock').style.overflow = 'hidden';
    navBtnImg.src = "/img/icon/free-icon-crossed-4219073.png";
  } else {
    document.querySelector('.lock').style.overflow = 'auto';
    navBtnImg.src = "/img/icon/free-icon-menu-4254068.png";
  }
};

const links = document.querySelectorAll('#navi a');
links.forEach(link => {
link.addEventListener('click', (event) => {
  event.preventDefault();
  nav.classList.remove('open');
   document.querySelector('.lock').style.overflow = 'auto';
   navBtnImg.src = "/img/icon/free-icon-menu-4254068.png";
  
  const targetSectionId = link.getAttribute('href');
  if (document.querySelector(targetSectionId)) {
     document.querySelector(targetSectionId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    }) 
  }
})
})


document.querySelectorAll('.img-content img').forEach(img => {
    img.onclick = () => {
        document.querySelector('.pop-up').style.display = 'block';
        document.querySelector('.pop-up img').src = img.getAttribute('src')
    }
});

document.querySelector('.pop-up span').onclick = () => {
    document.querySelector('.pop-up').style.display = 'none';
}


function rotateCard(card) {
  var front = card.querySelector('.front');
  var back = card.querySelector('.back');
  
  if (front.style.transform === 'rotateY(-180deg)') {
    front.style.transform = 'rotateY(0deg)';
    back.style.transform = 'rotateY(180deg)';
  } else {
    front.style.transform = 'rotateY(-180deg)';
    back.style.transform = 'rotateY(0deg)';
  }
}



AOS.init();