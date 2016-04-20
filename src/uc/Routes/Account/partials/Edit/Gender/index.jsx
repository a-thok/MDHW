import React from 'react';

export default React.createClass({
  render: function () {
    // let checkMan;
    // let checkMale;
    // if (this.props.res.temp.p_sex === 'man') {
    //   checkMan = 'checked';
    // } else if (this.props.res.temp.p_sex === 'man') {
    //   checkMale = 'checked';
    // } else {
    //   checkMan = '';
    //   checkMale = '';
    // }
    return (
      <div>
        <input type="radio" name="sex" value="man" checked="checked" /> 男
        <input type="radio" name="sex" value="male" /> 女
      </div>
    );
  }
});
