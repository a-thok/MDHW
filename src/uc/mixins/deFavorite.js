export default function deFavorite(url, list, id, index) {
  const currentPage = this.state[list].index;
  const whichPage = Math.ceil(index / 10);

  console.log(whichPage, this.state);
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      pageIndex: whichPage,
      pageSize: 10,
      fpid: id
    }),
    credentials: 'include'
  })
    .then(res => res.json())
    .then(res => {
      const newState = this.state[list];

      const totalPages = Math.ceil(res.result.total / 10);
      if (currentPage === totalPages) newState.finished = true;

      const startIndex = (whichPage - 1) * 10;
      newState.data.splice(startIndex, 10, ...res.result.data);
      console.log(newState.data);

      newState.fetching = false;

      this.setState({ [list]: newState });
    });
}
