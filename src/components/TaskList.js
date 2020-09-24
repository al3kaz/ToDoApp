import React from 'react';
import Task from './Task';

const TaskList = (props) => {


   const active = props.tasks.filter(task => task.active)
   const done = props.tasks.filter(task => !task.active)

   done.sort((a, b) => b.finishDate - a.finishDate)
   active.sort((a, b) => b.important - a.important)

   const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
   const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)

   return (
      <>
         <div className="active">
            <h1>Zadania do wykonania</h1>
            <p>{activeTasks}</p>
         </div>
         <div className="done">
            <h2>Zadania zrobione <em>({done.length})</em></h2>
            <p>{doneTasks}</p>
         </div>
      </>
   );
}

export default TaskList;