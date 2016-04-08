export default function gsTemplate(data) {
  return data.result.data.reduce((pre, cur) => {
    const fuli = cur.fuli.reduce((_pre, _cur) => `${_pre}<li class="tagList_item">${_cur}</li>`, '');
    let url = cur.logo ? `http://192.168.2.10:82/img/${cur.logo}` : 'http://192.168.2.10:81/images/default2.png';
    // let url = `http://192.168.2.10:82/img/${cur.logo || 'default.png'}`;
    return (
      `${pre}<li class="list_item">
            <div class="list_item_img"><img src="${url}"></div>
            <div class="list_item_text">
              <p class="list_item_text_p company_info">
                <a class="list_link link-color" href="http://192.168.2.177:8086/m/hr/detail/${cur.id}"><span class="company_name list_margin">${cur.compay}</span></a>
                ${cur.trade}/${cur.Nature}/规模:${cur.scale}
              </p>
              <p class="list_item_text_p company_comment"><a class="list_margin" href="#">${cur.numEvaluation}</a>条面试评价</p>
              <p class="list_item_text_p company_post"><a class="list_margin" href="#">${cur.jobs.length}</a>个在招职位</p>
              <ul class="tagList">
                ${fuli}
              </ul>
            </div>
          </li>`
    );
  }, '');
}
