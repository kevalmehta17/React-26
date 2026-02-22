import React, { memo } from 'react';

const Child = memo(function Child({ name, children , onClick}) {
  console.log('Child rendered');
  return (
    <div>
      <button onClick={onClick}>{children}</button>
      <h2>{name}</h2>
    </div>
  );
});

export default Child;
