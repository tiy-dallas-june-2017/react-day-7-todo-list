import React, { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem.js';

class App extends Component {

  constructor() {
    super();

    this.state = {
      inputValue: '',
      items: []
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const items = this.state.items.slice();
    items.push({ text: this.state.inputValue, isComplete: false });

    this.setState({
      inputValue: '',
      items: items
    });
  }

  handleInputChange = (evt) => {
    this.setState({
      inputValue: evt.target.value
    })
  }

  toggleItem(index) {
    const items = this.state.items.slice();
    items[index].isComplete = !items[index].isComplete;

    //items[index] = Object.assign({}, items[index], { isComplete: !items[index].isComplete})

    this.setState({
      items: items
    });
  }

  render() {
    console.log('render', this.state);

    let itemList;
    if (this.state.items.length > 0) {
      itemList = <ul>
        {this.state.items.map((item, index) => {
          return <TodoItem key={index} item={item} todoClick={() => this.toggleItem(index)} />
        })}
      </ul>
    }
    else {
      itemList = <p>No items. You should add some.</p>
    }



    return (
      <div className="app">

        <form onSubmit={this.handleSubmit}>
          <input value={this.state.inputValue} onChange={this.handleInputChange} />
        </form>

        {itemList}

      </div>
    );

  }
}

export default App;
