import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Login from './RegisterLogin/index';
import Register from './RegisterLogin/register'
// import RegisterLogin from './RegisterLogin/index';


function App() {
  return (
    <div>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={About} />
    <Route path="/login" exact component={Login} />
    <Route path="/register" exact component={Register} />
    {/* <Route path="/login"  component={RegisterLogin} /> */}

    </Switch>
    </div>
    
    
    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  
  
  );
}

export default App;
