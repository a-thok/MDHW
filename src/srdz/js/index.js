import { $ } from 'func';
import slider from 'slider';
import goToSearch from 'goToSearch';

export default function index() {
  slider($('.sliderBox'));
  goToSearch({
    input: $('.srch_input'),
    partialUrl: `http://${SRDZ_HOST}/m/home/search?kw=`,
    btn: $('.srch_btn')
  });
}
