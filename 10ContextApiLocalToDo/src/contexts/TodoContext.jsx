import { createContext, useContext } from "react";

export const TodoContext= createContext({
    // here we kept data which we have to store in global storage
    todos:[
        {
            id:1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    // we name these function here but we will define them in app.js
    addTodo:(todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    // checkbox is toggle
    toggleComplete: (id) => {}

})
 
export const useTodo = ()=>{
    return useContext(TodoContext)
}

// this is done to avoid writing TodoContext.Provider
export const TodoProvider= TodoContext.Provider