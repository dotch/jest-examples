import React from 'react';

const Button = ({onClick}) => (
  <button onClick={() => onClick('🤔')}>Click me!</button>
);

export default Button;
