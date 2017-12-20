import React from 'react';
import './app-header.css'

export default () => (<header className='app-header'>
  <nav>
    <img className='logo' src="/adaptive_logo.png"/>
    <span className='title'>GraphQL stock tracker</span>
  </nav>
</header>)