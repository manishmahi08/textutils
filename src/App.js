
import React, { useState } from 'react';
import { BrowserRouter as Router,  Switch, Route, Link } from 'react-router-dom'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');

  const switchMode = ()=>{
    console.log(mode);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#222e3f';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About" switchMode={switchMode} mode={mode} />
        <div className="container my-3">
          
          <Switch>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/">
              <TextForm heading="Enter your text"  mode={mode}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;