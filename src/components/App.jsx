import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from './ErrorPage';
import Categories from './Categories';
import Gallery from './Gallery';
import Page from './Page';
import { API_URL, API_IMAGES_DEFAULT_SIZE_URL, API_GALLERY_URL } from '../dependencies/constants';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoading: true,
      bgImage: null,
    };
  }
  
  // state = {
  //   bgImage: null
  // }
  
  // TODO: fetch data
  // https://www.robinwieruch.de/react-fetching-data/#react-how-fetch-data
  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API_GALLERY_URL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ data: data, isLoading: false })
      }
        )
      .catch(error => {
        console.log(error);
        this.setState({ error, isLoading: false })
      }
      );
  }

  setBGImage = (img) => {
    this.setState({ bgImage: img });
  }

  // getImages = (path) => {
  //   // this.setState({ isImagesLoading: true });

  //   // fetch(API_IMAGES_DEFAULT_SIZE_URL+path)
  //   fetch(API_GALLERY_URL+"/"+path)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(">>>suc",data);
  //       this.setState({ data: data, isImagesLoading: false })
  //     }
  //       )
  //     .catch(error => {
  //       console.log(">>>err",error);
  //       this.setState({ error, isImagesLoading: false })
  //     }
  //     );
  // }

  handleClick = (path) => {
    // const { handleClick } = this.props;
    // setBGImage && handleClick(path);
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
              // setBGImage={this.setBGImage}
              // getImages={this.getImages}
              // data={this.state.data}
              // isLoading={this.state.isImagesLoading}
             />} />
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



