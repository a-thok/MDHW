import { forEachEl, queryParent } from './common.js'

export default function list() {
  forEachEl('.filter_content_slect_list_item_p',function(el){
//  Array.prototype.forEach.call(document.querySelectorAll('.filter_content_slect_list_item_p'),function(el){
   el.addEventListener('touchend',function(e) {
     if(e.target.nodeName === 'SPAN'){
       let parent = queryParent(e.target,'.filter_content_slect_list_item_p');
       let spans = parent.querySelectorAll('span');
       forEachEl(spans,(element,index,array) =>{
         console.log(array)
         element.classList.remove('filter_content_slect_list_item_p-backColor');
       })
       e.target.classList.add('filter_content_slect_list_item_p-backColor');
     }
   })
 })
}
