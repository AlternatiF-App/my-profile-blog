interface CardMenu {
  title: string
  handleScroll: Function
}

const CardMenu = (props: CardMenu) => {
  const { title, handleScroll } = props

  return (
    <div onClick={() => handleScroll(title)} className='flex space-x-4 py-2 items-center cursor-pointer group'>
      <div className={`h-px w-10 bg-gray-400 group-hover:w-20 group-hover:bg-primary transition-all duration-300 ease-in-out`}/>
      <span className={`block capitalize font-bold text-gray-400 group-hover:text-primary transition-all duration-300 ease-in-out`}>
        { title }
      </span>
    </div>
  )
}

export default CardMenu
