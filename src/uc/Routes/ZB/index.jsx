import React from 'react';
import loadList from '../../mixins/loadList.js';
import fetching from '../../mixins/fetching.js';

export default React.createClass({
  getInitialState: function () {
    return {
      HasCollect: {
        index: 0,
        fetching: false,
        finished: false,
        data: [
          { seltime: '20196-06-05', title: '蓝莓卡通设计', endtime: '20196-06-05' },
          { seltime: '20196-06-05', title: '蓝莓卡通设计', endtime: '20196-06-05' },
          { seltime: '20196-06-05', title: '蓝莓卡通设计', endtime: '20196-06-05' },
          { seltime: '20196-06-05', title: '蓝莓卡通设计', endtime: '20196-06-05' }
        ]
      },
      HasRelease: {
        index: 0,
        fetching: false,
        finished: false,
        data: [
          { type: '开发众包', title: '软件开发 MAX插件开发', money: '200.00', endtime: '2016-06-06' },
          { type: '开发众包', title: '软件开发 MAX插件开发', money: '200.00', endtime: '2016-06-06' },
          { type: '开发众包', title: '软件开发 MAX插件开发', money: '200.00', endtime: '2016-06-06' },
          { type: '开发众包', title: '软件开发 MAX插件开发', money: '200.00', endtime: '2016-06-06' }
        ]
      },
      Release: {
        data: { a: '1', b: '1', c: '1', d: '1', e: '1', g: '1' }
      }
    };
  },
  onHasCollectList: function () {
    loadList.bind(this)('/m/sys/hr/deliver/deliverylist', 'HasCollect');
    fetching.bind(this)('HasCollect');
  },
  onHasReleaseList: function () {
    loadList.bind(this)('/m/sys/hr/deliver/deliverylist', 'HasRelease');
    fetching.bind(this)('HasRelease');
  },
  onChange: function (e, name) {
    const newState = Object.assign({}, this.state.Release);
    newState.data[name] = e.target.value;
    this.setState(newState);
  },
  onSubmit: function (e) {
    e.preventDefault();
    console.log(this.state.Release.data);
  },
  render: function () {
    const Child = this.props.children;
    const ChildName = Child.type.displayName || Child.type.name;

    let extra;
    switch (ChildName) {
      case 'HasCollect':
        extra = {
          onHasCollectList: this.onHasCollectList
        };
        break;
      case 'HasRelease':
        extra = {
          onHasReleaseList: this.onHasReleaseList
        };
        break;
      case 'Release':
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
