export default function detail() {
  document.querySelector('.dtImg_btn').addEventListener('click', () => {
    let share = document.querySelector('.share')
    share.style.display = 'block'
  })
  document.querySelector('.share_cancel').addEventListener('click', (el) => {
    let share = document.querySelector('.share')
    share.style.display = 'none'
  })
}
