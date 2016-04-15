import React from 'react';
import loadList from '../../mixins/loadList.js';

export default React.createClass({
  getInitialState: function () {
    let eva = {
      data: [
        { img: 'http://tse3.mm.bing.net/th?id=OIP.M4ac8976c8e68a2e071b54f96760efc07o0&pid=15.1', position: '工程师1', content: '面试还好dasdasddasdasdas面试还好dasdasddasdasdasdasdasdasdas面试还好dasdasddasdasdasdasdasdasdas面试还好dasdasddasdasdasdasdasdasdas面试还好dasdasddasdasdasdasdasdasdas面试还好dasdasddasdasdasdasdasdasdas面试还好dasdasddasdasdasdasdasdasdas面试还好dasdasddasdasdasdasdasdasdas面试还好dasdasddasdasdasdasdasdasdasdasdasdasdas', company: '创企科技', time: '2016-04-06' },
        { img: 'http://tse3.mm.bing.net/th?id=OIP.M4ac8976c8e68a2e071b54f96760efc07o0&pid=15.1', position: '工程师2', content: '面试还好ddadasdasdasdasdasdad', company: '创企科技', time: '2016-04-06' },
        { img: 'http://tse3.mm.bing.net/th?id=OIP.M4ac8976c8e68a2e071b54f96760efc07o0&pid=15.1', position: '工程师3', content: '面试还好', company: '创企科技', time: '2016-04-06' },
        { img: 'http://tse3.mm.bing.net/th?id=OIP.M4ac8976c8e68a2e071b54f96760efc07o0&pid=15.1', position: '工程师3', content: '面试还好', company: '创企科技', time: '2016-04-06' },
        { img: 'http://tse3.mm.bing.net/th?id=OIP.M4ac8976c8e68a2e071b54f96760efc07o0&pid=15.1', position: '工程师3', content: '面试还好', company: '创企科技', time: '2016-04-06' },
        { img: 'http://tse3.mm.bing.net/th?id=OIP.M4ac8976c8e68a2e071b54f96760efc07o0&pid=15.1', position: '工程师3', content: '面试还好', company: '创企科技', time: '2016-04-06' },
        { img: 'http://tse3.mm.bing.net/th?id=OIP.M4ac8976c8e68a2e071b54f96760efc07o0&pid=15.1', position: '工程师3', content: '面试还好', company: '创企科技', time: '2016-04-06' },
        { img: 'http://tse3.mm.bing.net/th?id=OIP.M4ac8976c8e68a2e071b54f96760efc07o0&pid=15.1', position: '工程师3', content: '面试还好', company: '创企科技', time: '2016-04-06' },
        { img: 'http://tse3.mm.bing.net/th?id=OIP.M4ac8976c8e68a2e071b54f96760efc07o0&pid=15.1', position: '工程师3', content: '面试还好', company: '创企科技', time: '2016-04-06' },
        { img: 'http://tse3.mm.bing.net/th?id=OIP.M4ac8976c8e68a2e071b54f96760efc07o0&pid=15.1', position: '工程师3', content: '面试还好', company: '创企科技', time: '2016-04-06' },
        { img: 'http://tse3.mm.bing.net/th?id=OIP.M4ac8976c8e68a2e071b54f96760efc07o0&pid=15.1', position: '工程师4', content: '面试还好', company: '创企科技', time: '2016-04-06' }
      ]
    };
    eva.data.forEach(item => {
      item.tooLong = false;
      item.unfold = false;
    });
    return {
      Preview: {
        items: []
      },
      Resume: {
        index: 0,
        data: []
      },
      Position: {
        data: [
          { img: 'http://i1.w.hjfile.cn/doc/201202/012maochong156451.jpg', position: '工程师1', city: '福建', company: '创企科技', salary: '2000-5000', time: '2016-04-06' },
          { img: 'http://i1.w.hjfile.cn/doc/201202/012maochong156451.jpg', position: '工程师2', city: '福建', company: '创企科技', salary: '2000-5000', time: '2016-04-06' },
          { img: 'http://i1.w.hjfile.cn/doc/201202/012maochong156451.jpg', position: '工程师3', city: '福建', company: '创企科技', salary: '2000-5000', time: '2016-04-06' },
          { img: 'http://i1.w.hjfile.cn/doc/201202/012maochong156451.jpg', position: '工程师4', city: '福建', company: '创企科技', salary: '2000-5000', time: '2016-04-06' }
        ]
      },
      Evaluate: {
        index: 0,
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
  onResemuList: function () {
    loadList.bind(this)('/m/sys/hr/deliver/resumelist', 'Resume');
  },
  onEvaluateList: function () {
    loadList.bind(this)('/m/sys/hr/comment/companylist', 'Evaluate');
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
