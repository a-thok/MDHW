import React from 'react';

import Address from './Address';

export default React.createClass({
  getInitialState: function () {
    return {
      selected: 1,
      data: [
        {
          name: '小郭',
          phone: 12343241324,
          province: '福建省',
          city: '泉州市',
          district: '石狮市',
          address: '一大串的地址在这里'
        },
        {
          name: '小郭',
          phone: 12343241324,
          province: '福建省',
          city: '泉州市',
          district: '石狮市',
          address: '一大串的地址在这里'
        },
        {
          name: '小郭',
          phone: 12343241324,
          province: '福建省',
          city: '泉州市',
          district: '石狮市',
          address: '一大串的地址在这里'
        },
        {
          name: '小郭',
          phone: 12343241324,
          province: '福建省',
          city: '泉州市',
          district: '石狮市',
          address: '一大串的地址在这里'
        }
      ]
    };
  },
  render: function () {
    const nodes = this.state.data.map((value, index) => (
      <Address
        key={index}
        name={value.name}
        phone={value.phone}
        province={value.province}
        city={value.city}
        district={value.district}
        selected={index === this.state.selected}
      />
    ));
    return (
      <ul className="address">
        {nodes}
      </ul>
    );
  }
});
