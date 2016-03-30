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
    const style = {
      width: '100%',
      fontSize: '16px',
      padding: '.6em 0'
    };
    const textleft = {
      display: 'inline-block',
      // width: '22%',
      textAlign: 'right',
      verticalAlign: 'top'
    };
    const textright = {
      display: 'inline-block',
      // width: '76%',
      marginLeft: '5px',
      padding: '0 .5em',
      color: '#888',
      border: '0'
    };
    return (
      <p className="FormItemInput" style={style}>
        <span className="" style={textleft}>{this.props.name}:</span>
        <input className="" text={this.props.text} style={textright} />
      </p>
    );
  }
});
export default FormItemInput;
