import Link from 'next/link'

const AboutMe = () => {
  return (
        <div className="font-oxygen bg-primary px-4 py-10 lg:px-0">
            <div className="w-full 2xl:w-11/12 2xl:mx-auto bg-third text-white lg:flex">
                <div className="w-full lg:w-1/3 px-8 py-10 lg:px-10 lg:py-20">
                    <div>
                        <img className="w-full"
                            src="/assets/images/about.png"
                            alt="about" loading="lazy"
                        />
                    </div>
                </div>
                <div className="w-full lg:w-2/3 px-8 py-10 lg:px-10 lg:py-14">
                    <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-medium uppercase text-secondary">about me</h2>
                    <h1 className="text-4xl lg:text-6xl 2xl:text-7xl py-10 font-medium">
                        Why hire me in your company?
                    </h1>
                    <p className="text-base 2xl:text-lg text-justify lg:text-left tracking-wider leading-relaxed">
                        I have 1 years experience work as developer. I make Mobile App using Android Studio nad make Web Landing Page using CodeIgniter. Now i learn more deeper about <span className="text-secondary">ReactJS</span> and <span className="text-secondary">NextJS</span> as a <span className="text-secondary">Frontend Developer</span>. I create a lot of reusable components to support my work later on.
                    </p>
                    <p className="pt-6 text-base 2xl:text-lg text-justify lg:text-left tracking-wider leading-relaxed">
                        I believe with my ability and my hard work can bring the best results for the company. because I love code and I really like the challenge of getting things done.
                    </p>
                    <button className="mt-10 px-8 py-2 w-full lg:w-auto border border-secondary text-secondary font-medium rounded-md">
                        <Link href="/about">
                            Learn More
                        </Link>
                    </button>
                </div>
            </div>
        </div>
  )
}

export default AboutMe
