import ItemSkills from '../LandingPage/ItemSkills'

const Profile = () => {
  return (
        <div className="font-oxygen w-full 2xl:w-10/12 2xl:mx-auto lg:flex lg:space-x-10 py-10">
            <div className="w-full lg:w-2/3 lg:flex lg:space-x-10 px-8">
                <div>
                    <img src="/assets/images/ava.jpg"
                        alt="avatar" className="rounded-md object-cover w-full lg:w-64 h-auto"
                    />
                </div>
                <div className="pt-4 lg:pt-0">
                    <h1 className="text-2xl lg:text-4xl font-semibold">Ahmad Fanani</h1>
                    <div className="pt-1">
                        <span className="block text-lg lg:text-xl">Frontend Developer</span>
                        <div className="lg:flex lg:space-x-8 pt-6">
                          <span className="block text-xl lg:w-1/3">Address</span>
                          <span className="block text-xl lg:w-2/3">Jl. Masjid RT 22 RW 06 Desa Kuwolu Kecamatan Bululawang</span>
                        </div>
                        <div className="lg:flex lg:space-x-8 pt-6">
                          <span className="block text-xl lg:w-1/3">City/District</span>
                          <span className="block text-xl lg:w-2/3">Kabupaten Malang</span>
                        </div>
                        <div className="lg:flex lg:space-x-8 pt-6">
                          <span className="block text-xl lg:w-1/3">Province</span>
                          <span className="block text-xl lg:w-2/3">Jawa Timur</span>
                        </div>
                        <div className="lg:flex lg:space-x-8 pt-6">
                          <span className="block text-xl lg:w-1/3">Country</span>
                          <span className="block text-xl lg:w-2/3">Indonesia</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/3 px-8 pt-6">
                <h1 className="text-2xl lg:text-4xl font-semibold pb-10">Skills</h1>
                <div className="space-y-3">
                  <ItemSkills skills={'Javascript'} bar={'w-3/5'} percent={100}/>
                  <ItemSkills skills={'HTML'} bar={'w-3/4'} percent={80}/>
                  <ItemSkills skills={'CSS'} bar={'w-3/4'} percent={65}/>
                  <ItemSkills skills={'React JS'} bar={'w-4/6'} percent={60}/>
                  <ItemSkills skills={'Next JS'} bar={'w-1/2'} percent={75}/>
                  <ItemSkills skills={'Tailwind CSS'} bar={'w-4/5'} percent={100}/>
                </div>
            </div>
        </div>
  )
}

export default Profile
