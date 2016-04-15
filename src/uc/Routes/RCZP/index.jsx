import React from 'react';
import loadList from '../../mixins/loadList.js';
import fetching from '../../mixins/fetching.js';

export default React.createClass({
  getInitialState: function () {
    return {
      Preview: {
        name: '小李',
        sex: '男',
        birth: '2016-04-08',
        degree: '博士',
        worktime: '10年',
        city: '火星',
        tel: '121201210000',
        email: 'xiaoli@qq.com',
        wishpos: '风险顾问',
        posnature: '全职',
        wishcity: '意大利',
        wishsalary: '230000以上'
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
  onPositionList: function () {
    loadList.bind(this)('/m/sys/hr/collect/list', 'Position');
    fetching.bind(this)('Position');
  },
  onResemuList: function () {
    loadList.bind(this)('/m/sys/hr/deliver/deliverylist', 'Resume');
    fetching.bind(this)('Resume');
  },
  onEvaluateList: function () {
    loadList.bind(this)('/m/sys/hr/comment/companylist', 'Evaluate', (data) => {
      data.forEach((item) => {
        item.tooLong = false;
        item.unfold = false;
      });
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
