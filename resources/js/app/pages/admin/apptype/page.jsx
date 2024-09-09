import React from 'react'
import AdminLayout from '../layout'
import ApptypeTableSection from './sections/apptype-table-section'
import ApptypeCreateSection from './sections/apptype-create-section'

export default function AppTypePage() {
  return (
    <AdminLayout>
       <div className="px-4 sm:px-6 lg:px-8">
      <ApptypeCreateSection/>
      <div className="-mx-4 mt-8 sm:-mx-0">
        <ApptypeTableSection/>
      </div>
    </div>
    </AdminLayout>
  )
}
