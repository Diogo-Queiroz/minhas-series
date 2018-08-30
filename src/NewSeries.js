import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import api from './Api'

const statuses = {
    'watched': 'Assistido',
    'watching': 'Assistindo',
    'toWatch': 'Assistir'
}

class NewSeries extends Component {
  constructor(props) {
		super(props)
    
		this.state = {
      genres: [],
      isLoading: false,
      redirect: false
		}
		this.saveSeries = this.saveSeries.bind(this)
	}
	componentDidMount(props) {
    this.setState({
      isLoading: true
    })
    api.loadGenres()
      .then((res) => this.setState({
        isLoading: false,
        genres: res.data
      }))
	}
	saveSeries() {
	  const newSeries = {
      name: this.refs.name.value,
      status: this.refs.status.value,
      genre: this.refs.genre.value,
      comment: this.refs.comment.value
    }
    api.saveSeries(newSeries)
      .then((res) => {
        this.setState({
          redirect: '/series/' + this.refs.genre.value
        })
      })
	}
	render() {
    return (
        <section className="intro-section container">
          {
            this.state.redirect && 
            <Redirect to={this.state.redirect} />
          }
          <h1>Nova série</h1>
          <form className='form'>
            <label className='label-name'>Nome:</label>
            <input type="text" ref='name' className='name input-form'/>
            <label className='label-statuses'>Status:</label>
            <select ref='status' className='statuses input-form'>
              {Object
                .keys(statuses)
                .map( key => <option key={key} value={key}>{statuses[key]}</option>)
              }
            </select>
            <label className='label-genres'>Gênero:</label>
            <select ref='genre' className='genres input-form'>
              {this.state.genres
                .map( index => <option key={index} value={index}>{index}</option>)
              }
            </select>
            <label className='label-comments'>Comentários:</label>
            <textarea className='comments' ref='comment'></textarea>
            <button type="button" className="submit btn btn-primary" onClick={this.saveSeries}>Salvar</button>
            <button type="reset" className="reset btn btn-danger">Reset</button>
          </form>
        </section>
    )
  }
}
export default NewSeries