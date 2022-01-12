import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

const detail = () => {
  return (
        <>
            <Header/>
                <div className="bg-primary font-oxygen">
                    <div className="w-full 2xl:w-10/12 2xl:mx-auto px-8 py-8 lg:px-10 lg:py-16 text-white">
                        <h1 className="text-6xl font-medium tracking-wider">Title</h1>
                        <div className="w-20 h-1 bg-secondary"/>
                        <div className="py-10 flex space-x-6 items-center">
                            <img className="w-20 h-20 object-cover rounded-full"
                                src='/assets/images/ava.jpg'
                                alt='avatar'
                            />
                            <div>
                                <span className="block text-xl font-medium">Name</span>
                                <span className="block text-xl font-light">Date</span>
                            </div>
                        </div>
                        <div>
                            Content
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
  )
}

export default detail
