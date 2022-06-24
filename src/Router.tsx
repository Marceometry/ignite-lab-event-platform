import { Route, Routes } from 'react-router-dom'
import { EventPage } from './pages'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<h1>Home</h1>} />
      <Route path='/event' element={<EventPage />} />
      <Route path='/event/lesson/:slug' element={<EventPage />} />
    </Routes>
  )
}
