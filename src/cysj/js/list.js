import { $, $parent } from '../../common/js/func.js'
import { showFilter } from 'filter'
import { pageCallback } from 'func'
import render from 'render'
showFilter()

// 选择过滤
export function listfil() {
  [...$('.filter_content_list')].forEach(el => {
    el.addEventListener('click', e => {
      if (e.target.classList.contains('filter_content_list_item-color')) return
      if (e.target.classList.contains('filter_content_list_item')) {
        [...e.target.parentElement.children].forEach(_e => {
          _e.classList.remove('filter_content_list_item-color')
          _e.children[0].classList.remove('item_iconShow')
        })
        e.target.classList.add('filter_content_list_item-color')
        e.target.children[0].classList.add('item_iconShow')
      }
    })
  })
}

export function listfil2() {
  [...$('.filter_content_list_item')].forEach(el => {
    el.addEventListener('click', e => {
      let text = e.target.textContent.trim()
      let parent = $parent(e.target, '.filter_item')
      parent.querySelector('.filter_title_text').textContent = text
      // 隐藏当前过滤器
      parent.classList.remove('is-show')
      document.body.classList.remove('is-static') // 恢复body滚动
    })
  })
}

export function list() {
  let template = function (data) {
    return data.result.data.reduce((pre, cur) => {
      return pre + `<li class="hostlist_item">
          <div class="hostlist_item_img">
            <div style="width:60px;height:60px;background:red"></div>
          </div>
          <div class="hostlist_content">
            <div class="base_title_wrap">
              <h2 class="base_title_text base_title_text-small"><span class="base_title_wrap_label">[${cur.state}]</span>${cur.title}</h2>
              <span class="base_title_tag">${cur.type}</span>
            </div>
            <div class="hostlist_item_info">
              <div class="hostlist_item_info_item">
                ${cur.count}<span class="hostlist_item_info_item_label">人参与</span> | <span class="hostlist_item_info_item_label">交付周期：</span>${cur.xmzq}天
              </div>
              <div class="hostlist_item_info_item hostlist_item_info_item-em">
                ￥<strong>${cur.money}</strong>
              </div>
            </div>
          </div>
        </li>`
    }, '')
  }
  let buttons = document.querySelectorAll('.pagination_btn')
  let config = {
    api: '/m/DIY/DiyList',
    body: {
      pageIndex: 1,
      pageSize: 10
    },
    template: template,
    replace: true,
    container: document.querySelector('.hostlist')
  }
  render(buttons, Object.assign({next: true}, config), pageCallback)
}
