import './main.css';
import Index from './components/box/index.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Home from './components/Home';

let data = {
  resultPro: [
    { name: '项目名称:', text: '深圳大律师' },
    { name: '发起人:', text: '电子设备有限公司' },
    { name: '回报内容:', text: '专业疑难解答' }
  ],
  resultAdd: [
    { name: '收货地址:', text: '深圳大律师' },
    { name: '图片:', text: '电子设备有限公司' }
  ],
  resultOther: [
    { name: '备注信息:', text: '深圳大律师', hasInput: true }
  ],
  resultPri: [
    { name: '回报数量:', text: '', hasCount: true },
    { name: '支持单价:', text: '1' },
    { name: '配送运费:', text: '免运费' },
    { name: '支持金额:', text: '1' }
  ],
  resultFx: [
    { name: '风险:', text: '1113213' }
  ]
};
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <Route path="box" app={Index} data={data} />
    </Route>
  </Router>
  ), document.querySelector('.page')
);
