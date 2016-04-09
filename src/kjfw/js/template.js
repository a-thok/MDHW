export default function template(data) {
  return data.result.data.reduce((pre, cur) => {
    const business = cur.business.reduce((_pre, _cur) => `${_pre}<li class="tagList_item">${_cur.name}</li>`, '');
    let url = cur.log ? `http://192.168.2.10:82/img/${cur.logo}` : 'http://192.168.2.10:81/images/default2.png';
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
                  <img src="${url}" alt="${cur.logo}">
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
                ${cur.prof}
                <span>>></span>
              </p>
            </a>
          </div>
        </li>
      </ul>`);
  }, '');
}
