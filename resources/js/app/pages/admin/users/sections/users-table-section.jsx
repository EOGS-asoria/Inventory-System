import { CheckCircleIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function UsersTableSection() {
    const people = [
        {
            image: '/image/pp1.jpg',
            name: 'John Doe',
            position: 'Software Engineer',
            email: 'john.doe@example.com',
            role: 'Admin',
            department: 'I.T Department',
        },
        {
            image: '/image/pp4.jpeg',
            name: 'Jane Smith',
            position: 'Project Manager',
            email: 'jane.smith@example.com',
            role: 'User',
            department: 'H.R Department',
        },
        {
            image: '/image/pp5.jpg',
            name: 'Emily Johnson',
            position: 'Designer',
            email: 'emily.johnson@example.com',
            role: 'User',
            department: 'I.T Department',
        },
    ]
    return (
        <div>
            <table className="min-w-full divide-y divide-gray-300">
                <thead>
                    <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                            Employee
                        </th>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                            Email
                        </th>
                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                        >
                            Department
                        </th>

                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Role
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                        <tr key={person.position}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                <div className="flex items-center">
                                    <div className="h-11 w-11 flex-shrink-0">
                                        <img alt="" src={person.image} className="h-11 w-11 rounded-full" />
                                    </div>
                                    <div className="ml-4">
                                        <div className="font-medium text-gray-900">{person.name}</div>
                                        <div className="mt-1 text-gray-500">{person.position}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                {person.email}
                            </td>
                            <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                                {person.department}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>
                            <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                {/* <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4">
                                    Edit<span className="sr-only">, {person.name}</span>
                                </a>
                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                    Delete<span className="sr-only">, {person.name}</span>
                                </a> */}
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-1.5 mr-1 rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                                >
                                    <PencilSquareIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
                                    Edit
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-1.5 rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                >
                                    <TrashIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
