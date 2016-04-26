import React from 'react';

import Profile from './Profile';
import Basics from './Basics';
import Modules from './Modules/'; // ???
import Navbar from '../../components/Navbar';
import getHash from '../../mixins/getHash';

export default React.createClass({
  mixins: [getHash],
  render: function () {
    return (
      <div className="home">
        <Profile
          {...this.props.profile}
        />
        <Basics
          message={this.props.profile.message}
          balance={this.props.profile.balance}
        />
        <Modules />
        <div>
          <Navbar to="/settings" text="帮助" icon="question-circle" />
          <Navbar to="/settings" text="设置" icon="gear" />
        </div>
      </div>
    );
  }
});
