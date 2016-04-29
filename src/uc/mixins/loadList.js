export default function loadList({ url, list, cb, params, type, reset }) {
  let newState;
  if (reset) {
    newState = {
      type,
      index: 0,
      fetching: false,
      finished: false,
      data: []
    };
  } else {
    newState = this.state[list];
  }

  if (newState.fetching || newState.finished) return;

  let body = {
    pageIndex: ++newState.index,
    pageSize: 10
  };

  if (params) Object.assign(body, params);

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .then(res => {
      const totalPages = Math.ceil(res.result.total / 10);
      if (newState.index >= totalPages) newState.finished = true;

      // 为列表项添加额外的状态
      if (cb) cb(res.result.data);
      newState.data = newState.data.concat(res.result.data);

      newState.fetching = false;
      this.setState({ [list]: newState });
    });
}
