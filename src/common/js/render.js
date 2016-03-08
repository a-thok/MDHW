export default function render(params) {
  fetch(params.api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params.body)
  })
    .then(res => res.json())
    .then(data => {
      // 计算总页数
      let pageTotal = Math.ceil(data.result.total / params.body.pageSize)
      // 请求最后一页时，改变按钮文本
      if (params.body.pageIndex === pageTotal) {
        params.btn.textContent = '没有更多条目'
      }
      // 请求不存在的页数
      if (params.body.pageIndex > pageTotal) return
      
      // 生成html
      let html = params.template(data)
      // 插入文档
      params.container.insertAdjacentHTML('beforeend', html)
    })
}
