import React from 'react';
// import Tile from '../Tile';
// import Tiles from '../Tiles';
// style
import './categories.scss';
// import { Container, Row, Col } from 'react-bootstrap';
import { Container, Grid, Row, Col } from 'react-flexbox-grid';
import Card from '../Card';
import { withRouter } from 'react-router-dom';
import { API_URL } from '../../dependencies/constants';
import { API_GALLERY_URL } from '../../dependencies/constants';


const staticGallery = {
      galleries: [
      {
      path: "Architecture",
      image: {
        path: "annapurna-massif-himalayas-nepal-4k-wallpaper.jpg",
        fullpath: "Architecture/annapurna-massif-himalayas-nepal-4k-wallpaper.jpg",
        name: "annapurna-massif-himalayas-nepal-4k-wallpaper",
        modified: "2019-04-16T13:04:45.0+0200"
      },
      name: "Architecture"
      },
      {
      path: "MotorBikes",
      image: {
      path: "MotorbikeTrip_rental_moto_vignette-Harley-Davidson-RoadKing-1800_1200x630.jpg",
      fullpath: "MotorBikes/MotorbikeTrip_rental_moto_vignette-Harley-Davidson-RoadKing-1800_1200x630.jpg",
      name: "MotorbikeTrip_rental_moto_vignette-Harley-Davidson-RoadKing-1800_1200x630",
      modified: "2019-01-14T00:26:29.0+0100"
      },
      name: "MotorBikes"
      },
      {
      path: "Space",
      image: {
      path: "space1.jpg",
      fullpath: "Space/space1.jpg",
      name: "space1",
      modified: "2019-01-31T11:59:16.0+0100"
      },
      name: "Space"
      },
      {
      path: "pes",
      image: {
      path: "How-to-Train-Your-Beagle-Dog-to-Be-Off-leash.jpg",
      fullpath: "pes/How-to-Train-Your-Beagle-Dog-to-Be-Off-leash.jpg",
      name: "How-to-Train-Your-Beagle-Dog-to-Be-Off-leash",
      modified: "2019-02-08T01:31:20.0+0100"
      },
      name: "pes"
      },
      {
      path: "jahody",
      image: {
      path: "z-STRA-CWW3508-A_h.jpg",
      fullpath: "jahody/z-STRA-CWW3508-A_h.jpg",
      name: "z-STRA-CWW3508-A_h",
      modified: "2019-02-08T01:27:59.0+0100"
      },
      name: "jahody"
      },
      {
      path: "Dizajn",
      image: {
      path: "pexels-photo-221506-5.jpg",
      fullpath: "Dizajn/pexels-photo-221506-5.jpg",
      name: "pexels-photo-221506-5",
      modified: "2019-04-11T17:45:54.0+0200"
      },
      name: "Dizajn"
      },
      {
      path: "cars",
      image: {
      path: "ferrari-488-spider-1.jpg",
      fullpath: "cars/ferrari-488-spider-1.jpg",
      name: "ferrari-488-spider-1",
      modified: "2019-01-17T14:23:25.0+0100"
      },
      name: "cars"
      },
      {
      path: "Wicher%20is%20cool%21",
      image: {
      path: "ar0uq_m_uz8_tumb_660.jpg",
      fullpath: "Wicher%20is%20cool%21/ar0uq_m_uz8_tumb_660.jpg",
      name: "ar0uq_m_uz8_tumb_660",
      modified: "2019-02-20T14:05:26.0+0100"
      },
      name: "Wicher is cool!"
      },
      {
      path: "people",
      image: {
      path: "pexels-photo-1282270.jpg",
      fullpath: "people/pexels-photo-1282270.jpg",
      name: "pexels-photo-1282270",
      modified: "2019-01-14T19:37:10.0+0100"
      },
      name: "people"
      },
      {
      path: "a",
      image: {
      path: "45452594_10215125997255127_3641667847899316224_n.jpg",
      fullpath: "a/45452594_10215125997255127_3641667847899316224_n.jpg",
      name: "45452594_10215125997255127_3641667847899316224_n",
      modified: "2019-01-16T14:11:37.0+0100"
      },
      name: "a"
      },
      {
      path: "TEST",
      image: {
      path: "pf.jpg",
      fullpath: "TEST/pf.jpg",
      name: "pf",
      modified: "2019-01-31T11:54:53.0+0100"
      },
      name: "TEST"
      },
      {
      path: "food",
      image: {
      path: "banana-muffins-2.jpg",
      fullpath: "food/banana-muffins-2.jpg",
      name: "banana-muffins-2",
      modified: "2018-10-21T22:02:37.0+0200"
      },
      name: "food"
      },
      {
      path: "Wild%20animals",
      image: {
      path: "1412019705887_wps_20_Tiger_ftr_ALAMY_A9XWED_jp.jpg",
      fullpath: "Wild%20animals/1412019705887_wps_20_Tiger_ftr_ALAMY_A9XWED_jp.jpg",
      name: "1412019705887_wps_20_Tiger_ftr_ALAMY_A9XWED_jp",
      modified: "2019-01-14T15:56:51.0+0100"
      },
      name: "Wild animals"
      },
      {
      path: "Phones",
      image: {
      path: "Samsung-Galaxy-S10-header-1800x1200.jpg",
      fullpath: "Phones/Samsung-Galaxy-S10-header-1800x1200.jpg",
      name: "Samsung-Galaxy-S10-header-1800x1200",
      modified: "2019-02-06T16:43:42.0+0100"
      },
      name: "Phones"
      },
      {
      path: "auta",
      image: {
      path: "Ford_Mustang_coupe.jpg",
      fullpath: "auta/Ford_Mustang_coupe.jpg",
      name: "Ford_Mustang_coupe",
      modified: "2019-02-05T23:54:26.0+0100"
      },
      name: "auta"
      },
      {
      path: "Candy%20cat",
      image: {
      path: "cake.jpg",
      fullpath: "Candy%20cat/cake.jpg",
      name: "cake",
      modified: "2019-02-17T21:05:27.0+0100"
      },
      name: "Candy cat"
      },
      {
      path: "sport",
      image: {
      path: "mgm22.jpg",
      fullpath: "sport/mgm22.jpg",
      name: "mgm22",
      modified: "2019-01-18T00:09:57.0+0100"
      },
      name: "sport"
      },
      {
      path: "Cooking",
      image: {
      path: "pexels-photo-24464.jpg",
      fullpath: "Cooking/pexels-photo-24464.jpg",
      name: "pexels-photo-24464",
      modified: "2019-01-14T19:27:16.0+0100"
      },
      name: "Cooking"
      }
      ]
      };


