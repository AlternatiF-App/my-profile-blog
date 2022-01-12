import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { useState, useEffect } from 'react'
import { getMediumData } from '../api/api'
import { useRouter } from 'next/router'
import moment from 'moment'

const detail = () => {
  const [data, setData] = useState({
    author: '',
    pubDate: '',
    title: '',
    content: ''
  })
  const [profile, setProfile] = useState({
    image: ''
  })
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    async function getData () {
      const res = await getMediumData()
      setProfile(res.feed)
      const posts = res.items.filter((item:any) => item.categories.length > 0)
      for (const i in posts) {
        const title = posts[i].title
        console.log('cok', title)
        console.log('cokid', id)
        if (title === id) {
          const post = posts[i]
          setData(post)
        }
      }
    }
    getData()
  })

  return (
        <>
            <Header/>
                <div className="bg-primary font-oxygen">
                    <div className="w-full 2xl:w-10/12 2xl:mx-auto px-4 py-8 lg:px-10 lg:py-16 text-white">
                        <h1 className="text-2xl lg:text-4xl 2xl:text-6xl font-medium tracking-wider">{data.title}</h1>
                        <div className="w-20 h-1 bg-secondary"/>
                        <div className="py-10 flex space-x-6 items-center">
                            <img className="w-14 h-14 lg:w-20 lg:h-20 object-cover rounded-full"
                                src={profile.image}
                                alt='avatar'
                            />
                            <div>
                                <span className="block text-base lg:text-lg 2xl:text-xl font-medium">{data.author}</span>
                                <span className="block text-base lg:text-lg 2xl:text-xl font-light">{moment(data.pubDate).format('DD MMMM YYYY')}</span>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="pt-4 px-0 2xl:px-8 font-oxygen content relative"
                                dangerouslySetInnerHTML={{ __html: data.content }}>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
  )
}

export default detail
