import React from 'react';
import FormInput from '../../../../../components/FormInput';
import { $parent } from 'func';

export default React.createClass({
  handleClick: function (e) {
    $parent(e.target, 'li').querySelector('input').value = '';
  },
  render: function () {
    const icon = <span onClick={this.handleClick}><i className="fa fa-times-circle"></i></span>;
    return (
      <form>
        <FormInput
          value={this.props.res.temp.account}
          field="account"
          btn={icon}
          onChange={this.props.res.onChange}
          onKeyup={this.props.res.onChange}
        />
      </form>
    );
  }
});
