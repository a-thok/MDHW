export default function getPath(defaultPath, deep = 2) {
  let reg;
  if (deep === 1) {
    reg = /^\/(\w*)(?:.*|$)/;
  } else if (deep === 2) {
    reg = /^\/.*\/(\w*)(?:.*|$)/;
  }
  let path = this.props.location.pathname;
  if (path === '/') {
    path = defaultPath;
  } else {
    path = path.replace(reg, (str, $1) => $1);
    path = `${path[0].toUpperCase()}${path.slice(1)}`;
  }
  return path;
}
