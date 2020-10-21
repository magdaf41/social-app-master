import React, { Component } from 'react';
import PopupContent from './PopupContent';
import LoginButton from './LoginButton';


class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false //Set render state to false
    }
  }
  componentDidMount() {
    setTimeout(function () { //Start the timer
      this.setState({ render: true }) //After 1 second, set render to true
    }.bind(this), 5000)
  }


  render() {
    return (
      <>
        { this.state.render &&
          <div className='PopupContent'>
            <button onClick={()=>this.setState({render:false})}>Zamknij</button>
            <h2>Join us</h2>
            <div className="Singup"> <a href="http://localhost:3000/signup">Sign up</a> </div>
            <LoginButton text='Login' />
          </div>
        }
      </>
    )
  }
}

export default Popup;