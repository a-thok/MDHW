import React from 'react';

const FormItemText = React.createClass({
  render: function () {
    // let content = (function () {
    //   let style = {
    //     width: '100%',
    //     border: 0,
    //     paddingLeft: '.8em',
    //     color: this.props.color || '#666',
    //     textAlign: this.props.textAlign || 'normal'
    //   };
    //   if (this.props.hasInput) {
    //     return <input style={style} type="text" placeholder={this.props.placeholder} value={this.props.text} />;
    //   }  else if (this.props.hassMes) {
    //     return <span style={spanStyle} text={this.props.text}></span>;
    //   }
    //   return <span style={style}>{this.props.text}</span>;
    // }.bind(this)());
    return (
      <p className="FormItemText" >
        <span className="">{this.props.name}:</span>
        <span className="" >{this.props.text}</span>
      </p>
    );
  }
});
export default FormItemText;
