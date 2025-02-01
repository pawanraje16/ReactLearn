import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"Hello World"}]
}



export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload 
            }
            state.todos.push(todo)
        }, 
        // NOTES:
        // payload is a object
        //nehmi state and action chi access milel aplyala
        // current cha access mhnje 'state' deto 

        removeTodo:(state,action)=>{
          state.todos=state.todos.filter((todo)=>todo.id!=action.payload)
        },
    }
})


export const {addTodo,removeTodo} =todoSlice.actions

export default todoSlice.reducer