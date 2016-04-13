export default function template(data) {
  return data.result.data.reduce((pre, cur) => (
    `${pre}
    <li class="zcList_item">
        <h6 class="zcList_item_header">
          <div class="zcList_item_header_text"><span class="zcTag">${cur.name}</span>${cur.title}</div>
          <i class="fa fa-thumbs-o-up"></i>
        </h6>
        <a class="list_link link-color" href="//192.168.2.177:8088/m/zc/detail/${cur.id}">
        <div class="zcList_item_img">
          <span class="zcTag zcTag-transparent">${cur.ztmc}</span>
          <img src="http://192.168.2.10:82/img/${cur.frontpic}_280x280.jpg" alt="${cur.frontpic}">
        </div>
        <div class="zcList_item_money">筹集金额 ￥<span class="zcList_item_number">${cur.moneySum}</span>/ ￥<span class="zcList_item_number">${cur.moneyAll}</span></div>
        <div class="zcList_item_info">
          <div class="zcList_item_info_sect">
            <div class="zcList_item_info_sect_title">支持人数</div>
            <div class="zcList_item_info_sect_number"><span class="zcList_item_number">${cur.support}</span></div>
          </div>
          <div class="zcList_item_info_sect">
            <div class="zcList_item_info_sect_title">项目进度</div>
            <div class="zcList_item_info_sect_number"><span class="zcList_item_number">${cur.progress}%</span></div>
          </div>
          <div class="zcList_item_info_sect">
            <div class="zcList_item_info_sect_title">剩余天数</div>
            <div class="zcList_item_info_sect_number"><span class="zcList_item_number">${cur.numSy}</span>天</div>
          </div>
        </div>
        <progress class="zcList_item_progress" max="100" value="${cur.percentage}"></progress>
        <div class="zcList_item_intro">${cur.purpose}</div>
        </a>
      </li>`
  ), '');
}
