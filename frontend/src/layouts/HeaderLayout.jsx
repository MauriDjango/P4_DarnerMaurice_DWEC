import HeaderLogo from '../components/Header/HeaderLogo'
import HeaderProfile from '../components/Header/HeaderProfile'
import HeaderMid from '../components/Header/HeaderMid'


const HeaderLayout = () => {
  return (
    <div className={'header'}>
      <HeaderLogo />
      <HeaderMid />
      <HeaderProfile />
    </div>
  )
}

export default HeaderLayout