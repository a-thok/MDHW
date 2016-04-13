import React from 'react';

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
      }
    };
  },
  render: function () {
    const Child = this.props.children;
    return (
      <div>
        { React.cloneElement(Child, this.state[Child.type.name]) }
      </div>
    );
  }
});
