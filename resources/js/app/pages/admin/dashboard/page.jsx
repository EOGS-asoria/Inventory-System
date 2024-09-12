import React from 'react'
import AdminLayout from '../layout'
import DashboardStatsSection from './sections/dashboard-stats-section'

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
        <DashboardStatsSection/>
    </AdminLayout>
  )
}
