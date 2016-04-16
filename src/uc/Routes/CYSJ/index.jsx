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
    const currentPage = this.state.HasCollect.index;
    const whichPage = Math.ceil(index / 10);

    console.log(whichPage, this.state);
    fetch('/m/sys/diy/collect/del', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pageIndex: whichPage,
        pageSize: 10,
        fpid: id
      }),
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        const newState = this.state.HasCollect;

        const totalPages = Math.ceil(res.result.total / 10);
        if (currentPage === totalPages) newState.finished = true;

        const startIndex = (whichPage - 1) * 10;
        newState.data.splice(startIndex, 10, ...res.result.data);
        console.log(newState.data);

        newState.fetching = false;

        this.setState({ HasCollect: newState });
      });
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
