import React from 'react';
import ItemBox from './ItemBox.jsx';

const Index = React.createClass({
  render: function () {
    return (
      <div className="indexBox">
        <ItemBox data={this.props.data.resultPro} />
        <ItemBox data={this.props.data.resultAdd} />
        <ItemBox data={this.props.data.resultOther} hasInput />
        <ItemBox
          data={this.props.data.resultPri}
          hasCount={[true, false, false, false]}
          hasIcon={[false, true, false, true]}
          alignRight
        />
        <ItemBox data={this.props.data.resultFx} />
      </div>
    );
  }
});

export default Index;
