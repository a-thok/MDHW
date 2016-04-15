import React from 'react';
import loadList from '../../mixins/loadList.js';
import fetching from '../../mixins/fetching.js';

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
    console.log(this.state.Release.data);
  },
  onHasReleaseList: function () {
    loadList.bind(this)('/m/sys/hr/collect/list', 'HasRelease');
    fetching.bind(this)('HasRelease');
  },
  onHasCollectList: function () {
    loadList.bind(this)('/m/sys/hr/collect/list', 'HasCollect');
    fetching.bind(this)('HasCollect');
  },
  onHasDeliveryList: function () {
    loadList.bind(this)('/m/sys/hr/collect/list', 'HasDelivery');
    fetching.bind(this)('HasDelivery');
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
          onHasCollectList: this.onHasCollectList
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
