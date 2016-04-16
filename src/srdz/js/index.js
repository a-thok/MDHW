import { $ } from 'func';
import slider from 'slider';
import goToSearch from 'goToSearch';

export default function index() {
  slider($('.sliderBox'));
  goToSearch({
    input: $('.srch_input'),
    partialUrl: `http://${SRDZ_HOST}/m/srdz/search?kw=`,
    btn: $('.srch_btn')
  });
}
