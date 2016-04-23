import { $ } from 'func';
import slider from 'slider';
import goToSearch from 'goToSearch';

export default function idnex() {
  slider($('.sliderBox'));
  goToSearch({
    input: $('.srch_input'),
    partialUrl: `http://${KJ_HOST}/m/home/company?kw=`,
    btn: $('.srch_btn')
  });
}
