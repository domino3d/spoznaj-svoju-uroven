import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from './ErrorPage';
import Categories from './Categories';
import Gallery from './Gallery';
import Page from './Page';
import { API_GALLERY_URL } from '../dependencies/constants';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoading: true,
      bgImage: null,
      error: null,
    };
  }
  
  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API_GALLERY_URL)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        this.setState({ data: data, isLoading: false })
      }
        )
      .catch(error => {
        // console.log(error);
        this.setState({ error, isLoading: false })
      }
      );
  }

  setBGImage = (img) => {
    this.setState({ bgImage: img });
  }

  handleClick = (path) => {
    this.props.history.push(`/gallery/${path}`)
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
              content={<Categories 
                setBGImage={this.setBGImage}
                // getImages={this.getImages}
                data={this.state.data}
                isLoading={this.state.isLoading}
                handleClick={this.handleClick}
                error={this.state.error}
                h1="FOTOGALÉRIA"
                h2="KATEGÓRIE"
                add="PRIDAT KATEGORIU"
              />}
            />}
          />
          <Route 
            path="/gallery/:path" 
            component={props => <Gallery
              {...props}
             />} />
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



