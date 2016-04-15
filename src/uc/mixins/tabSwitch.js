export default function tabSwitch(url, prop, type) {
  console.log(url);
  const newState = {
    type,
    index: 0,
    fetching: false,
    finished: false,
    data: []
  };
  const data1 = [
    { img: '图1', title: '111蓝牙耳机——世界上最小的立体声无线耳机', buyerName: '张三', state: '待发货', type: '科学', status: false },
    { img: '图1', title: '111蓝牙耳机——世界上最小的立体声无线耳机', buyerName: '李四', state: '待发货', type: '日常', status: false },
    { img: '图1', title: '111蓝牙耳机——世界上最小的立体声无线耳机', buyerName: '马武', state: '待发货', type: '科学', status: false },
    { img: '图1', title: '11蓝牙耳机——世界上最小的立体声无线耳机', buyerName: '午马', state: '待发货', type: '科学', status: false }
  ];
  const data2 = [
    { img: '图2', title: '蓝牙耳机——世界上最小的立体声无线耳机2', buyerName: '张三', state: '待发货', type: '科学', status: false },
    { img: '图2', title: '蓝牙耳机——世界上最小的立体声无线耳机2', buyerName: '李四', state: '待发货', type: '日常', status: false },
    { img: '图2', title: '蓝牙耳机——世界上最小的立体声无线耳机2', buyerName: '马武', state: '待发货', type: '科学', status: false },
    { img: '图2', title: '蓝牙耳机——世界上最小的立体声无线耳机2', buyerName: '午马', state: '待发货', type: '科学', status: false }
  ];

  newState.data = type ? data1 : data2;
  this.setState({ [prop]: newState });
}
