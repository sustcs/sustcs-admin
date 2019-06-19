import React, { Component } from 'react';

class Analysis extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      data: 'test',
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <img src="https://wg.sust.edu.cn/yizhanshier.jpg"></img>
      </div>
    );
  }
}

export default Analysis;
