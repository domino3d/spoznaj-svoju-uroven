import React from 'react';
import { API_URL } from '../../dependencies/constants';

class Image extends React.Component {

  render(){
    const {path} = this.props;
    const fullPath = `${API_URL}/images/0x0/${path}`;

    return(
      // <img className="card_content_image" src={path} />
      <div className="card_content_image" style={{backgroundImage: `url(${fullPath})`}} >
        {/* <img src={path} /> */}
      </div>
    );
  }
};

export default Image;
