import React from 'react'
import { useSelector } from 'react-redux'

const Banner = () => {
    let data = useSelector((state)=>state.counter.value)
  return (
    <div>
      <div className=" container">
        <div className="">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quos.</h3>

            <h3>{data}</h3>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quos.</h3>
        </div>
      </div>
    </div>
  )
}

export default Banner
