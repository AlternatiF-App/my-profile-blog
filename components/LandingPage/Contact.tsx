import { MailIcon } from '@heroicons/react/outline'
import { PhoneIcon } from '@heroicons/react/solid'
import { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
        <div className="bg-primary font-oxygen text-white">
            <div className="w-full 2xl:w-10/12 2xl:mx-auto px-4 py-10 lg:py-16 lg:px-10">
                <div className="lg:flex bg-third px-4 py-2 lg:px-8 lg:py-4">
                    <div className="w-full lg:w-1/2 px-4 py-4 lg:px-8 lg:py-4">
                        <h1 className="text-lg lg:text-3xl tracking-wider text-white">
                            Let's make something new, different great together, <span className="text-secondary">Just Say Hello</span>
                        </h1>
                        <div className="space-y-2 pt-6 lg:pt-10">
                            <div className="flex items-center space-x-3">
                                <MailIcon className="h-5 w-5" fill="none" stroke="currentColor"/>
                                <span className="block text-sm lg:text-xl font-light tracking-widest">fananiapps@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <PhoneIcon className="h-5 w-5" fill="currentColor" stroke="none"/>
                                <span className="block text-sm lg:text-xl font-light tracking-widest">+62|821-4293-1584</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 space-y-4 lg:space-y-8 px-4 py-4 lg:px-8 lg:py-4">
                        <h1 className="tracking-widest text-xl font-medium">Send An Email</h1>
                        <div className="relative">
                            <input
                                value={name}
                                onChange={(e:any) => setName(e.target.value)}
                                id="name" name="name" type="text" placeholder="Input"
                                className='w-full py-2 px-5 text-base text-white bg-third border-secondary border rounded-md outline-none placeholder-third placeholder-opacity-0 transition duration-200'/>
                            <span className='text-sm bg-third absolute left-6 top-3 px-1 transition duration-200 input-text'>
                                Name
                            </span>
                        </div>
                        <div className="relative">
                            <input
                                value={email}
                                onChange={(e:any) => setEmail(e.target.value)}
                                id="email" name="email" type="email" placeholder="Input"
                                className='w-full py-2 px-5 text-base text-white bg-third border-secondary border rounded-md outline-none placeholder-third placeholder-opacity-0 transition duration-200'/>
                            <span className='text-sm bg-third absolute left-6 top-3 px-1 transition duration-200 input-text'>
                                Email
                            </span>
                        </div>
                        <div className="relative">
                            <textarea
                                value={message}
                                onChange={(e:any) => setMessage(e.target.value)}
                                id="message" name="message" typeof='text' rows={4}
                                placeholder="Input"
                                className='w-full py-2 px-5 text-base text-white bg-third border-secondary border rounded-md outline-none placeholder-third placeholder-opacity-0 transition duration-200'/>
                            <span className='text-sm bg-third absolute left-6 top-3 px-1 transition duration-200 input-text'>
                                Message
                            </span>
                        </div>
                        <div className="w-full 2xl:w-1/2 flex justify-end">
                            <button type='button'
                                className='px-10 py-2 tracking-widest bg-secondary text-black rounded-md'>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Contact
