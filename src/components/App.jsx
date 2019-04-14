import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from './ErrorPage';
import Categories from './Categories';
import Gallery from './Gallery';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Categories}/>
          <Route path="/gallery" component={Gallery}/>
          {/* <Route path="/:user" component={User}/> */}
          {/* <Route component={NoMatch}/> */}
          <Route component={()=>{
              return (
                <ErrorPage
                  code={404}
                  title="Page not found"
                  description="The page you are looking for doesn't exist."
                />
              )
            }
          }/>
        </Switch>
      </Router>


      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
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
}

export default App;



