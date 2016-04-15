export default function loadList(url, list) {
  const newEvaluate = this.state[list];
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      pageIndex: ++newEvaluate.index,
      pageSize: 10
    })
  })
    .then(res => res.json())
    .then(res => {
      newEvaluate.data = res.result.data;
      this.setState({ [list]: newEvaluate });
    });
}
