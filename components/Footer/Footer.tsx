import ItemFooter from './ItemFooter'

const Footer = () => {
  return (
        <div className="lg:flex w-full 2xl:w-10/12 mx-auto px-8 py-14">
            <div className="w-full lg:w-1/2">
                <span className="block text-6xl text-primary">LOGO</span>
            </div>
            <div className="w-full lg:w-1/2 pt-8 lg:pt-0">
                <h2 className="mb-4 font-medium text-lg">Menu</h2>
                <div className="space-y-2">
                    <ItemFooter name={'CV'}/>
                    <ItemFooter name={'Profile'}/>
                    <ItemFooter name={'Blogs'}/>
                </div>
            </div>
        </div>
  )
}

export default Footer
