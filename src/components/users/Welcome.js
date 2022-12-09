import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signinUser } from '../../actions/signinUser'

// const link = {
//     width: '100px',
//     padding: '12px',
//     margin: '0 6px 6px',
//     textDecoration: 'none',
//     color: 'green',
//   }

class SignIn extends React.Component {

    state = {
        username: ""
    }

    handleOnChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.signinUser(this.state.username);
        this.props.history.push('/books')
    }

    render() {

        return (
            <div class="welcome">
                <br />
            <div className="card text-center">
                <div className="card-header">
                    <h3>SignIn</h3>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Enter a Username to Get Started</h5>
                    <form onSubmit={this.handleOnSubmit}>
                        <input type="text" value={this.state.username} onChange={this.handleOnChange} placeholder="Username" required />
                    </form>
                </div>
            </div>
            <br />
            </div>
        )
    }

}

function mapDispatch(d) {
    return { 
      signinUser: (name) => d(signinUser(name))
    }
}
  
export default connect(null, mapDispatch)(withRouter(SignIn))