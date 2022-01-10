interface ItemSocialMediaProps{
    link: string;
    title: string;
    subtitle: string;
}

const ItemSocialMedia = ({ link, title, subtitle }:ItemSocialMediaProps) => {
  return (
        <div className="group relative cursor-pointer w-full lg:w-1/3 px-8 py-5 bg-third hover:bg-secondary border border-secondary rounded-md transition-all duration-300 ease-in-out">
            <a href={link} target='_blank' rel="noreferrer">
                <div className="absolute group-hover:bg-opacity-10 bg-white bg-opacity-0 custom-shadow rounded-b-xl h-5 w-full left-0 -bottom-3 transition-all duration-300 ease-in-out"/>
                <h1 className="text-2xl text-white group-hover:text-black tracking-wide transition-all duration-300 ease-in-out">
                  {title}
                </h1>
                <span className="pt-2 block text-base tracking-widest text-secondary group-hover:text-black transition-all duration-300 ease-in-out">
                  {subtitle}
                </span>
            </a>
        </div>
  )
}

export default ItemSocialMedia
