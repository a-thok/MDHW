import { $ } from 'func';

// 返回顶部
export default function goTop() {
  const goTopBtn = $('.scrollTop');
  document.addEventListener('scroll', () => {
    const pageScroll = document.body.scrollTop;
    if (pageScroll > 50) {
      goTopBtn.classList.remove('is-hidden');
    } else {
      goTopBtn.classList.add('is-hidden');
    }
    function scrollTime(speed) {
      if (document.body.scrollTop <= 0) return;
      document.body.scrollTop -= speed;
      scrollTime();
    }
    goTopBtn.addEventListener('click', () => {
      const distance = document.body.scrollTop;
      const speed = distance / 1000;
      goTopBtn.timer = setTimeout(() => scrollTime(speed), 100);
    });
  });
}
