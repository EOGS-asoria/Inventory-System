import React from 'react'
import AdminLayout from '../layout'
import UsersHeaderSection from './sections/users-header-section'
import UsersTableSection from './sections/users-table-section'

export default function UsersPage() {
  return (
    <AdminLayout>
      <div className="px-4 sm:px-6 lg:px-8">
        <UsersHeaderSection />
        <div className="-mx-4 mt-8 sm:-mx-0">
          <UsersTableSection />
        </div>
      </div>
    </AdminLayout>
  )
}
