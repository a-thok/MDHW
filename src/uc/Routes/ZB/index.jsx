import React from 'react';
import loadList from '../../mixins/loadList.js';
import fetching from '../../mixins/fetching.js';
import deFavorite from '../../mixins/deFavorite.js';

export default React.createClass({
  getInitialState: function () {
    return {
      HasCollect: {
        index: 0,
        fetching: false,
        finished: false,
        data: []
      },
      HasRelease: {
        index: 0,
        fetching: false,
        finished: false,
        data: []
      },
      Release: {
        data: { a: '1', b: '1', c: '1', d: '1', e: '1', g: '1' }
      }
    };
  },
  onHasCollectList: function () {
    loadList.bind(this)({
      url: '/m/sys/zb/Collect/List',
      list: 'HasCollect'
    });
    fetching.bind(this)('HasCollect');
  },
  onHasReleaseList: function () {
    loadList.bind(this)({
      url: '/m/sys/ZB/publish/List',
      list: 'HasRelease'
    });
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
  onCancle: function (id, index) {
    deFavorite.bind(this)('/m/sys/zb/collect/del', 'HasCollect', id, index);
    fetching.bind(this)('HasCollect');
  },
  render: function () {
    const Child = this.props.children;
    const ChildName = Child.type.displayName || Child.type.name;

    let extra;
    switch (ChildName) {
      case 'HasCollect':
        extra = {
          onHasCollectList: this.onHasCollectList,
          onCancle: this.onCancle
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
