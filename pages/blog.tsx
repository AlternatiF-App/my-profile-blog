import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ItemBlog from '../components/LandingPage/Items/ItemBlog'

const blog = () => {
  return (
        <>
            <Header/>
            <div className="bg-primary">
                <div className="w-full 2xl:w-11/12 2xl:mx-auto px-4 py-6 lg:px-8 lg:py-12">
                    <h1 className="text-xl lg:text-3xl font-medium tracking-wider text-white">Blog</h1>
                    <div className="h-1 w-8 bg-secondary rounded-full"/>
                    <div className="py-10 lg:flex lg:flex-wrap lg:gap-8 space-y-10 lg:space-y-0">
                        <ItemBlog
                            width={'blog'}
                            thumbnail={'web-design.jpg'}
                            category={'NextJS'}
                            title={'Installing NextJS'}
                            years={2020}
                        />
                        <ItemBlog
                            width={'blog'}
                            thumbnail={'web-design.jpg'}
                            category={'NextJS'}
                            title={'Installing NextJS'}
                            years={2020}
                        />
                        <ItemBlog
                            width={'blog'}
                            thumbnail={'web-design.jpg'}
                            category={'NextJS'}
                            title={'Installing NextJS'}
                            years={2020}
                        />
                        <ItemBlog
                            width={'blog'}
                            thumbnail={'web-design.jpg'}
                            category={'NextJS'}
                            title={'Installing NextJS'}
                            years={2020}
                        />
                        <ItemBlog
                            width={'blog'}
                            thumbnail={'web-design.jpg'}
                            category={'NextJS'}
                            title={'Installing NextJS'}
                            years={2020}
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
  )
}

export default blog
