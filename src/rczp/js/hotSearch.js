// import render from 'render';
// import { $, $from } from 'func';
// import template from './template';

// export default function hotSearch() {
//   let button = document.querySelector('.list_more');
//   let config = {
//     api: '/m/HR/JobList',
//     body: {
//       pageIndex: 0,
//       pageSize: 10
//     },
//     template: template,
//     container: document.querySelector('.list')
//   }

//   // 模糊搜索
//   const hotitems = $('.cate_item_list').children;
//   const hotbox = $('.cate');
//   // 循环目标元素，点击获取元素值，作为keyword的值
//   $from(hotitems).forEach(hotitem => {
//     hotitem.addEventListener('click', e => {
//       hotbox.classList.add('is-hidden');
//       button.classList.remove('is-hidden');

//       const keyword = e.target.textContent.trim();

//       Object.assign(config, {
//         body: {
//           pageIndex: 0,
//           pageSize: 10,
//           keyword: keyword
//         },
//         immediate: true
//       });
//       render(button, config);
//     });
//   });
// }
