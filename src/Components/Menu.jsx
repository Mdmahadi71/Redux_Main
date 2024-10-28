import React from 'react'
import { decremented, incremented } from './Counter/CounterSlice'
import { useDispatch, useSelector } from 'react-redux'

const Menu = () => {
    let dachpacth = useDispatch()
    let data = useSelector((state)=>state.counter.value)
  return (
    <div>
      <div className=" container">
        <div className="flex justify-center gap-x-3">
            <button className=' text-[30px] border-[1px] border-black p-[10px] bg-black rounded-[10px] text-white' onClick={()=>dachpacth(incremented())}>+</button>
            <h3 className=' text-[30px]'>{data}</h3>
            <button className=' text-[30px] border-[1px] border-black p-[10px] bg-black rounded-[10px] text-white' onClick={()=>dachpacth(decremented())}>-</button>
        </div>
      </div>
    </div>
  )
}

export default Menu
