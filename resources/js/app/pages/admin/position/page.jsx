import React from 'react'
import AdminLayout from '../layout'
import PositionHeaderSection from './sections/position-header-section'
import PositionTableSection from './sections/position-table-section'

export default function PositionPage() {
  return (
    <AdminLayout>
       <div className="px-4 sm:px-6 lg:px-8">
      <PositionHeaderSection/>
      <div className="-mx-4 mt-8 sm:-mx-0">
        <PositionTableSection/>
      </div>
    </div>
    </AdminLayout>
  )
}
