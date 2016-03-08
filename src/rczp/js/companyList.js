import render from '../../common/js/render.js'

export default function companyList() {
  let body = {
    pageIndex: 1,
    pageSize: 10
  }
  
  let template = function (data) {
    return data.result.data.reduce((pre, cur) => {
      let fuli = cur.fuli.reduce((_pre, _cur) => {
        return _pre + `<li class="tagList_item">${_cur}</li>`
      }, '')
      
      return pre + `<li class="list_item">
        <div class="list_item_img"><img src="http://192.168.2.10:82/img/${cur.logo}"></div>
        <div class="list_item_text">
          <p class="list_item_text_p company_info"><span class="company_name list_margin">${cur.compay}</span>${cur.trade}/规模:${cur.scale}</p>
          <p class="list_item_text_p company_comment"><a class="list_margin" href="#">${cur.numEvaluation}</a>条面试评价</p>
          <p class="list_item_text_p company_post"><a class="list_margin" href="#">${cur.jobs.length}</a>个在招职位</p>
          <ul class="tagList">
            ${fuli}
          </ul>
        </div>
      </li>`
    }, '')
  }
  
  let params = {
    api: '/m/HR/CompanyList',
    body: body,
    template: template,
    container: document.querySelector('.list'),
    btn: document.querySelector('.list_more')
  }
  
  render(params)
  
  document.querySelector('.list_more').addEventListener('click', () => {
    body.pageIndex++
    render(params)
  })
}
