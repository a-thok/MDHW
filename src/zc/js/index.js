import { $from } from 'func'

// 点赞
export default function index(config, data) {
  function getObjCookie() {
    let arrCookie = document.cookie.split('; ')
    // 新建空对象
    let objCookie = {}
    // 循环数组
    arrCookie.forEach(item => {
      // 将数组每项元素用 = 切为数组，赋值给 arrItem 即：arrItem[arrItem[0], arrItem[1]]
      let arrItem = item.split('=')
      objCookie[arrItem[0]] = arrItem[1]
    })
    // 返回对象
    return objCookie
  }
  // 循环列表中的每个li
  $from('.zcList_item').forEach(function (el) {
    // 调用cookie转为对象的方法
    let objCookie = getObjCookie()
    // 获取取cookied的值，转为数组
    let inarr = objCookie.num.split(',')
    // 获取id
    let id = el.getAttribute('data-id')
    let child = el.querySelector('.fa-thumbs-o-up')
    // 循环中点击行为，为没点赞的加上样式
    child.addEventListener('click', function (e) {
      let objCookie = getObjCookie()
      let outarr = objCookie.num.split(',')
      // 判断cookie中是否有已存在项目id
      if (outarr.indexOf(id) === -1) {
        e.target.classList.add('cgColor')
        // cookie叠加
        document.cookie = `num=${objCookie.num},${id}`
      }
    })
    if (inarr.indexOf(id) !== -1) {
      child.classList.add('cgColor')
    }
  })
}
