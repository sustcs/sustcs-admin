import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     echo: ''
  //   };
  // }
  // componentDidMount() {
  //   fetch('/')
  //     .then(res => {
  //       console.log(res);
  //       if (res.ok) {
  //         res.text().then(data => {
  //           this.setState({
  //             echo: data
  //           });
  //         });
  //       }
  //     })
  //     .catch(res => {
  //       console.log(res.status);
  //     });
  // }
  // componentWillUnmount() {
  //   this.serverRequest.abort();
  // }
  render() {
    return (
      <div className="APP">
        <Button type="primary">hello react</Button>
      </div>
    );
  }
}
export default App;
