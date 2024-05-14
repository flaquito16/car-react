import React, { useEffect, useState } from 'react'
import { Card } from '../../Card/Card'



export const Main = () => {

    const URL='https://fakestoreapi.com/products'




    useEffect(() => {
        
            fetch(URL)
            .then( response => response.json() )
            .then (data => {
                localStorage.setItem('products', JSON.stringify(data))
                });
            })

  return (
    <div className='w-full flex justify-center flex-wrap'>
        
       {
           JSON.parse(localStorage.getItem('products')).map(character=> <Card
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