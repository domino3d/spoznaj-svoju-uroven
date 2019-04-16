import React from 'react';
import Image from './Image';
// import Tiles from '../Tiles';
// style
import './card.scss';
// import { Container, Row, Col } from 'react-bootstrap';
import { Container, Grid, Row, Col } from 'react-flexbox-grid';

class Card extends React.Component {

  handleClick = (id) => {
    // goto
  }

  render() {
    const { name, path, id } = this.props;
    // const imgsrc = images(`url('/${path}.jpg')`);
    // const imgsrc = path ? `url('/${path}.jpg')` : null;
    // const imgsrc = !path ? `/default.jpg` : null;

    return (
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
