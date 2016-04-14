import React from 'react';
import FormItemList from '../../../../components/FormItemList';

export default React.createClass({
  getInitialState: function () {
    let res = {
      data: [
      { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', money: '500.00', sum: '20160', type: '创意订制' },
      { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', money: '500.00', sum: '20166', type: 'logod订制' },
      { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', money: '500.00', sum: '2016', type: '服装订制' },
      { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', money: '500.00', sum: '2016', type: '创意订制' }
      ]
    };
    return res;
  },
  render: function () {
    let contentList = this.state.data.map((data, index) => (
      <FormItemList
        key={index}
        {...data}
        mMiddle={`￥${data.money}/个`}
        mBottom={`成交量:${data.sum}`}
        rTop={data.type}
        rBottom="取消关注"
      />
    ));
    return (
      <div className="List">
        {contentList}
      </div>
    );
  }
});
