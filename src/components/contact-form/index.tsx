'use client'

import { AiOutlineArrowRight } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import { sendEmail } from '../../utils/sendmail'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
export type FormData = {
  subject: string
  email: string
  message: string
}
export function ContactForm() {
  const { register, handleSubmit, reset } = useForm<FormData>()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  async function onSubmit(data: FormData) {
    setIsLoading(true)
    try {
      const response = await sendEmail(data)
      if (response.success) {
        reset()
        toast.success('Email sent successfully!', {
          position: toast.POSITION.TOP_CENTER
        })
        // Redirect to homepage after the toast duration
        setTimeout(() => {
          router.push('/')
        }, 5000) // 5000 milliseconds = 5 seconds
      } else {
        toast.error(`Failed to send email: ${response.status}`, {
          position: toast.POSITION.TOP_CENTER
        })
        console.error(`Failed to send email: ${response.status}`)
      }
    } catch (error) {
      toast.error('An error occurred while sending email', {
        position: toast.POSITION.TOP_CENTER
      })
      console.error('An error occurred while sending email:', error)
    }
    setIsLoading(false)
  }
  return (
    <section className=" dark:bg-primary-950">
      <ToastContainer />
      <div className="mx-auto max-w-screen-md px-4 py-8">
        <form
          action="#"
          className="space-y-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-primary-900 dark:text-primary-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="dark:shadow-sm-light block w-full rounded-lg border border-primary-300  p-2.5 text-sm text-primary-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-primary-600 dark:bg-primary-900 dark:text-white dark:placeholder-primary-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="youremail@service.com"
              required
              {...register('email', { required: true })}
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium text-primary-900 dark:text-primary-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="dark:shadow-sm-light block w-full rounded-lg border border-primary-300  p-3 text-sm text-primary-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-primary-600 dark:bg-primary-900 dark:text-white dark:placeholder-primary-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="Let me know how i can help you"
              required
              {...register('subject', { required: true })}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-primary-900 dark:text-primary-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block w-full rounded-lg border border-primary-300  p-2.5 text-sm text-primary-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-primary-600 dark:bg-primary-900 dark:text-white dark:placeholder-primary-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="Leave a comment..."
              defaultValue={''}
              {...register('message', { required: true })}
            />
          </div>
          <button
            type="submit"
            className="flex items-center rounded-lg bg-great-blue-400  px-5 py-3 text-center text-sm font-medium text-white hover:bg-great-blue-500  focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-great-blue-500  dark:hover:bg-great-blue-400 dark:focus:ring-primary-900 sm:w-fit"
          >
            {isLoading ? 'Loading...' : 'Send message'}
            {isLoading ? (
              ''
            ) : (
              <AiOutlineArrowRight className="ml-2 animate-pulse" size={22} />
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
