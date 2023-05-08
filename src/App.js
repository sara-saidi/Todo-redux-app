
import './App.css';
import {react,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addTodo, completeTodo, deleteTodo } from './action/todoAction';
function App() {
const [task, setTask] = useState("");
  const todos=useSelector(state=>state.todoReducers)
  const dispatch=useDispatch()
 const [filter, setFilter] = useState('all');
  return (
    <div className="App">
   
    <input type='text' placeholder='add task ...' onChange={(e)=>setTask(e.target.value)}/>
    <button onClick={()=>dispatch(addTodo(task))}>Add task</button>
    <button onClick={()=>setFilter('all')}>all</button>
    <button onClick={()=>setFilter("done")}>done</button>
    <button onClick={()=>setFilter("undone")}>undone</button>
      { filter==="all" ? todos.map(el=><div>
        <h2>{el.title}</h2>
        <button onClick={()=>dispatch(deleteTodo(el.id))}>Delete task</button>
        <button onClick={()=>dispatch(completeTodo(el.id))}>{el.complete? "done":"undone"}</button>
        </div>
        
        ) : filter==="done" ? todos.filter(el=>el.complete===true)
        .map(el=><div>
          <h2>{el.title}</h2>
          <button onClick={()=>dispatch(deleteTodo(el.id))}>Delete task</button>
          <button onClick={()=>dispatch(completeTodo(el.id))}>{el.complete? "done":"undone"}</button>
          </div>
          ) : todos.filter(el=>el.complete===false)
      
          .map(el=><div>
            <h2>{el.title}</h2>
            <button onClick={()=>dispatch(deleteTodo(el.id))}>Delete task</button>
            <button onClick={()=>dispatch(completeTodo(el.id))}>{el.complete? "done":"undone"}</button>
            </div>
            
            )
      }
       
    </div>
  );
}

export default App;
