/**
 * Render a list using server data
 * @param {Object} config - render configuration
 */
export default function render(config) {
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
      let pageTotal = Math.ceil(data.result.total / config.body.pageSize)
      // 请求最后一页时，改变按钮文本
      if (config.body.pageIndex === pageTotal) {
        config.btn.textContent = '没有更多条目'
      }
      // 请求不存在的页数
      if (config.body.pageIndex > pageTotal) return
      
      // 生成html
      let html = config.template(data)
      // 插入文档
      config.container.insertAdjacentHTML('beforeend', html)
    })
}
