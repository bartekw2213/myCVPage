import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

// Components
import Nav from './components/Layout/Nav/Nav';
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';

const App = () => {
  const [UIState, changeUIState] = useState({
    openedMenu: false,
  });

  const openCloseMenu = () => {
    changeUIState({
      ...UIState,
      openedMenu: !UIState.openedMenu,
    });
  };

  let DarkOverlay = null;
  if (UIState.openedMenu)
    DarkOverlay = <div onClick={openCloseMenu} className='DarkOverlay' />;

  return (
    <BrowserRouter>
      <div className='App'>
        {DarkOverlay}
        <Nav openCloseMenu={openCloseMenu} openedMenu={UIState.openedMenu} />
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/o-mnie' exact component={About} />
          <Route path='/oferowane-usługi' exact component={Service} />
          <Route path='/kontakt' exact component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
