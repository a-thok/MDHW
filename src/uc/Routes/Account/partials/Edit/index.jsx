import React from 'react';
import getHash from '../../../../mixins/getHash';
import Address from './Address';
import BindAccount from './BindAccount';
import Email from './Email';
import Gender from './Gender';
import Logo from './Logo';
import PetName from './PetName';
import Phone from './Phone';
import RealName from './RealName';
import Signature from './Signature';
import UpdatePW from './UpdatePW';

export default React.createClass({
  mixins: [getHash],
  render: function () {
    let node;
    let hashName = location.hash.replace(/.*\?type=/, '').replace(/&.*/, '');
    switch (hashName) {
      case 'logo':
        node = <Logo res={this.props} />;
        break;
      case 'account':
        node = <PetName res={this.props} />;
        break;
      case 'realname':
        node = <RealName res={this.props} />;
        break;
      case 'sex':
        node = <Gender res={this.props} />;
        break;
      case 'pPhone':
        node = <Phone res={this.props} />;
        break;
      case 'email':
        node = <Email res={this.props} />;
        break;
      case 'signature':
        node = <Signature res={this.props} />;
        break;
      case 'phone':
        node = <BindAccount res={this.props} />;
        break;
      case 'address':
        node = <Address res={this.props} />;
        break;
      case 'password':
        node = <UpdatePW res={this.props} />;
        break;
      default:
        node = null;
    }
    return (
      <form onSubmit={this.props.onSubmit}>
        { node }
      </form>
    );
  }
});
