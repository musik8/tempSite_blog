import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Link} from 'react-router-dom';
import './App.scss';
import 'normalize.css';
import './assets/fonts/fonts.scss';


import Home from './components/Home';
import Lab6 from './components/Lab6';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <div className="blog">
    
               
          <div className="main-container">
          
             <Route
              path='/'
              exact
              render={(props) => <Home />}
            />
              <Route
                path='/'
                exact
                render={(props) => <Lab6 />}
              />
        
          </div>  
          <div className="blog-container">
             <Route
                path='/'
                exact
                render={(props) => <Blog />}
              />

          </div>
        </div>
      </Router>
      </header>
    </div>
  );
}

export default App;
