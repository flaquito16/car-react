import React, { useContext } from 'react'
import { tasksContext } from '../Context/Context'

export const Card = ({image, title, description, price}) => {
    const [imgTask, setImgTask] = useState ('')
  const [priceTask, setPriceTask] = useState ('')
    const [titleTask, setTitleTask] = useState ('')
//   const [descriptionTask, setDescriptionTask] = useState ('')
    const context = useContext(tasksContext)

    const handle = ()=>{

      const itemsTasks ={
        key:id,
        image: imgTask,
        title: titleTask,
        price: priceTask
      }


      let listTasks = [...context.tasks,itemsTasks]
      context.setTasks(listTasks)
    }

  return (
    <div className="flex  w-1/5 h-1/5 flex-col ">
      <div className='w-full h-1/6 flex justify-center'>
      <img onChange={event=>setImgTask(event.target.value)} className='w-40 h-40 ' src={image} alt={title} />
      </div>
        <div className="h-5/6">
            <h1 onChange={event=>setTitleTask(event.target.value)} className="">{title}</h1>
            <p className="">{description}</p>
            <p onChange={event=>setPriceTask(event.target.value)} className="">${price}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handle}>Comprar</button>
        </div>
    </div>

  )
}