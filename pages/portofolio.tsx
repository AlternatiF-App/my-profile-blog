import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ItemPortofolio from '../components/Items/ItemPortofolio'

const portofolio = () => {
  return (
        <>
            <Header/>
                <div className="bg-primary font-oxygen">
                    <div className="w-full 2xl:w-11/12 lg:mx-auto px-4 lg:px-8 py-20">
                        <h1 className="text-xl lg:text-3xl font-medium tracking-wider text-white">Portofolio</h1>
                        <div className="h-1 w-10 bg-secondary rounded-full"/>
                        <div className="flex flex-wrap gap-8 pt-10">
                            <ItemPortofolio/>
                            <ItemPortofolio/>
                            <ItemPortofolio/>
                            <ItemPortofolio/>
                            <ItemPortofolio/>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
  )
}

export default portofolio
