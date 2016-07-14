export default function sbjxTemplate(data) {
  return data.result.data.reduce((pre, cur) => {
    const url = cur.boutiqueLogo ? `http://${UPLOAD_HOST}/img/${cur.boutiqueLogo}` : 'http://cdn.dreamhiway.com/images/default2.png';
    return (
      `${pre}<li class="choiceList_item">
        <a class="choiceList_itemLink" href="http://${SBCS_HOST}/m/home/detail/${cur.id}">
          <img src="${url}" alt="">
        </a>
      </li>`
    );
  }, '');
}

