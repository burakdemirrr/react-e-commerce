import React from 'react'
import Transition from '../../components/Transition'
import "./Kids.css"
const Kids = ({timeline}) => {
  return (
    <div className='kids'>
      <Transition timeline={timeline}/>
      Kids</div>
  )
}

export default Kids