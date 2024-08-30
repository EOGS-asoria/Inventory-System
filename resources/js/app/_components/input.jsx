import React from 'react'

export default function Input({ name, type, onChange, value, required }) {
    return (
        <div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                        name={name}
                        type={type}
                        onChange={onChange}
                        value={value?.email}
                        required={required}
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {
                        required && !value && <div><p className='text-red-400 text-sm mt-2 capitalize italic'>{name} is Required.</p></div>
                    }

                </div>
            </div>
        </div>
    )
}
