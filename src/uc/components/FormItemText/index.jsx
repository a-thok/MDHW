import React from 'react';
export default function FormItemText(props) {
  return (
      <dl
        className="formItemText"
        style={{
          overflow: 'hidden',
          padding: '.6em 0'
        }}
      >
        <dt
          style={{
            float: 'left',
            width: '24%',
            textAlign: 'right'
          }}
        >{`${props.name}:`}</dt>
        <dd
          style={{
            float: 'left',
            width: '74%',
            marginLeft: '5px'
          }}
        >{props.text}</dd>
      </dl>
    );
}
// const FormItemText = React.createClass({
//   render: function () {
//     // let content = (function () {
//     //   let style = {
//     //     width: '100%',
//     //     border: 0,
//     //     paddingLeft: '.8em',
//     //     color: this.props.color || '#666',
//     //     textAlign: this.props.textAlign || 'normal'
//     //   };
//     //   if (this.props.hasInput) {
//     //     return <input style={style} type="text" placeholder={this.props.placeholder} value={this.props.text} />;
//     //   }  else if (this.props.hassMes) {
//     //     return <span style={spanStyle} text={this.props.text}></span>;
//     //   }
//     //   return <span style={style}>{this.props.text}</span>;
//     // }.bind(this)());
//     const style = {
//       width: '100%',
//       fontSize: '16px',
//       padding: '.6em 0'
//     };
//     const textleft = {
//       display: 'inline-block',
//       // width: '22%',
//       textAlign: 'right',
//       verticalAlign: 'top'
//     };
//     const textright = {
//       display: 'inline-block',
//       // width: '76%',
//       marginLeft: '5px'
//     };
//   }
// });
// export default FormItemText;
