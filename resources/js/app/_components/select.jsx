import React from 'react'

export default function Select({label, data, onChange, name}) {
  return (
    <div>
         <div>
      <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <select
        name={name}
        defaultValue="Canada"
        onChange={onChange}
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        {
            data.map((res,i)=>{
                return <option key={i} value={res.value}>{res.name}</option>
            })
        }
        
      </select>
    </div>
    </div>
  )
}
