import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

function AppLayout() {
  return (
    <div className=''>
      <Navbar />

      <main className=''>
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout