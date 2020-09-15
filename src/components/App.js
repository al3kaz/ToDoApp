import React, { Component } from 'react';
import '../css/App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "Wyjść z psem",
        date: "2020-09-22",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "Umyć samochód",
        date: "2020-09-30",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "Zapłacić za prąd",
        date: "2020-10-02",
        important: true,
        active: false,
        finishDate: null,
      }
    ]
  }

  handleDelete = (id) => {
    console.log('delete id  ' + id);
  }

  handleChangeStatus = (id) => {
    console.log('zmiana statusu na wykonany w id  ' + id);

  }

  render() {
    return (
      <div className="App">
        <h1>TO-DO-APP</h1>
        <AddTask />
        <TaskList tasks={this.state.tasks} delete={this.handleDelete} change={this.handleChangeStatus} />
      </div>
    );
  }
}

export default App;
