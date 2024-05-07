import React from 'react'
import { Car } from '../../Car/Car'



export const Header = () => {
  return (
    <div className='flex justify-center items-start w-full h-full bg-slate-700' >

       <h1 className='text-6xl '>Mercado</h1>
      <Car/>


    </div>
  )
}
