import NavBar from '../components/main/NavBar';
import Library from '../components/Library/Library';

const LibraryLayout = () => {
  return (
    <section className={'library-layout'}>
      <NavBar
        view='library'
      />
      <Library />
    </section>
  )
}

export default LibraryLayout