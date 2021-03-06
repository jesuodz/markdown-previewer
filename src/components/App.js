import React from 'react';

import AppHeader from './Header';
import Editor from './Editor';
import Previewer from './Previewer';
import AppFooter from './Footer';

import './App.css';

const App = () => {
  return (
    <div className="container">
      <AppHeader />
      <div className="row">
        <Editor />
        <Previewer />
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
