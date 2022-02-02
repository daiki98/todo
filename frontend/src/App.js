import './App.css';
import React, {Component} from 'react';
import Modal from './Modal'

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
      modal: false,
      activeItem: {
        title: '',
        description: '',
        is_completed: false,
      },
    };
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (item) => {
    this.toggle();

    alert('save' + JSON.stringify(item));
  };

  handleDelete = (item) => {
    this.toggle();

    alert('delete' + JSON.stringify(item));
  };

  createItem = () => {
    const item = { title: '', description: '', is_completed: false };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewCompleted: true});
    }

    return this.setState({viewCompleted: false});
  };

  renderTabList = () => {
    return (
      <div className='nav nav-tabs'>
        <span
          className={this.state.viewCompleted ? 'nav-link active' : 'nav-link'}
          onClick={() => this.displayCompleted(true)}
        >
          Complete
        </span>
        <span
          className={this.state.viewCompleted ? 'nav-link' : 'nav-link active'}
          onClick={() => this.displayCompleted(false)}
        >
          Incomplete
        </span>
      </div>
    );
  };

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.todoList.filter(
      (item) => item.is_completed === viewCompleted
    );
    return newItems.map((item) => (
      <li
        key={item.id}
        className='list-group-item d-flex justify-content-between align-items-center'
      >
        <span
          className={`todo-title mr-2 ${
            this.state.viewCompleted ? 'completed-todo' : ''
          }`}
          title={item.description}
        >
          {item.title}
        </span>
        <span>
          <button
            className='btn btn-secondary mr-2'
            onClick={() => this.editItem(item)}
          >
            Edit
          </button>
          <button
            className='btn btn-danger'
            onClick={() => this.handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className='container'>
        <h1 className='text-white text-uppercase text-center my-4'>Todo app</h1>
        <div className='row'>
          <div className='col-md-6 col-sm-10 mx-auto p-0'>
            <div className='card p-3'>
              <div className='mb-4'>
                <button
                  className='btn btn-primary'
                  onClick={this.createItem}
                >
                  Add task
                </button>
              </div>
              {this.renderTabList()}
              <ul className='list-group list-group-flush border-top-0'>
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}

export default App;
