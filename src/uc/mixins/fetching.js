export default function fetching(list) {
  const newState = this.state[list];
  newState.fetching = true;
  this.setState({ [list]: newState });
}
