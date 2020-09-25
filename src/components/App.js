import React, { Component } from 'react';
import '../css/App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

//couter used in addTask for id
let counter = 4

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
        active: true,
        finishDate: null,
      }
    ]
  }

  handleDelete = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id)
    tasks.splice(index, 1);

    this.setState({
      tasks
    })
  }

  handleChangeStatus = (id) => {
    let tasks = [...this.state.tasks];

    tasks.map(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {

    const task = {
      id: counter,
      text,
      date,
      important,
      active: true,
      finishDate: null,
    }

    counter++

    const tasks = [... this.state.tasks]

    tasks.push(task)

    this.setState({
      tasks
    })

    return true
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">To Do List</h1>
        <AddTask addTask={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.handleDelete} change={this.handleChangeStatus} />
      </div>
    );
  }
}

export default App;
