import { $ } from 'func'

export default function detail() {
  let contanct = $('.person_bar_btn')
  contanct.addEventListener('click', el => {
    alert('联系电话：1575958####!')
  })
  
  let collect = $('.ftCtrl_item')
  collect.addEventListener('click', el => {
    let rep = el.currentTarget.children[0]
    // 获取cookie的值
    let arrCookie = document.cookie.split('; ')
    // 新建空对象
    let objCookie = {}
    // 循环数组
    arrCookie.forEach(item => {
      // 将数组每项元素用 = 切为数组，赋值给 arrItem 即：arrItem[arrItem[0], arrItem[1]]
      let arrItem = item.split('=')
      objCookie[arrItem[0]] = arrItem[1]
    })
    // 用cookie中的字段判断用户是否登录
    if (!objCookie.accountType) {
      alert('请先登录!')
    } else {
      let id = 55 // 自定义的id
      let unFav = rep.classList.contains('fa-star-o')
      let api = unFav ? '/m/Main/DiySc' : '/m/Main/DiyScDel ' // 判断接口类型
      let operation = unFav ? +1 : -1  // 判断收藏或取消收藏数字的变化

      // 向后台传入参数，发送请求
      fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id
        })
      })
      // 请求通过，执行操作
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            let count = parseInt(collect.children[2].textContent)
            count += operation
            collect.children[2].textContent = count
            rep.classList.toggle('fa-star-o')
          } else {
            alert('未知原因导致出错')
          }
        })
    }
  })
}
