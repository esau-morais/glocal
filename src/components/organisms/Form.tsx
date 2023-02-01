'use client'

import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

import { ContactValues, contactSchema } from '@/lib/validation'
import { cx } from '@/utils/classNames'
import { zodResolver } from '@hookform/resolvers/zod'

import PolymorphicButton from '../atoms/PolymorphicButton'

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  })

  const sendMessage = async (values: ContactValues) => {
    const res = await fetch(`api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })

    const data = await res.json()
    if (!data.error) {
      reset()
      toast.success('Sua mensagem foi enviada com sucesso!')
    } else {
      toast.error(
        'Algo deu errado. Tente novamente ou contate através das redes sociais.'
      )
    }
  }

  return (
    <form
      className="flex w-full flex-col items-end space-y-6"
      onSubmit={handleSubmit(sendMessage)}
    >
      <div className="w-full">
        <div className="relative z-0">
          <input
            autoComplete="off"
            type="text"
            id="name"
            className={cx(
              'peer block w-full appearance-none border-0 border-b-2 bg-transparent py-2.5 px-0 text-sm text-white focus:outline-none focus:ring-0',
              errors?.name
                ? 'border-red-400 focus:border-red-400'
                : 'border-white focus:border-[#00FF00]'
            )}
            placeholder=" "
            {...register('name')}
          />
          <label
            htmlFor="name"
            className={cx(
              'absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75',
              errors?.name
                ? 'text-red-400 peer-focus:text-red-400'
                : 'text-neutral-100 peer-focus:text-[#00FF00]'
            )}
          >
            Nome
          </label>
        </div>
        <p id="standard_error_help" className="mt-2 text-xs text-red-400">
          <span className="font-medium">{errors.name?.message}</span>
        </p>
      </div>
      <div className="w-full">
        <div className="relative z-0">
          <input
            autoComplete="off"
            type="text"
            id="email"
            className={cx(
              'peer block w-full appearance-none border-0 border-b-2 bg-transparent py-2.5 px-0 text-sm text-white focus:outline-none focus:ring-0',
              errors?.email
                ? 'border-red-400 focus:border-red-400'
                : 'border-white focus:border-[#00FF00]'
            )}
            placeholder=" "
            {...register('email')}
          />
          <label
            htmlFor="email"
            className={cx(
              'absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75',
              errors?.email
                ? 'text-red-400 peer-focus:text-red-400'
                : 'text-neutral-100 peer-focus:text-[#00FF00]'
            )}
          >
            E-mail
          </label>
        </div>
        <p id="standard_error_help" className="mt-2 text-xs text-red-400">
          <span className="font-medium">{errors.email?.message}</span>
        </p>
      </div>
      <div className="w-full">
        <div className="relative z-0">
          <input
            autoComplete="off"
            type="text"
            id="subject"
            className={cx(
              'peer block w-full appearance-none border-0 border-b-2 bg-transparent py-2.5 px-0 text-sm text-white focus:outline-none focus:ring-0',
              errors?.subject
                ? 'border-red-400 focus:border-red-400'
                : 'border-white focus:border-[#00FF00]'
            )}
            placeholder=" "
            {...register('subject')}
          />
          <label
            htmlFor="subject"
            className={cx(
              'absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75',
              errors?.subject
                ? 'text-red-400 peer-focus:text-red-400'
                : 'text-neutral-100 peer-focus:text-[#00FF00]'
            )}
          >
            Assunto
          </label>
        </div>
        <p id="standard_error_help" className="mt-2 text-xs text-red-400">
          <span className="font-medium">{errors.subject?.message}</span>
        </p>
      </div>
      <div className="w-full">
        <div className="relative z-0">
          <textarea
            autoComplete="off"
            id="message"
            className={cx(
              'peer block w-full resize-none appearance-none border-0 border-b-2 bg-transparent py-2.5 px-0 text-sm text-white focus:outline-none focus:ring-0',
              errors?.message
                ? 'border-red-400 focus:border-red-400'
                : 'border-white focus:border-[#00FF00]'
            )}
            placeholder=" "
            rows={3}
            {...register('message')}
          />
          <label
            htmlFor="message"
            className={cx(
              'absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75',
              errors?.message
                ? 'text-red-400 peer-focus:text-red-400'
                : 'text-neutral-100 peer-focus:text-[#00FF00]'
            )}
          >
            Mensagem
          </label>
        </div>
        <p id="standard_error_help" className="mt-2 text-xs text-red-400">
          <span className="font-medium">{errors.message?.message}</span>
        </p>
      </div>

      <PolymorphicButton
        type="submit"
        className="border border-white bg-white py-2 px-4 font-semibold uppercase"
      >
        Enviar
      </PolymorphicButton>

      <Toaster position="top-right" />
    </form>
  )
}

export default Form
