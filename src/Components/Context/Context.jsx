import React from 'react'
import { createContext ,useState } from 'react'

export const tasksContext = createContext()

export const TasksProvider = ({children}) => {
    const  [tasks, setTasks] = useState ([])
    const [filterTask, setFilterTask] = useState (tasks)
    const quantity= 1;
  return (
    <tasksContext.Provider value={{tasks, setTasks,filterTask, setFilterTask, quantity}}>
    {children}
  </tasksContext.Provider>
  )
}