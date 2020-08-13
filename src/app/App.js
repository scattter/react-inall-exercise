import React, { Component } from 'react';
import './app.less';
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route exact path='/' component={Home} />
          <Route exact path='/calculator' component={Home} />
          <Route exact path='/timer' component={Home} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
