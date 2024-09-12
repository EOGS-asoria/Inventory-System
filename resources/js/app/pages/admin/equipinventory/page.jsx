import React from 'react'
import AdminLayout from '../layout'
import EquipinventoryTableSection from './sections/equipinventory-table-section'
import EquipinventoryCreateSection from './sections/equipinventory-create-section'

export default function EquipInventoryPage() {
  return (
    <AdminLayout>
      <div className="px-4 sm:px-6 lg:px-8">
        <EquipinventoryCreateSection />
        <div className="-mx-4 mt-8 sm:-mx-0">
          <EquipinventoryTableSection />
        </div>
      </div>
    </AdminLayout>
  )
}
