import React from 'react';
import loadList from '../../mixins/loadList.js';
import fetching from '../../mixins/fetching.js';

export default React.createClass({
  // 状态
  getInitialState: function () {
    return {
      ResumePre: {
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
  // 获取职位列表
  onPostList: function () {
    loadList.bind(this)({
      url: '/m/sys/hr/collect/list',
      list: 'Post'
    });
    fetching.bind(this)('Post');
  },
  // 获取简历列表
  onResemuList: function () {
    loadList.bind(this)({
      url: '/m/sys/hr/deliver/deliverylist',
      list: 'Resume'
    });
    fetching.bind(this)('Resume');
  },
  // 获取评论列表
  onCommentList: function () {
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
  // 获取简历预览
  fetchResumePre: function () {
    fetch('/m/sys/hr/resumes/detail', {
      method: 'GET',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => {
        const newState = {};
        res.result.items.forEach((item) => {
          Object.assign(newState, item.content);
        });

        // location 和 react-router 有命名冲突
        newState.city = newState.location;
        delete newState.location;

        this.setState({ ResumePre: newState });
      });
  },
  // 渲染
  render: function () {
    const Child = this.props.children;
    const ChildName = Child.type.displayName || Child.type.name;

    let extra;
    switch (ChildName) {
      case 'ResumePre':
        extra = {
          fetchResumePre: this.fetchResumePre
        };
        break;
      case 'Resume':
        extra = {
          onResemuList: this.onResemuList
        };
        break;
      case 'Comment':
        extra = {
          onCommentList: this.onCommentList,
          onUnfold: this.onUnfold,
          onTooLong: this.onTooLong
        };
        break;
      case 'Post':
        extra = {
          onPostList: this.onPostList
        };
        break;
      default:
        extra = {};
    }

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
