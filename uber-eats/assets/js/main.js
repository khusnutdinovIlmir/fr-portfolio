const btnUp = document.querySelector('.btn-up');

const hideBtnUp = () => {
  if (window.scrollY === 0) {
    btnUp.classList.remove('scrolled');
  } else {
    btnUp.classList.add('scrolled');
  }
};
const scrollToUpOfPage = () => {
  scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}

window.addEventListener('scroll', hideBtnUp);

btnUp.addEventListener('click', scrollToUpOfPage);