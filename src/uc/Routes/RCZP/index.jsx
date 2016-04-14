import React from 'react';

export default React.createClass({
  getInitialState: function () {
    let eva = {
      data: [
        { img: '图片1', position: '工程师1', content: '面试还好dasdasddasdasdas面试还好dasdasddasdasdasdasdasdasdas面试还好dasdasddasdasdasdasdasdasdas面试还好dasdasddasdasdasdasdasdasdas面试还好dasdasddasdasdasdasdasdasdas面试还好dasdasddasdasdasdasdasdasdas面试还好dasdasddasdasdasdasdasdasdas面试还好dasdasddasdasdasdasdasdasdas面试还好dasdasddasdasdasdasdasdasdasdasdasdasdas', company: '创企科技', time: '2016-04-06' },
        { img: '图片2', position: '工程师2', content: '面试还好ddadasdasdasdasdasdad', company: '创企科技', time: '2016-04-06' },
        { img: '图片3', position: '工程师3', content: '面试还好', company: '创企科技', time: '2016-04-06' },
        { img: '图片4', position: '工程师4', content: '面试还好', company: '创企科技', time: '2016-04-06' }
      ]
    };
    eva.data.forEach(item => {
      item.tooLong = false;
      item.unfold = false;
    });
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
        data: [
          { img: '图片1', position: '工程师1', city: '福建', company: '创企科技', salary: '2000-5000', time: '2016-04-06' },
          { img: '图片2', position: '工程师2', city: '福建', company: '创企科技', salary: '2000-5000', time: '2016-04-06' },
          { img: '图片3', position: '工程师3', city: '福建', company: '创企科技', salary: '2000-5000', time: '2016-04-06' },
          { img: '图片4', position: '工程师4', city: '福建', company: '创企科技', salary: '2000-5000', time: '2016-04-06' }
        ]
      },
      Position: {
        data: [
          { img: '图片1', position: '工程师1', city: '福建', company: '创企科技', salary: '2000-5000', time: '2016-04-06' },
          { img: '图片2', position: '工程师2', city: '福建', company: '创企科技', salary: '2000-5000', time: '2016-04-06' },
          { img: '图片3', position: '工程师3', city: '福建', company: '创企科技', salary: '2000-5000', time: '2016-04-06' },
          { img: '图片4', position: '工程师4', city: '福建', company: '创企科技', salary: '2000-5000', time: '2016-04-06' }
        ]
      },
      Evaluate: eva
    };
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
      case 'Evaluate':
        extra = {
          onUnfold: this.onUnfold,
          onTooLong: this.onTooLong
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
            extra
          ))
        }
      </div>
    );
  }
});
