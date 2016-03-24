import { $, $from, $parent } from '../../common/js/func.js'
import { showFilter } from 'filter'
import { pageCallback } from 'func'
import render from 'render'

showFilter()
export function listService() {
  let template = function (data) {
    return data.result.data.reduce((pre, cur) => {
      return pre + `<li class="hostlist_item">
          <div class="hostlist_item_img"><img src="http://192.168.2.10:82/img/${cur.img}"></div>
          <div class="hostlist_content">
            <div class="base_title_wrap">
              <h2 class="base_title_text base_title_text-small"><span class="base_title_wrap_label srdz_title_wrap_label">【${cur.typename}】</span>${cur.title}</h2>
            </div>
            <div class="hostlist_item_info">
              <div class="hostlist_item_info_item">
                <span class="hostlist_item_info_item_label">好评率：</span>100% | <span class="hostlist_item_info_item_label">店铺等级：</span><span class="list_item_color">5星</span>
              </div>
              <div class="hostlist_item_info_item hostlist_item_info_item-em">
                ￥<strong>${cur.price}</strong>
              </div>
            </div>
          </div>
        </li>`
    }, '')
  }
  let buttons = document.querySelectorAll('.pagination_btn')
  let config = {
    api: '/m/Srdz/SrdzList',
    body: {
      pageIndex: 0,
      pageSize: 10
    },
    template: template,
    replace: true,
    container: document.querySelector('.hostlist')
  }
  render(buttons, Object.assign({ next: false }, config), pageCallback)
  render(buttons, config, pageCallback)
  
  // 条件筛选，待清理
  $from('.filter_content_list').forEach(el => {
    el.addEventListener('click', e => {
      if (e.target.classList.contains('filter_content_list_item-color')) {
        let typeValue = e.target.getAttribute('data-id')
        let filter
        if (e.target.parentElement.classList.contains('type')) {
          filter = 'type'
        } else if (e.target.parentElement.classList.contains('state')) {
          filter = 'state'
        } else if (e.target.parentElement.classList.contains('sort')) {
          filter = 'sort'
        }
        config.body[filter] = typeValue
        render(buttons, Object.assign({
          filter: typeValue,
          immediate: true
        }, config), pageCallback)
      }
    })
  })
}

// 以下代码 有待清理
export function listSet() {
  fetch('/m/Srdz/SrdzTypeList')
    .then(res => res.json())
    .then(data => {
      let html = data.result.reduce((prev, curr) => {
        let lis = curr.item.reduce((_prev, _curr) => {
          return _prev + `<li class="filter_content_list_item" data-id="${_curr.id}">${_curr.name}<span class="item_iconHide"><i class="fa fa-check-circle"></i></span></li>`
        }, '')
        return prev + lis
      }, '')
      $('.filter_content_list-type').innerHTML = html
    })
}

export function listfil() {
  $from('.filter_content_list').forEach(el => {
    el.addEventListener('click', e => {
      let cl = e.target.classList
      if (cl.contains('filter_content_list_item-color')) return
      if (cl.contains('filter_content_list_item')) {
        $from(e.target.parentElement.children).forEach(_e => {
          _e.classList.remove('filter_content_list_item-color')
          _e.children[0].classList.remove('item_iconShow')
        })
        cl.add('filter_content_list_item-color')
        e.target.children[0].classList.add('item_iconShow')
      }
    })
  })
}

export function listfil2() {
  $from('.filter_content_list').forEach(el => {
    el.addEventListener('click', e => {
      let text = e.target.textContent.trim()
      let parent = $parent(e.target, '.filter_item')
      parent.querySelector('.filter_active').textContent = text
      // 隐藏当前过滤器
      parent.classList.remove('is-show')
      document.body.classList.remove('is-static') // 恢复body滚动
    })
  })
}
