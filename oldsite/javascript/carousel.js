(function () {
  "use strict";

  var carousel = document.getElementsByClassName('carousel')[0],
    slider = carousel.getElementsByClassName('carousel_slider')[0],
    items = carousel.getElementsByClassName('slider_item'),
    prevBtn = document.getElementsByClassName('scroll_left')[0],
    nextBtn = document.getElementsByClassName('scroll_right')[0];

  var width, height, totalWidth, margin = 20,
    currIndex = 0,
    interval, intervalTime = 6000;

  function init() {
    resize();
    move(Math.floor(items.length / 2));
    bindEvents();
    timer();
  }

  function resize() {
    width = Math.max(window.innerWidth * 0.4, 275);
    height = window.innerHeight * 0.5;
    totalWidth = width * items.length;

    slider.style.width = totalWidth + "px";

    for (var i = 0; i < items.length; i++) {
      let item = items[i];
      item.style.width = (width - (margin * 2)) + "px";
      item.style.height = height + "px";
    }
  }

  function move(index) {
    if (index < 1) index = items.length;
    if (index > items.length) index = 1;
    currIndex = index;

    for (var i = 0; i < items.length; i++) {
      let item = items[i],
        box = item.getElementsByClassName('frame_3d')[0];

      if (i == (index - 1)) {
        item.classList.add('slider_item--active');
        box.style.transform = "perspective(1200px)";
      } else {
        item.classList.remove('slider_item--active');
        box.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 40 : -40) + "deg)";
      }
    }

    slider.style.transform = "translate3d(" +
      ((index * -width) + (width / 2) + window.innerWidth / 2) +
      "px, 0, 0)";
  }

  function timer() {
    clearInterval(interval);
    interval = setInterval(() => {
      move(++currIndex);
    }, intervalTime);
  }

  function prev() {
    move(--currIndex);
    timer();
  }

  function next() {
    move(++currIndex);
    timer();
  }

  function bindEvents() {
    window.onresize = resize;
    prevBtn.addEventListener('click', () => { prev(); });
    nextBtn.addEventListener('click', () => { next(); });
  }

  init();

})();
