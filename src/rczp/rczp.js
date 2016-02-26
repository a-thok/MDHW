<<<<<<< HEAD
import './css/main.css';
=======
import './css/main.css';
import getArea from './js/area.js';

Array.prototype.forEach.call(document.querySelectorAll('.filter_title'), (el, index) => {
  el.addEventListener('touchend', function() {
    document.querySelectorAll('.filter_content')[index].style.display = 'flex';
  });
});


getArea(data => {
  let areaData = data.result;
  let provinceHtml = '';
  let cityHtml = '';
  areaData.forEach(item => {
    if (item.type === 'province') {
      provinceHtml += `<li class="province_item" data-code="${item.code}">${item.name}</li>`;
    }
  });
  document.querySelector('.province').innerHTML = provinceHtml;
  var provinces = document.getElementsByClassName('province_item');
  Array.prototype.forEach.call(provinces, el => {
    el.addEventListener('touchend', function() {
      let code = this.getAttribute('data-code');
      areaData.forEach(item => {
        if (item.type === 'city' && item.code.slice(0, 2) === code.slice(0, 2)) {
          cityHtml += `<li class="city_item" data-code="${item.code}">${item.name}</li>`;
        }
      });
      document.querySelector('.city').innerHTML = cityHtml;
      Array.prototype.forEach.call(document.querySelectorAll('.city_item'), (el) => {
        el.addEventListener('touchend', function(e) {
          e.stopPropagation();
          document.querySelector('.filter_content').style.display = 'none';
          document.querySelector('.filter_title_area').textContent = this.textContent.trim();
          
        });
      });
      cityHtml = '';
    });
  });
});
>>>>>>> 8dd2f979d85e2a22c79e14987fc4e2a262878829
