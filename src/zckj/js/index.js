import { $, $from } from '../../common/js/func.js';
import slider from 'slider';

export default function index() {
  slider($('.sliderBox'));

  // 计算侧边栏主内容区高度
  // function asideWrapHeight() {
  //   $('.aside_wrap').style.height = `${document.documentElement.clientHeight}px`;
  // }
  // asideWrapHeight();
  // window.addEventListener('resize', () => {
  //   asideWrapHeight();
  // });

  // 获取数据，填充侧边栏
  fetch(`http://${MAIN_HOST}/Dict/city2`)
    .then(res => res.json())
    .then(data => {
      const htmlObj = {};
      data.result.forEach(item => {
        // 计算aside_fold折叠列表的高度，以便实现动画效果
        const height = item.citys.length * 47;

        const citys = item.citys.reduce((pre, cur) => (
          `${pre}<li class="aside_fold_item" data-code="${cur.code}">${cur.name}</li>`
        ), '');
        const html = `<li class="aside_item_wrap">
        <p class="aside_item">${item.name}</p>
        <ul class="aside_fold" data-height="${height}">
          ${citys}
        </ul>
      </li>`;
        const cate = item.pinyin[0];
        if (!htmlObj[cate]) htmlObj[cate] = [];
        htmlObj[cate].push(html);
      });

      Object.keys(htmlObj).forEach(prop => {
        const htmlStart = `<section class="aside_sect aside_sect-${prop.toLowerCase()}"><h3 class="aside_sect_title">${prop}</h3><ul class="aside_cate">`;
        const htmlEnd = '</ul></section>';
        const html = htmlObj[prop].reduce((pre, cur, index, array) => {
          if (index === array.length - 1) return pre + cur + htmlEnd;
          return pre + cur;
        }, htmlStart);
        $('.aside_contentWrap').insertAdjacentHTML('beforeend', html);
      });
    });

  // 点击字母，滚动到相应位置
  $from('.alphabet').forEach((item) => {
    item.addEventListener('click', e => {
      if (e.target.classList.contains('alphabet_item')) {
        const container = $('.aside_contentWrap');

        const alphabet = e.target.textContent.toLowerCase();
        const target = $(`.aside_sect-${alphabet}`).offsetTop;
        const span = (target - container.scrollTop) / 100;

        const scroll = () => {
          const lastScrollTop = container.scrollTop;
          if (lastScrollTop === target) return;

          const remainSpan = target - lastScrollTop;
          const noEnoughRemainSpan = (lastScrollTop < target && remainSpan < span) || (lastScrollTop > target && remainSpan > span);
          if (noEnoughRemainSpan) {
            container.scrollTop = target;
            return;
          }

          container.scrollTop += span;
          if (lastScrollTop === container.scrollTop) return;
          setTimeout(scroll, 1);
        };

        scroll();
      }
    });
  });

  // 点击顶栏城市，滑出侧边栏
  $('.header_sect-aside').addEventListener('click', () => {
    document.documentElement.classList.add('is-static'); // 阻止body滚动
    $('.aside').classList.add('is-show');
  });
  $('.aside_return').addEventListener('click', () => {
    $('.aside').classList.remove('is-show');
    document.documentElement.classList.remove('is-static'); // 恢复body滚动
  });

  $('.aside_contentWrap').addEventListener('click', e => {
    const classList = e.target.classList;
    // 点击省份，展开城市列表
    if (classList.contains('aside_item')) {
      $from('.aside_contentWrap .aside_fold').forEach(item => {
        item.style.height = '';
      });
      const ul = e.target.nextElementSibling;
      const height = ul.clientHeight;
      ul.style.height = height ? 0 : `${ul.getAttribute('data-height')}px`;
    }

    // 点击城市，关闭侧边栏，替换顶栏城市名字
    if (classList.contains('aside_fold_item')) {
      const text = e.target.textContent;
      $('.header_sect-aside_text').textContent = text;
      $('.aside').classList.remove('is-show');
      document.documentElement.classList.remove('is-static'); // 恢复body滚动
    }
  });
}
