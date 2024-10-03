import React from 'react'
import AdminLayout from '../layout'
import AdminTransferTableSection from './sections/admin-transfer-table-sections'
import AdminTransferCreateSection from './sections/admin-transfer-create-section'

export default function AdminTransferPage() {
    return (
        <AdminLayout>
            <div className="px-4 sm:px-6 lg:px-8">
                <AdminTransferCreateSection />
                <div className="-mx-4 mt-8 sm:-mx-0">
                <AdminTransferTableSection />
                </div>
            </div>
        </AdminLayout>
    )
}
