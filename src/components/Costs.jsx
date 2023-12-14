import React from 'react'

const Costs = ({cost}) => {
  return (
    <div className='costs'>
       <span>{cost.price}</span>
        <span>{cost.name}</span>
       
    </div>
  )
}

export default Costs