import React from 'react';
import Profile from './Profile';
import Info from './Info';
import Modules from './Modules';
import { Link } from 'react-router';

// export default function Home(props) {
//   console.log(props);
//   return (
//     <div>
//       <Link to="/box">box</Link>
//       <Profile />
//       <Info />
//       <Modules />
//       {props.children}
//     </div>
//   );
// }

export default React.createClass({
  render() {
    return (
      <div>
        <Link to="/box">box</Link>
        <Profile />
        <Info />
        <Modules />
        {this.props.children}
      </div>
    );
  }
});
