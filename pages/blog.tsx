import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ItemBlog from '../components/LandingPage/Items/ItemBlog'
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'

const blog = () => {
  const [btnFilter, setBtnFilter] = useState(false)
  const [filter, setFilter] = useState('')
  const [btnSort, setBtnSort] = useState(false)
  const [sort, setSort] = useState('')
  const [swipe, setSwipe] = useState(false)
  const [service, setService] = useState('')

  const onFilter = (e:string) => {
    setFilter(e)
    setBtnFilter(false)
  }

  const onSort = (e:string) => {
    setSort(e)
    setBtnSort(false)
  }

  const openSwipe = (e:string) => {
    setSwipe(true)
    setService(e)
  }

  const dismissSwipe = () => {
    setSwipe(false)
  }

  return (
        <>
            <Header/>
            <div className="bg-primary hide-scroll-bar">
                <div className="w-full 2xl:w-11/12 2xl:mx-auto px-4 py-6 lg:px-8 lg:py-12">
                    <h1 className="text-xl lg:text-3xl font-medium tracking-wider text-white">Blog</h1>
                    <div className="h-1 w-8 bg-secondary rounded-full"/>
                    <div className="pt-10 flex space-x-4 justify-between lg:justify-end">
                        <div className="w-44 relative">
                            <button onClick={() => {
                              setBtnFilter(!btnFilter)
                              openSwipe('filter')
                              setBtnSort(false)
                            }}
                                className="lg:w-full px-2 py-1 lg:px-4 lg:py-2 text-white lg:border lg:border-secondary lg:rounded-md flex justify-between items-center">
                                {filter === '' ? 'Filter' : filter} <ChevronDownIcon className="h-5 w-5 text-white ml-2" fill="none" stroke="currentColor"/>
                            </button>
                            {
                                btnFilter && <div className="hidden lg:block absolute py-1 z-50 w-full bg-primary mt-1 rounded-md">
                                    <ul>
                                        <li onClick={() => onFilter('HTML')}
                                            className="cursor-pointer font-light text-sm tracking-widest hover:bg-secondary hover:text-black text-white flex justify-between items-center px-4 py-1">
                                            HTML {filter === 'HTML' && <CheckIcon className="h-5 w-5 ml-2" fill="none" stroke="currentColor"/>}
                                        </li>
                                        <li onClick={() => onFilter('CSS')}
                                            className="cursor-pointer font-light text-sm tracking-widest hover:bg-secondary hover:text-black text-white flex justify-between items-center px-4 py-1">
                                            CSS {filter === 'CSS' && <CheckIcon className="h-5 w-5 ml-2" fill="none" stroke="currentColor"/>}
                                        </li>
                                        <li onClick={() => onFilter('JavaScript')}
                                            className="cursor-pointer font-light text-sm tracking-widest hover:bg-secondary hover:text-black text-white flex justify-between items-center px-4 py-1">
                                            JavaScript {filter === 'JavaScript' && <CheckIcon className="h-5 w-5 ml-2" fill="none" stroke="currentColor"/>}
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                        <div className="w-44 relative flex justify-end lg:justify-start">
                            <button onClick={() => {
                              setBtnSort(!btnSort)
                              openSwipe('sort')
                              setBtnFilter(false)
                            }}
                                className="lg:w-full px-2 py-1 lg:px-4 lg:py-2 text-white lg:border lg:border-secondary lg:rounded-md flex justify-between items-center">
                                {sort === '' ? 'Sort' : sort} <ChevronDownIcon className="h-5 w-5 text-white ml-2" fill="none" stroke="currentColor"/>
                            </button>
                            {
                                btnSort && <div className="hidden lg:block absolute py-1 z-50 w-full bg-primary mt-1 rounded-md">
                                    <ul>
                                        <li onClick={() => onSort('A - Z')}
                                            className="cursor-pointer font-light text-sm tracking-widest hover:bg-secondary hover:text-black text-white flex justify-between items-center px-4 py-1">
                                            A - Z {sort === 'A - Z' && <CheckIcon className="h-5 w-5 ml-2" fill="none" stroke="currentColor"/>}
                                        </li>
                                        <li onClick={() => onSort('Z - A')}
                                            className="cursor-pointer font-light text-sm tracking-widest hover:bg-secondary hover:text-black text-white flex justify-between items-center px-4 py-1">
                                            Z - A {sort === 'Z - A' && <CheckIcon className="h-5 w-5 ml-2" fill="none" stroke="currentColor"/>}
                                        </li>
                                        <li onClick={() => onSort('Year')}
                                            className="cursor-pointer font-light text-sm tracking-widest hover:bg-secondary hover:text-black text-white flex justify-between items-center px-4 py-1">
                                            Year {sort === 'Year' && <CheckIcon className="h-5 w-5 ml-2" fill="none" stroke="currentColor"/>}
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="py-6 lg:flex lg:flex-wrap lg:gap-8 lg:justify-between space-y-10 lg:space-y-0">
                        <ItemBlog
                            width={'blog'}
                            thumbnail={'web-design.jpg'}
                            category={'NextJS'}
                            title={'Installing NextJS'}
                            years={2020}
                        />
                        <ItemBlog
                            width={'blog'}
                            thumbnail={'web-design.jpg'}
                            category={'NextJS'}
                            title={'Installing NextJS'}
                            years={2020}
                        />
                        <ItemBlog
                            width={'blog'}
                            thumbnail={'web-design.jpg'}
                            category={'NextJS'}
                            title={'Installing NextJS'}
                            years={2020}
                        />
                        <ItemBlog
                            width={'blog'}
                            thumbnail={'web-design.jpg'}
                            category={'NextJS'}
                            title={'Installing NextJS'}
                            years={2020}
                        />
                        <ItemBlog
                            width={'blog'}
                            thumbnail={'web-design.jpg'}
                            category={'NextJS'}
                            title={'Installing NextJS'}
                            years={2020}
                        />
                    </div>
                </div>
            </div>
            <BottomSheet
                open={swipe}
                onDismiss={dismissSwipe}
                snapPoints={({ maxHeight }) => [
                  maxHeight - maxHeight / 20,
                  maxHeight / 3,
                  maxHeight * 1.2
                ]}
                scrollLocking={true}
                skipInitialTransition>
                    { service === 'filter'
                      ? <div className="block lg:hidden relative w-full font-oxygen text-sm py-2 text-white">
                        <h1 className="text-lg font-medium px-4">Filter</h1>
                        <ul className="py-2">
                            <li onClick={() => onFilter('HTML')}
                                className="cursor-pointer font-light text-sm tracking-widest hover:bg-secondary hover:text-black text-white flex justify-between items-center px-4 py-2">
                                HTML {filter === 'HTML' && <CheckIcon className="h-5 w-5 ml-2" fill="none" stroke="currentColor"/>}
                            </li>
                            <li onClick={() => onFilter('CSS')}
                                className="cursor-pointer font-light text-sm tracking-widest hover:bg-secondary hover:text-black text-white flex justify-between items-center px-4 py-2">
                                CSS {filter === 'CSS' && <CheckIcon className="h-5 w-5 ml-2" fill="none" stroke="currentColor"/>}
                            </li>
                            <li onClick={() => onFilter('JavaScript')}
                                className="cursor-pointer font-light text-sm tracking-widest hover:bg-secondary hover:text-black text-white flex justify-between items-center px-4 py-2">
                                JavaScript {filter === 'JavaScript' && <CheckIcon className="h-5 w-5 ml-2" fill="none" stroke="currentColor"/>}
                            </li>
                        </ul>
                    </div>
                      : <div className="block lg:hidden relative w-full font-oxygen text-sm py-2 text-white">
                        <h1 className="text-lg font-medium px-4">Sort</h1>
                        <ul className="py-2">
                            <li onClick={() => onSort('A - Z')}
                                className="cursor-pointer font-light text-sm tracking-widest hover:bg-secondary hover:text-black text-white flex justify-between items-center px-4 py-2">
                                A - Z {sort === 'A - Z' && <CheckIcon className="h-5 w-5 ml-2" fill="none" stroke="currentColor"/>}
                            </li>
                            <li onClick={() => onSort('Z - A')}
                                className="cursor-pointer font-light text-sm tracking-widest hover:bg-secondary hover:text-black text-white flex justify-between items-center px-4 py-2">
                                Z - A {sort === 'Z - A' && <CheckIcon className="h-5 w-5 ml-2" fill="none" stroke="currentColor"/>}
                            </li>
                            <li onClick={() => onSort('Year')}
                                className="cursor-pointer font-light text-sm tracking-widest hover:bg-secondary hover:text-black text-white flex justify-between items-center px-4 py-2">
                                Year {sort === 'Year' && <CheckIcon className="h-5 w-5 ml-2" fill="none" stroke="currentColor"/>}
                            </li>
                        </ul>
                    </div>
                    }
            </BottomSheet>
            <Footer/>
        </>
  )
}

export default blog
