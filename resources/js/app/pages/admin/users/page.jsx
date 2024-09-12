import React from 'react'
import AdminLayout from '../layout'
import UsersTableSection from './sections/users-table-section'
import UsersCreateSection from './sections/users-create-section'

export default function UsersPage() {
  return (
    <AdminLayout>
      <div className="px-4 sm:px-6 lg:px-8">
        <UsersCreateSection />
        <div className="-mx-4 mt-8 sm:-mx-0">
          <UsersTableSection />
        </div>
      </div>
    </AdminLayout>
  )
}
