import React from 'react';

export default function FormGroup(props) {
  function handleChange(e) {
    props.onChange(e, props.name, props.list);
  }
  let formNode;
  let options;
  switch (props.type) {
    case 'input':
      formNode = (<input
        name={props.name}
        id={props.id}
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={handleChange}
      />);
      break;
    case 'textarea':
      formNode = (<textarea
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={handleChange}
      ></textarea>);
      break;
    case 'select':
      options = props.options.map((item, index) => <option key={index} value={item.value} >{item.text}</option>);
      formNode = (
        <select
          name={props.name}
          id={props.id}
          value={props.value}
          onChange={handleChange}
        >{options}</select>
      );
      break;
    case 'singleCheckbox':
      formNode = (
        <div>
          <input
            style={{ display: 'none' }}
            type="checkbox"
            name={props.name}
            id={props.id}
            checked={props.value}
            onChange={handleChange}
          />
          <label
            className="formGroupCheckbox"
            htmlFor={props.id}
          >
            <i className="fa fa-check"></i>
          </label>
        </div>
      );
      break;
    default:
      return null;
  }
  return (
    <div className="formGroup">
      <label className="formGroup_label" htmlFor={props.id}>{props.label}</label>
      {formNode}
    </div>
  );
}
