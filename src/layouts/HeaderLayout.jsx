import SearchBar from '../components/Header/SearchBar/SearchBar';

const cssClassName = 'header'

const HeaderLayout = () => {
  return (
    <div className={'header'}>
      <img src={'/img/logo.svg'} className={'logo'} alt="logo"/>
        <div className={'header__center'}>
            <h1 className={'title'}>EarHub</h1>
            <SearchBar />
        </div>
    </div>
  )
}

export default HeaderLayout