import React, { useState } from 'react';

function Header({ addlist }) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim() !== '') {
      addlist(input);
      setInput('');
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="inputbox"
        placeholder="Add a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="add-button" onClick={handleAdd}>Add </button>
    </div>
  );
}

export default Header;
