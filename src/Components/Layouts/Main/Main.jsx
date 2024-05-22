import React, { useEffect, useState } from 'react'
import { Card } from '../../Card/Card'



export const Main = () => {

    const URL='https://fakestoreapi.com/products'

    const [content, setContent] = useState([])



    useEffect(() => {
        
            fetch(URL)
            .then( response => response.json() )
            .then (data => {
                setContent(data)});
            },[content])

  return (
    <div className='w-full flex justify-center flex-wrap'>
        
       {
           content.map(character=> <Card
            key={character.id}
            image={character.image}
            title={character.title}
            price={character.price}
            description={character.description}
            
            />)
        }
       
    </div>
  )
}