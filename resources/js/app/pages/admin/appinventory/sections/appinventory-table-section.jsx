import React from 'react'
import AppinventoryActionSection from './appinventory-action-section'

const appliance = [
    { equip: 'Executive Chairs', brand: 'Haworth Furniture', model: 'N/A', serial: 'N/A', designation: 'Board Room', qty: '8' },
    { equip: 'Office Chairs', brand: 'Haworth Furniture', model: 'N/A', serial: 'N/A', designation: 'I.T Office', qty: '4' },
    { equip: 'Office Table', brand: 'Haworth Furniture', model: 'N/A', serial: 'N/A', designation: 'I.T Office', qty: '2' },
    { equip: 'Flatscreen TV', brand: 'Panatone', model: 'UA50BU8100G', serial: '0JCL3NHT400175V', designation: 'Board Room', qty: '1' },
    { equip: 'Air Conditioner Floor-Standing Type', brand: 'Matrix', model: 'MX741-M', serial: '340A425200105160850011', designation: 'Board Room', qty: '1' },

]

export default function AppinventoryTableSection() {
  return (
    <div>
          <div className="px-4 sm:px-6 lg:px-8">

<div className="-mx-4 mt-8 sm:-mx-0">
    <table className="min-w-full divide-y divide-gray-300">
        <thead>
            <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                    Equipment
                </th>
                <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                    Brand
                </th>
                <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                >
                    Model No.
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Serial No.
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Quantity
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Designation
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
            {appliance.map((appliances) => (
                <tr key={appliances.equip} className='hover:bg-gray-200'>
                    <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none">
                        {appliances.equip}
                        <dl className="font-normal lg:hidden">
                            <dt className="sr-only">Brand</dt>
                            <dd className="mt-1 truncate text-gray-700">{appliances.brand}</dd>
                            <dt className="sr-only sm:hidden">Model</dt>
                            <dd className="mt-1 truncate text-gray-500 sm:hidden">{appliances.model}</dd>
                        </dl>
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{appliances.brand}</td>
                    <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{appliances.model}</td>
                    <td className="px-3 py-4 text-sm text-gray-500">{appliances.serial}</td>
                    <td className="px-3 py-4 text-sm text-gray-500">{appliances.qty}</td>
                    <td className="px-3 py-4 text-sm text-gray-500">{appliances.designation}</td>
                    <td className="py-4 pl-3 pr-4 text-right text-sm font-medium">
                        <AppinventoryActionSection/>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
</div>
    </div>
  )
}
