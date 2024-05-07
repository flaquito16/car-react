import React from 'react'
import { createContext ,useState } from 'react'

export const tasksContext = createContext()

export const TasksProvider = ({children}) => {
    const  [tasks, setTasks] = useState ([])
    const [filterTask, setFilterTask] = useState (tasks)
   
  
  const update = (taskId, newStatus) =>{
    setTasks(prevTasks =>
    prevTasks.map(task=>
      task.id==taskId ? {...task, status: newStatus} : task
      )
    );
  }

  return (
    <tasksContext.Provider value={{tasks, setTasks,filterTask, setFilterTask}}>
    {children}
  </tasksContext.Provider>
  )
}