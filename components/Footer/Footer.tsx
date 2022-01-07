
const Footer = () => {
  return (
        <div className="bg-third font-oxygen">
            <div className="w-full 2xl:w-10/12 2xl:mx-auto px-8 py-8 lg:px-10 lg:py-16">
                <div className="lg:flex lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    <div className="flex justify-center lg:justify-start lg:block">
                        <img className="h-6 lg:h-8 2xl:h-10 w-auto"
                            src="/assets/images/logo.png"
                        />
                    </div>
                    <h1 className="text-5xl text-left lg:text-center text-white tracking-widest">Let's Talk?</h1>
                    <div className="flex justify-center lg:block lg:justify-start">
                        <button className="px-4 py-2 text-secondary border border-secondary rounded-md">
                            WhatsApp Me
                        </button>
                    </div>
                </div>
                <ul className="pt-8 lg:pt-14 flex justify-center space-x-8 lg:text-base 2xl:text-lg font-medium">
                    <li className="text-white hover:text-secondary cursor-pointer transition-all duration-300 ease-in-out">About</li>
                    <li className="text-white hover:text-secondary cursor-pointer transition-all duration-300 ease-in-out">Portofolio</li>
                    <li className="text-white hover:text-secondary cursor-pointer transition-all duration-300 ease-in-out">Blog</li>
                    <li className="text-white hover:text-secondary cursor-pointer transition-all duration-300 ease-in-out">Contact</li>
                </ul>
                <div className="flex justify-center pt-4">
                    <span className="text-white text-xs">&copy; copyright 2021 - Ahmad Fanani</span>
                </div>
            </div>
        </div>
  )
}

export default Footer
