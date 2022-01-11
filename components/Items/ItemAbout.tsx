interface ItemAboutProps{
    title: string;
    content: string;
}

const ItemAbout = ({ title, content }:ItemAboutProps) => {
  return (
        <div className="flex">
            <span className="block font-medium w-28">{title}</span>
            <span className="block font-light">: {content}</span>
        </div>
  )
}

export default ItemAbout
