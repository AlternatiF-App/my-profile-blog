import CardMenu from '~/components/Card/CardMenu'
import Image from 'next/image'
import github from '~/public/assets/images/github.jpg'
import linkedin from '~/public/assets/images/linkedin.png'
import instagram from '~/public/assets/images/instagram.png'

interface NavbarProps {
  handleScroll: Function
}

const Navbar = (props: NavbarProps) => {
  const { handleScroll } = props

  return (
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
      <div className='space-y-2'>
        <h1 className='text-5xl font-bold text-primary'>Ahmad Fanani</h1>
        <span className='block text-lg'>Frontend Developer at Gramedia</span>
        <span className='block'>I build accessible, inclusive products and digital experiences for the web.</span>
      </div>
      <div className='mt-10'>
        <CardMenu handleScroll={handleScroll} title='about' />
        <CardMenu handleScroll={handleScroll} title='experience' />
        <CardMenu handleScroll={handleScroll} title='project' />
      </div>
      <div className='mt-auto flex space-x-4 items-center'>
        <Image src={github} alt='Github' 
          className='cursor-pointer'
          height={24} width={24}
          onClick={() => window.open('https://github.com/AlternatiF-App')}
        />
        <Image src={linkedin} alt='Linkedin'
          className='cursor-pointer'
          height={24} width={24}
          onClick={() => window.open('https://www.linkedin.com/in/ahmad-fanani-a375b4197/')}
        />
        <Image src={instagram} alt='Instagram'
          className='cursor-pointer'
          height={24} width={24}
          onClick={() => window.open('https://www.instagram.com/ahmaddfananii/')}
        />
      </div>
    </header>
  )
}

export default Navbar
