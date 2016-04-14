import React from 'react';

export default function UGroup(props) {
  function handleChange(e) {
    props.onChange(e, props.name);
  }
  let formNode;
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
      const options = props.options.map((item, index) => <option key={index} >{ item }</option>);
      formNode = (
        <select
          name={props.name}
          id={props.id}
          value={props.value}
          onChange={handleChange}
        >{ options }</select>
      );
      break;
    default:
      return null;
  }
  return (
    <div className="form">
      <label htmlFor={props.id}>{ props.label }</label>
      {formNode}
    </div>
  );
}