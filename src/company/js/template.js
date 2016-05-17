
export function newsTemplate(data) {
  return data.result.data.reduce((pre, cur) => (
    `${pre}<a class="hy_link" href="#">
          <li class="newCList_item">
            <div class="newCList_item_text">
              <sapn class="arrow arrow-right arrow-color"></sapn>
              <sapn class="has-padding">${cur.title}</sapn>
            </div>
            <span><i class="fa fa-angle-right"></i><span>
          </li>
        </a>`
  ), '');
}

export function caseTemplate(data) {
  return data.result.data.reduce((pre, cur) => {
    const img = cur.img ? `http://${UPLOAD_HOST}/img/${cur.img}` : 'http://cdn.dreamhiway.com/images/default2.png';
    console.log(img);
    return (
    `${pre} <li class="caseList_item">
              <a class="hy_link link-color" href="${cur.url}">
                <figure class="caseList_item_img">
                  <img src="${img}" alt="${cur.title}">
                  <p class="caseList_item_title">${cur.title}</p>
                </figure>
              </a>
            </li>`
    );
  }, '');
}

export function proTemplate(data) {
  return data.result.data.reduce((pre, cur) => {
    const img = cur.img ? `http://${UPLOAD_HOST}/img/${cur.img}` : 'http://cdn.dreamhiway.com/images/default2.png';
    console.log(img);
    return (
    `${pre} <a class="hy_link" href="${cur.url}">
          <li class="proList_item">
            <div class="proList_item_img">
              <img src="${img}" alt="${cur.name}">
            </div>
            <p class="proList_item_title">${cur.name}</p>
          </li>
        </a>`
    );
  }, '');
}

export function comTemplate(data) {
  return data.result.data.reduce((pre, cur) => (
    `${pre}<a class="hy_link" href="http://${HR_HOST}/m/home/detail/${cur.id}">
          <li class="gsList_item">
            <div class="gsList_item_info">
              <p class="gsList_item_info_text">${cur.pos}</p>
              <p class="info-color"><span>${cur.gzdz}</span>/<span>${cur.gznx}</span>/<span>${cur.xueli}</span></p>
            </div>
            <div class="gsList_item_info no-shrink">
              <p class="gsList_item_info_text salary-color">${cur.money}</p>
              <p class="info-color">${cur.fbtime}</p>
            </div>
          </li>
        </a>`
  ), '');
}
