interface ItemSocialMediaProps{
    title: string;
    subtitle: string;
}

const ItemSocialMedia = ({ title, subtitle }:ItemSocialMediaProps) => {
  return (
        <div className="group cursor-pointer w-full lg:w-1/4 px-8 py-5 bg-third hover:bg-secondary border border-secondary rounded-md transition-all duration-300 ease-in-out">
            <h1 className="text-4xl text-white group-hover:text-black tracking-wide transition-all duration-300 ease-in-out">
              {title}
            </h1>
            <span className="block text-base tracking-widest text-secondary group-hover:text-black transition-all duration-300 ease-in-out">
              {subtitle}
            </span>
        </div>
  )
}

export default ItemSocialMedia
