import React from 'react';

const FormItemSelect = React.createClass({
  render: function () {
    const style = {
      width: '100%',
      fontSize: '16px',
      padding: '.6em 0'
    };
    const textleft = {
      textAlign: 'right',
      verticalAlign: 'top'
    };
    const textright = {
      padding: '0 10px'
    };
    return (
      <div className="FormItemSelect" style={style}>
        <div style={textleft}>{this.props.name}:</div>
        <div style={textright}>
          <div className="FormItemSelect_select">
            <select>
              <option value ="volvo">Volvo</option>
              <option value ="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <select>
              <option value ="volvo">Volvo</option>
              <option value ="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <select>
              <option value ="volvo">Volvo</option>
              <option value ="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div>
            <textarea></textarea>
          </div>
        </div>
      </div>
    );
  }
});
export default FormItemSelect;
