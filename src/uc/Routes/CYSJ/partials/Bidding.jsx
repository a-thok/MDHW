import React from 'react';
import FormGroup from '../../../components/FormGroup';
import FormButton from '../../../components/FormButton';
import FormAddress from '../../../components/FormAddress';
import getHash from '../../../mixins/getHash';

export default React.createClass({
  mixins: [getHash],
  componentDidMount: function () {
    const hash = window.location.hash;
    if (hash.indexOf('editaddress') !== -1) {
      let id;
      hash.replace(/id=(\d+)/, (str, $1) => { id = $1; });
      this.props.fetchAddressDetail(id);
    }
  },
  render: function () {
    const form = {
      intro: { type: 'textarea', label: '报价说明', id: 'projectname', placeholder: '请输入说明' },
      quote: { type: 'input', label: '报价', id: 'projectname', placeholder: '单位：元' },
      worktime: { type: 'input', label: '周期', id: 'projectname', placeholder: '单位：天' }
    };
    const nodes = Object.keys(form).map((item, index) => (
              <FormGroup
                key={index}
                name={item}
                {...form[item]}
                value={this.props.data[item]}
                onChange={this.props.onChange}
                list="Bidding"
              />
    ));
    return (
      <form className="form" onSubmit={this.props.onSubmit}>
        <section className="Bidding">
          <div className="Bidding_img">
            <img src="#" />
          </div>
          <div className="Bidding_info">
            <p className="Bidding_info_title">一元易购，一元夺宝APP一元易购，一元夺宝APP一元易购，一元夺宝APP一元易购，一元夺宝APP</p>
            <p className="Bidding_info_need"><span>需求方:</span>中科医院</p>
          </div>
        </section>
        {nodes}
        <FormAddress
          name="address"
          selectName="area"
          fetchAreaData={this.props.fetchAreaData}
          areaData={this.props.areaData}
          onAreaChange={this.props.onAreaChange}
          area={this.props.areares.area}
          value={this.props.areares.address}
          onChange={this.props.onAddressChange}
        />
        <FormButton
          style={{
            margin: '20px auto',
            background: '#ff6900'
          }}
          type="submit"
          value="投标"
        />
      </form>
    );
  }
});
