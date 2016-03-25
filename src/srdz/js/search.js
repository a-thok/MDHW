import { $, pageCallback } from 'func'
import doSearch from 'doSearch'
import template from './template.js'
// import render from 'render'

// 搜索切换
export default function search() {
  // $from('.srchBtn_list_item').forEach(el => {
  //   el.addEventListener('click', e => {
  //     if (e.target.classList.contains('srchBtn_list_item-bgColor')) return
  //     $from(e.target.parentElement.children).forEach((_e, _index) => {
  //       _e.classList.remove('srchBtn_list_item-bgColor')
  //     })
  //     e.target.classList.add('srchBtn_list_item-bgColor')
  //   })
  // })
  
  let config = {
    template,
    buttons: $('.pagination_btn'),
    api: '/m/Srdz/SrdzList',
    container: document.querySelector('.hostlist'),
    cb: pageCallback
  }
  
  doSearch({
    config,
    srchbtn: '.srch_btn'
    // url: () => {
    //   let searchText = $('.srchBtn_list')
    //   let type = searchText.getAttributeNode('data-type').value
    //   return (+type === 1) ? '/m/HR/JobList' : '/m/HR/CompanyList'
    // }
  })
}
