import { Component } from 'react';
import './App.css';
import TodoItems from './components/TodoItems';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { title: "Shopping", isComplete: true},
        { title: "Play Game", isComplete: true},
        { title: "Learn React", isComplete: false}
      ]
    }
  }
  
  onItemClick(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const todoItems = this.state.todoItems;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      })
    }
  }
  
  render() {
    if (this.state.todoItems.length > 0) {
      return (
        <div className="App">
          {
            this.state.todoItems.map((item, index) => 
              <TodoItems 
                key={index} 
                item={item} 
                onClick={this.onItemClick(item)}
              />)
          }
        </div>
      );
    } else {
      return (
        <div className="App">Nothing here</div>
      );
    }
  } 
}

export default App;
