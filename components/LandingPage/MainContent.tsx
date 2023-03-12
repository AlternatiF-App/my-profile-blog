import { saveAs } from 'file-saver'

const MainContent = () => {
  const saveFile = () => {
    saveAs(
      '/assets/files/resume.pdf',
      'resume.pdf'
    )
  }
  return (
        <div className="font-inter bg-primary hide-scroll-bar">
            <div className="w-full container mx-auto px-4 lg:px-8 lg:flex">
                <div className="text-white py-28 px-4 lg:py-36 2xl:py-64 lg:px-0 w-full lg:w-1/2">
                    <span className="bg-secondary text-primary py-0.5 px-2 rounded-md text-2xl lg:text-lg">Hi There</span>
                    <h1 className="text-4xl lg:text-7xl tracking-wide font-semibold py-2">AHMAD FANANI</h1>
                    <span className="block text-lg lg:text-base font-light tracking-widest">I am Frontend Developer base on Malang, Jawa Timur</span>
                    <div className="pt-8">
                        <button onClick={saveFile} className="px-6 py-2 w-full lg:w-auto rounded-md bg-secondary text-primary">
                            Download Resume
                        </button>
                    </div>
                </div>
                <div className="py-4 px-4 lg:py-10 lg:px-0 w-full lg:w-1/2">
                    {/* <img className="w-2/3 h-auto mx-auto"
                        src="/assets/images/coba.png"
                        alt="main image" loading="lazy"
                    /> */}
                </div>
            </div>
        </div>
  )
}

export default MainContent
