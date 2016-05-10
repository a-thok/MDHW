import React from 'react';
import FormButton from '../../../../components/FormButton';

export default React.createClass({
  render: function () {
    const hash = window.location.hash;
    let type;
    hash.replace(/type=([^?&=]+)/, (str, $1) => { type = $1; });

    const oValue = this.props.profile[type];
    const value = this.props.profileTemp[type];
    let node;
    switch (type) {
      case 'p_sex':
        node = (
          <div className="accountRadioWrapper">
            <input
              type="radio"
              id="male"
              name={type}
              value="male"
              checked={value === 'male'}
              onChange={(e) => this.props.onChange(type, e.target.value)}
            />
            <label className="labelEmu" htmlFor="male"></label>
            <label htmlFor="male">男</label>
            <input
              type="radio"
              id="female"
              name={type}
              value="female"
              checked={value === 'female'}
              onChange={(e) => this.props.onChange(type, e.target.value)}
            />
            <label className="labelEmu" htmlFor="female"></label>
            <label htmlFor="female">女</label>
          </div>
        );
        break;
      default:
        node = (
          <input
            className="accountInput"
            type="text"
            name={type}
            value={value}
            onChange={(e) => this.props.onChange(type, e.target.value)}
          />
        );
    }
    return (
      <form
        className="accountForm"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.onSubmit(type);
        }}
      >
        <div className="accountInputWrapper">
          {node}
          <i
            className={`fa fa-close${oValue === value ? ' is-hidden' : ''}`}
            onClick={() => this.props.onClick(type)}
          ></i>
        </div>
        <FormButton value="确定" type="submit" />
      </form>
    );
  }
});
