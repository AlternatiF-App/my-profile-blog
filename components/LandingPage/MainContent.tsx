import ItemContent from '../ItemLandingPage/ItemContent'

const MainContent = () => {
  return (
        <div className="font-oxygen text-sm lg:text-base">
            <div className="w-full 2xl:w-10/12 2xl:mx-auto lg:flex">
                <div className="w-full lg:w-1/2 px-8 py-10 lg:px-10 lg:py-16 2xl:py-32">
                    <h1 className="text-3xl lg:text-4xl 2xl:text-7xl font-bold">
                        My Personal Website and My Profile
                    </h1>
                    <ul className="px-2 lg:px-8 pt-8 lg:pt-10 space-y-4 lg:space-y-6">
                        <ItemContent name={'Profile'}/>
                        <ItemContent name={'CV'}/>
                        <ItemContent name={'Portofolio'}/>
                        <ItemContent name={'Contact'}/>
                    </ul>
                    <div className="pt-12">
                        <button className="px-20 py-3 w-full lg:w-auto rounded-full bg-primary text-secondary text-lg">
                            Contact Me
                        </button>
                    </div>
                </div>
                <div className="hidden lg:block py-36 w-1/2">
                    <div>
                        <img className="w-full h-auto"
                            src="/assets/images/illustration.png"
                        />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default MainContent
