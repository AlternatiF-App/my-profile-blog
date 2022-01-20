import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import AboutMe from '../components/LandingPage/AboutMe'
import CarouselBlog from '../components/LandingPage/CarouselBlog'
import Contact from '../components/LandingPage/Contact'
import FeaturedCode from '../components/LandingPage/FeaturedCode'
import MainContent from '../components/LandingPage/MainContent'
import SocialMedia from '../components/LandingPage/SocialMedia'
import Head from 'next/head'

const Home = () => {
  return (
    <>
        <Head>
          <title>Fanani Blog - My Workspace in Here</title>
          {/* <meta name="google-site-verification" content="Tt680tcDsEp74CXBfyGG8lCQtoTQO3hbjLSWhn1FrfI" /> */}
          <meta name="description" content="This is the place where I create my work and the place where I write whatever I learn to become a frontend developer."/>
          <meta property="og:title" content='Fanani Blog - Lets make something new, different great together'/>
          <meta property="og:description" content='This is the place where I create my work and the place where I write whatever I learn to become a frontend developer.'/>
          <meta property="og:url" content='https://fanani.id/'/>
        </Head>
        <Header/>
        <MainContent/>
        <AboutMe/>
        <FeaturedCode/>
        <CarouselBlog/>
        <SocialMedia/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home
