// features ko slice bolte hai

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    todos: [{id:1, text: "Hello World"}]
}

export const todoSlice= createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo : (state,action)=>{
            const todo= {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        // action gives all value which is being passed by user
        // state give all value which is already available 
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((todo)=> 
                todo.id !== action.payload)
        },
        // updateTodo: ()=>{
        //     state.todos = state.todos.map((prev)=> )
        // } 
        
    }
})

export const {addTodo , removeTodo} = todoSlice.actions

export default todoSlice.reducer