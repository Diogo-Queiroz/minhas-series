import React, { Component } from 'react'

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
      isLoading: false
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
	  alert(this.refs.comment.value)
	  return false
	}
	render() {
    return (
        <section className="intro-section container">
          <h1>Nova série</h1>
          <form>
            <div className="form-group now">
              <label className="col-sm-2 col-form-label">Nome:</label>
              <div className="col-sm-10">
                <input type="text" ref='name' className="form-control"/>
              </div>
            </div>
            <div className="form-group now">
              <label className="col-sm-2 col-form-label">Status:</label>
              <div className="col-sm-10">
                <select ref='status' className="form-control">
                  {Object
                    .keys(statuses)
                    .map( key => <option key={key} value={key}>{statuses[key]}</option>)
                  }
                </select>
              </div>
            </div>
            <div className="form-group now">
              <label className="col-sm-2 col-form-label">Gênero:</label>
              <div className="col-sm-10">
                <select ref='genre' className="form-control">
                  {this.state.genres
                    .map( (index) => <option key={index} value={index}>{index}</option>)
                  }
                </select>
              </div>
            </div>
            <div className="form-group now">
              <label className="col-sm-2 col-form-label">Comentários:</label>
              <div className="col-sm-10">
                <textarea ref='comment' className="form-control"></textarea>
              </div>
            </div>
            <div className="form-group now">
              <button type="button" className="btn btn-primary" onClick={this.saveSeries}>Salvar</button>
            </div>
          </form>
        </section>
    )
  }
}
export default NewSeries