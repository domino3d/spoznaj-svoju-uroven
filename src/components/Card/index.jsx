import React from 'react';
import Image from './Image';
// import Tiles from '../Tiles';
// style
import './card.scss';
// import { Container, Row, Col } from 'react-bootstrap';

class Card extends React.Component {

  handleClick = (id) => {
    // goto
  }

  render() {
    const { name, path, fullpath, id } = this.props;
    // const imgsrc = images(`url('/${path}.jpg')`);
    // const imgsrc = path ? `url('/${path}.jpg')` : null;
    // const imgsrc = !path ? `/default.jpg` : null;

    return (
      fullpath ? 
        <div className="card_content_full">
            <Image className="card_content_image" full path={fullpath} />
        </div>
        :
        <div className="card_content">
          {path &&
            <Image className="card_content_image" path={path} />}
          <div className="card_content_text">
            <h3>{name}</h3>
            {/* <h4>6 fotiek</h4> */}
          </div>
        </div>
        
    );
  }
};

export default Card;
