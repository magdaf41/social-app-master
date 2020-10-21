import React, { Component } from 'react';
import Login from './Login';



class LoginButton extends Component {


  constructor(props) {
    super(props);
    this.state = {
      show: false,
      text: this.props.text,

    }
  }

  showLiginContent = (event) => {

    this.setState((prevState) => {
      return ({
        show: !this.state.show,
        text: 'X'
      })
    });
  }

  render() {
    return (
      <div>
        {

          this.state.show ? <div><Login /></div> : null
        }
        <button className="Login" onClick={this.showLiginContent}>{this.state.text}</button>

      </div>
    );
  }
}

export default LoginButton;