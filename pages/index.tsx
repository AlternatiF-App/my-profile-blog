import Header from '../components/Header/Header'
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
    </>
  )
}

export default Home
