import logo from './logo.svg';
import './App.css';

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', arr: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState(({
      arr: this.state.arr.concat(this.state.value)
    }))

    event.preventDefault();
  }

  render() {
    let arri = this.state.arr;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <div>{JSON.stringify(arri)}</div>
      </form>
    );
  }
}

export default App;