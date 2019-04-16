import React from 'react';
// style
import './page.scss';
import { API_URL } from '../../dependencies/constants';


const Page = (props) => {
  const {content, bgImage} = props;
  const fullPath = bgImage && `${API_URL}/images/0x0/${bgImage}`;
  
  return(
    <div className="page">
      <div className="page_bgpicture" style={{backgroundImage: `url(${fullPath})`}} />
      <div className="page_bgpage">
      </div>
        {content}
    </div>
  )
};

export default Page;


// import { API_URL } from '../../dependencies/constants';

// class Image extends React.Component {

//   render(){
//     const {path} = this.props;
//     const fullPath = `${API_URL}/images/0x0/${path}`;