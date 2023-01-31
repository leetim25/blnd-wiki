import React, { useState, useEffect } from 'react';
import MarkDown from 'markdown-to-jsx';

import './App.css';

function App() {
  const file_name = "game-mechanic.md"
  const [post, setPost] = useState('');

  useEffect(() => {
    import(`./markdown/${file_name}`)
      .then(res => {
          fetch(res.default)
            .then (res => res.text())
              .then (res => setPost(res));
      })
  })

  return (
    <div className='wiki'>
      <div className='wiki-header'>Blnd Wiki</div>
      <div className='wiki-wrapper'>
        <div className='side-menu'>
            <li>Game Mechnics</li>
            <li>Strategy</li>
            <li>Rewards</li>
        </div>
        <div className='wiki-content'>
          <MarkDown>
            {post}
          </MarkDown>
        </div>
      </div>
    </div>
  );
}

export default App;
