import React from 'react';
// style
import './gallery.scss';


class Gallery extends React.Component {
  // this.props.match.params.path
  render(){
    
    return (
      <div className="gallery">
        <h3 className="gallery_title">
          gallery: {this.props.match.params.path}
        </h3>
      </div>
      )
    };
  }

export default Gallery;