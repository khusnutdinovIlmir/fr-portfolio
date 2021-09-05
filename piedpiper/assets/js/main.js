document.addEventListener("DOMContentLoaded", function (event) {
  //var element = document.querySelector('.test');

  function resize() {
    if (window.innerWidth > 768) {
      header.classList.remove('active');
      behind.style.visibility = 'hidden';
    }
  }
  // For performance reasons, this method should be 
  // "debounced" so that it doesn't have to execute 
  // on every resize event, only when you're done resizing.
  window.onresize = resize;
});

//блокировка скролла
const disableScroll = () => {
  const widthScroll = window.innerWidth - document.body.offsetWidth;
  document.body.dbScrollY = window.scrollY;
  document.body.style.cssText = `
    position: fixed;
    top: ${-window.scrollY}px;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    padding-right: ${widthScroll}px;
  `;
};

const enableScroll = () => {
  document.body.style.cssText = '';
  window.scroll({
    top: document.body.dbScrollY,
  })
};

//бургер меню
const header = document.querySelector('.header');
const menuList = document.querySelector('.header__menu');
const toggleBtn = document.querySelector('.header__toggle-btn');
const behind = document.querySelector('.behind');

const openMenu = () => {
  header.classList.toggle('active');
  //toggleBtn.classList.toggle('oppened');
  behind.style.visibility = 'visible';
  disableScroll();
};

const closeMenu = () => {
  header.classList.remove('active');
  //toggleBtn.classList.remove('oppened');
  behind.style.visibility = 'hidden';
  enableScroll();
};

const doMenu = () => {
  if (!header.classList.contains('active')) {
    openMenu();
  } else {
    closeMenu();
  }
};

menuList.addEventListener('click', event => {
  event.preventDefault();
  const target = event.target;
  const element = document.querySelector(event.srcElement.hash);
  if (target.matches('a')) {
    let headerHeight = (header.clientHeight >= 82) ? 82 : header.clientHeight
    window.scroll({
      left: 0,
      top: element.offsetTop - headerHeight,
      behavior: "smooth",
    })
    if (header.classList.contains('active')) {
      closeMenu();
    }
  }
});

menuList.addEventListener('click', event => {
  event.preventDefault();
  const target = event.target;
  const element = document.querySelector(event.srcElement.hash);
  if (target.matches('a')) {
    let headerHeight = (header.clientHeight >= 84) ? 84 : header.clientHeight
    window.scroll({
      left: 0,
      top: element.offsetTop - headerHeight,
      behavior: "smooth",
    })
    if (header.classList.contains('active')) {
      closeMenu();
    }
  }
});

toggleBtn.addEventListener('click', doMenu);
behind.addEventListener('click', closeMenu);