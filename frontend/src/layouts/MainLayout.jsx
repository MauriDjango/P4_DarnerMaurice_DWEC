import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <section className={'main'}>
      <Outlet />
    </section>
  )
}

export default MainLayout