import render from 'render'
import { $ } from 'func'

export default function comment() {
  let template = function (data) {
    return data.result.data.reduce((pre, cur) => {
      let child = cur.child.reduce((_pre, _cur) => {
        return _pre + ` <li class="dialog_sublist_item">
              <div class="dialog_sublist_item_username">${_cur.user}</div>
              <div class="dialog_sublist_item_comment">
                <i class="dialog_sublist_item_arrow"></i>
                <p class="dialog_sublist_item_content">${_cur.comment}</p>
                <p class="dialog_list_item_info_time"><time>${_cur.date}</time></p>
              </div>
            </li>`
      }, '')

      return pre + ` <li class="dialog_list_item">
          <div class="dialog_list_item_user">
            <div class="dialog_list_item_user_avatar"></div><!--这里应该是一张图片-->
            <span class="dialog_list_item_user_name">${cur.user}</span>
          </div>
          <p class="dialog_list_item_content">${cur.comment}</p>
          <div class="dialog_list_item_info">
            <time class="dialog_list_item_info_time"><i class="fa fa-clock-o"></i>${cur.date}</time>
            <button class="dialog_list_item_info_btn" type="button"><i class="fa fa-commenting-o"></i>评论</button>
          </div>
          <!--子评论 开始-->
          <ul class="dialog_sublist">
            <li class="dialog_sublist_arrow"></li>
            ${child}
          </ul>
        </li>`
    }, '')
  }
  let button = $('.dialog_more_link')
  let config = {
    api: '/m/ZC/Comments',
    body: {
      fpid: 1,
      pageIndex: 1,
      pageSize: 10
    },
    template: template,
    container: $('.dialog_list')
  }
  render(button, config)
}
