import React from 'react';
import UTextGroup from '../../../../../components/UTextGroup';
import Navbar from '../../../../../components/Navbar';

export default React.createClass({
  render: function () {
    return (
      <div>
        <section>
          <UTextGroup name="收货人" />
          <UTextGroup name="联系电话" />
          <Navbar href="#" text="所在地区" info="福建泉州" />
          <Navbar href="#" text="街道" info="鸿山镇" />
        </section>
        <p>
          <span>删除地址</span>
        </p>
      </div>
    );
  }
});
