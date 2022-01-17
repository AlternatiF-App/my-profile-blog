import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ItemPortofolio from '../components/Items/ItemPortofolio'

const portofolio = () => {
  return (
        <>
            <Header/>
                <div className="bg-primary font-oxygen">
                    <div className="w-full 2xl:w-11/12 lg:mx-auto px-4 py-10 lg:px-8 lg:py-36 hide-scroll-bar">
                        <h1 className="text-xl lg:text-3xl font-medium tracking-wider text-white">Portofolio</h1>
                        <div className="h-1 w-10 bg-secondary rounded-full"/>
                        <div className="lg:grid lg:grid-cols-4 gap-8 space-y-10 lg:space-y-0 pt-10">
                            <ItemPortofolio image={'porto-1.png'}/>
                            <ItemPortofolio image={'porto-2.png'}/>
                            <ItemPortofolio image={'porto-3.png'}/>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
  )
}

export default portofolio
