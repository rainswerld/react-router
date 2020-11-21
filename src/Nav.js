import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <header>
    <h1>MyMDB</h1>
    <Link to='/'>Home</Link>
    <Link to='/movies'>Movies</Link>
    <Link to='/families'>Families</Link>
    <Link to='/about'>About</Link>
    <Link to='/team'>Team</Link>
    <hr />
  </header>
)

export default Nav
