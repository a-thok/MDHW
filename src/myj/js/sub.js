import { $ } from 'func';
import slider from 'slider';
import goToSearch from 'goToSearch';


export default function sub() {
  // 轮播
  slider($('.sliderBox'));
  // 搜索
  goToSearch({
    input: $('.srch_input'),
    partialUrl: `http://${MYJ_HOST}/m/home/list?kw=`
  });
}
