import React from 'react';

export default function FormItemInput(props) {
  return (
      <dl
        className="formItemInput"
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
            width: '74%'
          }}
        >
          <input
            type="text"
            value={props.text}
            placeholder={props.placeholder}
            style={{
              padding: '0 .5em',
              width: '100%',
              border: '0'
            }}
          />
        </dd>
      </dl>
    );
}
// const FormItemInput = React.createClass({
//   render: function () {
//     // let pStyle = {
//     //   display: 'flex',
//     //   padding: '10px 20px'
//     // };
//     // let spanStyle = {
//     //   display: 'inline',
//     //   backgroundColor: 'red'
//     // };
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
//     //   } else if (this.props.hasCount) {
//     //     return <Count style={style} text={this.props.text} onAddNumber={this.props.onAddNumber} onReduceNumber={this.props.onReduceNumber} />;
//     //   } else if (this.props.hassMes) {
//     //     return <span style={spanStyle} text={this.props.text}></span>;
//     //   }
//     //   return <span style={style}>{this.props.text}</span>;
//     // }.bind(this)());
//     // const style = {
//     //   width: '100%',
//     //   fontSize: '16px',
//     // };
//     // const textleft = {
//     //   display: 'inline-block',
//     //   // width: '22%',
//     //   verticalAlign: 'top'
//     // };
//     // const textright = {
//     //   display: 'inline-block',
//     //   // width: '76%',
//     //   marginLeft: '5px',
//     // };
//   }
// });
// export default FormItemInput;
