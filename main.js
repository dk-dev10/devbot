const container = document.querySelector('.slider__list');
const prev = document.querySelector('.slider-prev');
const next = document.querySelector('.slider-next');

const activeIndex = document.querySelector('.activeIndex');
const countLength = document.querySelector('.countLength');

const items = document.querySelectorAll('.slider__item');

countLength.textContent = items.length;

let centerIndex = 1;

function updateCenterElementIndex() {
  const containerRect = container.getBoundingClientRect();
  const containerCenterX = containerRect.left + containerRect.width / 2;

  items.forEach((item, index) => {
    const itemRect = item.getBoundingClientRect();
    const itemCenterX = itemRect.left + itemRect.width / 2;

    if (
      itemCenterX >= containerCenterX &&
      itemCenterX < containerCenterX + itemRect.width
    ) {
      centerIndex = index + 1;
      activeIndex.textContent = centerIndex;
      if (centerIndex === 1) {
        prev.disabled = true;
      } else if (centerIndex === items.length) {
        next.disabled = true;
      } else {
        prev.disabled = false;
        next.disabled = false;
      }
      return;
    }
  });
}
container.addEventListener('scroll', updateCenterElementIndex);
updateCenterElementIndex();

function scrollSlider(count = 1) {
  container.scrollBy({
    left: items[0].offsetWidth * count,
    behavior: 'smooth',
  });
}

next.addEventListener('click', () => scrollSlider());
prev.addEventListener('click', () => scrollSlider(-1));

const modalNav = document.querySelector('.modal__nav');
const modalBtn = document.querySelector('.modal__nav-btn');

modalBtn.addEventListener('click', () => {
  modalNav.classList.toggle('open');
  modalBtn.classList.toggle('open');
  document.body.style.overflow = modalNav.classList.contains('open')
    ? 'hidden'
    : 'scroll';
});
