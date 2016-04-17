import React from 'react';
import loadList from '../../mixins/loadList.js';
import fetching from '../../mixins/fetching.js';
import deFavorite from '../../mixins/deFavorite.js';

export default React.createClass({
  getInitialState: function () {
    return {
      Release: {
        data: { a: '', b: '', c: '', d: '', e: '', f: '', g: '' }
      },
      HasRelease: {
        index: 0,
        fetching: false,
        finished: false,
        data: []
      },
      HasCollect: {
        index: 0,
        fetching: false,
        finished: false,
        data: []
      },
      HasDelivery: {
        index: 0,
        fetching: false,
        finished: false,
        data: []
      }
    };
  },
  onChange: function (e, name) {
    const newState = Object.assign({}, this.state.Release);
    newState.data[name] = e.target.value;
    this.setState(newState);
  },
  onSubmit: function (e) {
    e.preventDefault();
  },
  onHasReleaseList: function () {
    loadList.bind(this)({
      url: '/m/sys/diy/Publish/List',
      list: 'HasRelease'
    });
    fetching.bind(this)('HasRelease');
  },
  onHasCollectList: function () {
    loadList.bind(this)({
      url: '/m/sys/diy/collect/list',
      list: 'HasCollect'
    });
    fetching.bind(this)('HasCollect');
  },
  onHasDeliveryList: function () {
    loadList.bind(this)({
      url: '/m/sys/diy/Deal/BidsList',
      list: 'HasDelivery'
    });
    fetching.bind(this)('HasDelivery');
  },
  onCancle: function (id, index) {
    deFavorite.bind(this)('/m/sys/diy/collect/del', 'HasCollect', id, index);
    fetching.bind(this)('HasCollect');
  },
  render: function () {
    const Child = this.props.children;
    const ChildName = Child.type.displayName || Child.type.name;

    let extra;
    switch (ChildName) {
      case 'Release':
        extra = {
          onChange: this.onChange,
          onSubmit: this.onSubmit
        };
        break;
      case 'HasRelease':
        extra = {
          onHasReleaseList: this.onHasReleaseList
        };
        break;
      case 'HasCollect':
        extra = {
          onHasCollectList: this.onHasCollectList,
          onCancle: this.onCancle
        };
        break;
      case 'HasDelivery':
        extra = {
          onHasDeliveryList: this.onHasDeliveryList
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
