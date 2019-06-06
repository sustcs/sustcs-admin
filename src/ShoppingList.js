import React from 'react';

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      date: new Date()
    };
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <h2>It is {this.state.date.toLocaleDateString()}</h2>
        <img alt={this.props.title} src={this.props.src} />
        {this.props.children}
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
        <button
          className="square"
          onClick={() => this.setState({ value: 'X' })}
        >
          {this.state.value}
        </button>
      </div>
    );
  }
}

export default ShoppingList;
