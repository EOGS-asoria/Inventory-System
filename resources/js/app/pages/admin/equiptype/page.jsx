import React from 'react'
import AdminLayout from '../layout'
import EquiptypeTableSection from './sections/equiptype-table-section'
import EquiptypeCreateSection from './sections/equiptype-create-section'

export default function EquipTypePage() {
  return (
    <AdminLayout>
      <div className="px-4 sm:px-6 lg:px-8">
      <EquiptypeCreateSection/>
      <div className="-mx-4 mt-8 sm:-mx-0">
        <EquiptypeTableSection/>
      </div>
    </div>
    </AdminLayout>
  )
}
