import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

const todoItems = [
  {
    id: 1,
    title: 'Go to Market',
    description: 'Buy ingredients to prepare dinner',
    is_completed: true,
  },
  {
    id: 2,
    title: 'Study',
    description: 'Study data structure linked list',
    is_completed: false,
  },
  {
    id: 3,
    title: 'Reading books',
    description: 'Read books about english',
    is_completed: false,
  },
  {
    id: 4,
    title: 'homework',
    description: 'done homework for the school',
    is_completed: false,
  },
];

class App extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      viewCompleted: false,
      todoList: todoItems,
    };
  }

  displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewCompleted: true});
    }

    return this.setState({viewCompleted: false});
  };


}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
