import React, { Component } from 'react';
import loadList from '../../mixins/loadList.js';
import fetching from '../../mixins/fetching.js';
import getPath from '../../mixins/getPath.js';

export default class Rczp extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }
  // 判断评论是否过长
  onTooLong(index) {
    const newState = Object.assign({}, this.state);
    newState.Comment.data[index].tooLong = true;
    this.setState(newState);
  }

  // 判断过长评论是否折叠
  onUnfold(index) {
    const newState = Object.assign({}, this.state);
    newState.Comment.data[index].unfold = !newState.Comment.data[index].unfold;
    this.setState(newState);
  }

  // 请求简历预览
  fetchPreview() {
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
  }

  // 请求简历列表
  fetchResume() {
    loadList.bind(this)({
      url: '/m/sys/hr/deliver/deliverylist',
      list: 'Resume'
    });
    fetching.bind(this)('Resume');
  }

  // 请求职位列表
  fetchPost() {
    loadList.bind(this)({
      url: '/m/sys/hr/collect/list',
      list: 'Post'
    });
    fetching.bind(this)('Post');
  }

  // 请求评论列表
  fetchComment() {
    loadList.bind(this)({
      url: '/m/sys/hr/comment/personList',
      list: 'Comment',
      cb(data) {
        data.forEach((item) => {
          item.tooLong = false;
          item.unfold = false;
        });
      }
    });
    fetching.bind(this)('Resume');
  }

  // 渲染
  render() {
    const Child = this.props.children;
    const path = getPath.call(this, 'Nav');
    console.log(path);

    // 每个页面的特定属性 (props)
    let extra;
    switch (path) {
      case 'Preview':
        extra = {
          fetchPreview: this.fetchPreview.bind(this)
        };
        break;
      case 'Resume':
        extra = {
          fetchResume: this.fetchResume.bind(this)
        };
        break;
      case 'Comment':
        extra = {
          fetchComment: this.fetchComment.bind(this),
          onUnfold: this.onUnfold.bind(this),
          onTooLong: this.onTooLong.bind(this)
        };
        break;
      case 'Post':
        extra = {
          fetchPost: this.fetchPost.bind(this)
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
            {},
            this.state[path],
            extra
          ))
        }
      </div>
    );
  }
}
