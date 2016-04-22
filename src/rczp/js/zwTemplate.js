export default function zwTemplate(data) {
  // 默认图片需要修改
  return data.result.data.reduce((pre, cur) => {
    const url = cur.logo ? `http://${UPLOAD_HOST}/img/${cur.logo}` : 'http://cdn.dreamhiway.com/images/default2.png';
    return (`${pre}<li class="list_item">
          <a class="linkWrapper" href="http://${HR_HOST}//m/home/detail/${cur.ID}">
            <div class="list_item_img"><img src="${url}" alt="${cur.company}"></div>
            <div class="list_item_text">
              <p class="list_item_text_p">
                <h3 class="post_name list_wrap">${cur.Position}</h3>
                <span class="list_wrap">[${cur.CityName}] ${cur.PublicTime}</span>
              </p>
              <p class="list_item_text_p"><span class="post_salary">月薪: ${cur.Money}</span>经验: ${cur.gznx}</p>
              <p class="list_item_text_p">
                <span class="list_wrap">${cur.company}</span>
                <span class="list_wrap">${cur.trade} / ${cur.nature}</span>
              </p>
            </div>
          </a>
        </li>`
    );
  }, '');
}
