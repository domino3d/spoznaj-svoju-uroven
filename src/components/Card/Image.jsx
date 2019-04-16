import React from 'react';
import { API_IMAGES_DEFAULT_SIZE_URL } from '../../dependencies/constants';

class Image extends React.Component {

  render(){
    const {path, full} = this.props;
    const fullPath = `${API_IMAGES_DEFAULT_SIZE_URL}${path}`;

    return(
      // <img className="card_content_image" src={path} />
      <div className={`${full ? "card_content_full_image" : "card_content_image"}`} style={{backgroundImage: `url(${fullPath})`}} >
        {/* <img src={path} /> */}
      </div>
    );
  }
};

export default Image;
