import { useContext } from 'react'
import { NowPlayingContext } from '../context/NowPlayingContext'
import NowPlayingFull from '../components/now_playing/NowPlayingFull'


const cssClassName = 'main__nowplaying'

const NowPlayingLayout = () => {
  let content
  const { view } = useContext(NowPlayingContext)

  switch (view) {
    case 'full':
      content = <NowPlayingFull />
      break
    case 'mini':
      content = <NowPlayingMini />
      break
    default:
      content = <NowPlayingFull />
      break
  }

  return (
    <div className={cssClassName}>
      {content}
    </div>
  )
}

export default NowPlayingLayout