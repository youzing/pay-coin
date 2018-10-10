import React, { Component } from 'react';
import Button from 'antd/lib/button';
import './../App.css';

class Signin extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Signin</Button>
      </div>
    );
  }
}

export default Signin;