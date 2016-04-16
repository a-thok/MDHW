export default function zwTemplate(data) {
  // 默认图片需要修改
  return data.result.data.reduce((pre, cur) => {
    const url = cur.logo ? `http://${CDN_HOST}/img/${cur.logo}` : 'http://cdn.dreamhiway.com/images/default2.png';
    return (`${pre}<li class="list_item">
          <a class="list_item_a" href="http://${HR_HOST}//m/hr/detail/${cur.ID}">
            <div class="list_item_img"><img src="${url}"></div>
            <div class="list_item_text">
              <p class="list_item_text_p post_info">
              <span class="post_name list_margin">
                ${cur.Position}
                </span>[${cur.CityName}] ${cur.PublicTime}
              </p>
              <p class="list_item_text_p post_info post_info-color"><span class="post_salary list_margin">月薪: ${cur.Money}</span>经验: ${cur.gznx}</p>
              <p class="list_item_text_p">${cur.company}</p>
              <p class="list_item_text_p">${cur.trade}/${cur.nature}</p>
            </div>
          </a>
        </li>`
    );
  }, '');
}
