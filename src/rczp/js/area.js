export default function getArea(cb) {
  window.fetch('/Dict/city')
    .then(res => res.json())
    .then(data => {
      cb(data)
    });
}