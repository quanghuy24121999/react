import { Component } from 'react';
import './App.css';
import TodoItems from './components/TodoItems';
import tickAll from './image/tick-all.svg';

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
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onTickAll = this.onTickAll.bind(this);
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

  onKeyUp(event) {
    if (event.keyCode === 13) {
      let text = event.target.value;
      if (!text) {
        return;
      }
      text = text.trim();
      if (!text) {
        return;
      } else {
        this.setState({
          todoItems: [
            {
              title: text, isComplete: false
            },
            ...this.state.todoItems
          ]
        });
      }
      event.target.value = "";
    }
  }
  
  onTickAll() {
    this.state.todoItems.map((item) => {
      return this.setState({
        todoItems: [
          ...item,
          item.isComplete = true
        ]
      })
    })
  }

  render() {
    if (this.state.todoItems.length > 0) {
      return (
        <div className="App">
          <div className="add-item">
            <img src={tickAll} width={32} height={32} alt="" onClick={this.onTickAll} />
            <input type="text" placeholder="Input an item !" onKeyUp={this.onKeyUp}/>
          </div>  
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
