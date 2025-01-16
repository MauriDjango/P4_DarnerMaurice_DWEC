import { Outlet } from 'react-router-dom'

const MainLayout = ({children}) => {
  return (
    <section className={'main'}>
      {children}
    </section>
  )
}

export default MainLayout