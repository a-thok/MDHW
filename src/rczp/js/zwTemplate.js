export default function zwTemplate(data) {
  return data.result.data.reduce((pre, cur) => (
    `${pre}<li class="list_item">
          <div class="list_item_img"><img src="http://192.168.2.10:82/img/${cur.logo}"></div>
          <div class="list_item_text">
            <p class="list_item_text_p post_info">
              <a href="http://192.168.2.177:8086/m/hr/detail/${cur.id}"><span class="post_name list_margin">${cur.Position}</span></a>
              [${cur.CityName}] ${cur.PublicTime}
            </p>
            <p class="list_item_text_p post_info post_info-color"><span class="post_salary list_margin">月薪: ${cur.Money}</span>经验: ${cur.gznx}</p>
            <p class="list_item_text_p">${cur.company}</p>
            <p class="list_item_text_p">${cur.trade}</p>
          </div>
        </li>`
  ), '');
}
