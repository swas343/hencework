import './App.css';
import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Sidebar from './components/includes/sidebar';
import Header from './components/includes/header';
import Footer from './components/includes/footer';
import Signin from './components/pages/signin';
import Home from './pages/home';

function App() {
  const [activeState, setActiveState] = useState(false)
  const [menuIcon, setMenuIcon] = useState('lni-chevron-left')

  const menuToggleHandler = () =>{
    setActiveState( state => { return !state });
    // if(document.body.clientWidth > 1200) {
    if(activeState){
      setMenuIcon('lni-chevron-left')
    }else{
      setMenuIcon('lni-menu')
    }
    // }
  }

  // const overlayToggleHandler = () =>{
  //   setActiveState( state => {return !state })
  // }

  const activeClass = (activeState)?'active':' ';

  return (
    <div className="App">
        <Sidebar 
          active={activeClass} 
          menuToggleHandler={menuToggleHandler} 
        />
        <main className={`main-wrapper ${activeClass}`}>
          <Header 
            active={activeClass} 
            menuIcon={menuIcon}
            menuToggleHandler={menuToggleHandler} 
          />

          <Switch>
          <Route path="/" exact> <Redirect to="/signin" /></Route>
            <Route path="/signin">
              <Signin />
            </Route>
            
            <Route exact path="/home">
              <Home />
            </Route>
          </Switch>
          
          <Footer />
        </main>
    </div>
  );
}

export default App;
