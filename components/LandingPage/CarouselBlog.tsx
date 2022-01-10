import ItemBlog from './Items/ItemBlog'

const CarouselBlog = () => {
  return (
        <div className="bg-primary">
            <div className="w-full 2xl:w-11/12 2xl:mx-auto px-8 py-8 lg:px-10 lg:py-16">
                <h1 className="text-xl lg:text-2xl 2xl:text-3xl py-2 tracking-widest text-secondary text-center">Portofolio</h1>
                <div className="flex 2xl:justify-center space-x-8 lg:space-x-16 overflow-x-auto hide-scroll-bar py-4 lg:py-10">
                    <ItemBlog
                        width={'home'}
                        thumbnail={'web-design.jpg'}
                        category={'NextJS'}
                        title={'Installing NextJS'}
                        years={2020}
                    />
                    <ItemBlog
                        width={'home'}
                        thumbnail={'web-design.jpg'}
                        category={'NextJS'}
                        title={'Installing NextJS'}
                        years={2020}
                    />
                    <ItemBlog
                        width={'home'}
                        thumbnail={'web-design.jpg'}
                        category={'NextJS'}
                        title={'Installing NextJS'}
                        years={2020}
                    />
                </div>
            </div>
        </div>
  )
}

export default CarouselBlog
