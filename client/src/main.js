
import React, { useState } from 'react';
import './main.css';



const Main = () => {
  const [activeOption, setActiveOption] = useState('');

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div>
      <div className="sidebar">
        <div
          className={`option ${activeOption === 'a' ? 'active' : ''}`}
          onClick={() => handleOptionClick('a')}
        >
          Option A
        </div>
        <div
          className={`option ${activeOption === 'b' ? 'active' : ''}`}
          onClick={() => handleOptionClick('b')}
        >
          Option B
        </div>
        <div
          className={`option ${activeOption === 'c' ? 'active' : ''}`}
          onClick={() => handleOptionClick('c')}
        >
          Option C
        </div>
        <div
          className={`option ${activeOption === 'd' ? 'active' : ''}`}
          onClick={() => handleOptionClick('d')}
        >
          Option D
        </div>
      </div>
      <div className="content">
        {activeOption && (
          <div>
            Content for Option {activeOption}
          </div>
        )}
      </div>
    </div>
  );
};
export default Main