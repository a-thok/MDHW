import { $ } from 'func';
import slider from 'slider';
import goToSearch from 'goToSearch';

export default function index() {
  slider($('.sliderBox'));
  goToSearch({
    input: $('.srch_input'),
    partialUrl: `http://${DIY_HOST}/m/diy/search?kw=`,
    btn: $('.srch_btn')
  });
}
