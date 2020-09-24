import React, { useState } from 'react';


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
      } else alert("wpisz nowe zadanie")

   }

   return (
      <div className="form">
         <input type="text" value={text} placeholder="wpisz nowe zadanie" onChange={(e) => setText(e.target.value)} />
         <input type="checkbox" id="priority" checked={checked} onChange={(e) => setChecked(!checked)} />
         <label htmlFor="priority">Priorytet</label>
         <br />
         <label htmlFor="">Do kiedy zrobić</label>
         <input type="date" value={date} min={minDate} max={maxDate + "-12-31"} onChange={(e) => setDate(e.target.value)} />
         <br />
         <button onClick={handleClick}>Dodaj</button>
      </div>
   );
}

export default AddTask;