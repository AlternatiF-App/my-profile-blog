import ItemSocialMedia from './Items/ItemSocialMedia'

const SocialMedia = () => {
  return (
        <div className="bg-white font-inter">
            <div className="w-full 2xl:w-11/12 2xl:mx-auto px-8 py-8 lg:px-10 lg:py-16">
                <span className="text-primary text-lg tracking-widest">Social Media</span>
                <h1 className="text-primary text-3xl lg:text-5xl font-bold tracking-wide">Find Me On</h1>
                <div className="mt-10 lg:flex space-y-6 lg:space-y-0 lg:space-x-6 xl:space-x-8 2xl:space-x-10">
                    <ItemSocialMedia link={'https://www.linkedin.com/in/ahmad-fanani-a375b4197/'} title={'LinkedIn'} subtitle={'Ahmad Fanani'}/>
                    <ItemSocialMedia link={'https://github.com/AlternatiF-App'} title={'Github'} subtitle={'Ahmad Fanani'}/>
                    <ItemSocialMedia link={'https://medium.com/@fananiapps'} title={'Medium'} subtitle={'Ahmad Fanani'}/>
                </div>
            </div>
        </div>
  )
}

export default SocialMedia
