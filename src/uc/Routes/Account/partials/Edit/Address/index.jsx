import React from 'react';
import UTextGroup from '../../../../../components/UTextGroup';
import ULink from '../../../../../components/ULink';

export default React.createClass({
  render: function () {
    return (
      <div>
        <section>
          <UTextGroup name="收货人" />
          <UTextGroup name="联系电话" />
          <ULink href="#" text="所在地区" info="福建泉州" />
          <ULink href="#" text="街道" info="鸿山镇" />
        </section>
        <p>
          <span>删除地址</span>
        </p>
      </div>
    );
  }
});
