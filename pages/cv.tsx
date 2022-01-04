import ItemCv from '../components/CV/ItemCv'
import ItemEducation from '../components/CV/ItemEducation'
import ItemExperience from '../components/CV/ItemExperience'
import Header from '../components/Header/Header'
import ItemSkills from '../components/LandingPage/ItemSkills'

const cv = () => {
  return (
        <>
            <Header/>
            <div className="w-full 2xl:w-10/12 2xl:mx-auto py-8 px-4 lg:py-20 lg:px-8">
                <div className="lg:flex w-full lg:space-x-8 lg:px-4 py-8">
                    <div className="px-4 py-2 w-full lg:w-1/6">
                        <img className="w-full h-auto"
                            src="/assets/images/ava.jpg"
                            alt="avatar"
                        />
                    </div>
                    <div className="px-2 lg:px-8 py-4 w-full lg:w-5/6 lg:flex lg:space-x-8">
                        <div className="w-full lg:w-3/5">
                            <h1 className="text-2xl lg:text-3xl font-bold">Ahmad Fanani</h1>
                            <span className="block text-lg lg:text-xl font-light">Frontend Developer</span>
                            <div className="pt-10">
                                <h2 className="text-xl lg:text-2xl font-medium">Profile</h2>
                                <p className="text-lg lg:text-xl text-justify">
                                    I'am 24 years old Frontend Developer based on indonesia. I like and interest about Web Developer. I have 1 year experience work in Android Development and Web Development. I usually converting design into code using ReactJS and NextJS.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/5 pt-4 lg:pt-0 lg:px-10 py-2 space-y-4">
                            <h2 className="text-2xl font-medium pb-6">Hobbies</h2>
                            <ItemCv icons={'joy.png'} title={'Playing Games'}/>
                            <ItemCv icons={'music.png'} title={'Listening Music'}/>
                            <ItemCv icons={'movie.png'} title={'Watching Movie'}/>
                        </div>
                    </div>
                </div>
                <div className="lg:flex lg:space-x-8 px-2 lg:px-4 lg:py-8">
                    <div className="w-full lg:w-1/3 py-2 lg:px-4 lg:py-8">
                        <h2 className="text-xl lg:text-2xl font-medium">Eductaion</h2>
                        <div className="pt-8 space-y-6">
                            <ItemEducation start={2004} end={2010} location={'MI As - Shodiq'}/>
                            <ItemEducation start={2010} end={2013} location={'mts negeri malang 3'}/>
                            <ItemEducation start={2013} end={2016} location={'smk telkom malang'}/>
                            <ItemEducation start={2016} end={2021} location={'stiki malang'}/>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 pt-4 pb-2 lg:pt-0 lg:pb-0 lg:px-4 lg:py-8">
                        <h2 className="text-xl lg:text-2xl font-medium">Experience</h2>
                        <div className="pt-8 space-y-6">
                            <ItemExperience
                                jobdesk={'Android & Web Developer (2016 - 2017)'}
                                location={'PT. Visionet Data International'}
                                desc={'In there i joined the team to develop a smart mall. I make android application and web based landing page. In there my team using Scrum Method to prepare our works and task. I using Android Studio to develop smart mall and CodeIgniter for landing page.'}
                            />
                            <ItemExperience
                                jobdesk={'Employee (2017 - Present)'}
                                location={'MI As - Shodiq'}
                                desc={'Working as administration and there i took over all computer-related work based online.'}
                            />
                            <ItemExperience
                                jobdesk={'Freelancer (2020 - Present)'}
                                location={'Frontend Web Developer'}
                                desc={'Working as freelancer in Frontend Web. I make website using ReactJS and NextJS. I convert Web Design into Code using ReactJS, NextJS and TailwindCSS for reusable components and make it responsive.'}
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 pt-4 pb-2 lg:pt-0 lg:pb-0 lg:px-4 lg:py-8">
                        <h2 className="text-xl lg:text-2xl font-medium">Experience</h2>
                        <div className="pt-8 space-y-6">
                            <ItemSkills skills={'Javascript'} bar={'w-3/5'} percent={100}/>
                            <ItemSkills skills={'HTML'} bar={'w-3/4'} percent={80}/>
                            <ItemSkills skills={'CSS'} bar={'w-3/4'} percent={65}/>
                            <ItemSkills skills={'React JS'} bar={'w-4/6'} percent={60}/>
                            <ItemSkills skills={'Next JS'} bar={'w-1/2'} percent={75}/>
                            <ItemSkills skills={'Tailwind CSS'} bar={'w-4/5'} percent={100}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default cv
