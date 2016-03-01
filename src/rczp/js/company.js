import getArea from './area.js';
import { forEachEl, queryParent } from './common.js';

export default function company() {
  
  let filterContents = document.querySelectorAll('.filter_content');
  // 弹出过滤
  Array.prototype.forEach.call(document.querySelectorAll('.filter_title'), (el, index) => {
    el.addEventListener('click', function() {
      Array.prototype.forEach.call(filterContents, (_el, _index) => {
        _el.style.display =  _index === index ? 'flex' : 'none';
      });
    });
  });
  // 取消过滤弹出
  Array.prototype.forEach.call(document.querySelectorAll('.filter_content_btn'), el => {
    el.addEventListener('click', () => {
      forEachEl(filterContents, _el => {
        _el.style.display = 'none';
      });
    });
  });
  
  forEachEl('.filter_content_list', el => {
    if (el.classList.contains('filter_content_list-province')) return;
    el.addEventListener('click', e => {
      if (e.target.classList.contains('filter_content_list_item')) {
        // 填充相应文本
        let text = e.target.textContent.trim();
        let title = queryParent(e.target, '.filter_item').querySelector('.filter_title_text');
        title.textContent = text;
        // 隐藏过滤弹出
        forEachEl(filterContents, _el => {
          _el.style.display = 'none';
        });
      }
    });
  });
  
  // 获取省市县数据，绑定事件
  getArea(data => {
    let areaData = data.result;
    let provinceHtml = '';
    let cityHtml = '';
    let provinceContainer = document.querySelector('.filter_content_list-province');
    let cityContainer = document.querySelector('.filter_content_list-city');
    
    // 获取省份，拼接成HTML插入文档相关位置
    areaData.forEach(item => {
      if (item.type === 'province') {
        provinceHtml += `<li class="filter_content_list_item province_item" data-code="${item.code}">${item.name}</li>`;
      }
    });
    provinceContainer.innerHTML = provinceHtml;
    
    // 选择省份
    provinceContainer.addEventListener('click', e => {
      if (e.target.nodeName === 'LI') {
        // 获取相应城市，拼接成HTML插入文档相关位置
        let code = e.target.getAttribute('data-code');
        areaData.forEach(item => {
          if (item.type === 'city' && item.code.slice(0, 2) === code.slice(0, 2)) {
            cityHtml += `<li class="filter_content_list_item city_item" data-code="${item.code}">${item.name}</li>`;
          }
        });
        cityContainer.innerHTML = cityHtml;
        cityHtml = '';
      }
    });
    
    // 选择城市
    // cityContainer.addEventListener('click', e => {
    //   e.stopPropagation();
    //   if (e.target.nodeName === 'LI') {
    //     document.querySelector('.filter_content').style.display = 'none';
    //     document.querySelector('.filter_title_area').textContent = e.target.textContent.trim();
    //   }
    // });
  });
}
