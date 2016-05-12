import React, { Component } from 'react';
import loadList from '../../mixins/loadList.js';
import fetching from '../../mixins/fetching.js';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Address: {
        index: 0,
        data: [],
        fetching: false,
        finished: false
      },
      AddressForm: {
        areaData: [],
        data: {
          area: {
            province: {},
            city: {},
            district: {}
          }
        }
      }
    };
  }

  onAddressChange(key, value) {
    const newState = Object.assign({}, this.state.AddressForm);
    newState.data[key] = value;
    this.setState({ AddressForm: newState });
  }

  onAreaChange(type, code) {
    const newState = Object.assign({}, this.state.AddressForm);
    if (type === 'province') {
      newState.areaData.forEach((item) => {
        if (item.code === code) {
          newState.data.area[type] = item;
          newState.data.area.city = item.citys[0];
          newState.data.area.district = newState.data.area.city.districts[0];
        }
      });
    } else if (type === 'city') {
      newState.data.area.province.citys.forEach((item) => {
        if (item.code === code) {
          newState.data.area[type] = item;
          newState.data.area.district = item.districts[0];
          console.log(newState);
        }
      });
    } else {
      newState.data.area.city.districts.forEach((item) => {
        if (item.code === code) {
          newState.data.area[type] = item;
        }
      });
    }
    this.setState({ AddressForm: newState });
  }

  onSubmit(id) {
    const pageIndex = this.state.Address.index;
    if (id) {
      fetch('/m/User/addr/Edit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(Object.assign(
          { id },
          this.state.AddressForm.data
        ))
      })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          window.location.hash = '#/settings/address';
        } else {
          alert('服务器错误，请稍候重试');
        }
      });
    } else {
      fetch('/m/User/addr/Add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(Object.assign(
          {
            pageIndex,
            pageSize: 10
          },
          this.state.AddressForm.data
        ))
      })
      .then(res => res.json())
      .then(res => {
        const newState = Object.assign({}, this.state.Address);
        if (res.success) {
          newState.finished = (pageIndex * 10) >= res.result.total;
          const end = (pageIndex - 1) * 10;
          newState.fetching = false;
          newState.data = newState.data.slice(0, end);
          newState.data = newState.data.concat(res.result.data);
          this.setState({ Address: newState });
          window.location.hash = '#/settings/address';
        } else {
          alert('服务器错误，请稍候重试');
        }
      });
    }
  }

  onReset() {
    const newState = Object.assign({}, this.state.AddressForm);
    newState.data = {
      area: {
        province: {},
        city: {},
        district: {}
      }
    };
    this.setState({ AddressForm: newState });
  }

  fetchAreaData() {
    fetch(`http://${MAIN_HOST}/Dict/city2`)
      .then(res => res.json())
      .then(res => {
        const newState = Object.assign({}, this.state.AddressForm);
        newState.areaData = res.result;
        this.setState({ AddressForm: newState });
      });
  }

  fetchAddress() {
    loadList.bind(this)({
      url: '/m/User/addr/List',
      list: 'Address'
    });
    fetching.bind(this)('Address');
  }

  fetchAddressDetail(id) {
    fetch('/m/User/addr/detail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ id })
    })
      .then(res => res.json())
      .then(res => {
        const newState = Object.assign({}, this.state.AddressForm);
        newState.data = res.result.data;
        newState.areaData.forEach((item) => {
          if (item.code === newState.data.area.province.code) {
            newState.data.area.province = item;
          }
        });
        newState.data.area.province.citys.forEach((item) => {
          if (item.code === newState.data.area.city.code) {
            newState.data.area.city = item;
          }
        });
        this.setState({ AddressForm: newState });
      });
  }

  render() {
    const Child = this.props.children;
    let path;
    switch (this.props.location.pathname) {
      case '/settings/address':
        path = 'Address';
        break;
      case '/settings/address/add':
      case '/settings/address/edit':
        path = 'AddressForm';
        break;
      case '/settings/account':
        path = 'Account';
        break;
      case '/settings/account/edit':
        path = 'AccountForm';
        break;
      default:
        path = null;
    }

    let extra;
    switch (path) {
      case 'Account':
        extra = {
          profile: this.props.profile
        };
        break;
      case 'AccountForm':
        extra = {
          profile: this.props.profile,
          profileTemp: this.props.profileTemp,
          onChange: this.props.onProfileChange.bind(this),
          onClick: this.props.onUndoProfileChange.bind(this),
          onSubmit: this.props.onSubmitProfileChange.bind(this)
        };
        break;
      case 'Address':
        extra = {
          fetchAddress: this.fetchAddress.bind(this)
        };
        break;
      case 'AddressForm':
        extra = {
          fetchAreaData: this.fetchAreaData.bind(this),
          onAddressChange: this.onAddressChange.bind(this),
          onAreaChange: this.onAreaChange.bind(this),
          onSubmit: this.onSubmit.bind(this),
          onReset: this.onReset.bind(this),
          fetchAddressDetail: this.fetchAddressDetail.bind(this)
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
            this.state[path],
            extra
          ))
        }
      </div>
    );
  }
}
