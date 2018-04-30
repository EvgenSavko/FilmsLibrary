import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, NavItem, Nav, Grid, Row, Col } from 'react-bootstrap';

import CardfilmStyle from './CardfilmStyle.css';

class Cardfilm extends Component {
  constructor(props) {
		super(props)

    this.state = {
			isOpen: false,
      film: this.props.film,
      value: '',
      input: '',
		}

  }

  componentWillReceiveProps(nextProps) {
    this.setState({ film: nextProps.film });
  }

  openComments = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

  onChange(e) {
    this.setState({ value: e.target.value, input: e.target });
  }

  AddComment = e => {
      e.preventDefault();
      if (this.state.value != undefined) {
        this.props.onAddComment(
           this.state.value,
           this.props.index
         );

        this.setState({ value: '' });
        if (this.state.value) this.state.input.value = '';
      }
    };

    onButtonDel = (index) => {
      console.log(index)
      this.props.onDelFilm(index)
      //e.target.parentElement.className = 'none';
      //this.props.onDelCity(index);
    };

  render() {

    return (
      <div className='mind'>
        <div className='card' style={{backgroundImage: `url(${this.state.film.URL})`}}>
          <div className='row'>
             <div className='img'>
                <img
                  src={this.state.film.URL}
                  alt={'img card'}
                />
             </div>
             <div className='describe'>
              <h3>{this.state.film.title}</h3>
                <p>{this.state.film.describe}</p>
                <p >COUNTRY <span>{this.state.film.country}</span></p>
                <p>YEAR <span>{this.state.film.year}</span></p>
                <p>GENRE <span>{this.state.film.genre}</span></p>
                <p >ACTORS </p>
                <p >
                  {this.state.film.actors}
                </p>
                <button
                  onClick={() => this.onButtonDel(this.props.index)}
                  className="btn  del"
                  type="button">
                  Delete
                </button>
                <button  className="btn edit" type="button">
                  Edit
                </button>
             </div>
          </div>
          <div className='margbottom'></div>
        </div>
        <div className='comment'>
          <p onClick={this.openComments} >
            Comments: {this.props.film.comments.length}
            { !this.state.isOpen && <span className='arrowUP'></span>}
            { this.state.isOpen && <span className='arrowDown'></span>}
          </p>
          <hr/>
              { this.state.isOpen &&
                <div className='comment1'>
                {this.props.film.comments.map(item => {
                  return (
                    <div>
                      <p>{item}</p>
                      <hr/>
                    </div>
                  );
                })}
                  <input
                      onChange={this.onChange.bind(this)}
                      className="form-control"
                      type="text"
                      placeholder="Enter your comment"
                  />
                  <button onClick={this.AddComment} type="submit" className="btn btn-primary del">
                    Add
                  </button>
                  <div className='margbottom2'></div>
                </div>
              }
        </div>
      </div>
    );
  }
}
export default connect(
  state => ({
    films: state.films,
  }),
  dispatch => ({
    onAddComment: (value, index) => {
      const payload = {
        id: index,
        value,
      };
      dispatch({ type: 'ADD_COMMENT', payload });
    },
    onDelFilm: index => {
      dispatch({ type: 'DEL_FILM', index });
    },
  }),
)(Cardfilm);
