import './main.css';
import Index from './components/box/index.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Home from './components/Home';

let data = {
  resultMes: [{ name: 'ddd', text: '15分钟内付款' }],
  resultPro: [
    { name: '项目名称:', text: '深圳大律师' },
    { name: '发起人:', text: '电子设备有限公司' },
    { name: '回报内容:', text: '专业疑难解答' }
  ],
  resultAdd: [
    { name: '收货地址:', text: '深圳大律师' },
    { name: '图片:', text: '福建省 泉州市 石狮市 鸿山镇 国家高新区创新创业中心' }
  ],
  resultOther: [
    { name: '备注信息:', text: '' }
  ],
  resultPri: [
    { name: '回报数量:', text: '' },
    { name: '支持单价:', text: '1.00' },
    { name: '配送运费:', text: '免运费' },
    { name: '支持金额:', text: '1.00' }
  ],
  resultFx: [
    { name: '风险:', text: '1113213' }
  ]
};
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="/box" component={Index} data={data} />
  </Router>
  ), document.querySelector('.page')
);
