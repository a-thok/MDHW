import React from 'react';
import loadList from '../../mixins/loadList.js';
import fetching from '../../mixins/fetching.js';

export default React.createClass({
  getInitialState: function () {
    return {
      Follow: {
        index: 0,
        fetching: false,
        finished: false,
        data: []
      },
      Buyer: {
        index: 0,
        fetching: false,
        finished: false,
        type: 0,
        data: []
      },
      Seller: {
        index: 0,
        fetching: false,
        finished: false,
        type: 0,
        data: []
      }
    };
  },
  onFollowList: function () {
    loadList.bind(this)({
      url: '/m/sys/Srdz/Collect/List',
      list: 'Follow'
    });
    fetching.bind(this)('Follow');
  },
  onBuyerList: function (type) {
    loadList.bind(this)({
      url: '/m/sys/Srdz/Deal/Buyer',
      list: 'Buyer',
      type: type === undefined ? 0 : type,
      param: 'state',
      reset: type !== undefined
    });
    fetching.bind(this)('Buyer');
  },
  onSeller: function (type, reset) {
    loadList.bind(this)({
      url: '/m/sys/Srdz/Deal/Seller',
      list: 'Seller',
      type,
      cb: function (items) {
        items.forEach((item) => {item.showDetail = false;});
      },
      param: 'state',
      reset
    });
    fetching.bind(this)('Seller');
  },
  onShowDetail: function (index) {
    const newState = Object.assign({}, this.state.Seller);
    newState.data[index].showDetail = !newState.data[index].showDetail;
    this.setState(newState);
  },
  render: function () {
    const Child = this.props.children;
    const ChildName = Child.type.displayName || Child.type.name;

    let extra;
    switch (ChildName) {
      case 'Follow':
        extra = {
          onFollowList: this.onFollowList
        };
        break;
      case 'Seller':
        extra = {
          onSeller: this.onSeller,
          onShowDetail: this.onShowDetail
        };
        break;
      case 'Buyer':
        extra = {
          onBuyerList: this.onBuyerList
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
