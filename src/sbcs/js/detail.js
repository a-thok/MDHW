import { $ } from 'func';
import share from 'share';
import favorite from 'favorite';

export default function detail() {
  favorite($('.ftCtrl_item')[0], 'id', '/m/RShop/Collect/CollectAdd', '/m/RShop/Collect/CollectDel');
  share($('.ftCtrl_item')[2]);
}
