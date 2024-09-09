import { UserPlusIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function UsersHeaderSection() {
  return (
    <div>
         <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            
          <button
            type="button"
            className="inline-flex rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <UserPlusIcon aria-hidden="true" className="-ml-0.5 mr-1 h-5 w-5"/>
            Add user
          </button>
        </div>
      </div>
    </div>
  )
}
