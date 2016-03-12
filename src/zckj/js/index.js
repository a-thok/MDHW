import { $ } from '../../common/js/func.js'
export default function index() {
  // 点击顶栏菜单按钮，弹出菜单
  $('.header_text-menu').addEventListener('click', () => {
    $('.header_menu_wrap').classList.toggle('is-show')
  })
  
  // 获取数据，填充侧边栏
  fetch('/Dict/city2')
    .then(res => res.json())
    .then(data => {
      let htmlObj = {}
      data.result.forEach(item => {
        // 计算aside_fold折叠列表的高度，以便实现动画效果
        let height = item.citys.length * 47
        
        let citys = item.citys.reduce((pre, cur) => {
          return pre + `<li class="aside_fold_item" data-code="${cur.code}">${cur.name}</li>`
        }, '')
        let html = `<li class="aside_item_wrap">
        <p class="aside_item">${item.name}</p>
        <ul class="aside_fold" data-height="${height}">
          ${citys}
        </ul>
      </li>`
        let cate = item.pinyin[0]
        if (!htmlObj[cate]) htmlObj[cate] = []
        htmlObj[cate].push(html)
      })

      Object.keys(htmlObj).forEach(prop => {
        let htmlStart = `<section class="aside_sect aside_sect-${prop.toLowerCase()}"><h3 class="aside_sect_title">${prop}</h3><ul class="aside_cate">`
        let htmlEnd = '</ul></section>'
        let html = htmlObj[prop].reduce((pre, cur, index, array) => {
          if (index === array.length - 1) return pre + cur + htmlEnd
          return pre + cur
        }, htmlStart)
        $('.aside_contentWrap').insertAdjacentHTML('beforeend', html)
      })
    })
    
  // 点击字母，滚动到相应位置
  $('.alphabet').addEventListener('click', e => {
    if (e.target.classList.contains('alphabet_item')) {
      let container = $('.aside_contentWrap')
      
      let alphabet = e.target.textContent.toLowerCase()
      let target = $('.aside_sect-' + alphabet).offsetTop
      let span = (target - container.scrollTop) / 100
      
      let scroll = function () {
        let lastScrollTop = container.scrollTop
        if (lastScrollTop === target) return
        
        let remainSpan = target - lastScrollTop
        let noEnoughRemainSpan = (lastScrollTop < target && remainSpan < span) || (lastScrollTop > target && remainSpan > span)
        if (noEnoughRemainSpan) {
          container.scrollTop = target
          return
        }
        
        container.scrollTop += span
        if (lastScrollTop === container.scrollTop) return
        setTimeout(scroll, 1)
      }
      
      scroll()
    }
  })
  
  // 点击顶栏城市，滑出侧边栏
  $('.header_text-aside').addEventListener('click', () => {
    document.body.classList.add('is-static') // 阻止body滚动
    $('.aside').classList.add('is-show')
  })
  $('.aside_return').addEventListener('click', () => {
    $('.aside').classList.remove('is-show')
    document.body.classList.remove('is-static') // 恢复body滚动
  })
  
  $('.aside_contentWrap').addEventListener('click', e => {
    let classList = e.target.classList
    // 点击省份，展开城市列表
    if (classList.contains('aside_item')) {
      [...$('.aside_contentWrap .aside_fold')].forEach(item => {
        item.style.height = ''
      })
      let ul = e.target.nextElementSibling
      let height = ul.style.height
      ul.style.height = height ? '' : ul.getAttribute('data-height') + 'px'
    }
    
    // 点击城市，关闭侧边栏，替换顶栏城市名字
    if (classList.contains('aside_fold_item')) {
      let text = e.target.textContent
      $('.header_text-aside_text').textContent = text
      $('.aside').classList.remove('is-show')
      document.body.classList.remove('is-static') // 恢复body滚动
    }
  })
}
