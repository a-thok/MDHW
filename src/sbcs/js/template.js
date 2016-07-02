export default function template(data) {
  return data.result.data.reduce((pre, cur) => {
    const url = cur.img ? `http://${UPLOAD_HOST}/img/${cur.img}` : 'http://cdn.dreamhiway.com/images/default2.png';
    return (
    `${pre}<li>
        <a href="http://${SBCS_HOST}/m/home/detail/${cur.id}">
          <div class="shangbiao-pic">
            <img src="${url}" alt="">
          </div>
          <div class="shangbiao-message">
            <span class="shangbiao-name">${cur.name}</span>
            <span class="shangbiao-leibie">第${cur.pcode}类</span>
          </div>
          <div class="shangbiao-price">
            <p>¥${cur.price}</p>
          </div>
        </a>
      </li>`
    );
  }, '');
}
