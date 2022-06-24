import { useParams } from 'react-router-dom'
import { Header, Sidebar, Video } from '../components'

type Params = {
  slug: string
}

export const EventPage = () => {
  const { slug } = useParams<Params>()

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        {slug ? <Video lessonSlug={slug} /> : <div className='flex-1' />}
        <Sidebar />
      </main>
    </div>
  )
}
