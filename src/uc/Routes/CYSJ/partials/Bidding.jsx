import React from 'react';
import FormGroup from '../../../components/FormGroup';
import FormButton from '../../../components/FormButton';
import FormAddress from '../../../components/FormAddress';

export default function Bidding(props) {
  let title;
  let imgUrl;
  let name;
  props.detail.map((item) => (
  title = item.title,
  imgUrl = item.logo ? `http://${UPLOAD_HOST}/img/${item.logo}` : 'http://cdn.dreamhiway.com/images/default2.png',
  name = item.fbzname
  ));
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
      value={props.data[item]}
      onChange={props.onChange}
      list="Bidding"
    />
  ));
  return (
    <form className="form" onSubmit={props.onTbSubmit}>
      <section className="Bidding">
        <div className="Bidding_img">
          <img src={imgUrl} />
        </div>
        <div className="Bidding_info">
          <p className="Bidding_info_title">{title}</p>
          <p className="Bidding_info_need"><span>需求方:</span>{name}</p>
        </div>
      </section>
      {nodes}
      <FormAddress
        name="address"
        selectName="area"
        fetchAreaData={props.fetchAreaDataAndDetail}
        areaData={props.areaData}
        onAreaChange={props.onAreaChange}
        area={props.data.area}
        hideTextarea
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