class Categories extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // galleryData: this.props.galleryData,
      data: this.props.data,
      isLoading: this.props.isLoading,
      move: 0,
      id: null,
    };
  }

  handleHover = (gallery,id) => {
    const { setBGImage } = this.props;
    this.setState({
      move:10,
      id:id
    })
    setBGImage && setTimeout(() => {
      // gallery && gallery.fullpath ? setBGImage(gallery.fullpath) : 
      // gallery && gallery.image && gallery.image.fullpath && setBGImage(gallery.image.fullpath);
      gallery && gallery.image && gallery.image.fullpath && setBGImage(gallery.image.fullpath);
    }, 1000);
  }
  handleLeave = (id) => {
    this.setState({move:0})
  }

  handleClick = (path) => {
    // const { handleClick } = this.props;
    // handleClick && handleClick(path);

    this.state.data && this.state.data.galleries && this.props.history.push(`/gallery/${path}`)
    // TODO: this.state.data && this.state.data.images && openPICTURE
  }

  addGallery = () => {
    // TODO: addGallery modal
  }

  render(){
    const hoveredCardId = this.state.id;
    const { data, isLoading, h1, h2, add} = this.props;
    const cardData = data ? data.galleries ? data.galleries : data.images : null;

    return(
      <div className="categories">
        
        <h1>{h1}</h1>
        <div style={{display: "flex"}}>
          {this.state.data && this.state.data.images && <span onClick={() => this.props.history.push(`/`)} style={{paddingTop: "25px", paddingRight: "17px"}}>back</span>} 
          <h2>{h2}</h2>
        </div>
        <hr/>

        { isLoading ?
          <p className="loading">Loading ...</p>
          : 
          <Grid fluid className="categories_container">
            <Row>
              {cardData.map( (gallery, id) => 
                <Col 
                  className="card" xs={6} md={3} lg={2} key={id} 
                  onClick={() => this.handleClick(gallery.path)}
                  onMouseEnter={() => this.handleHover(gallery,id)}
                  onMouseLeave={() => this.handleLeave(id)}
                  style={{top: hoveredCardId==id ? -this.state.move : 0 + 'px'}} 
                  >
                    { this.state.data && this.state.data.images ?
                      <Card
                        fullpath = {gallery.fullpath && gallery.fullpath}
                        id = {id}
                      />
                    :
                      <Card
                        name = {gallery.name && gallery.name}
                        path = {gallery.image && gallery.image.fullpath && gallery.image.fullpath}
                        id = {id}
                      />
                    }
                </Col>
              )}
              
              <Col 
                className="card" xs={6} md={3} lg={2}
                onClick={() => this.addGallery()}
                onMouseEnter={() => this.handleHover(null,-1)}
                onMouseLeave={() => this.handleLeave(-1)}
                style={{top: hoveredCardId==-1 ? -this.state.move : 0 + 'px'}} 
                >
                  <Card
                    name = {add}
                    path = {null}
                    id = {null}
                  />
              </Col>
            </Row>
          </Grid>
        }
      </div>
    );
  }
};

export default withRouter(Categories);
