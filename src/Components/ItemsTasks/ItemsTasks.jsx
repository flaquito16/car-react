import React from 'react'

export const ItemsTasks = ({idTasks, images, titles, prices}) => {
  return (
    <div>
      <li id={idTasks}></li>
        <img src={images} alt={titles}/>
        <h1>{titles}</h1>
        <p>{prices}</p>
    </div>
  )
}
