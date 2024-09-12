import React from 'react'
import AdminLayout from '../layout'
import AppinventoryTableSection from './sections/appinventory-table-section'
import AppinventoryCreateSection from './sections/appinventory-create-section'

export default function AppInventoryPage() {
  return (
    <AdminLayout>
        <div className="px-4 sm:px-6 lg:px-8">
        <AppinventoryCreateSection />
        <div className="-mx-4 mt-8 sm:-mx-0">
          <AppinventoryTableSection />
        </div>
      </div>
    </AdminLayout>
  )
}
