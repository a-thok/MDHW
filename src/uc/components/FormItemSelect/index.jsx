import React from 'react';

const FormItemSelect = React.createClass({
  render: function () {
    return (
      <div className="FormItemSelect">
        <div>{this.props.name}:</div>
        <div>
          <div>
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
