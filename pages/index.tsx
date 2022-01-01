import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Profile from '../components/ItemLandingPage/Profile'
import FeaturedContent from '../components/LandingPage/FeaturedContent'
import MainContent from '../components/LandingPage/MainContent'

const Home = () => {
  return (
    <>
        <div className="bg-secondary h-screen">
          <Header/>
          <MainContent/>
        </div>
        <FeaturedContent/>
        <Profile/>
        <Footer/>
    </>
  )
}

export default Home
