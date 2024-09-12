import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function PositionTableSection() {
    const office = [
        { name: 'CEO' },
        { name: 'Director' },
        { name: 'Manager' },
        { name: 'Supervisor' },
        { name: 'I.T Staff' },
        { name: 'H.R Staff' },
        { name: 'Web Developer' },
        { name: 'Network & Security' },
        { name: 'Accounting Staff' },
        { name: 'Utility' },

    ]
    return (
        <div>
            <table className="min-w-full divide-y divide-gray-300">
                <thead>
                    <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-0">
                            Position Name
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {office.map((facility) => (
                        <tr key={facility.email} className='hover:bg-gray-200'>
                            <td className="text-center text-sm font-medium text-gray-900">
                                {facility.name}
                            </td>
                            <td className="py-4 pl-3 pr-4 text-sm font-medium sm:pr-0">
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-1.5 mr-1 rounded-md bg-transparent border-none shadow-none hover:text-green-400 focus:outline-none text-green-500 font-bold"
                                >
                                    <PencilSquareIcon aria-hidden="true" className="h-6 w-6" />
                                    <span className="sr-only">, {facility.name}</span>
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-1.5 mr-1 rounded-md bg-transparent border-none shadow-none hover:text-red-400 focus:outline-none text-red-500 font-bold"
                                >
                                    <TrashIcon aria-hidden="true" className="-ml-0.50 h-6 w-6" />
                                    <span className="sr-only">, {facility.name}</span>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
