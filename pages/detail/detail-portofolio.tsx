import Header from '../../components/Header/Header'
import ItemReview from '../../components/DetailPortofolio/ItemReview'
import { useState } from 'react'

const DetailPortofolio = () => {
  const [menu, setMenu] = useState('desc')

  const menuChange = (props:string) => {
    setMenu(props)
  }

  return (
        <>
            <Header/>
            <div className="font-oxygen w-full 2xl:w-10/12 2xl:mx-auto px-4 py-8 lg:px-8 lg:py-20">
                <div className="w-full lg:flex">
                    <div className="w-full lg:w-1/2 2xl:p-10">
                        <img className="w-full lg:w-5/6"
                            src="/assets/images/featured.jfif"
                            alt="detail-image"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 pt-8 lg:pt-0 2xl:px-8 2xl:py-16">
                        <h1 className="text-4xl lg:text-5xl font-medium">Title</h1>
                        <span className="text-base font-light">
                            Created At : 20 Desember 2021
                        </span>
                        <div className="pt-4 flex space-x-2">
                            <span className="py-1 px-3 rounded-full text-sm bg-primary text-secondary">HTML</span>
                            <span className="py-1 px-3 rounded-full text-sm bg-primary text-secondary">ReactJS</span>
                            <span className="py-1 px-3 rounded-full text-sm bg-primary text-secondary">NextJS</span>
                            <span className="py-1 px-3 rounded-full text-sm bg-primary text-secondary">TailwindCSS</span>
                        </div>
                        <p className="font-light pt-6 text-justify lg:text-left">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
                <div className="pt-10">
                    <div className="flex items-center">
                        <span onClick={() => menuChange('desc')} className={`${menu === 'desc' ? ('border-b-2 border-primary bg-secondary text-primary') : ('border-b-2 border-b-transparent text-gray-400')} w-1/2 lg:w-auto flex justify-center items-center transition-all duration-300 ease-in-out px-4 py-2 cursor-pointer font-bold`}>
                            Description
                        </span>
                        <span onClick={() => menuChange('review')} className={`${menu === 'review' ? ('border-b-2 border-primary bg-secondary text-primary') : ('border-b-2 border-b-transparent text-gray-400')} w-1/2 lg:w-auto flex justify-center items-center transition-all duration-300 ease-in-out px-4 py-2 cursor-pointer font-bold`}>
                            Review
                        </span>
                    </div>
                    <div className="py-10">
                        {
                            menu === 'desc' &&
                            <div className="lg:px-4">
                                <div>
                                    <span className="text-base font-light">
                                        Created At : 20 Desember 2021
                                    </span>
                                    <p className="pt-4 text-justify lg:text-left">
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    </p>
                                </div>
                                <div className="pt-20">
                                    <h1 className="text-3xl font-medium">Screenshots</h1>
                                    <div className="pt-6 space-y-4 lg:space-y-0 lg:grid lg:gap-8 lg:grid-cols-4">
                                        <img className="w-80"
                                            src="/assets/images/featured.jfif"
                                            alt="detail-image"
                                        />
                                        <img className="w-80"
                                            src="/assets/images/featured.jfif"
                                            alt="detail-image"
                                        />
                                        <img className="w-80"
                                            src="/assets/images/featured.jfif"
                                            alt="detail-image"
                                        />
                                        <img className="w-80"
                                            src="/assets/images/featured.jfif"
                                            alt="detail-image"
                                        />
                                        <img className="w-80"
                                            src="/assets/images/featured.jfif"
                                            alt="detail-image"
                                        />
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            menu === 'review' &&
                            <div className="lg:px-4 space-y-16 transition-all duration-300 ease-in-out">
                                <ItemReview/>
                                <ItemReview/>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
  )
}

export default DetailPortofolio
