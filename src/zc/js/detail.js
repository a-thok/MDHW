export default function detail() {
  let shareArry = [document.querySelector('.header_link'), document.querySelector('.dtImg_btn')]
  let share = document.querySelector('.sliderShare')
  for (let i = 0, len = shareArry.length; i < len; i++) {
    shareArry[i].addEventListener('click', () => {
      console.log(i)
      share.style.display = 'block'
    })
  }
  document.querySelector('.sliderShare_box_cancel').addEventListener('click', () => {
    share.style.display = 'none'
  })
}
