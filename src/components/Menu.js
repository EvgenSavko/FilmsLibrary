import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, NavItem, Nav, Grid, Row, Col } from 'react-bootstrap';

import MenuStyle from './MenuStyle.css';

class Menu extends Component {
  constructor(props) {
		super(props)

    this.state = {
			isOpen: false,

		}

  }
  openAddMenu = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

  onChangeTitle(e) {
    this.setState({ title: e.target.value, inputTitle: e.target });
  }
  onChangeYear(e) {
    this.setState({ year: e.target.value, inputYear: e.target });
  }
  onChangeCountry(e) {
    this.setState({ country: e.target.value, inputCountry: e.target });
  }
  onChangeGenre(e) {
    this.setState({ genre: e.target.value, inputGenre: e.target });
  }
  onChangePoster(e) {
    this.setState({ poster: e.target.value, inputPoster: e.target });
  }
  onChangeActor(e) {
    this.setState({ actors: e.target.value, inputActors: e.target });
  }
  onChangeDescription(e) {
    this.setState({ description: e.target.value, inputDescription: e.target });
  }

  AddFilmObj = e => {
      e.preventDefault();
      if (
        this.state.title != undefined &&
        this.state.year != undefined &&
        this.state.country != undefined &&
        this.state.genre != undefined &&
        this.state.poster != undefined &&
        this.state.actors != undefined &&
        this.state.description != undefined 
      ) {
        this.props.onAddFilm(
          this.state.title,
          this.state.year,
          this.state.country,
          this.state.genre,
          this.state.poster,
          this.state.actors,
          this.state.description,
        );

        if (this.state.title) {
          this.state.inputTitle.value = '';
          this.state.inputYear.value = '';
          this.state.inputCountry.value = '';
          this.state.inputGenre.value = '';
          this.state.inputPoster.value = '';
          this.state.inputActors.value = '';
          this.state.inputDescription.value = '';
        }
      }
    };

  render() {
    return (
      <div className='head '>
        <div className='left '>
          <p>Films librery</p>
        </div>
        <div className='right'>
          <div onClick={this.openAddMenu}> </div>
          <p  onClick={this.openAddMenu}>Add new film </p>
        </div>
        {this.state.isOpen &&
          <div className="forma">
            <div >
              <p>TITLE</p>
              <input
                  onChange={this.onChangeTitle.bind(this)}
                  className="form-control"
                  type="text"
              />
              <p>YEAR</p>
              <input
                  onChange={this.onChangeYear.bind(this)}
                  className="form-control"
                  type="text"
              />
              <p>COUNTRY</p>
              <input
                  onChange={this.onChangeCountry.bind(this)}
                  className="form-control"
                  type="text"
              />
              <p>GENRE</p>
              <input
                  onChange={this.onChangeGenre.bind(this)}
                  className="form-control"
                  type="text"
              />
              <p>POSTER (LINK)</p>
              <input
                  onChange={this.onChangePoster.bind(this)}
                  className="form-control"
                  type="text"
              />
              <p>ACTORS</p>
              <input
                  onChange={this.onChangeActor.bind(this)}
                  className="form-control"
                  type="text"
              />
              <p>DESCRIPTION</p>
              <textarea
                  rows="3"
                  onChange={this.onChangeDescription.bind(this)}
                  className="form-control"
                  type="text"
              />
              <div className='btnBlock'>
                <button
                  onClick={this.openAddMenu}
                  className="btn  cancel"
                  type="button"
                >
                  Cancel
                </button>
                <button
                  onClick={this.AddFilmObj}
                  className="btn addInform"
                  type="button"
                >
                  Add
                </button>
              </div>
             </div>
          </div>
        }
      </div>
    );
  }
}
export default connect(
  state => ({
    films: state.films,
  }),
  dispatch => ({
    onAddFilm: ( title, year, country, genre, poster, actors, description) => {
      const payload = {
        title,
        URL: poster,
        describe: description,
        country,
        year,
        genre,
        actors,
        comments : [],
      };
      dispatch({ type: 'ADD_FILM', payload });
    },
  }),
)(Menu);
