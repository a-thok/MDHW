export default function gsTemplate(data) {
  return data.result.data.reduce((pre, cur) => {
    const fuli = cur.fuli.reduce((_pre, _cur) => `${_pre}<li class="tagList_item">${_cur}</li>`, '');
    let url = cur.logo ? `http://${UPLOAD_HOST}/img/${cur.logo}` : 'http://cdn.dreamhiway.com/images/default2.png';
    return (
      `${pre}<li class="list_item">
            <a class="linkWrapper" href="http://${MAIN_HOST}/m/company/index/${cur.id}">
              <div class="list_item_img"><img src="${url}" alt="${cur.compay}"></div>
              <div class="list_item_text">
                <h3 class="list_item_text_p company_info">${cur.compay}</h3>
                <p class="list_item_text_p">${cur.trade} / ${cur.Nature} / 规模:${cur.scale}</p>
                <p class="list_item_text_p">
                  <span class="list_item_text_p_item"><span>${cur.jobs.length}</span>个在招职位</span>
                  <span class="list_item_text_p_item"><span>${cur.numEvaluation}</span>条面试评价</span>
                </p>
                <ul class="tagList">
                  ${fuli}
                </ul>
              </div>
            </a>
          </li>`
    );
  }, '');
}
