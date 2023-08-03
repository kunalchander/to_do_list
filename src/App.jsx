import './App.css';
import { useState } from 'react';

export default function App() {
  const [list,updatelist]= useState([]);
  const [task,updatetask] = useState({});

  const changetask = (event) =>{
    updatetask(event.target.value);
  };

  const changelist = () =>{
    
   const listobject = {
     id : list.length === 0 ? 1 : list[list.length-1].id + 1,
     name : task
   };
    
   task!="" && updatelist([...list,listobject]);
  };

  const deletetask = (taskid) =>{
    updatelist(list.filter((element)=>{
      return element.id !=taskid;
    })
    )
  };
  
  return (
    <main>
    <h1> TO DO LIST</h1>
    <div>
    <input type="text" onChange={changetask}/>
    <button onClick={changelist}>Add task</button>
    </div>
    <div>{
      list.map((l)=>{
        return(
        <div>
        <h2>{l.name}</h2>
        <button onClick={() => deletetask(l.id)}>x</button>
        </div>
        );
      }
      )
    }
    </div>
    </main>
  );
}
