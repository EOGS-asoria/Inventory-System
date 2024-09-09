import React from 'react'
import AdminLayout from '../layout'
import MaintenanceTableSection from './sections/maintenance-table-section'
import MaintenanceCreateSection from './sections/maintenance-create-section'

export default function MaintenancePage() {
  return (
    <AdminLayout>
      <div className="px-4 sm:px-6 lg:px-8">
        <MaintenanceCreateSection />
        <div className="-mx-4 mt-8 sm:-mx-0">
          <MaintenanceTableSection />
        </div>
      </div>
    </AdminLayout>
  )
}
