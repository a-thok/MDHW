export default function sjTemplate(data) {
  return data.result.data.reduce((pre, cur) => {
    const url = cur.logo ? `${cur.logo}` : 'http://cdn.dreamhiway.com/images/default2.png';
    // 商家认证
    const auth = `<p class="iconList_item ${cur.auth === false ? 'noAuth' : 'Auth'}">商家认证：</p>`;
    return (`${pre}<li class="hostlist_item">
            <a href="http://${MYJ_HOST}/m/list/35-0?keyword=&ddid=">
              <div class="hostlist_item_img">
                <img src="${url}" alt="${cur.name}">
              </div>
              <div class="hostlist_content">
                <h2>${cur.name}</h2>
                ${auth}
                <p>店铺地址：<span>${cur.cityName}${cur.addr}</span></p>
              </div>
            </a>
          </li>`
    );
  }, '');
}
