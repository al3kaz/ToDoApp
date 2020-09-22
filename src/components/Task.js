import React from 'react';

const Task = (props) => {

   const { text, date, id, important, active, finishDate } = props.task

if(active) {
   return (
      <div className="task">
         <p><strong style={important ? {color : "red"} : null}>{text} </strong>do dnia : <em>{date} </em>
            <button onClick={() => props.change(id)}>Zadanie wykonane</button>
            <button onClick={() => props.delete(id)}>X</button>
         </p>
      </div >
   );
} else {

 const finishTime = new Date(finishDate).toLocaleString()

   return (
      <div className="task">
         <p><strong>{text} </strong>do dnia : <em>{date} </em> zrobione :{finishTime}
            <button onClick={() => props.delete(id)}>X</button>
         </p>
      </div >
   );
}
}

export default Task;