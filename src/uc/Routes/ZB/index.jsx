import React, { Component } from 'react';
import loadList from '../../mixins/loadList.js';
import fetching from '../../mixins/fetching.js';
import deFavorite from '../../mixins/deFavorite.js';

export default class Zb extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        data: { type: 1 }
      }
    };
  }

  // 表单提交
  onChange(e, name) {
    const newState = Object.assign({}, this.state.Publish);
    newState.data[name] = e.target.value;
    this.setState(newState);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.Publish.data);
    fetch('/m/Sys/ZB/Publish/Add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(Object.assign(
          {},
          this.state.Publish.data
        ))
    })
    .then(res => res.json())
    .then(res => {
      if (res.success) {
        window.location.hash = '#';
      } else {
        alert('服务器错误，请稍候重试');
      }
    });
  }

  // 请求收藏列表
  fetchCollection() {
    loadList.bind(this)({
      url: '/m/sys/zb/Collect/List',
      list: 'Collection'
    });
    fetching.bind(this)('Collection');
  }

  // 取消收藏
  delCollection(id, index) {
    deFavorite.bind(this)('/m/sys/zb/collect/del', 'Collection', 'fpid', id, index);
    fetching.bind(this)('Collection');
  }

  // 请求已发布列表
  fetchPublished() {
    loadList.bind(this)({
      url: '/m/sys/ZB/Publish/List',
      list: 'Published'
    });
    fetching.bind(this)('Published');
  }

  // 渲染
  render() {
    const Child = this.props.children;
    const ChildName = Child.type.displayName || Child.type.name;

    let extra;
    switch (ChildName) {
      case 'Collection':
        extra = {
          fetchCollection: this.fetchCollection.bind(this),
          delCollection: this.delCollection.bind(this)
        };
        break;
      case 'Published':
        extra = {
          fetchPublished: this.fetchPublished.bind(this)
        };
        break;
      case 'Publish':
        extra = {
          onChange: this.onChange.bind(this),
          onSubmit: this.onSubmit.bind(this)
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
            extra
          ))
        }
      </div>
    );
  }
}
