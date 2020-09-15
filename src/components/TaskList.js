import React from 'react';
import Task from './Task';

const TaskList = (props) => {

   const tasks = props.tasks.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)

   return (
      <div className="tasklist">
         <h1>Zadania do wykonania</h1>
         <p>{tasks}</p>
         <h2>Zadania zrobione</h2>
         <p>zadanie zrobione</p>
      </div>
   );
}

export default TaskList;