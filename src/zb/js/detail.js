import { $ } from 'func';
import share from 'share';
import favorite from 'favorite';

export default function detail() {
  favorite($('.ftCtrl_item')[0], 'id', '/m/zb/Collect/Add', '/m/zb/Collect/Del');
  share($('.ftCtrl_item')[2]);
}
