import React from 'react';

export default function FormItemCount(props) {
  let labelStyle = {
    display: 'inline-block',
    width: '1.4em',
    textAlign: 'center',
    border: '1px solid #999',
    background: '#f5f5f5'
  };
  let inputStyle = {
    width: '2.5em',
    height: '1.7em',
    paddingLeft: '.8em',
    verticalAlign: 'top'
  };
  const textstyle = {
    color: '#888'
  };
  return (
      <p className="formItemCount">
      <span style={textstyle}>{props.name}:</span>
      <span style={props.style}>
        <label style={labelStyle} onClick={props.onReduceNumber}>-</label>
        <input style={inputStyle} type="text" value={props.text} />
        <label style={labelStyle} onClick={props.onAddNumber}>+</label>
      </span>
      </p>
    );
}
// const FormItemCount = React.createClass({
//   render: function () {
//     let labelStyle = {
//       display: 'inline-block',
//       width: '1.4em',
//       textAlign: 'center',
//       border: '1px solid #999',
//       background: '#f5f5f5'
//     };
//     let inputStyle = {
//       width: '2.5em',
//       height: '1.7em',
//       paddingLeft: '.8em',
//       verticalAlign: 'top'
//     };
//     const textstyle = {
//       color: '#888'
//     };
//     return (
//       <p className="formItemCount">
//       <span style={textstyle}>{this.props.name}:</span>
//       <span style={this.props.style}>
//         <label style={labelStyle} onClick={this.props.onReduceNumber}>-</label>
//         <input style={inputStyle} type="text" value={this.props.text} />
//         <label style={labelStyle} onClick={this.props.onAddNumber}>+</label>
//       </span>
//       </p>
//     );
//   }
// });
// export default FormItemCount;
