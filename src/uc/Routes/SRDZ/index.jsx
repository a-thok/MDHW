import React from 'react';
import loadList from '../../mixins/loadList.js';
import fetching from '../../mixins/fetching.js';
import tabSwitch from '../../mixins/tabSwitch.js';

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
    loadList.bind(this)('/m/sys/hr/collect/list', 'Attention');
    fetching.bind(this)('Attention');
  },
  onBuyerListList: function () {
    loadList.bind(this)('/m/sys/hr/collect/list', 'BuyerList');
    fetching.bind(this)('BuyerList');
  },
  onBuyerListFilter: function (type) {
    const url = type === 0 ? 'fake url1' : 'fake url2';
    tabSwitch.bind(this)(url, 'BuyerList', type);
  },
  onSellerListList: function () {
    loadList.bind(this)('/m/sys/hr/collect/list', 'SellerList');
    fetching.bind(this)('SellerList');
  },
  onSellerListFilter: function (type) {
    const url = type === 0 ? 'fake url1' : 'fake url2';
    tabSwitch.bind(this)(url, 'SellerList', type);
  },
  onPush: function (index) {
    const newState = Object.assign({}, this.state);
    newState.SellerList.data[index].status = !newState.SellerList.data[index].status;
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
          onFilter: this.onSellerListFilter,
          onPush: this.onPush
        };
        break;
      case 'BuyerList':
        extra = {
          onBuyerListList: this.onBuyerListList,
          onFilter: this.onBuyerListFilter,
          onPush2: this.onPush2
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
