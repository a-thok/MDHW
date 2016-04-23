export default function template(data) {
  return data.result.data.reduce((pre, cur) => (
    // function count(len, str) {
    //   let money;
    //   if (len < 4) {
    //     money = str;
    //   } else if (len === 7) {
    //     money = `${str.slice(0, 1)}百万`;
    //   } else if (len === 8) {
    //     money = `${str.slice(0, 1)}千万`;
    //   } else if (len >= 9) {
    //     let million = str.slice(0, -8);
    //     let thousand = str.slice(-8, -4);
    //     money = `${million}亿${thousand}万`;
    //   } else {
    //     let million = str.slice(0, -3);
    //     let thousand = str.slice(-3);
    //     money = `${million},${thousand}`;
    //   }
    //   return money;
    // }
    // let moneyAll = count(cur.moneyAll.toString().length, cur.moneyAll.toString());
    // let moneySum = count(cur.moneySum.toString().length, cur.moneySum.toString());
    `${pre}
    <li class="list_item">
        <h6 class="list_item_header">
          <span class="zcTag">${cur.name}</span>
          <span class="list_item_header_text">${cur.title}</span>
          <i class="fa fa-thumbs-o-up${cur.laud ? ' cgColor' : ''}"></i>
        </h6>
        
        <section class="list_item_img">
          <span class="zcTag">众筹中</span>
          <a href="http://${ZC_HOST}/m/home/detail/${cur.id}">
            <img src="http://${UPLOAD_HOST}/img/${cur.frontpic}_280x280.jpg" alt="${cur.title}">
          </a>
        </section>
        
        <section class="list_item_money">
          <p class="list_wrap">筹集金额 ￥<span class="list_item_number">${cur.moneySum}</span></p>
          <p class="list_wrap">目标金额 ￥<span class="list_item_number">${cur.moneyAll}</span></p>
        </section>
        
        <section class="list_item_info">
          <div class="list_item_info_sect">
            <div class="list_item_info_sect_title">支持人数</div>
            <div class="list_item_number">${cur.support}</div>
          </div>
          <div class="list_item_info_sect">
            <div class="list_item_info_sect_title">项目进度</div>
            <div class="list_item_number">${cur.progress}%</div>
          </div>
          <div class="list_item_info_sect">
            <div class="list_item_info_sect_title">剩余天数</div>
            <div class="list_item_number">${cur.numSy}天</div>
          </div>
        </section>
        
        <section class="list_item_progress">
          <div class="list_item_progress_info" style="width: ${cur.percentage}%"></div>
        </section>
        
        <p class="list_item_intro">
          ${cur.purpose}
        </p>
      </li>`
      ), '');
}
