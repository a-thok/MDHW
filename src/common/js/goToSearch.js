export default function goToSearch({ input, partialUrl, btn }) {
  function search() {
    const keyword = input.value.trim();
    // if (!keyword) return;
    let url = `${partialUrl}${keyword}`;
    location.href = url;
  }
  input.addEventListener('keyup', e => {
    if (e.keyCode === 13) {
      search();
    }
  });
  if (btn) {
    btn.addEventListener('click', () => {
      search();
    });
  }
}
