function adjustContainerHeight() {
  var container = document.querySelector('.image_ui_container1');
  var background_pBLEY = document.querySelector('.background_pBLEY');
  var swift_ui = document.querySelector('.swift_ui');

  if (background_pBLEY.clientHeight >= swift_ui.clientHeight) {
    container.style.height = background_pBLEY.clientHeight + "px";
  } else {
    container.style.height = swift_ui.clientHeight + "px";
  }
}

window.addEventListener('load', adjustContainerHeight); // Устанавливаем высоту при загрузке страницы
window.addEventListener('resize', adjustContainerHeight);




const smoothCoef = 0.16;
const smoothScroll = document.querySelector("html");
const smoothScrollBar = document.querySelector("html");

function onResize(e) {
  smoothScrollBar.style.height = smoothScroll.offsetHeight + "px";
}

window.addEventListener("resize", onResize);
onResize();

let prevY = window.scrollY;
let curY = window.scrollY;
let y = window.scrollY;
let dy;

function loop(now) {
  curY = window.scrollY;
  dy = curY - prevY;
  y = Math.abs(dy) < 1 ? curY : y + dy * smoothCoef;
  prevY = y;
  smoothScroll.style.transform = `translate3d(0,${-y}px,0)`;

  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);


