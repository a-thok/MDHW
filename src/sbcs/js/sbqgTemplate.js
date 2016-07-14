export default function sbqgTemplate(data) {
  return data.result.data.reduce((pre, cur) => (
    `${pre}<li class="hostlist_item">
        <a class="hostlist_item_a" href="http://${SBCS_HOST}/m/home/detail/${cur.id}">
          <div class="hostlist_content">
            <div class="base_title_wrap">
              <h2 class="base_title_text base_title_text-small"><span class="base_title_wrap_label">[第25类]${cur.product}</h2>
              <span class="base_title_tag">服装</span>
              <span class="base_title_tag base_title_tagBlue">鞋子</span>
              <span class="base_title_tag base_title_tagRed">红酒</span>
            </div>
            <div class="hostlist_item_info">
              <div class="hostlist_item_info_item hostlist_item_info_item-em">
                ￥<strong>1,000</strong>
              </div>
              <div class="hostlist_item_info_item hostlist_item_info_item-big">
                0<span class="hostlist_item_info_item_label">人回复</span> | 15<span class="hostlist_item_info_item_label">人浏览</span>
              </div>
              <div class="hostlist_item_info_item">
                <span class="hostlist_item_info_item_label">发布者：</span>admin
              </div>
            </div>
          </div>
        </a>
      </li>`
  ), '');
}
