import React from 'react';

const FormItemInput = React.createClass({
  render: function () {
    // let pStyle = {
    //   display: 'flex',
    //   padding: '10px 20px'
    // };
    // let spanStyle = {
    //   display: 'inline',
    //   backgroundColor: 'red'
    // };
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
    //   } else if (this.props.hasCount) {
    //     return <Count style={style} text={this.props.text} onAddNumber={this.props.onAddNumber} onReduceNumber={this.props.onReduceNumber} />;
    //   } else if (this.props.hassMes) {
    //     return <span style={spanStyle} text={this.props.text}></span>;
    //   }
    //   return <span style={style}>{this.props.text}</span>;
    // }.bind(this)());
    return (
      <p className="FormItemInput">
        <span className="">{this.props.name}:</span>
        <input className="" text={this.props.text} />
      </p>
    );
  }
});
export default FormItemInput;
