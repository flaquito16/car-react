import React, { useContext } from 'react'
import { tasksContext } from '../Context/Context'

export const Card = ({image, title, description, price}) => {
//     const [imgTask, setImgTask] = useState ('')
//   const [priceTask, setPriceTask] = useState ('')
//     const [titleTask, setTitleTask] = useState ('')
//   const [descriptionTask, setDescriptionTask] = useState ('')
    const context = useContext(tasksContext)

    const handle = ()=>{

    }

  return (
    <div className="flex justify-center w-96 h-full">
    <div className=" max-w-xs bg-white shadow-md rounded-lg overflow-hidden">
        <img className='w-full' src={image} alt={title} />
        <div className="p-4">
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="mt-2 text-gray-600">${price}</p>
            <p className="mt-2 text-gray-700">{description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onChange={handle}>Comprar</button>
        </div>
    </div>
</div>

  )
}