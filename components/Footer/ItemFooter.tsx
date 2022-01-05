interface ItemFooterProps{
    url?: string;
    name: string;
}

const ItemFooter = ({ url, name }:ItemFooterProps) => {
  return (
        <div>
            <div className="w-auto cursor-pointer hover:text-primary no-underline hover:underline transition-all duration-300 ease-in-out">
                {name}
            </div>
        </div>
  )
}

export default ItemFooter
