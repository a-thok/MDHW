export default function template(data) {
  return data.result.data.reduce((pre, cur) => {
    function count(len, str) {
      let money;
      if (len < 4) {
        money = str;
      } else if (len === 7) {
        money = `${str.slice(0, 1)}百万`;
      } else if (len === 8) {
        money = `${str.slice(0, 1)}千万`;
      } else if (len >= 9) {
        let million = str.slice(0, -8);
        let thousand = str.slice(-8, -4);
        money = `${million}亿${thousand}万`;
      } else {
        let million = str.slice(-4, -3);
        let thousand = str.slice(-3);
        money = `${million},${thousand}`;
      }
      return money;
    }
    let moneyAll = count(cur.moneyAll.toString().length, cur.moneyAll.toString());
    let moneySum = count(cur.moneySum.toString().length, cur.moneySum.toString());
    return (
    `${pre}
    <li class="zcList_item">
        <h6 class="zcList_item_header">
          <div class="zcList_item_header_text"><span class="zcTag">${cur.name}</span>${cur.title}</div>
          <i class="fa fa-thumbs-o-up"></i>
        </h6>
        <a class="list_link link-color" href="//${ZC_HOST}/m/zc/detail/${cur.id}">
        <div class="zcList_item_img">
          <span class="zcTag zcTag-transparent">${cur.ztmc}</span>
          <img src="http://${UPLOAD_HOST}/img/${cur.frontpic}_280x280.jpg" alt="${cur.title}">
        </div>
        <div class="zcList_item_money">筹集金额 ￥<span class="zcList_item_number">${moneySum}</span>/ ￥<span class="zcList_item_number">${moneyAll}</span></div>
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
        <div class="zcList_item_progress">
          <div class="zcList_item_progress_info" style="width: ${cur.percentage}"></div>
        </div>
        <div class="zcList_item_intro">${cur.purpose}</div>
        </a>
      </li>`
      );
  }, '');
}
