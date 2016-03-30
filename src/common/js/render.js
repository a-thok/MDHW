/**
 * Render a list using server data
 * @param {Object} button - DOM element that trigger the rendering
 * @param {Object} config - render configuration
 */
export default function render({ api, params, template, container, immediate }) {
  // 设置fetch请求参数
  const body = params || {
    pageIndex: 1,
    pageSize: 10
  };

  // 总页数
  let totalPages;
  let fetching = false;

  container.listener = () => {
    const pageHeight = document.body.offsetHeight;
    const pageScroll = document.body.scrollTop;
    const docHeight = document.documentElement.clientHeight;

    const pageRemain = pageHeight - pageScroll - docHeight;
    if (pageRemain > 100 || fetching) return;

    body.pageIndex++;
    console.log(body.pageIndex, totalPages);
    if (body.pageIndex > totalPages) return;

    fetching = true;
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
        if (!data.result.data.length) return;

        // 计算总页数
        totalPages = Math.ceil(data.result.total / body.pageSize);

        // 生成html
        const html = template(data);
        container.insertAdjacentHTML('beforeend', html);
        fetching = false;
      });
  };

  document.addEventListener('scroll', container.listener);

  if (immediate) {
    container.innerHTML = '';
    // container.listener(null, btns[0], true);
  }
}
