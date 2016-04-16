export default function gsTemplate(data) {
  return data.result.data.reduce((pre, cur) => {
    const fuli = cur.fuli.reduce((_pre, _cur) => `${_pre}<li class="tagList_item">${_cur}</li>`, '');
    let url = cur.logo ? `http://${UPLOAD_HOST}/img/${cur.logo}` : 'http://cdn.dreamhiway.com/images/default2.png';
    return (
      `${pre}<li class="list_item">
            <a class="list_item_a" href="#">
              <div class="list_item_img"><img src="${url}"></div>
              <div class="list_item_text">
                <p class="list_item_text_p company_info">
                  ${cur.compay}</span>
                  ${cur.trade}/${cur.Nature}/规模:${cur.scale}
                </p>
                <p class="list_item_text_p company_post">
                  <span>${cur.jobs.length}</span>个在招职位
                  <span>${cur.numEvaluation}</span>条面试评价
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
