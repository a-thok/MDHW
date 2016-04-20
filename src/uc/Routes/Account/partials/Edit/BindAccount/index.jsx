import React from 'react';
import FormInput from '../../../../../components/FormInput';
import { $parent } from 'func';

export default React.createClass({
  handleClick: function (e) {
    $parent(e.target, 'li').querySelector('input').value = '';
  },
  render: function () {
    const icon = <span onClick={this.handleClick}><i className="fa fa-times-circle"></i></span>;
    let text = this.props.res.temp.phone || '未绑定';
    return (
      <form>
        <FormInput
          value={text}
          btn={icon}
          field="phone"
          onChange={this.props.res.onChange}
          onKeyup={this.props.res.onChange}
        />
      </form>
    );
  }
});
