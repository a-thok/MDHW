export default function template(data) {
  return data.result.data.reduce((pre, cur) => {
    let business = '';
    if (!cur.business) {
      business = '';
    } else {
      for (let i = 0, len = cur.business.length; i < len; i++) {
        business += `<li class="tagList_item">${cur.business[i].name}</li>`;
        if (i === 3) break;
      }
    }
    let detail = cur.prof.length > 65 ? cur.prof.substr(0, 65) : cur.prof;
    let url = cur.log ? `http://${UPLOAD_HOST}/img/${cur.logo}` : 'http://cdn.dreamhiway.com/images/default2.png';
    return (
      `${pre}<ul class="list">
        <li class="list_item">
          <div class="list_item_title">
            <i class="fa fa-heart-o"></i>${cur.servertenet}
          </div>
          <!--公司信息  开始-->
          <div class="list_item_content">
          <a class="list_link link-color" href="#" alt="福州市圣鹏财务顾问有限公司">
              <h3 class="list_item_content_title">
                ${cur.company}
              </h3>
              <div class="list_item_content_info">
                <div class="list_item_content_info_left">
                  <img src="${url}" alt="${cur.company}">
                  <span class="list_item_phone"><i class="fa fa-phone"></i>${cur.phone}</span>
                </div>
                <div class="list_item_content_info_right">
                  <ul class="iconList">
                    <li class="iconList_item"><i class="fa fa-shield"></i></li>
                    <li class="iconList_item"><i class="fa fa-sort-amount-desc"></i></li>
                    <li class="iconList_item"><i class="fa fa-car"></i></li>
                    <li class="iconList_item"><i class="fa fa-picture-o"></i></li>
                  </ul>
                  <ul class="tagList tagList-kjfw">
                    ${business}
                  </ul>
                </div>
              </div>
            </a>
            <a class="list_link link-color" href="">
              <p class="list_item_content_text">
                ${detail}...
                <span>>></span>
              </p>
            </a>
          </div>
        </li>
      </ul>`);
  }, '');
}
