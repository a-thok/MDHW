import React from 'react';

export default function FormItemSelect(props) {
  return (
    <div className="formItemSelect">
      <div className="formItemSelect_l">{props.name}:</div>
      <div className="formItemSelect_r">
        <div className="formItemSelect_select">
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
