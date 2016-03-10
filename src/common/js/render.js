/**
 * Render a list using server data
 * @param {Object} button - DOM element that trigger the rendering
 * @param {Object} config - render configuration
 */
export default function render(button, config) {
  // 防止重复绑定
  button.removeEventListener('click', config.listener)

  // 总页数
  let totalPages

  config.listener = function (e) {
    config.body.pageIndex++
    // 请求最后一页
    if (config.body.pageIndex === totalPages) e.target.textContent = '没有更多条目'
    // 请求不存在的页数
    if (config.body.pageIndex > totalPages) return

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
        // 生成html
        let html = config.template(data)
        // 插入文档
        config.container.insertAdjacentHTML('beforeend', html)
      })
  }

  // 绑定
  button.addEventListener('click', config.listener)
  if (config.immediate) {
    config.container.innerHTML = ''
    config.listener()
  }
}
