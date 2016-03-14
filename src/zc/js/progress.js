import { forEachEl, queryParent } from 'func'

export default function progress() {
  forEachEl('.dialog_sublist_item_comment_more_link', (el) => {
    el.addEventListener('click', (e) => {
      let parent = queryParent(e.target, '.dialog_sublist_item_comment')
      let content = parent.querySelector('.dialog_sublist_item_content')
      let autoClass = 'isAuto'
      if (content.classList.contains(autoClass)) {
        content.classList.remove(autoClass)
        e.target.textContent = '[全文]'
      } else {
        content.classList.add(autoClass)
        e.target.textContent = '[收起]'
      }
    })
  })
}
