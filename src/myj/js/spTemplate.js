export default function spTemplate(data) {
  return data.result.data.reduce((pre, cur) => {
    const url = cur.image ? `${cur.image}` : 'http://cdn.dreamhiway.com/images/default2.png';
    return (`${pre}<li class="myj_list_item">
            <a href="http://${MYJ_HOST}/m/${cur.id}.html">
              <div class="myj_list_item_img">
                <img src="${url}" alt="${cur.name}">
              </div>
              <p>${cur.name}</p>
              <div class="myj_list_item_text">
                <span>￥${cur.price}</span>
                <span>${cur.cityName} ${cur.districtName}</span>
              </div>
            </a>
          </li>`
    );
  }, '');
}
