import React from 'react'
import MainHeader from './main_header'
const MainLayout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <div className='bg-gray-200 w-screen min-h-screen'>
      <MainHeader />
      <h1>main_layout</h1>
      <hr />
      <main>{children}</main>
    </div>
  )
}

export default MainLayout