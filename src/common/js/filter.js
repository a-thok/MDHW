import { $, $parent, $from } from '../../common/js/func.js';

// 固定过滤
export function fixFilter() {
  function calc() {
    const headerHeight = $('header').clientHeight;
    const filter = $('.filter');
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop >= headerHeight) {
        filter.classList.add('is-fixed');
      } else {
        filter.classList.remove('is-fixed');
      }
    });
  }
  calc();
  window.addEventListener('resize', calc);
}

// 显示过滤
export function showFilter() {
  $from('.filter_title').forEach((el, index) => {
    el.addEventListener('click', e => {
      document.documentElement.classList.add('is-static'); // 阻止body滚动
      $from('.filter_item').forEach((_el, _index) => {
        if (_index !== index) _el.classList.remove('is-show');
      });
      const wrapper = $parent(e.target, '.filter_item');
      const isShow = wrapper.classList.toggle('is-show');
      if (!isShow) document.documentElement.classList.remove('is-static'); // 恢复body滚动
    });
  });
}

// 隐藏过滤
export function hideFilter() {
  $from('.filter_content_btn').forEach((el) => {
    el.addEventListener('click', e => {
      $parent(e.target, '.filter_item').classList.remove('is-show');
      document.documentElement.classList.remove('is-static'); // 恢复body滚动
    });
  });
}

// 选择过滤
export function selectFilter(cb) {
  $from('.filter_content_list').forEach(el => {
    if (el.classList.contains('filter_content_list-province')) return;

    el.addEventListener('click', e => {
      const cl = e.target.classList;
      if (cl.contains('is-active')) return;
      if ((e.target !== e.currentTarget) || cl.contains('grid_item_icon')) {
        const wrapper = $parent(e.target, '.filter_item');

        // 选中项视觉效果
        const items = cl.contains('grid_item_icon') ? $from('.grid_item_icon') : $from(e.currentTarget.children);
        items.forEach(_e => _e.classList.remove('is-active'));

        let type; // 过滤值
        let text; // 填充文本
        if (cl.contains('filter_content_list_item')) {
          cl.add('is-active');
          type = e.target.getAttribute('data-code');
          text = e.target.textContent.trim();
        } else {
          let target = $parent(e.target, '.filter_content_list_item');
          target.classList.add('is-active');
          type = target.getAttribute('data-code');
          text = target.textContent.trim();
        }

        wrapper.querySelector('.filter_active').textContent = text;
        const filter = e.currentTarget.getAttribute('data-filter');
        cb(filter, type);
        // 隐藏当前过滤器
        wrapper.classList.remove('is-show');
        document.documentElement.classList.remove('is-static'); // 恢复body滚动
      }
    });
  });
}

// 更多过滤
export function moreFilter(onset, reset) {
  // 选取
  $('.filter_content_more').addEventListener('click', e => {
    if (e.target.classList.contains('filter_more_list_item-active')) return;
    if (e.target.classList.contains('filter_more_list_item')) {
      const filter = e.target.parentElement.getAttribute('data-filter');
      const type = e.target.getAttribute('data-code');
      onset(filter, type);
      $from(e.target.parentElement.children).forEach(el => {
        el.classList.remove('filter_more_list_item-active');
      });
      e.target.classList.add('filter_more_list_item-active');
    }
  });
  // 重置
  $('.reset').addEventListener('click', () => {
    $from('.filter_more_list').forEach(el => {
      $from(el.children).forEach((_el, _index) => {
        if (_index === 0) {
          _el.classList.add('filter_more_list_item-active');
        } else {
          _el.classList.remove('filter_more_list_item-active');
        }
      });
    });
    reset();
  });
}

// 生成省市过滤列表
export function generateAreaFilter() {
  fetch(`http://${MAIN_HOST}/Dict/city`)
    .then(res => res.json())
    .then(data => {
      const areaData = data.result;
      const provinceContainer = $('.filter_content_list-province');
      const cityContainer = $('.filter_content_list-city');

      // 填充省份列表
      provinceContainer.innerHTML = areaData.reduce((previousValue, currentValue) => {
        if (currentValue.type === 'province') {
          return (
            `${previousValue}
            <li class="filter_content_list_item province_item" data-code="${currentValue.code}">
              ${currentValue.name}
            </li>`
          );
        }
        return previousValue;
      }, '');

      // 选择省份
      provinceContainer.addEventListener('click', e => {
        if (e.target.nodeName === 'LI') {
          const code = e.target.getAttribute('data-code');
          // 填充城市列表
          cityContainer.innerHTML = areaData.reduce((previousValue, currentValue) => {
            if (currentValue.type === 'city' && currentValue.code.slice(0, 2) === code.slice(0, 2)) {
              return (
                `${previousValue}
                <li class="filter_content_list_item city_item" data-code="${currentValue.code}">
                  ${currentValue.name}
                </li>`
              );
            }
            return previousValue;
          }, '');
        }
      });
    });
}
