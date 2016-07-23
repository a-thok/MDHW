import React from 'react';
import Module from './Module';

const modules = [
  { to: 'rczp', text: '人才招聘' },
  { to: 'cysj', text: '创意设计' },
  { to: 'kjfw', text: '会计服务' },
  { to: 'zb', text: '众包' },
  { to: 'zc', text: '众筹' },
  { to: 'cqbh', text: '产权保护' },
  { to: 'cygc', text: '创意工厂' },
  { to: 'srdz', text: '私人定制' },
  { to: 'sbcs', text: '商标超市' }
];

export default function Modules() {
  const moduleNodes = modules.map((module) => (
    <Module
      to={module.to}
      text={module.text}
    />
  ));
  return (
    <div className="modules">
      {moduleNodes}
    </div>
  );
}
