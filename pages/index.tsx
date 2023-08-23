import CardExperience from '~/components/Card/CardExperience'
import Navbar from '~/components/Navbar/navbar'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import CardProject from '~/components/Card/CardProject'

const Home = () => {
  // const [active, setActive] = useState('about')

  const handleScroll = (id: string) => {
    const scroll = document.getElementById(id)
    scroll?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='font-inter mx-auto px-24 min-h-screen max-w-screen-xl'>
      <div className='lg:flex lg:justify-between lg:gap-4'>
        <Navbar handleScroll={handleScroll} />
        <main id='content' className='pt-24 lg:w-1/2 lg:py-24'>
          <section id='about' className='space-y-6 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
            <span className='block'>
              Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.
            </span>
            <span className='block'>
              My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.
            </span>
            <span className='block'>
              When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds Korok seeds.
            </span>
          </section>
          <section id='experience' className='space-y-8 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
            <CardExperience
              time='2022 - PRESENT'
              position='Frontend Developer'
              description='Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.'
              skill={['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Vite', 'HTML', 'Tailwind CSS']}
            />
            <CardExperience
              time='2018 - 2022'
              position='Administrator'
              description='Entered and maintained departmental records in company database. Collect, validate and distributed information to employees.'
              // skill={['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Vite', 'HTML', 'Tailwind CSS']}
            />
            <CardExperience
              time='2016 - 2017'
              position='Android and Web Developer'
              description='Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.'
              skill={['CodeIgniter', 'HTML', 'CSS', 'JavaScript', 'Outsystem', 'Android Dev']}
            />
            <button className='flex items-center group text-primary my-4'>
              View Full Resume
              <ArrowRightIcon className='h-4 w-4 ml-2 group-hover:translate-x-2 transition-all duration-300 ease-in-out' fill='none' stroke='currentColor' />
            </button>
          </section>
          <section id='project' className='space-y-8 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
            <CardProject
              image='https://ebooks.gramedia.com/static/media/logo.77f42139bd18efda83c743822793cd97.svg'
              name='Gramedia Digital'
              description='Website e-commerce that sell digital book'
              tech={['React.js', 'JavaScript', 'TypeScript', 'HTML', 'Tailwind CSS']}
            />
            <CardProject
              image='https://webreader.new.eperpus.com/assets/img-logo-c577b492.png'
              name='Webreader E-Perpus'
              description='Digital platform for read digital book'
              tech={['React.js', 'Vite', 'Redux', 'JavaScript', 'TypeScript', 'HTML', 'Tailwind CSS']}
            />
            <button className='flex items-center group text-primary my-4'>
              View Full Project Archive
              <ArrowRightIcon className='h-4 w-4 ml-2 group-hover:translate-x-2 transition-all duration-300 ease-in-out' fill='none' stroke='currentColor' />
            </button>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Home
