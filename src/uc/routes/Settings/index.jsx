import React from 'react';
import loadList from '../../mixins/loadList.js';
import fetching from '../../mixins/fetching.js';

export default React.createClass({
  getInitialState: function () {
    return {
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
  },
  onAddressChange: function (key, value) {
    const newState = Object.assign({}, this.state.AddressForm);
    newState.data[key] = value;
    this.setState({ AddressForm: newState });
  },
  onAreaChange: function (type, code) {
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
  },
  onSubmit: function (id) {
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
  },
  onReset: function () {
    const newState = Object.assign({}, this.state.AddressForm);
    newState.data = {
      area: {
        province: {},
        city: {},
        district: {}
      }
    };
    this.setState({ AddressForm: newState });
  },
  fetchAreaData: function () {
    fetch(`http://${MAIN_HOST}/Dict/city2`)
      .then(res => res.json())
      .then(res => {
        const newState = Object.assign({}, this.state.AddressForm);
        newState.areaData = res.result;
        this.setState({ AddressForm: newState });
      });
  },
  fetchAddress: function () {
    loadList.bind(this)({
      url: '/m/User/addr/List',
      list: 'Address'
    });
    fetching.bind(this)('Address');
  },
  fetchAddressDetail: function (id) {
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
  },
  render: function () {
    const Child = this.props.children;
    const ChildName = Child.type.displayName || Child.type.name;

    let extra;
    switch (ChildName) {
      case 'Account':
        extra = {
          profile: this.props.profile
        };
        break;
      case 'AccountForm':
        extra = {
          profile: this.props.profile,
          profileTemp: this.props.profileTemp,
          onChange: this.props.onProfileChange,
          onClick: this.props.onUndoProfileChange,
          onSubmit: this.props.onSubmitProfileChange
        };
        break;
      case 'Address':
        extra = {
          fetchAddress: this.fetchAddress
        };
        break;
      case 'AddressForm':
        extra = {
          fetchAreaData: this.fetchAreaData,
          onAddressChange: this.onAddressChange,
          onAreaChange: this.onAreaChange,
          onSubmit: this.onSubmit,
          onReset: this.onReset,
          fetchAddressDetail: this.fetchAddressDetail
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
            { onChangeHash: this.props.onChangeHash },
            this.state[ChildName],
            extra
          ))
        }
      </div>
    );
  }
});
