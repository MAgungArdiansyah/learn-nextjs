import React from 'react'
const MainLayout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <div>
      <h1>main_layout</h1>
      <hr />
      <main>{children}</main>
    </div>
  )
}

export default MainLayout