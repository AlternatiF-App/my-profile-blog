interface ItemCvProps{
    icons: string;
    title: string;
}

const ItemCv = ({ icons, title }: ItemCvProps) => {
  return (
        <div className="flex space-x-4 items-center">
            <div className="px-2 py-2 shadow-md">
                <img className="w-14 h-auto"
                    src={`/assets/icons/${icons}`}
                    alt="icons"
                />
            </div>
            <span className="text-2xl font-medium">{title}</span>
        </div>
  )
}

export default ItemCv
