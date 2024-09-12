import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function DepartmentTableSection() {
  const people = [
    { department: 'I.T Department', manager: 'Lindsay Walton', email: 'lindsay.walton@example.com' },
    { department: 'H.R Department', manager: 'Maria Teressa Detalla', email: 'schr@empireonegroup.com' },
    { department: 'Operations', manager: 'Juhanna Batomalaque', email: 'juhanna@empireonegroup.com' },

  ]
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
              Department Name
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Department Manager
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
            >
              Email
            </th>
            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {people.map((person) => (
            <tr key={person.email} className='hover:bg-gray-200'>
              <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none">
                {person.department}
                <dl className="font-normal lg:hidden">
                  <dt className="sr-only">Title</dt>
                  <dd className="mt-1 truncate text-gray-700">{person.manager}</dd>
                  <dt className="sr-only sm:hidden">Email</dt>
                  <dd className="mt-1 truncate text-gray-500 sm:hidden">{person.email}</dd>
                </dl>
              </td>
              <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{person.manager}</td>
              <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{person.email}</td>
              <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium">
                <button
                  type="button"
                  className="inline-flex items-center gap-x-1.5 mr-1 rounded-md bg-transparent border-none shadow-none hover:text-green-400 focus:outline-none text-green-500 font-bold"
                >
                  <PencilSquareIcon aria-hidden="true" className="h-6 w-6" />
                </button>

                <button
                  type="button"
                  className="inline-flex items-center gap-x-1.5 mr-1 rounded-md bg-transparent border-none shadow-none hover:text-red-400 focus:outline-none text-red-500 font-bold"
                >
                  <TrashIcon aria-hidden="true" className="-ml-0.50 h-6 w-6" />

                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
