import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { PhoneIcon } from '@heroicons/react/solid'
import { DownloadIcon } from '@heroicons/react/outline'
import ItemAbout from '../components/Items/ItemAbout'

const about = () => {
  return (
        <>
            <Header/>
                <div className="bg-primary font-oxygen">
                    <div className="w-full 2xl:w-10/12 lg:mx-auto lg:flex px-4 lg:px-8 py-20">
                        <div className="w-full h-96 lg:w-1/3 lg:h-pict">
                            <img className="w-full h-full object-cover"
                                src='/assets/images/foto.jpg'
                                alt="picture"
                            />
                        </div>
                        <div className="w-full lg:w-2/3 h-pict bg-third px-4 lg:px-8 2xl:px-14 py-6 my-8 lg:my-0">
                            <div className="flex justify-end text-white">
                                <span className="block flex items-center text-base font-light tracking-widest">
                                    <PhoneIcon className="h-4 w-4 mr-2" fill="currentColor" stroke="none"/> +62|821-4293-1584
                                </span>
                            </div>
                            <div className="pt-8 lg:pt-20 text-white">
                                <h1 className="text-2xl font-medium tracking-widest">Ahmad Fanani</h1>
                                <p className="pt-4 font-light tracking-wider text-justify">
                                    My name is Ahmad Fanani, I'm Freelance Frontend Developer based on Malang, Indonesia and i'm very passionate and dedicated to my work. With 1 years experience as a professional Frontend Developer. I have acquired the skills necessary to build great website.
                                </p>
                            </div>
                            <div className="pt-8 lg:pt-20 text-white lg:flex">
                                <div className="space-y-5 w-full lg:w-1/2 tracking-wider">
                                    <ItemAbout title={'Name'} content={'Ahmad Fanani'}/>
                                    <ItemAbout title={'Experience'} content={'1 years'}/>
                                    <ItemAbout title={'Age'} content={'24'}/>
                                </div>
                                <div className="space-y-5 w-full lg:w-1/2 tracking-wider">
                                    <ItemAbout title={'Address'} content={'Malang, Indonesia'}/>
                                    <ItemAbout title={'Freelance'} content={'Available'}/>
                                    <ItemAbout title={'Remote'} content={'Available'}/>
                                </div>
                            </div>
                            <div className="pt-8 lg:pt-20">
                                <button className="px-4 py-2 w-full lg:w-auto flex justify-center items-center bg-secondary text-black rounded-md tracking-wider">
                                    Download Resume
                                    <DownloadIcon className="h-5 w-5 ml-2" fill="none" stroke="currentColor"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
  )
}

export default about
