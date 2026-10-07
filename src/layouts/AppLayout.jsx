import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

function AppLayout() {
  return (
    <div className=''>
      <Navbar />

      <main className='px-36 py-12'>
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout