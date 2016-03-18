import { $from } from 'func'
/**
 * Render a list using server data
 * @param {Object} button - DOM element that trigger the rendering
 * @param {Object} config - render configuration
 */
export default function render(buttons, config, cb) {
  config = Object.assign({
    replace: false,
    next: true
  }, config)
  
  let button
  if (buttons.length && config.replace) {
    button = config.next ? buttons[1] : buttons[0]
  } else {
    button = buttons
  }
  
  // 防止重复绑定
  button.removeEventListener('click', config.listener)

  // 总页数
  let totalPages

  config.listener = function (e) {
    // 计算被请求的页数
    let requiedPage = config.next ? config.body.pageIndex + 1 : config.body.pageIndex - 1
    // 请求不存在的页数
    if (requiedPage > totalPages || requiedPage < 1) return
    
    // 实际变更页数
    config.next ? config.body.pageIndex++ : config.body.pageIndex--

    // 请求数据
    fetch(config.api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(config.body)
    })
      .then(res => res.json())
      .then(data => {
        // 计算总页数
        totalPages = Math.ceil(data.result.total / config.body.pageSize)

        if (config.replace) {
          // 如果是上下页翻页，每次重置按钮的class到初始状态
          $from(buttons).forEach(button => {
            button.disabled = false
          })
          // 请求头尾页时，判断是否添加disalbed
          if (config.next && requiedPage === totalPages || !config.next && requiedPage === 1) {
            button.disabled = true
          }
        } else {
          // 如果是加载更，到最后一页时改变文本
          if (requiedPage === totalPages) {
            button.disabled = true
            button.textContent = '没有更多内容'
          }
        }
        
        // 使用回调函数操作额外的行为
        if (cb) cb(config, data)
        // 生成html
        let html = config.template(data)
        // 插入文档
        config.replace ? (config.container.innerHTML = html) : config.container.insertAdjacentHTML('beforeend', html)
      })
  }

  // 绑定
  button.addEventListener('click', config.listener)
  if (config.immediate) {
    config.container.innerHTML = ''
    config.listener()
  }
}
