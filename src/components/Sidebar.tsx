import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetLessonsQuery } from '../graphql/generated'
import { Lesson } from './Lesson'

type Params = {
  slug: string
}

export const Sidebar = () => {
  const navigate = useNavigate()
  const { slug } = useParams<Params>()
  const { data } = useGetLessonsQuery()

  useEffect(() => {
    if (!data) return
    if (!slug) {
      navigate(`/event/lesson/${data.lessons[0].slug}`, { replace: true })
    }
  }, [slug, data])

  return (
    <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600'>
      <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>
        Cronograma das Aulas
      </span>

      <div className='flex flex-col gap-8'>
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            slug={lesson.slug}
            title={lesson.title}
            type={lesson.lessonType}
            availableAt={new Date(lesson.availableAt)}
          />
        ))}
      </div>
    </aside>
  )
}
