'use client'

import {  AiOutlineArrowRight } from "react-icons/ai"
import { useForm } from 'react-hook-form';
import { sendEmail } from "../../utils/sendmail";

export type FormData = {
  subject: string;
  email: string;
  message: string;
};
export function ContactForm() {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }
  return (
    <section className=" dark:bg-primary-950">
      <div className="mx-auto max-w-screen-md px-4 py-8">
        <form action="#" className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
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
            className="rounded-lg flex items-center bg-primary-900  px-5 py-3 text-center text-sm font-medium text-white hover:bg-primary-900 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-900 dark:focus:ring-primary-900 sm:w-fit"
          >
            Send message <AiOutlineArrowRight className="ml-2 animate-pulse" size={22}/>
          </button>
        </form>
      </div>
    </section>
  )
}
