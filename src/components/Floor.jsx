import React from 'react'

export default function Floor({ floor, onCall, buttonState }) {
  const { text, color } = buttonState;

  const floorId=9-floor
  
  return (
    <div className="flex items-center gap-4">
       <span className='w-32 text-center'>{floorId===0?"Ground Floor":`${floorId}th`}</span>
      
       <div className='flex items-center'>
         {
          Array.from({length:5}).map((_,i) =>(
            <div key={i} className='w-36 h-14 border bg-blue-400'></div>
          ))
         }
       </div>
      
      <button
        onClick={() => onCall(floorId)}
        className={`py-2 px-4 w-20 rounded text-white ${
          color === 'red'
            ? 'bg-red-500 cursor-not-allowed'
            : color === 'green'
            ? 'bg-green-500'
            : 'bg-gray-500'
        }`}
        disabled={text === 'waiting'}
      >
        {text}
      </button>
    </div>
  )
}


