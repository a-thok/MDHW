import render from '../../common/js/render.js'
import template from './template.js'

export default function categoryList() {
  let button = document.querySelector('.list_more')
  let config = {
    api: '/m/ZC/ZcList',
    body: {
      pageIndex: 1,
      pageSize: 10
    },
    template: template,
    container: document.querySelector('.zcList')
  }
  render(button, config)
}
