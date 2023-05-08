
import { v4 as uuidv4 } from 'uuid';
import { ADD, COMPLETE, DELETE } from '../action/types';
const todo=[
    {
        id:uuidv4,
        complete:false,
        title:"task"
    }
]

const todoReducers=(state=todo,action)=>{
switch(action.type){
    case ADD:return [...state,{title:action.payload, id:uuidv4,complete:false}]
    case DELETE:return state.filter(el=>el.id!==action.payload)
    case COMPLETE:return state.map(el=>el.id===action.payload?{...el,complete:!el.complete}:el)
    default:return state

}
}
export default todoReducers