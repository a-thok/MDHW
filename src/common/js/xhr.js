export default function xhr(url, params, success, cors) {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const res = JSON.parse(xhr.response);
    if (success) success(res);
  };

  if (cors) xhr.withCredentials = true;

  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(params));
}
