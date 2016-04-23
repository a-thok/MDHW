import { $ } from 'func';
import goToSearch from 'goToSearch';

export default function index() {
  goToSearch({
    input: $('.srch_input'),
    partialUrl: `http://${SRDZ_HOST}/m/home/search?kw=`,
    btn: $('.srch_btn')
  });
}
