import React from 'react';
import './Widget.css';

const Widget = ({ className, children }) => (
  <div className={`widget ${className}`.trim()}>{children}</div>
);

Widget.defaultProps = {
  className: '',
};

export default Widget;
