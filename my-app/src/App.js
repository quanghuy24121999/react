import './App.css';
import TodoItems from './components/TodoItems';

var todoItems = [
  { title: "Shopping", isComplete: true},
  { title: "Play Game"},
  { title: "Learn React"}
];

function App() {
  if (todoItems.length > 0) {
    return (
      <div className="App">
        {
          todoItems.map((item, index) => 
            <TodoItems key={index} item={item}/>)
        }
      </div>
    );
  } else {
    return (
      <div className="App">Nothing here</div>
    );
  } 
}

export default App;
