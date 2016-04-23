import overflow from 'overflow';
import { $ } from 'func';
import favorite from 'favorite';

export default function detail() {
  overflow($('.tagList'));

  favorite($('icon_link'), 'jobid', '/m/rczp/Collect/Add', '/m/rczp/Collect/Del');
}
