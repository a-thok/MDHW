export default function spTemplate(data) {
  return data.result.data.reduce((pre, cur) => {
    const url = cur.image ? `${cur.image}` : 'http://cdn.dreamhiway.com/images/default2.png';
    return (`${pre}<li class="userInput_itemList_item">
            <a href="http://${HR_HOST}//m/home/detail/${cur.id}">
              <div class="userInput_itemList_item_img">
                <img src="${url}" alt="${cur.name}">
              </div>
              <p>${cur.name}</p>
              <div class="userInput_itemList_item_text">
                <span>￥${cur.price}</span>
                <span>${cur.cityName} ${cur.districtName}</span>
              </div>
            </a>
          </li>`
    );
  }, '');
}
