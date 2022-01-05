import ItemFooter from './ItemFooter'

const Footer = () => {
  return (
        <div className="flex justify-between items-center w-full 2xl:w-10/12 mx-auto px-8 py-8">
            <div className="">
                <span className="block text-2xl text-primary">LOGO</span>
            </div>
            <div className="flex space-x-8">
                <ItemFooter name={'CV'}/>
                <ItemFooter name={'Profile'}/>
            </div>
        </div>
  )
}

export default Footer
