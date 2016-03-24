export default function template(data) {
  return data.result.data.reduce((pre, cur) => {
    return pre + `<li class="list_item">
          <div class="list_item_img"><img src="http://192.168.2.10:82/img/${cur.logo}"></div>
          <div class="list_item_text">
            <p class="list_item_text_p post_info"><span class="post_name list_margin">${cur.Position}</span>[${cur.CityName}] ${cur.PublicTime}</p>
            <p class="list_item_text_p post_info"><span class="post_salary list_margin">月薪: ${cur.Money}</span>经验: ${cur.Req_gznx}</p>
            <p class="list_item_text_p">${cur.company}</p>
            <p class="list_item_text_p">${cur.trade}</p>
          </div>
        </li>`
  }, '')
}