import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import api from './Api'

class Home extends Component {
  constructor(props) {
		super(props)
    
		this.state = {
      genres: [],
      isLoading: false
		}
	}
  
	componentDidMount(props) {
    this.setState({
      isLoading: true
    })
    api.loadGenres()
      .then((res) => {
        this.setState({
          isLoading: false,
          genres: res.data
        })
      })
	}
	renderGenreLink(genre) {
	  return <span key={genre}>&nbsp;<Link className='link-genre' to={`/series/${genre}`}>{genre}</Link>&nbsp;</span>
	}
  render() {
    return (
      <div>
        <section id="intro" className="intro-section">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<h1><img src="/images/logo.png" /></h1>
								<p>Nunca mais esqueça uma série que você assistiu ou que alguém lhe indicou.</p>
							</div>
						</div>
					</div>
				</section>

        <section>
          {
            this.state.isLoading &&
            <span>Aguarde, carregando...</span>
          }
          {
            !this.state.isLoading &&
            <div>
              Veja as séries nas Categorias:
              {this.state.genres.map(this.renderGenreLink)}
            </div>
          }
        </section>
      </div>
    )
  }
}
export default Home