import { $ } from 'func';
import share from 'share';
import favorite from 'favorite';

export default function detail() {
  favorite($('.ftCtrl_item')[0], 'fpid', '/m/diy/Collect/Add', '/m/diy/Collect/Del');
  share($('.ftCtrl_item')[2]);
}
