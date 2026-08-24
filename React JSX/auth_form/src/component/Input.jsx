import React from 'react'
import Btn from './Btn';

const Input = ({placeholder,head,handler,type,}) => {
  return (
    <div className="inputParent">
      <h3 className='text-white font-bold'>{head}</h3>
          <input onChange={(e,field)=> handler(e.target.value,type)}
            type={type}
            placeholder={placeholder}
            className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
          />
    </div>
  )


}

export default Input