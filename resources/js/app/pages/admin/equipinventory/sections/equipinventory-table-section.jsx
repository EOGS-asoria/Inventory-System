import React from 'react'
import EquipinventoryActionSection from './equipinventory-action-section'

const equipment = [
    { equip: 'Laptop', brand: 'DELL', model: 'Latitude 5280', serial: 'JTNJPH2', designation: 'Unassigned', status: 'Functional' },
    { equip: 'Laptop', brand: 'DELL', model: 'Latitude 5280', serial: '4GG9JM2', designation: 'Unassigned', status: 'Functional' },
    { equip: 'Mac Mini', brand: 'Apple', model: 'A1993', serial: 'C07XKFOXJYVW', designation: 'Unassigned', status: 'Functional' },
    { equip: 'Printer', brand: 'EPSON', model: 'C622B', serial: 'X8H5081384', designation: 'Unassigned', status: 'Functional' },
    { equip: 'CamCorder', brand: 'AC11', model: 'AC11 4K ULTRA HD', serial: 'X00448QHN9', designation: 'Unassigned', status: 'Functional' },

]

export default function EquipinventoryTableSection() {
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
                                    Designation
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Status
                                </th>
                                <th scope="col" className="relative py-3.5 pl-3 pr-4">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {equipment.map((equips) => (
                                <tr key={equips.equip} className='hover:bg-gray-200'>
                                    <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none">
                                        {equips.equip}
                                        <dl className="font-normal lg:hidden">
                                            <dt className="sr-only">Brand</dt>
                                            <dd className="mt-1 truncate text-gray-700">{equips.brand}</dd>
                                            <dt className="sr-only sm:hidden">Model</dt>
                                            <dd className="mt-1 truncate text-gray-500 sm:hidden">{equips.model}</dd>
                                        </dl>
                                    </td>
                                    <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{equips.brand}</td>
                                    <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{equips.model}</td>
                                    <td className="px-3 py-4 text-sm text-gray-500">{equips.serial}</td>
                                    <td className="px-3 py-4 text-sm text-gray-500">{equips.designation}</td>
                                    <td className="px-3 py-4 text-sm text-gray-500">
                                        <span className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                                            {equips.status}
                                        </span>
                                    </td>
                                    <td className="py-4 pl-3 pr-4 text-right text-sm font-medium">
                                       <EquipinventoryActionSection/>
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
