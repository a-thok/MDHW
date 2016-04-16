import { $ } from 'func';
import slider from 'slider';
import goToSearch from 'goToSearch';

export default function index() {
  slider($('.sliderBox'));
  goToSearch({
    input: $('.srch_input'),
    partialUrl: `http://${ZB_HOST}/m/zb/search?kw=`,
    btn: $('.srch_btn')
  });
}
