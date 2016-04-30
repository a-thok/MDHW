import React from 'react';
import loadList from '../../mixins/loadList.js';
import fetching from '../../mixins/fetching.js';

export default React.createClass({
  // 初始状态
  getInitialState: function () {
    return {
      Preview: {
        items: []
      },
      Resume: {
        index: 0,
        fetching: false,
        finished: false,
        data: []
      },
      Post: {
        index: 0,
        fetching: false,
        finished: false,
        data: []
      },
      Comment: {
        index: 0,
        fetching: false,
        finished: false,
        data: []
      }
    };
  },
  // 判断评论是否过长
  onTooLong: function (index) {
    const newState = Object.assign({}, this.state);
    newState.Comment.data[index].tooLong = true;
    this.setState(newState);
  },
  // 判断过长评论是否折叠
  onUnfold: function (index) {
    const newState = Object.assign({}, this.state);
    newState.Comment.data[index].unfold = !newState.Comment.data[index].unfold;
    this.setState(newState);
  },
  // 请求简历预览
  fetchPreview: function () {
    fetch('/m/sys/hr/resumes/detail', {
      method: 'GET',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => {
        const newState = {};
        res.result.items.forEach((item) => {
          if (item.type === 1) {
            item.content.city = item.content.location;
            delete item.content.location;
          }
          Object.assign(newState, item.content);
        });

        // location 和 react-router 有命名冲突
        newState.wishCity = newState.location;
        delete newState.location;

        this.setState({ Preview: newState });
      });
  },
  // 请求简历列表
  fetchResume: function () {
    loadList.bind(this)({
      url: '/m/sys/hr/deliver/deliverylist',
      list: 'Resume'
    });
    fetching.bind(this)('Resume');
  },
  // 请求职位列表
  fetchPost: function () {
    loadList.bind(this)({
      url: '/m/sys/hr/collect/list',
      list: 'Post'
    });
    fetching.bind(this)('Post');
  },
  // 请求评论列表
  fetchComment: function () {
    loadList.bind(this)({
      url: '/m/sys/hr/comment/personList',
      list: 'Comment',
      cb: function (data) {
        data.forEach((item) => {
          item.tooLong = false;
          item.unfold = false;
        });
      }
    });
    fetching.bind(this)('Resume');
  },
  // 渲染
  render: function () {
    const Child = this.props.children;
    const ChildName = Child.type.displayName || Child.type.name;

    // 每个页面的特定属性 (props)
    let extra;
    switch (ChildName) {
      case 'Preview':
        extra = {
          fetchPreview: this.fetchPreview
        };
        break;
      case 'Resume':
        extra = {
          fetchResume: this.fetchResume
        };
        break;
      case 'Comment':
        extra = {
          fetchComment: this.fetchComment,
          onUnfold: this.onUnfold,
          onTooLong: this.onTooLong
        };
        break;
      case 'Post':
        extra = {
          fetchPost: this.fetchPost
        };
        break;
      default:
        extra = {};
    }

    // 渲染并传递属性
    return (
      <div>
        {
          React.cloneElement(Child, Object.assign(
            { onChangeHash: this.props.onChangeHash },
            this.state[ChildName],
            extra
          ))
        }
      </div>
    );
  }
});
