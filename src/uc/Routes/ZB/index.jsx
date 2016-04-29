import React from 'react';
import loadList from '../../mixins/loadList.js';
import fetching from '../../mixins/fetching.js';
import deFavorite from '../../mixins/deFavorite.js';

export default React.createClass({
  getInitialState: function () {
    return {
      Collection: {
        index: 0,
        fetching: false,
        finished: false,
        data: []
      },
      Published: {
        index: 0,
        fetching: false,
        finished: false,
        data: []
      },
      Publish: {
        data: { a: '1', b: '1', c: '1', d: '1', e: '1', g: '1' }
      }
    };
  },
  // 表单提交
  onChange: function (e, name) {
    const newState = Object.assign({}, this.state.Publish);
    newState.data[name] = e.target.value;
    this.setState(newState);
  },
  onSubmit: function (e) {
    e.preventDefault();
  },
  // 请求收藏列表
  fetchCollection: function () {
    loadList.bind(this)({
      url: '/m/sys/zb/Collect/List',
      list: 'Collection'
    });
    fetching.bind(this)('Collection');
  },
  // 取消收藏
  delCollection: function (id, index) {
    deFavorite.bind(this)('/m/sys/zb/collect/del', 'Collection', 'fpid', id, index);
    fetching.bind(this)('Collection');
  },
  // 请求已发布列表
  fetchPublished: function () {
    loadList.bind(this)({
      url: '/m/sys/ZB/Publish/List',
      list: 'Published'
    });
    fetching.bind(this)('Published');
  },
  // 渲染
  render: function () {
    const Child = this.props.children;
    const ChildName = Child.type.displayName || Child.type.name;

    let extra;
    switch (ChildName) {
      case 'Collection':
        extra = {
          fetchCollection: this.fetchCollection,
          delCollection: this.delCollection
        };
        break;
      case 'Published':
        extra = {
          fetchPublished: this.fetchPublished
        };
        break;
      case 'Publish':
        extra = {
          onChange: this.onChange,
          onSubmit: this.onSubmit
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
