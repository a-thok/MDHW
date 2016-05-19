import slider from 'slider';
import { $ } from 'func';


export function index() {
  slider(document.querySelector('.sliderBox'));

  const gridList = $('.gridList');
  const btn = $('.homeMore');
  const clientList = $('.clientList');

  btn.addEventListener('click', (e) => {
    gridList.classList.toggle('is-expand');
    const isExpand = e.currentTarget.textContent.indexOf('收起') !== -1;
    e.currentTarget.innerHTML = isExpand ?
      '<i class="fa fa-angle-double-down"></i>更多' :
      '<i class="fa fa-angle-double-up"></i>收起';
  });
  clientList.addEventListener('scroll', () => {
    const slipLeft = clientList.scrollLeft;
    const mostScroll = clientList.scrollWidth - clientList.offsetWidth;
    if (slipLeft <= 0) {
      clientList.classList.add('mostLeft');
    } else {
      clientList.classList.remove('mostLeft');
    }
    if (slipLeft >= mostScroll - 5) {
      clientList.classList.add('mostRight');
    } else {
      clientList.classList.remove('mostRight');
    }
  });
}
// export function scroll() {
//   const filterBox = document.querySelector('.topLinksWrapper');
//   const scrollBox = document.querySelector('.topLinks');
//   let margintop = scrollBox.style.marginTop;
//   filterBox.insertAdjacentHTML('beforeend', filterBox.innerHTML);
//   function time() {
//     if (-margintop > scrollBox.clientHeight - 1) {
//       margintop = 0;
//     }
//     margintop -= 1;
//     scrollBox.style.marginTop = `${margintop}px`;
//   }
//   scrollBox.timer = setInterval(() => time(), 100);
// }
