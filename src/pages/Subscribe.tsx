import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'
import { Logo } from '../components'

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`

export const Subscribe = () => {
  const navigate = useNavigate()
  const [createSubscriber, { loading }] = useMutation(
    CREATE_SUBSCRIBER_MUTATION
  )
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await createSubscriber({ variables: { name, email } })
    navigate('/event')
  }

  return (
    <div className='min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center'>
      <div className='w-full max-w-[1100px] flex items-center justify-between mt-20 mb-10 mx-auto'>
        <div className='max-w-[640px]'>
          <Logo />

          <h1 className='mt-8 text-[2.5rem] leading-tight'>
            Construa uma{' '}
            <strong className='text-blue-500'>aplicação completa</strong>, do
            zero, com <strong className='text-blue-500'>React</strong>
          </h1>

          <p className='mt-4 text-gray-200 leading-relaxed'>
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className='p-8 bg-gray-700 border border-gray-500 rounded'>
          <strong className='text-2xl mb-6 block'>
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleFormSubmit}
            className='flex flex-col gap-2 w-full'
          >
            <input
              type='text'
              placeholder='Seu nome completo'
              className='bg-gray-900 rounded px-5 h-14'
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type='email'
              placeholder='Digite seu e-mail'
              className='bg-gray-900 rounded px-5 h-14'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <button
              type='submit'
              disabled={loading}
              className='mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50'
            >
              {loading ? 'Carregando...' : 'Garantir minha vaga'}
            </button>
          </form>
        </div>
      </div>

      <img alt='Code Mockup' src='/src/assets/code-mockup.png' />
    </div>
  )
}
