import { MenuIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const params = router.pathname.substring(1)
  const [menu, setMenu] = useState(false)
  const active:string = 'border-r-4 border-primary'

  return (
        <div className="font-oxygen text-sm lg:text-base lg:py-4 bg-secondary">
            <div className="w-full 2xl:w-10/12 2xl:mx-auto px-4 lg:px-6 2xl:px-8">
                <div className="flex items-center justify-between space-x-8">
                    <Link href="/">
                        <div className="cursor-pointer lg:flex lg:items-center lg:space-x-4">
                            <h1 className="text-xl lg:text-2xl 2xl:text-4xl font-bold text-primary">FANANI</h1>
                        </div>
                    </Link>
                    <ul className="text-xl 2xl:text-2xl flex items-center font-bold text-gray-400 space-x-10">
                        <Link href="/cv"><li className="hidden lg:block hover:text-primary transition-all duration-300 ease-in-out cursor-pointer">CV</li></Link>
                        <Link href="/blog-list"><li className="hidden lg:block hover:text-primary transition-all duration-300 ease-in-out cursor-pointer">Blog</li></Link>
                        <li className="hidden lg:block hover:text-primary transition-all duration-300 ease-in-out cursor-pointer">About Me</li>
                        <li>
                            <MenuIcon
                                onClick={() => setMenu(true)}
                                className="block lg:hidden h-5 w-5 text-gray-500"
                                fill="none" stroke="currentColor"
                            />
                        </li>
                    </ul>
                </div>
            </div>
            {
                 menu && <div className="block lg:hidden relative z-50 transition duration-300 ease-in-out">
                 <div onClick={() => setMenu(false)} className="fixed inset-0 bg-black opacity-25 transition duration-300 ease-in"/>
                    <nav className="fixed top-0 left-0 bottom-0 w-5/6 max-w-sm py-8 bg-white border-r overflow-y-auto ">
                        <div className="flex space-x-6 items-center px-6">
                            <img src="/assets/images/ava.jpg" alt="avatar" className="rounded-full object-cover w-14 h-14" />
                            <div>
                                <h2 className="text-xl text-primary font-bold">Ahmad Fanani</h2>
                                <h3 className="text-base leading-none text-gray-400">fananiapps@gmail.com</h3>
                            </div>
                        </div>
                        <ul className="text-xl font-semibold text-gray-400 space-y-1 pt-12 pl-4">
                            <Link href="/cv"><li className={`${params === 'cv' && active} cursor-pointer py-2`}>CV</li></Link>
                            <Link href="/blog-list"><li className={`${params === 'blog-list' && active} cursor-pointer py-2`}>Blog</li></Link>
                            <li className={'cursor-pointer py-2'}>About Me</li>
                        </ul>
                        <div className="fixed w-5/6 max-w-sm left-0 bottom-0 px-4 mb-4">
                            <button className="w-full px-4 py-2 rounded-xl bg-primary text-secondary">
                                Contact Me
                            </button>
                        </div>
                    </nav>
                </div>
            }
        </div>
  )
}

export default Header
