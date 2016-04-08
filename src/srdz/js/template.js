export default function template(data) {
  return data.result.data.reduce((pre, cur) => (
    `${pre}<li class="hostlist_item">
          <div class="hostlist_item_img">
            <img src="http://192.168.2.10:82/img/${cur.img}_310x310.jpg">
          </div>
          <div class="hostlist_content">
            <div class="base_title_wrap">
              <h2 class="base_title_text base_title_text-small">
                <span class="base_title_wrap_label srdz_title_wrap_label">[${cur.typename}]</span>
                <a href="http://192.168.2.177:8093/m/srdz/detail/${cur.id}">${cur.title}</a>
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
        </li>`
  ), '');
}
