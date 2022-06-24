import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CheckCircle, Lock } from 'phosphor-react'
import { Link } from 'react-router-dom'

type LessonProps = {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export const Lesson = ({ title, slug, availableAt, type }: LessonProps) => {
  const isLessonAvailable = isPast(availableAt)

  const formattedDate = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  })

  const formattedDateFirstLetter = formattedDate.charAt(0)

  const formattedDateWithFirstLetterUppercase = formattedDate.replace(
    formattedDateFirstLetter,
    formattedDateFirstLetter.toUpperCase()
  )

  return (
    <Link to={`/event/lesson/${slug}`} className='group'>
      <span className='text-gray-300'>
        {formattedDateWithFirstLetterUppercase}
      </span>

      <div className='rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors'>
        <header className='flex items-center justify-between'>
          {isLessonAvailable ? (
            <span className='text-sm text-blue-500 font-medium flex items-center gap-2'>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className='text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold'>
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className='text-gray-200 mt-5 block'>{title}</strong>
      </div>
    </Link>
  )
}
