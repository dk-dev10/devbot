document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider__list');
  const slides = document.querySelectorAll('.slider__item');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  const indexDisplay = document.querySelector('.slider-index');
  let currentIndex = 0;

  function goToSlide(index) {
    const windowsWidt = window.innerWidth;
    slider.style.transform = `translateX(-${index * (windowsWidt - 15)}px)`;
    currentIndex = index;
    updateIndex();
  }

  const div = document.createElement('div');
  const span = document.createElement('span');
  const span2 = document.createElement('span');
  span.classList.add('accent');
  function updateIndex() {
    // span.textContent = currentIndex + 1;
    // span2.textContent = slides.length;
    // div.appendChild(span);
    indexDisplay.innerHTML = `<span class='accentSlider' >${currentIndex + 1}</span> | ${
      slides.length
    }`;
  }

  prevBtn.addEventListener('click', function () {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    } else {
      goToSlide(slides.length - 1);
    }
  });

  nextBtn.addEventListener('click', function () {
    if (currentIndex < slides.length - 1) {
      goToSlide(currentIndex + 1);
    } else {
      goToSlide(0);
    }
  });

  let touchStartX = 0;
  let touchEndX = 0;

  slider.addEventListener('touchstart', function (event) {
    touchStartX = event.touches[0].clientX;
  });

  slider.addEventListener('touchend', function (event) {
    touchEndX = event.changedTouches[0].clientX;
    if (touchEndX < touchStartX) {
      nextBtn.click();
    } else if (touchEndX > touchStartX) {
      prevBtn.click();
    }
  });

  updateIndex();
});
