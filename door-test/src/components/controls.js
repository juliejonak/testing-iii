import React from 'react';

const Controls = props => {
  const { locked, closed, toggleLocked, toggleClosed } = props;

  return (
    <div className="controls panel">

      <button disabled={!closed} onClick={toggleLocked} className="toggle-btn lock-unlock">
        {locked ? 'Unlock Gate' : 'Lock Gate'}
      </button>

      <button disabled={locked} onClick={toggleClosed} className="toggle-btn open-close">
        {closed ? 'Open Gate' : 'Close Gate'}
      </button>
    </div>
  );
};

export default Controls;
