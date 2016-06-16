import { $cookie } from 'func';

export default function map() {
  const areaCodes = {
    '福建': '35', '辽宁': '21', '内蒙古': '15', '宁夏': '64', '青海': '63', '山东': '37', '山西': '14', '陕西': '61', '上海': '31', '四川': '51', '天津': '12', '西藏': '54', '新疆': '65', '云南': '53', '浙江': '33', '重庆': '50', '香港': '66', '澳门': '67', '台湾': '68', '甘肃': '62', '广东': '44', '广西': '45', '贵州': '52', '海南': '46', '河北': '13', '河南': '41', '黑龙江': '23', '湖北': '42', '湖南': '43', '吉林': '22', '江苏': '32', '江西': '36', '安徽': '34', '北京': '11', '国外': '69'
  };

  if ($cookie().goto !== '1') {
    const scriptEl = document.createElement('script');
    scriptEl.src = 'http://api.map.baidu.com/location/ip?ak=9A2GrD5gEXfF7gFXASYcBI0TQb1D8jSZ&coor=bd09ll&callback=areacb';
    document.body.appendChild(scriptEl);
  }

  window.areacb = function (data) {
    const prov = data.address.split('|')[1];
    const code = areaCodes[prov];
    document.cookie = 'goto=1';
    document.cookie = `prov=${code};path='/'`;
    document.cookie = `m_location=${code};path='/'`;
    window.location.pathname = `/m/${code}`;
  };
}
