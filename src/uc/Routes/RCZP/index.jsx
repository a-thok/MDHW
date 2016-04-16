import React from 'react';
import loadList from '../../mixins/loadList.js';
import fetching from '../../mixins/fetching.js';

export default React.createClass({
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
      Position: {
        index: 0,
        fetching: false,
        finished: false,
        data: []
      },
      Evaluate: {
        index: 0,
        fetching: false,
        finished: false,
        data: []
      }
    };
  },
  onResumePreview: function () {
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

        this.setState({ Preview: newState });
      });
  },
  onPositionList: function () {
    loadList.bind(this)({
      url: '/m/sys/hr/collect/list',
      list: 'Position'
    });
    fetching.bind(this)('Position');
  },
  onResemuList: function () {
    loadList.bind(this)({
      url: '/m/sys/hr/deliver/deliverylist',
      list: 'Resume'
    });
    fetching.bind(this)('Resume');
  },
  onEvaluateList: function () {
    loadList.bind(this)({
      url: '/m/sys/hr/comment/companylist',
      list: 'Evaluate',
      cb: function (data) {
        data.forEach((item) => {
          item.tooLong = false;
          item.unfold = false;
        });
      }
    });
    fetching.bind(this)('Resume');
  },
  onTooLong: function (index) {
    const newState = Object.assign({}, this.state);
    newState.Evaluate.data[index].tooLong = true;
    this.setState(newState);
  },
  onUnfold: function (index) {
    const newState = Object.assign({}, this.state);
    newState.Evaluate.data[index].unfold = !newState.Evaluate.data[index].unfold;
    this.setState(newState);
  },
  render: function () {
    const Child = this.props.children;
    const ChildName = Child.type.displayName || Child.type.name;

    let extra;
    switch (ChildName) {
      case 'Preview':
        extra = {
          onResumePreview: this.onResumePreview
        };
        break;
      case 'Resume':
        extra = {
          onResemuList: this.onResemuList
        };
        break;
      case 'Evaluate':
        extra = {
          onEvaluateList: this.onEvaluateList,
          onUnfold: this.onUnfold,
          onTooLong: this.onTooLong
        };
        break;
      case 'Position':
        extra = {
          onPositionList: this.onPositionList
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
