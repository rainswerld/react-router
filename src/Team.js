import React from 'react'
import { Route, Link } from 'react-router-dom'

import Engineering from './Engineering'
import Legal from './Legal'

const Team = ({ match }) => (
  <div>
    <h3> Our Team </h3>

    <p> Our team is composed of the best folks around. </p>
    <ul>
      <li><Link to={match.url + '/engineering'}>Engineering</Link></li>
      <li><Link to={match.url + '/legal'}>Legal</Link></li>
    </ul>

    <Route path={match.url + '/engineering'} component={Engineering} />
    <Route path={match.url + '/legal'} component={Legal} />
  </div>
)

export default Team
