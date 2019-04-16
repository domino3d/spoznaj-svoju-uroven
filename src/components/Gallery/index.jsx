import React from 'react';
// style
import './gallery.scss';
import Categories from '../Categories';
import Page from '../Page';
import { API_GALLERY_URL } from '../../dependencies/constants';
import ErrorPage from '../ErrorPage';

class Gallery extends React.Component {
  // this.props.match.params.path
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      error: null,
      isLoading: true,
      path: this.props.match.params.path,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API_GALLERY_URL+"/"+this.state.path)
      .then(response => response.json())
      .then(data => {
        // console.log(">>>suc",data);
        this.setState({ data: data, isLoading: false })
      }
        )
      .catch(error => {
        console.log(">>>err",error);
        this.setState({ error, isLoading: false })
      }
      );
}
  
  render(){
    if (this.state.error) {
      return <ErrorPage
        code={500}
        title="Error"
        description={this.state.error.message}
      />
    }
    return (
      <div className="gallery">
          { this.state.isLoading ?
          <p className="loading">Loading ...</p>
          : 
            <Page 
              bgImage={this.state.data.images[0].fullpath}
              content={<Categories 
                setBGImage={null}
                // galleryData={this.state.galleryData}
                data={this.state.data}
                isLoading={this.state.isLoading}
                h1="FOTOGALÉRIA"
                h2={this.state.path}
                add="PRIDAT FOTKY"
                handleClick={null}
              />}
            />
          }
      </div>
      )
    };
  }

export default Gallery;