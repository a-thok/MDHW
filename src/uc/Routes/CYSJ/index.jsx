import React from 'react';
import loadList from '../../mixins/loadList.js';
import fetching from '../../mixins/fetching.js';
import deFavorite from '../../mixins/deFavorite.js';

export default React.createClass({
  getInitialState: function () {
    return {
      Publish: {
        data: { a: '', b: '', c: '', d: '', e: '', f: '', g: '' }
      },
      Published: {
        index: 0,
        fetching: false,
        finished: false,
        data: []
      },
      Collection: {
        index: 0,
        fetching: false,
        finished: false,
        data: []
      },
      Delivered: {
        index: 0,
        fetching: false,
        finished: false,
        data: []
      }
    };
  },
  // 提交表单
  onChange: function (e, name) {
    const newState = Object.assign({}, this.state.Publish);
    newState.data[name] = e.target.value;
    this.setState(newState);
  },
  onSubmit: function (e) {
    e.preventDefault();
  },
  // 请求已发布列表
  fetchPublished: function () {
    loadList.bind(this)({
      url: '/m/sys/diy/Publish/List',
      list: 'Published'
    });
    fetching.bind(this)('Published');
  },
  // 请求收藏列表
  fetchCollection: function () {
    loadList.bind(this)({
      url: '/m/sys/diy/collect/list',
      list: 'Collection'
    });
    fetching.bind(this)('Collection');
  },
  // 取消收藏
  delCollection: function (id, index) {
    deFavorite.bind(this)('/m/sys/diy/collect/del', 'Collection', 'fpid', id, index);
    fetching.bind(this)('Collection');
  },
  // 请求已投递列表
  fetchDelivered: function () {
    loadList.bind(this)({
      url: '/m/sys/diy/Deal/BidsList',
      list: 'Delivered'
    });
    fetching.bind(this)('Delivered');
  },
  // 渲染
  render: function () {
    const Child = this.props.children;
    const ChildName = Child.type.displayName || Child.type.name;

    let extra;
    switch (ChildName) {
      case 'Publish':
        extra = {
          onChange: this.onChange,
          onSubmit: this.onSubmit
        };
        break;
      case 'Published':
        extra = {
          fetchPublished: this.fetchPublished
        };
        break;
      case 'Collection':
        extra = {
          fetchCollection: this.fetchCollection,
          delCollection: this.delCollection
        };
        break;
      case 'Delivered':
        extra = {
          fetchDelivered: this.fetchDelivered
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
