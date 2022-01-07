import Header from '../components/Header/Header'
import AboutMe from '../components/LandingPage/AboutMe'
import CarouselBlog from '../components/LandingPage/CarouselBlog'
import FeaturedCode from '../components/LandingPage/FeaturedCode'
import MainContent from '../components/LandingPage/MainContent'

const Home = () => {
  return (
    <>
        <Header/>
        <MainContent/>
        <AboutMe/>
        <FeaturedCode/>
        <CarouselBlog/>
    </>
  )
}

export default Home
