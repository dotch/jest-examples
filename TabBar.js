import React from 'react';

const TabBar = ({items, selectedIndex}) => (
  <ul>
    {items.map((item, index) => (
      <li className={selectedIndex === index ? 'selected' : null} key={index}>
        {item}
      </li>
    ))}
  </ul>
);

export default TabBar;
