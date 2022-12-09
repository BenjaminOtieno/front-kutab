import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  textDecoration: 'none',
  color: 'dark-green',
}

class NavBar extends React.Component {

    render() {
        return (
          <header>
            <div className="container">
              <br />              
              <div className="row">
                <div className="col">
                <NavLink to='/' exact style={link} activeStyle={{ background: 'lightgreen' }}>Home</NavLink>
                  <NavLink to='/books' exact style={link} activeStyle={{ background: 'lightgreen' }}>Library</NavLink>
                  <NavLink to={`/users/${this.props.userId}/books`} exact style={link} activeStyle={{ background: 'lightgreen' }}>My Shelf</NavLink>
                </div>
            </div>

            </div>
            
            <div className="container">
              <div className="row pt-5">
                <div className="col text-center">
                  <h1>KUTAB</h1>
                  <h6>Wisdom starts here.</h6>
                  <br />
                </div>
              </div>
            </div>

        </header>
        )
    }
}

export default NavBar