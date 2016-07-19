export default function sbqgTemplate(data) {
  return data.result.data.reduce((pre, cur) => {
    const product = cur.product.reduce((_pre, _cur) => `${_pre}<span class="base_title_tag">${_cur}</span>`, '');
    return (
      `${pre}<li class="hostlist_item">
        <a class="hostlist_item_a" href="http://${SBCS_HOST}/m/home/require/${cur.id}">
          <div class="hostlist_content">
            <div class="base_title_wrap">
              <h2 class="base_title_text base_title_text-small"><span class="base_title_wrap_label">[第${cur.pcode}类]</span>${cur.title}</h2>
              ${product}
            </div>
            <div class="hostlist_item_info">
              <div class="hostlist_item_info_item hostlist_item_info_item-em">
                ￥<strong>${cur.price}</strong>
              </div>
              <div class="hostlist_item_info_item hostlist_item_info_item-big">
                ${cur.pl}<span class="hostlist_item_info_item_label">人回复</span> | ${cur.pv}<span class="hostlist_item_info_item_label">人浏览</span>
              </div>
              <div class="hostlist_item_info_item">
                <span class="hostlist_item_info_item_label">发布者：</span>${cur.fbname}
              </div>
            </div>
          </div>
        </a>
      </li>`
    );
  }, '');
}
