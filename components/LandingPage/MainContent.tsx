
const MainContent = () => {
  return (
        <div className="font-oxygen bg-primary hide-scroll-bar">
            <div className="w-full 2xl:w-11/12 2xl:mx-auto lg:flex">
                <div className="text-white py-28 px-4 lg:py-36 2xl:py-64 lg:px-10 w-full lg:w-1/2">
                    <h2 className="text-secondary text-2xl lg:text-3xl">Hello, I'am</h2>
                    <h1 className="text-7xl lg:text-8xl font-semibold py-4">Ahmad Fanani</h1>
                    <span className="block text-lg lg:text-2xl font-light tracking-widest">Frontend Developer</span>
                    <div className="pt-8">
                        <button className="px-6 py-2 w-full lg:w-auto rounded-md bg-secondary text-black">
                            Download Resume
                        </button>
                    </div>
                </div>
                <div className="py-4 px-4 lg:py-10 lg:px-10 xl:px-14 w-full lg:w-1/2">
                    <img className="w-full h-auto"
                        src="/assets/images/coba.png"
                    />
                </div>
            </div>
        </div>
  )
}

export default MainContent
