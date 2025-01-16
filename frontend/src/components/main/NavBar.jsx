import {useNavigate} from 'react-router-dom';


const NavBar = (view = 'suggestions') => {
  const navigate = useNavigate()

  return (
      <section className={'nav-bar'}>
        {view === 'library' ?
            <button onClick={() => navigate('/suggestions')}>Suggestions</button> :
            <button onClick={() => navigate('/library')}>Library</button>
        }
      </section>
  )
}

export default NavBar