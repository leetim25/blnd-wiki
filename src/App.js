import React, { useState, useEffect } from 'react';
import MarkDown from 'markdown-to-jsx';

import './App.css';

function App() {
  const [post, setPost] = useState('');
  const [fileName, setFileName] = useState('game-mechanic.md');

  useEffect(() => {
    import(`./markdown/${fileName}`)
      .then(res => {
          fetch(res.default)
            .then (res => res.text())
              .then (res => setPost(res));
      })
  })

  const clickMenu = (element) => {
    const menuName = element.target.id;
    switch (menuName) {
      case 'game-mechanic':
        setFileName('game-mechanic.md');
        break;
      case 'strategy':
        setFileName('strategy.md');
        break;
      case 'rewards':
        setFileName('rewards.md');
        break;
      case 'patch-notes':
        setFileName('patch-notes.md');
    }
  }

  return (
    <div className='wiki'>
      <div className='wiki-header'>Blnd Wiki</div>
      <div className='wiki-wrapper'>
        <div className='side-menu' onClick={clickMenu}>
            <li className="menu-item" id="game-mechanic">Game Mechnics</li>
            <li className="menu-item" id="strategy">Strategy</li>
            <li className="menu-item" id="rewards">Rewards</li>
            <li className="menu-item" id="patch-notes">Patch Notes</li>
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
