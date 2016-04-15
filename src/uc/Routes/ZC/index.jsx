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
      Support: {
        index: 0,
        fetching: false,
        finished: false,
        data: []
      },
      Order: {
        type: 0,
        index: 0,
        fetching: false,
        finished: false,
        data: []
      }
    };
  },
  onAttentionList: function () {
    loadList.bind(this)('/m/sys/hr/deliver/deliverylist', 'Attention');
    fetching.bind(this)('Attention');
  },
  onSupportList: function () {
    loadList.bind(this)('/m/sys/hr/deliver/deliverylist', 'Support');
    fetching.bind(this)('Support');
  },
  onOrderList: function () {
    loadList.bind(this)('/m/sys/hr/deliver/deliverylist', 'Order');
    fetching.bind(this)('Order');
  },
  onFilter: function (type) {
    const url = type === 0 ? 'fake url1' : 'fake url2';
    tabSwitch.bind(this)(url, 'Order', type);
  },
  render: function () {
    const Child = this.props.children;
    const ChildName = Child.type.displayName || Child.type.name;

    let extra;
    switch (ChildName) {
      case 'Order':
        extra = {
          onFilter: this.onFilter,
          onOrderList: this.onOrderList
        };
        break;
      case 'Attention':
        extra = {
          onAttentionList: this.onAttentionList
        };
        break;
      case 'Support':
        extra = {
          onSupportList: this.onSupportList
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
