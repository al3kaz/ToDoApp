import React from 'react';
import '../css/Task.css'

const Task = (props) => {

   const { text, date, id, important, active, finishDate } = props.task

   if (active) {
      return (
         <div className="active__task">
            <p className="active__task_text"><strong style={important ? { color: "#6CB100" } : null}>{text} </strong>until : <em>{date} </em>
            </p>
            <button className="btn__done" onClick={() => props.change(id)}><i className="fas fa-clipboard-check"></i></button>
            <button className="btn__delete" onClick={() => props.delete(id)}><i className="fas fa-trash"></i></button>
         </div >
      );
   } else {

      const finishTime = new Date(finishDate).toLocaleString()

      return (
         <div className="done__task">
            <p className="done__task_text"><strong>{text} </strong>until: <em>{date} </em> done :{finishTime}
               <button className="btn__delete" onClick={() => props.delete(id)}><i className="fas fa-trash"></i></button>
            </p>
         </div >
      );
   }
}

export default Task;