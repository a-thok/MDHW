export default function spTemplate(data) {
  return data.result.data.reduce((pre, cur) => {
    const url = cur.logo ? `http://${UPLOAD_HOST}/img/${cur.image}` : 'http://cdn.dreamhiway.com/images/default2.png';
    return (`${pre}<li class="userInput_itemList_item">
            <a href="http://${HR_HOST}//m/home/detail/${cur.id}">
              <img src="${url}" alt="${cur.title}">
              <p>${cur.name}</p>
              <div>
                <span>￥${cur.price}</span>
                <span>${cur.cityName} ${cur.districtName}</span>
              </div>
            </a>
          </li>`
    );
  }, '');
}
