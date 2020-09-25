import React from 'react';
import Task from './Task';

import '../css/TaskList.css'

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
            <h1 className="active__title">My tasks</h1>
            <p className="active__tasks">{activeTasks}</p>
         </div>
         <div className="done">
            <h2 className="done_title">Done <em>( {done.length} )</em></h2>
            <p className="done_tasks">{doneTasks}</p>
         </div>
      </>
   );
}

export default TaskList;