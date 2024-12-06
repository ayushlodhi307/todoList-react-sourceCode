
import './App.css';
import {useState} from "react";
function App() {

  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  
  const submitHandle=(e)=>{
    e.preventDefault();
    if(todo!=""){
      settodos([{id:`${todo}-${Date.now()}` ,todo}, ...todos]);
    settodo("");
    }
  }
  const deleteHandle=(id)=>{
   const deleteTodo= todos.filter((to)=>to.id !== id);
   settodos([...deleteTodo]);
  }

  return (
    <div className='App'>
     <div className='container'>
      <h1> Todo List App</h1>
      <form className='todoForm' onSubmit={(submitHandle)} >
        <input type='text' value ={todo} onChange={(e)=>settodo(e.target.value)}/>
        <button type='submit'> Go</button>
      </form>
      <ul className='allTodos'>
        {todos.map((e)=>(
          <li className='singleTodo' >
             <span className='todoText' key={e.id}>{e.todo}</span>
          <button >edit</button>
          <button onClick={()=>deleteHandle(e.id)}>delete</button>
          </li>
        ))}
        
      </ul>
     </div>

    </div>
  );
}

export default App;
