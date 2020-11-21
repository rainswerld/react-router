import React from 'react'
import { Route, Link } from 'react-router-dom'

import Movie from './Movie'
import Nav from './Nav'
import About from './About'
import Team from './Team'

import movies from './data/movies'
import families from './data/gameOfThrones'

const App = () => (
  <div>
    <Route path='/' component={Nav} />
    <Route path='/about' component={About} />
    <Route path='/team' component={Team} />
    <Route exact path='/' render={() => (<h4>Welcome! Click a link.</h4>)} />

    {/* Movies show */}
    <Route path='/movies/:id' render={({ match }) => {
      const selectedMovie = movies.find(movie => movie.id.toString() === match.params.id)
      return <Movie
        id={match.params.id}
        title={selectedMovie.title}
        director={selectedMovie.director}
        cast={selectedMovie.cast}
      />
    }} />

    {/* Movies index */}
    <Route exact path='/movies' render={() => (
      <div>
        {movies.map(movie => (
          <Movie
            id={movie.id}
            key={movie.title}
            title={movie.title}
            director={movie.director}
            cast={movie.cast}
          />
        ))}
      </div>
    )}
    />

    {/* Families index */}
    <Route exact path='/families' render={() => (
      <div>
        {families.map(family => (
          <Link key={family.id} to={`/families/${family.id}`}>
            <h4>{family.name}</h4>
          </Link>
        ))}
      </div>
    )}
    />

    {/* Families show */}
    <Route exact path='/families/:id' render={({ match }) => {
      const selectedFamily = families.find(family => family.id.toString() === match.params.id)
      return <div>
        <h4>House {selectedFamily.name}</h4>
        <a href={`https://awoiaf.westeros.org/index.php/${selectedFamily.wikiSuffix}`}>
          <h5>Wiki</h5>
        </a>
        <h5>Members</h5>
        {selectedFamily.people.map(person => (
          <Link
            key={person.id}
            to={`/families/${selectedFamily.id}/members/${person.id}`}>
            <h6>{person.name}</h6>
          </Link>
        ))}
      </div>
    }} />

    {/* Members show */}
    <Route path='/families/:family_id/members/:id' render={({ match }) => {
      const selectedFamily = families.find(family => family.id.toString() === match.params.family_id)
      const selectedPerson = selectedFamily.people.find(person => person.id.toString() === match.params.id)
      return <div>
        <h4>{selectedPerson.name}</h4>
        <p>{selectedPerson.description}</p>
        <a href={`https://awoiaf.westeros.org/index.php/${selectedPerson.wikiSuffix}`}>
          <h5>Wiki</h5>
        </a>
      </div>
    }} />
  </div>
)

export default App
