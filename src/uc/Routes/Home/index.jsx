import React from 'react';

import Profile from './Profile';
import Basics from './Basics';
import Modules from './Modules/'; // ???
import Navbar from '../../components/Navbar';

export default function Home(props) {
  return (
    <div className="home">
      <Profile
        {...props.profile}
      />
      <Basics
        message={props.profile.message}
        balance={props.profile.balance}
      />
      <Modules />
      <div>
        {/* <Navbar to="#" text="帮助" icon="question-circle" />} */}
        <Navbar to="/settings" text="设置" icon="gear" />
      </div>
    </div>
  );
}
