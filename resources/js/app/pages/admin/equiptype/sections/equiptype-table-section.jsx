import React from 'react'

export default function EquiptypeTableSection() {
    const equiptype = [
        { name: 'Laptop' },
        { name: 'Monitor' },
        { name: 'CPU' },
        { name: 'Mouse' },
        { name: 'Keyboard' },
        { name: 'UPS' },
        { name: 'Web Camera' },
        { name: 'Headset' },
        { name: 'Mobile Phone' },

    ]
  return (
    <div>
        <table className="min-w-full divide-y divide-gray-300">
                <thead>
                    <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-0">
                            Equipment Type Name
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {equiptype.map((types) => (
                        <tr>
                            <td className="text-center text-sm font-medium text-gray-900">
                                {types.name}
                            </td>
                            <td className="py-4 pl-3 pr-4 text-sm font-medium sm:pr-0">
                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                    Edit<span className="sr-only">, {types.name}</span>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  )
}
