import { $from } from 'func'
/**
 * Render a list using server data
 * @param {Object} button - DOM element that trigger the rendering
 * @param {Object} config - render configuration
 */
export default function render({ buttons, api, params, template, container, replace, immediate, cb }) {
  let btns = $from(buttons)
  
  // 设置fetch请求参数
  let body = params || {
    pageIndex: 1,
    pageSize: 10
  }

  // 总页数
  let totalPages
  
  container.listener = function (e, btn, isNextPage) {
    let target = btn || e.target
    // 即将被请求的页数
    let requiedPage = isNextPage ? body.pageIndex + 1 : body.pageIndex - 1
    if (requiedPage > totalPages || requiedPage < 1) return
    
    // 实际变更页数
    isNextPage ? body.pageIndex++ : body.pageIndex--
    
    // 请求数据
    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(data => {
        // 计算总页数
        totalPages = Math.ceil(data.result.total / body.pageSize)

        if (btns.length > 1) {
          // 如果是上下页翻页，每次重置按钮的class到初始状态
          btns.forEach((btn) => {
            btn.disabled = false
          })
          // 请求头尾页时，判断是否添加disalbed
          if (isNextPage && requiedPage === totalPages || !isNextPage && requiedPage === 1) {
            target.disabled = true
          }
        } else {
          // 如果是加载更多，到最后一页时改变文本
          if (requiedPage === totalPages) {
            target.disabled = true
            target.textContent = '没有更多内容' // 临时
          }
        }

        // 生成html
        let html = template(data)
        // 插入文档
        replace ? (container.innerHTML = html) : container.insertAdjacentHTML('beforeend', html)
        
        // 使用回调函数操作额外的行为
        if (cb) cb(body, data)
      })
  }
  
  btns.forEach((btn, i, arr) => {
    // 防止重复绑定
    btn.removeEventListener('click', container.listener)
    // 绑定
    let isNextPage = arr.length === 1 || i === 1
    btn.addEventListener('click', e => container.listener(e, null, isNextPage))
  })
  
  if (immediate) {
    container.innerHTML = ''
    container.listener(null, btns[0], true)
  }
}
