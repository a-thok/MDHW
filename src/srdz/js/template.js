export default function template(data) {
  return data.result.data.reduce((pre, cur) => {
    const url = cur.img ? `http://${UPLOAD_HOST}/img/${cur.img}_310x310.jpg` : 'http://cdn.dreamhiway.com/images/default2.png';

    return (
    `${pre}<li class="hostlist_item">
          <a class="linkWrapper" href="http://${SRDZ_HOST}/m/home/detail/${cur.id}">
            <div class="hostlist_item_img">
              <img src="${url}" alt="${cur.title}">
            </div>
            <div class="hostlist_content">
              <div class="base_title_wrap">
                <h2 class="base_title_text base_title_text-small">
                  <span class="base_title_wrap_label srdz_title_wrap_label">[${cur.typename}]</span>
                  ${cur.title}
                </h2>
              </div>
              <div class="hostlist_item_info">
                <div class="hostlist_item_info_item">
                  <span class="hostlist_item_info_item_label">好评率：</span>100% | <span class="hostlist_item_info_item_label">店铺等级：</span><span class="list_item_color">5星</span>
                </div>
                <div class="hostlist_item_info_item hostlist_item_info_item-em">
                  ￥<strong>${cur.price}</strong>
                </div>
              </div>
            </div>
          </a>
        </li>`
        );
  }, '');
}
