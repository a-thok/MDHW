import React, { Component } from 'react';
import loadList from '../../mixins/loadList.js';
import fetching from '../../mixins/fetching.js';
import deFavorite from '../../mixins/deFavorite.js';
import { $cookie } from 'func';

export default class Cysj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Publish: {
        types: [],
        data: { type: 1 }
      },
      Published: {
        index: 0,
        fetching: false,
        finished: false,
        data: []
      },
      Collection: {
        index: 0,
        fetching: false,
        finished: false,
        data: []
      },
      Delivered: {
        index: 0,
        fetching: false,
        finished: false,
        data: []
      },
      Bidding: {
        areaData: [],
        data: {
          area: {
            province: {},
            city: {},
            district: {}
          }
        },
        detail: []
      }
    };
  }

  // 选择地址
  onAreaChange(type, code) {
    const newState = Object.assign({}, this.state.Bidding);
    if (type === 'province') {
      newState.areaData.forEach((item) => {
        if (item.code === code) {
          newState.data.area[type] = item;
        }
      });
    } else if (type === 'city') {
      newState.data.area.province.citys.forEach((item) => {
        if (item.code === code) {
          newState.data.area[type] = item;
        }
      });
    } else {
      newState.data.area.city.districts.forEach((item) => {
        if (item.code === code) {
          newState.data.area[type] = item;
        }
      });
    }
    this.setState({ Bidding: newState });
  }

  // 提交表单
  onChange(e, name, list) {
    const newState = Object.assign({}, this.state[list]);
    newState.data[name] = e.target.value;
    this.setState(newState);
  }

  onSubmit(e) {
    e.preventDefault();
    fetch('/m/sys/diy/Publish/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(Object.assign(
          {},
          this.state.Publish.data
        ))
    })
    .then(res => res.json())
    .then(res => {
      if (res.success) {
        window.location.hash = '#';
      } else {
        alert('服务器错误，请稍候重试');
      }
    });
  }

  onTbSubmit(e) {
    e.preventDefault();
    if (!this.state.data) return;
    let cpid = $cookie().cpid;
    let body = Object.assign({}, this.state.Bidding.data);
    body.address = `${body.area.province.name}-${body.area.city.name}`;
    delete body.area;
    fetch('/m/sys/diy/witkey/bids', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(Object.assign({ cpid }, body))
    })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = decodeURIComponent(location.search).replace(/.*=/, '');
      } else {
        alert(res.msg[0]);
      }
    });
  }

  // 请求发布类型
  fetchTypes() {
    fetch('/m/diy/project/TypeList')
      .then(res => res.json())
      .then(res => {
        const newState = this.state.Publish;
        res.result.forEach(list => {
          newState.types = newState.types.concat(list.item.map(item => ({ text: item.protype, value: item.id })));
        });
        this.setState({ Publish: newState });
      });
  }

  // 请求已发布列表
  fetchPublished() {
    loadList.bind(this)({
      url: '/m/sys/diy/Publish/List',
      list: 'Published'
    });
    fetching.bind(this)('Published');
  }

  // 请求收藏列表
  fetchCollection() {
    loadList.bind(this)({
      url: '/m/sys/diy/collect/list',
      list: 'Collection'
    });
    fetching.bind(this)('Collection');
  }

  // 取消收藏
  delCollection(id, index) {
    deFavorite.bind(this)('/m/sys/diy/collect/del', 'Collection', 'fpid', id, index);
    fetching.bind(this)('Collection');
  }

  // 请求已投递列表
  fetchDelivered() {
    loadList.bind(this)({
      url: '/m/sys/diy/Deal/BidsList',
      list: 'Delivered'
    });
    fetching.bind(this)('Delivered');
  }

  // 获取地址
  fetchAreaDataAndDetail() {
    fetch(`http://${MAIN_HOST}/Dict/city2`)
      .then(res => res.json())
      .then(res => {
        const newState = Object.assign({}, this.state.Bidding);
        newState.areaData = res.result;
        this.setState({ Bidding: newState }, () => {
          const newState = Object.assign({}, this.state.Bidding);
          let cpid = $cookie().cpid;
          fetch('/m/sys/diy/Witkey/Info', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
              cpid
            })
          })
            .then(res => res.json())
            .then(res => {
              newState.detail = res.result;
              this.setState({ Bidding: newState });
            });
        });
      });
  }

  // 渲染
  render() {
    const Child = this.props.children;
    const ChildName = Child.type.displayName || Child.type.name;

    let extra;
    switch (ChildName) {
      case 'Publish':
        extra = {
          onChange: this.onChange.bind(this),
          onSubmit: this.onSubmit.bind(this),
          fetchTypes: this.fetchTypes.bind(this)
        };
        break;
      case 'Published':
        extra = {
          fetchPublished: this.fetchPublished.bind(this)
        };
        break;
      case 'Collection':
        extra = {
          fetchCollection: this.fetchCollection.bind(this),
          delCollection: this.delCollection.bind(this)
        };
        break;
      case 'Delivered':
        extra = {
          fetchDelivered: this.fetchDelivered.bind(this)
        };
        break;
      case 'Bidding':
        extra = {
          onChange: this.onChange.bind(this),
          fetchAreaDataAndDetail: this.fetchAreaDataAndDetail.bind(this),
          fetchDetail: this.fetchDetail.bind(this),
          onAreaChange: this.onAreaChange.bind(this),
          onTbSubmit: this.onTbSubmit.bind(this)
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
}
