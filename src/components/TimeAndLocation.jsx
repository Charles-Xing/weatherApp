import React from 'react'

function TimeAndLocation({weatherData}) {
 console.log(weatherData);
  
  return (
    <div>
      <div className='flex items-center justify-center my-6'>
        <p className='text-white text-xl font-extralight'>
            Sunday, 11 Jan 2023 | Local Time : 12:46 PM
        </p>
      </div>

      <div className='flex items-center justify-center'>
        <p className='text-white text-3xl font-medium'>{weatherData.name}</p>
      </div>
    </div>
  )
}

export default TimeAndLocation
