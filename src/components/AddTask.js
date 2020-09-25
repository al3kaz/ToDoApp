import React, { useState } from 'react';
import '../css/AddTask.css'


const AddTask = (props) => {
   //hooks
   const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
   const [text, setText] = useState("")
   const [checked, setChecked] = useState(false)


   const minDate = new Date().toISOString().slice(0, 10)
   const maxDate = new Date().toISOString().slice(0, 4) * 1 + 1

   //addTask + form reset
   const handleClick = () => {
      if (text.length > 0) {
         const add = props.addTask(text, date, checked)
         if (add) {
            setDate(minDate);
            setText("");
            setChecked(false);
         }
      } else alert("you did not enter anything")
   }


   return (
      <div className="form">
         <input
            className="form__input"
            type="text" value={text}
            placeholder="new to do"
            onChange={(e) => setText(e.target.value)}
         />
         <input
            className="form__checkboc"
            type="checkbox"
            id="priority"
            checked={checked}
            onChange={(e) => setChecked(!checked)}
         />
         <label
            style={{ color: "#6CB100" }}
            htmlFor="priority">
            PRIORITY
         </label>
         <br />
         <label htmlFor="">Limit date</label>
         <input
            className="form__date"
            type="date" value={date}
            min={minDate}
            max={maxDate + "-12-31"}
            onChange={(e) => setDate(e.target.value)}
         />
         <br />

         <button
            className="form__btn"
            onClick={handleClick}>
            Add a new task
         </button>
      </div >
   );
}

export default AddTask;