import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import AboutMe from '../components/LandingPage/AboutMe'
import CarouselBlog from '../components/LandingPage/CarouselBlog'
import FeaturedCode from '../components/LandingPage/FeaturedCode'
import MainContent from '../components/LandingPage/MainContent'
import SocialMedia from '../components/LandingPage/SocialMedia'

const Home = () => {
  return (
    <>
        <Header/>
        <MainContent/>
        <AboutMe/>
        <FeaturedCode/>
        <CarouselBlog/>
        <SocialMedia/>
        <Footer/>
    </>
  )
}

export default Home
