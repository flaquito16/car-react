import React, { useContext } from 'react'
import { Container } from '../Container/Container'
import { ItemsTasks } from '../ItemsTasks/ItemsTasks'
import { tasksContext } from '../Context/Context'


export const Car = () => {
    const contexts=useContext(tasksContext)


  return (
    <div>
      <Container>
      {

        contexts.tasks.map((task) => <ItemsTasks key={task.id} idTask={task.id} image={task.image} title={task.title} price={task.price}/>)

      }


      </Container>

    </div>
  )
}
