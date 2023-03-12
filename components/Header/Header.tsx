import { Bars3Icon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const params = router.pathname.substring(1)

  const [scrollY, setScrollY] = useState(0);
  const [menu, setMenu] = useState(false)
  const active:string = 'border-r-4 border-primary text-primary'

  const handleScroll = () => {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", handleScroll);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
        <>
            <div className={`${scrollY > 0 ? 'bg-white' : 'bg-primary'} fixed inset-x-0 top-0 z-10 transition-all duration-300 ease-in-out shadow-card`}>
              <div className="container mx-auto font-inter px-4 py-4 lg:px-8 lg:py-5 flex justify-between items-center">
                  <div className={scrollY > 0 ? 'text-primary' : 'text-secondary'}>
                    <Link href="/">
                      <h1 className='text-2xl cursor-pointer tracking-wide transition-colors duration-200 ease-linear font-bold font-sans'>
                        FANANI.
                      </h1>
                    </Link>
                  </div>
                  <ul className={`${scrollY > 0 ? 'text-black' : 'text-secondary'} hidden lg:flex space-x-8 lg:text-base 2xl:text-lg font-medium`}>
                    <Link href="/"><li className={`${scrollY > 0 ? 'hover:text-primary' : 'hover:text-third'} cursor-pointer transition-all duration-300 ease-in-out`}>Home</li></Link>
                    <Link href="/about"><li className={`${scrollY > 0 ? 'hover:text-primary' : 'hover:text-third'} cursor-pointer transition-all duration-300 ease-in-out`}>About</li></Link>
                    <Link href="/portofolio"><li className={`${scrollY > 0 ? 'hover:text-primary' : 'hover:text-third'} cursor-pointer transition-all duration-300 ease-in-out`}>Portofolio</li></Link>
                    <Link href="/blog"><li className={`${scrollY > 0 ? 'hover:text-primary' : 'hover:text-third'} cursor-pointer transition-all duration-300 ease-in-out`}>Blog</li></Link>
                  </ul>
                  <Bars3Icon
                    onClick={() => setMenu(!menu)}
                    className={`${scrollY > 0 ? 'text-primary' : 'text-white'} block lg:hidden h-6 w-6`}
                    fill="none" stroke="currentColor"
                  />
              </div>
            </div>
            <div className="block lg:hidden relative z-50 font-inter transition duration-300 ease-in-out">
                <div onClick={() => setMenu(!menu)} className={`${menu ? 'opacity-40' : 'opacity-0 invisible'} fixed inset-0 bg-black transition-all duration-300 ease-in-out"`}/>
                <nav className={`${menu ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 w-5/6 max-w-sm bg-white shadow-md overflow-y-auto transition duration-300 ease-in-out`}>
                    <div className="px-4 py-2">
                        <Link href="/">
                          <h1 className='text-2xl cursor-pointer tracking-wide text-primary transition-colors duration-200 ease-linear font-bold font-sans'>
                            FANANI.
                          </h1>
                        </Link>
                    </div>
                    <ul className="pl-4 py-8">
                        <Link href="/"><li className={`${params === '' && active} cursor-pointer py-3`}>Home</li></Link>
                        <Link href="/about"><li className={`${params === 'about' && active} cursor-pointer py-3`}>About</li></Link>
                        <Link href="/portofolio"><li className={`${params === 'portofolio' && active} cursor-pointer py-3`}>Portofolio</li></Link>
                        <Link href="/blog"><li className={`${params === 'blog' && active} cursor-pointer py-3`}>Blog</li></Link>
                    </ul>
                    <div className="fixed w-full max-w-sm left-0 bottom-0 px-4 mb-4">
                        <button className="w-full px-4 py-2 rounded-xl bg-primary text-secondary">
                            <a href="https://wa.me/6282142931584?text=We%20are%20interested%20in%20working%20with%20you">
                                WhatsApp Me
                            </a>
                        </button>
                    </div>
                </nav>
            </div>
        </>
  )
}

export default Header
