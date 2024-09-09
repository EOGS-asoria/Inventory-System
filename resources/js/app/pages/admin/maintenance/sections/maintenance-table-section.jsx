import React from 'react'

export default function MaintenanceTableSection() {
    const maintain = [
        { name: 'Flat-screen TV' },
        { name: 'Office Chairs' },
        { name: 'Executive Chairs' },
        { name: 'Office Table' },
        { name: 'Laminator' },
        { name: 'Water Dispenser' },
        { name: 'Air-Purifier' },
        { name: 'Air Conditioner - Split Type' },
        { name: 'Air Conditioner Floor-Standing Type' },

    ]
    return (
        <div>
            <table className="min-w-full divide-y divide-gray-300">
                <thead>
                    <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-0">
                            Maintenance Type Name
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {maintain.map((types) => (
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
