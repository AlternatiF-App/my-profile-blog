import { MenuIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const params = router.pathname.substring(1)
  const [menu, setMenu] = useState(false)
  const active:string = 'border-r-4 border-secondary'

  return (
        <div className="font-oxygen px-4 py-4 lg:px-8 xl:px-10 2xl:px-14 lg:py-5 bg-primary flex justify-between items-center">
            <div>
                <Link href="/">
                    <img className="h-6 lg:h-8 2xl:h-10 w-auto"
                        src="/assets/images/logo.png"
                        alt="logo" loading="lazy"
                    />
                </Link>
            </div>
            <ul className="hidden lg:flex space-x-8 lg:text-base 2xl:text-lg font-medium">
                <Link href="/"><li className="text-white hover:text-secondary cursor-pointer transition-all duration-300 ease-in-out">Home</li></Link>
                <Link href="/about"><li className="text-white hover:text-secondary cursor-pointer transition-all duration-300 ease-in-out">About</li></Link>
                <Link href="/portofolio"><li className="text-white hover:text-secondary cursor-pointer transition-all duration-300 ease-in-out">Portofolio</li></Link>
                <Link href="/blog"><li className="text-white hover:text-secondary cursor-pointer transition-all duration-300 ease-in-out">Blog</li></Link>
            </ul>
            <MenuIcon
                onClick={() => setMenu(!menu)}
                className="block lg:hidden h-6 w-6 text-white"
                fill="none" stroke="currentColor"
            />
            {
                menu && <div className="block lg:hidden relative z-50 transition duration-300 ease-in-out">
                <div onClick={() => setMenu(!menu)} className="fixed inset-0 bg-black opacity-25 transition duration-300 ease-in"/>
                   <nav className="fixed top-0 left-0 bottom-0 w-5/6 max-w-sm py-8 bg-primary text-white shadow-md overflow-y-auto ">
                        <div className="px-4">
                            <Link href="/">
                                <img className="h-8 w-auto"
                                    src="/assets/images/logo.png"
                                    alt="logo" loading="lazy"
                                />
                            </Link>
                        </div>
                        <ul className="pl-4 py-8">
                            <Link href="/"><li className={`${params === '' && active} cursor-pointer py-3`}>Home</li></Link>
                            <Link href="/about"><li className={`${params === 'about' && active} cursor-pointer py-3`}>About</li></Link>
                            <Link href="/portofolio"><li className={`${params === 'portofolio' && active} cursor-pointer py-3`}>Portofolio</li></Link>
                            <Link href="/blog"><li className={`${params === 'blog' && active} cursor-pointer py-3`}>Blog</li></Link>
                        </ul>
                        <div className="fixed w-5/6 max-w-sm left-0 bottom-0 px-4 mb-4">
                            <button className="w-full px-4 py-2 rounded-xl bg-secondary text-black">
                                <a href="https://wa.me/6282142931584?text=We%20are%20interested%20in%20working%20with%20you">
                                    WhatsApp Me
                                </a>
                            </button>
                        </div>
                    </nav>
                </div>
            }
        </div>
  )
}

export default Header
