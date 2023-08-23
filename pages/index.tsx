import CardExperience from '~/components/Card/CardExperience'
import Navbar from '~/components/Navbar/navbar'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import CardProject from '~/components/Card/CardProject'
import { saveAs } from 'file-saver'

const Home = () => {
  // const [active, setActive] = useState('about')

  const handleScroll = (id: string) => {
    const scroll = document.getElementById(id)
    scroll?.scrollIntoView({ behavior: 'smooth' })
  }

  const saveFile = () => {
    saveAs(
      '/assets/files/Ahmad_Fanani_Resume.pdf',
      'Ahmad_Fanani_Resume.pdf'
    )
  }

  return (
    <div className='font-inter mx-auto px-6 lg:px-24 min-h-screen max-w-screen-xl'>
      <div className='lg:flex lg:justify-between lg:gap-4'>
        <Navbar handleScroll={handleScroll} />
        <main id='content' className='pt-24 lg:w-1/2 lg:py-24'>
          <section id='about' className='space-y-6 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
            <span className='block'>
              Resourceful professional with successful track record in developing innovative web designs and features. Possesses solid knowledge of HTML, CSS, JavaScript and Bootstrap with ability to quickly learn new technologies.
            </span>
            <span className='block'>
              Demonstrated success in identifying and resolving complex code issues. Experienced working with teams to produce impactful, leading-edge websites that engage customers and deliver business results. Well-versed in design standards and user preferences.
            </span>
          </section>
          <section id='experience' className='space-y-8 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
            <CardExperience
              time='2022 - PRESENT'
              position='Frontend Developer ~ Gramedia'
              description='Convert UI/UX design into code. Created E-Reader using 3rd Party library'
              skill={['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Vite', 'HTML', 'Tailwind CSS']}
            />
            <CardExperience
              time='2018 - 2022'
              position='Administrator ~ MI As Shodiq'
              description='Entered and maintained departmental records in company database. Collect, validate and distributed information to employees.'
              // skill={['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Vite', 'HTML', 'Tailwind CSS']}
            />
            <CardExperience
              time='2016 - 2017'
              position='Android and Web Developer ~ PT. Visionet Data International'
              description='Build mobile application for Lippo Mall. Created Landing Page for mobile application description'
              skill={['CodeIgniter', 'HTML', 'CSS', 'JavaScript', 'Outsystem', 'Android Dev']}
            />
            <button onClick={() => saveFile()} className='flex items-center group text-primary my-4'>
              View Full Resume
              <ArrowRightIcon className='h-4 w-4 ml-2 group-hover:translate-x-2 transition-all duration-300 ease-in-out' fill='none' stroke='currentColor' />
            </button>
          </section>
          <section id='project' className='space-y-8 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
            <CardProject
              image='https://ebooks.gramedia.com/static/media/logo.77f42139bd18efda83c743822793cd97.svg'
              name='Gramedia Digital'
              url='https://ebooks.gramedia.com/'
              description='Website e-commerce that sell digital book'
              tech={['React.js', 'JavaScript', 'TypeScript', 'HTML', 'Tailwind CSS']}
            />
            <CardProject
              image='https://webreader.new.eperpus.com/assets/img-logo-c577b492.png'
              name='Webreader E-Perpus'
              url='https://webreader.new.eperpus.com/'
              description='Digital platform for read digital book'
              tech={['React.js', 'Vite', 'Redux', 'JavaScript', 'TypeScript', 'HTML', 'Tailwind CSS']}
            />
            <CardProject
              image='https://cmaps.cdsasiaelectronics.co.id/images/logo%20C-MAPS%20new_for%20dark%20mode.png'
              name='CMAPS'
              url='https://cmaps.cdsasiaelectronics.co.id/login/'
              description='ERP Program for PT. CDS Asia Electronics'
              tech={['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'Tailwind CSS']}
            />
            {/* <button className='flex items-center group text-primary my-4'>
              View Full Project Archive
              <ArrowRightIcon className='h-4 w-4 ml-2 group-hover:translate-x-2 transition-all duration-300 ease-in-out' fill='none' stroke='currentColor' />
            </button> */}
          </section>
        </main>
      </div>
    </div>
  )
}

export default Home
