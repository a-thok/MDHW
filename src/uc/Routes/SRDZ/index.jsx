import React from 'react';
import loadList from '../../mixins/loadList.js';
import fetching from '../../mixins/fetching.js';

export default React.createClass({
  getInitialState: function () {
    return {
      Attention: {
        index: 0,
        fetching: false,
        finished: false,
        data: []
      },
      BuyerList: {
        index: 0,
        fetching: false,
        finished: false,
        type: 0,
        data: []
      },
      SellerList: {
        index: 0,
        fetching: false,
        finished: false,
        type: 0,
        data: []
      }
    };
  },
  onAttentionList: function () {
    loadList.bind(this)({
      url: '/m/sys/Srdz/Collect/List',
      list: 'Attention'
    });
    fetching.bind(this)('Attention');
  },
  onBuyerListList: function (type) {
    loadList.bind(this)({
      url: '/m/sys/Srdz/Deal/BuyerList',
      list: 'BuyerList',
      type: type === undefined ? 0 : type,
      param: 'state',
      reset: type !== undefined
    });
    fetching.bind(this)('BuyerList');
  },
  onSellerListList: function (type, reset) {
    loadList.bind(this)({
      url: '/m/sys/Srdz/Deal/SellerList',
      list: 'SellerList',
      type,
      cb: function (items) {
        items.forEach((item) => {item.showDetail = false;});
      },
      param: 'state',
      reset
    });
    fetching.bind(this)('SellerList');
  },
  onShowDetail: function (index) {
    const newState = Object.assign({}, this.state.SellerList);
    newState.data[index].showDetail = !newState.data[index].showDetail;
    this.setState(newState);
  },
  render: function () {
    const Child = this.props.children;
    const ChildName = Child.type.displayName || Child.type.name;

    let extra;
    switch (ChildName) {
      case 'Attention':
        extra = {
          onAttentionList: this.onAttentionList
        };
        break;
      case 'SellerList':
        extra = {
          onSellerListList: this.onSellerListList,
          onShowDetail: this.onShowDetail
        };
        break;
      case 'BuyerList':
        extra = {
          onBuyerListList: this.onBuyerListList
        };
        break;
      default:
        extra = {};
    }

    return (
      <div>
        {
          React.cloneElement(Child, Object.assign(
            {},
            this.state[ChildName],
            { onChangeHash: this.props.onChangeHash },
            extra
          ))
        }
      </div>
    );
  }
});
