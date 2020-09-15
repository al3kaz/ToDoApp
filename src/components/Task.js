import React from 'react';

const Task = (props) => {

   const { text, date, id } = props.task

   return (
      <div className="task">
         <p><strong>{text} </strong>do dnia : <em>{date} </em>
            <button onClick={() => props.change(id)}>Zadanie wykonane</button>
            <button onClick={() => props.delete(id)}>X</button>
         </p>
      </div >
   );
}

export default Task;