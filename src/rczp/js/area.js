import fetch from 'isomorphic-fetch';
export default function getArea(cb) {
  fetch('/Dict/city')
    .then(res => res.json())
    .then(data => {
      cb(data)
    });
}