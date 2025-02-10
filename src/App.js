import { useState } from 'react';
import './App.css';

function App() {
  // let name = "mahdi"
  const [show,setShow] = useState(true)

  const [events,setEvents] = useState([
    {title : "thor", id:1},
    {title : "man", id:2},
    {title: 'three',id :3}
  ])

  const handeleClick = (id) => {
    setEvents((preevents)=> {
      return preevents.filter((event)=>{
        return id !== event.id
      })
    })}

  

  return (
    <div className='App'>
      {show &&<div>
        <button onClick={()=>setShow(false)}> Hide </button>
      </div>}
      {!show &&<div>
        <button onClick={()=>setShow(true)}> show </button>
      </div>}

    {show &&
      events.map((event) => (
        <div key={event.id}>
          <h2>
            {event.title}
          </h2>
          <button onClick={()=>handeleClick(event.id)}> Delete</button>
        </div>
      ))
    }
    </div>
  );
}

export default App;
