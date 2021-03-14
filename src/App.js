
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import React from 'react';
import Card from './components/cards/card.component.jsx'
import Filter_child from './components/filteredchild/filterchild.jsx';
import { createBrowserHistory } from 'history';
function App(props) {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <BrowserRouter>
     
      < Route exact path='/' component={Home} />
      < Route exact path ='/:filtercontent/:filtervalue' component={Filter_child}/>
   
   
      </BrowserRouter>
      </div>
  );
}

export default App;
