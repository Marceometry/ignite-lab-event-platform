import { Route, Routes } from 'react-router-dom'
import { EventPage, Subscribe } from './pages'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Subscribe />} />
      <Route path='/event' element={<EventPage />} />
      <Route path='/event/lesson/:slug' element={<EventPage />} />
    </Routes>
  )
}
