import { UserPlusIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function PositionHeaderSection() {
  return (
    <div>
        <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Position Section</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the Position on this site.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="inline-flex gap-1 items-center rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <UserPlusIcon className='size-6'/>
              Add Position
          </button>
        </div>
      </div>
    </div>
  )
}
