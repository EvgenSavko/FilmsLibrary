import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, NavItem, Nav, Grid, Row, Col } from 'react-bootstrap';

// import getStartCities from '../actions/startCities';
//
// import Forma from './Forma';
import Menu from './Menu';
import Cardfilm from './Cardfilm';

class PageFilm extends Component {


  render() {
    console.log('films arr', this.props.films)
    return (
      <div >
        <Menu />
        {this.props.films.map( (item, index) => {
          this.film = item;
          this.index = index;
          return <Cardfilm film={this.film} index={this.index} />;
        })}
      </div>
    );
  }
}
export default connect(
  state => ({
    films: state.films,
  }),
  dispatch => ({

  }),
)(PageFilm);
