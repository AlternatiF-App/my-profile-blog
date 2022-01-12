import Link from 'next/link'

const Footer = () => {
  return (
        <div className="bg-third font-oxygen">
            <div className="w-full 2xl:w-11/12 2xl:mx-auto px-8 py-8 lg:px-10 lg:py-16">
                <div className="lg:flex lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    <div className="flex justify-center lg:justify-start lg:block">
                        <img className="h-6 lg:h-8 2xl:h-10 w-auto"
                            src="/assets/images/logo.png"
                        />
                    </div>
                    <h1 className="text-5xl lg:text-left text-center text-white tracking-widest">Let's Talk?</h1>
                    <div className="flex justify-center lg:block lg:justify-start">
                        <button className="px-4 py-2 text-secondary border border-secondary rounded-md">
                            <a href="https://wa.me/6282142931584?text=We%20are%20interested%20in%20working%20with%20you">
                                WhatsApp Me
                            </a>
                        </button>
                    </div>
                </div>
                <ul className="pt-8 lg:pt-14 flex justify-center space-x-8 lg:text-base 2xl:text-lg font-medium">
                    <Link href="/about"><li className="text-white hover:text-secondary cursor-pointer transition-all duration-300 ease-in-out">About</li></Link>
                    <Link href="/portofolio"><li className="text-white hover:text-secondary cursor-pointer transition-all duration-300 ease-in-out">Portofolio</li></Link>
                    <Link href="/blog"><li className="text-white hover:text-secondary cursor-pointer transition-all duration-300 ease-in-out">Blog</li></Link>
                </ul>
                <div className="flex justify-center pt-4">
                    <span className="text-white text-xs">&copy; copyright 2021 - Ahmad Fanani</span>
                </div>
            </div>
        </div>
  )
}

export default Footer
