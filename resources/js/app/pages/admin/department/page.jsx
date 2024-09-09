import React from 'react'
import AdminLayout from '../layout'
import DepartmentTableSection from './sections/department-table-section'
import DepartmentCreateSection from './sections/department-create-section'

export default function DepartmentPage() {
  
  return (
    <AdminLayout>
      <div className="px-4 sm:px-6 lg:px-8">
        <DepartmentCreateSection />
        <div className="-mx-4 mt-8 sm:-mx-0">
          <DepartmentTableSection />
        </div>
      </div>
    </AdminLayout>
  )
}
