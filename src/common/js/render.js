/**
 * Render a list using server data
 * @param {Object} button - DOM element that trigger the rendering
 * @param {Object} config - render configuration
 */
export default function render({ api, params, template, container, immediate, load }) {
  document.removeEventListener('scroll', window.listener);
  // 设置fetch请求参数
  const body = params || {
    pageIndex: 1,
    pageSize: 10
  };
  const loadRemain = load.clientHeight;
  // 总页数
  let totalPages;
  let fetching = false;

  function noMore() {
    load.children[0].classList.remove('fa-spinner');
    load.children[1].textContent = '没有了哦';
  }

  window.listener = () => {
    const windowHeight = window.innerHeight;
    const pageBottom = document.body.getBoundingClientRect().bottom;
    if (pageBottom - windowHeight > loadRemain || fetching) return;

    body.pageIndex++;
    if (body.pageIndex > totalPages) {
      noMore();
      return;
    }

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
        if (data.result.total < 1) {
          load.children[0].classList.remove('fa-spinner');
          load.children[1].textContent = '暂无数据';
          return;
        }

        // 计算总页数
        totalPages = Math.ceil(data.result.total / body.pageSize);

        // 生成html
        const html = template(data);
        container.insertAdjacentHTML('beforeend', html);

        if (data.result.data.length < body.pageSize) {
          noMore();
          return;
        }

        fetching = false;
      });
  };

  document.addEventListener('scroll', window.listener);

  if (immediate) {
    container.innerHTML = '';
    window.listener();
  }
}
