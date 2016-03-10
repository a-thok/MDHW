import render from '../../common/js/render.js'

export default function categoryList() {
  let template = function (data) {
    return data.result.data.reduce((pre, cur) => {
      return pre + `<li class="zcList_item">
        <h6 class="zcList_item_header">
          <div class="zcList_item_header_text"><span class="zcTag">${cur.name}</span>${cur.title}</div>
          <i class="fa fa-thumbs-o-up"></i>
        </h6>
        <div class="zcList_item_img">
          <span class="zcTag zcTag-transparent">${cur.ztmc}</span>
          <img src="" alt="">
        </div>
        <div class="zcList_item_money">筹集金额 ￥<span class="zcList_item_number">${cur.moneySum}</span>万/ ￥<span class="zcList_item_number">${cur.moneyAll}</span>万</div>
        <div class="zcList_item_info">
          <div class="zcList_item_info_sect">
            <div class="zcList_item_info_sect_title">支持人数</div>
            <div class="zcList_item_info_sect_number"><span class="zcList_item_number">${cur.laud}</span></div>
          </div>
          <div class="zcList_item_info_sect">
            <div class="zcList_item_info_sect_title">项目进度</div>
            <div class="zcList_item_info_sect_number"><span class="zcList_item_number">${cur.progress}</span></div>
          </div>
          <div class="zcList_item_info_sect">
            <div class="zcList_item_info_sect_title">剩余天数</div>
            <div class="zcList_item_info_sect_number"><span class="zcList_item_number">${cur.numSy}</span>天</div>
          </div>
        </div>
        <progress class="zcList_item_progress" max="100" value="${cur.percentage}"></progress>
        <div class="zcList_item_intro">${cur.purpose}</div>
      </li>`
    }, '')
  }
  let button = document.querySelector('.list_more')
  let config = {
    api: '/m/ZC/ZcList',
    body: {
      pageIndex: 0,
      pageSize: 10
    },
    template: template,
    container: document.querySelector('.zcList')
  }
  render(button, config)
}
