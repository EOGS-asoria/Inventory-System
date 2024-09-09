import React from 'react'
import AdminLayout from '../layout'
import OfficeHeaderSection from './sections/office-header-section'
import OfficeTableSection from './sections/office-table-section'

export default function OfficePage() {
 
  return (
    <AdminLayout>
     <div className="px-4 sm:px-6 lg:px-8">
      <OfficeHeaderSection/>
      <div className="-mx-4 mt-8 sm:-mx-0">
        <OfficeTableSection/>
      </div>
    </div>
    </AdminLayout>
  )
}
