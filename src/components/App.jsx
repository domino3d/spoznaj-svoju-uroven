import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from './ErrorPage';
import Categories from './Categories';
import Gallery from './Gallery';
import Page from './Page';
import API_URL from '../dependencies/constants';

class App extends Component {
  state = {
    bgImage: null
  }
  
  // TODO: fetch data
  // https://www.robinwieruch.de/react-fetching-data/#react-how-fetch-data

  setBGImage = (img) => {
    this.setState({ bgImage: img });
  }

  render() {
    const bgImage = this.state.bgImage;

    return (
      <Router>
        <Switch>
          <Route 
            exact
            path="/" 
            component={() => <Page bgImage={bgImage}  
              content={<Categories setBGImage={this.setBGImage}/>} />}
          />
          <Route 
            path="/gallery/:path" 
            component={props => <Gallery {...props} />} />
            {/* component={() => <Gallery />} /> */}
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
    );
  }
}

export default App;



