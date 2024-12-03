import React from 'react'

import ElevatorIcon from '@mui/icons-material/Elevator';

export default function Elevator({ elevator }) {
   const { currentFloor, color } = elevator;
  return (

      <span style={{
        transform: `translateY(-${currentFloor * 7}vh)`,
        transition: 'transform 1s linear',
      }} className={` ${color === 'red' ? 'text-red-500' : color === 'green' ? 'text-green-500' : 'text-black'}`} ><ElevatorIcon style={{fontSize:'3.5rem'}}></ElevatorIcon></span>

  )
}
