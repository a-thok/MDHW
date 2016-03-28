import React from 'react';
import Profile from './Profile';
import Info from './Info';
import Modules from './Modules';
import { Link } from 'react-router';

export default function Home(props) {
  return (
    <div>
      <Link to="/box">box</Link>
      <Profile />
      <Info />
      <Modules />
      { React.cloneElement(props.children, { data: props.route.data }) }
    </div>
  );
}
