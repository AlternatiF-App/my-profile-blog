import { SearchIcon, ClockIcon, CloudDownloadIcon, ShareIcon, EyeOffIcon, PhotographIcon, MoonIcon, PlayIcon } from '@heroicons/react/outline'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { useState } from 'react'

const creation = () => {
  const [song, setSong] = useState('')
  const [play, setPlay] = useState(false)

  const onPlay = (music:string) => {
    setSong(music)
    if (music === song) {
      setPlay(false)
    } else {
      setPlay(true)
    }
  }

  return (
        <div className={`${play ? 'pb-24' : 'pb-6'} font-oxygen relative px-4 pt-6 bg-gray-50 hide-scroll-bar`}>
            <div className="flex items-center rounded-full bg-white shadow-md">
                <div className="px-2">
                    <img className="w-8 h-auto"
                        src="/assets/icons/GOOGLE.png"
                        alt="google" loading="lazy"
                    />
                </div>
                <input placeholder="Search or enter web address"
                    className="w-full px-2 py-2.5 outline-none"
                />
                <div className="flex items-center px-3 py-3 rounded-r-full bg-creation1">
                    <SearchIcon className="w-5 h-5 text-white" fill="none" stroke="currentColor"/>
                </div>
            </div>
            <div className="my-4 px-6 py-6 shadow-md border border-gray-100 border-opacity-50 bg-white rounded-3xl">
                <div className="flex justify-center relative">
                    <img className="w-24 h-24 object-cover rounded-full"
                        src="/assets/images/ava.jpg"
                        alt="avatar" loading="lazy"
                    />
                    <div className="p-1 bottom-1 ml-14 rounded-full absolute bg-white">
                        <img className="w-4 h-auto"
                            src="/assets/icons/GOOGLE.png"
                            alt="google" loading="lazy"
                        />
                    </div>
                </div>
                <h1 className="font-bold text-lg text-center pt-2">Ahmad Fanani</h1>
                <div className="flex justify-center w-full pt-1">
                    <p className="text-center w-2/3">
                        Without confidence, one can not do well in anything.
                    </p>
                </div>
                <div className="pt-10">
                    <button className="py-2 w-full text-center rounded-xl bg-creation1 text-white">
                        Sign in
                    </button>
                </div>
            </div>
            <div className="my-4 px-3 py-6 shadow-md border border-gray-100 border-opacity-50 bg-white rounded-3xl">
                <div className='flex px-3 space-x-4 items-center'>
                    <img className="w-10 h-10 object-cover rounded-full"
                        src="/assets/images/ava.jpg"
                        alt="avatar" loading="lazy"
                    />
                    <h1 className="font-bold text-lg">Ahmad Fanani</h1>
                </div>
                <ul className="mt-8 space-y-2">
                    <li className="flex items-center space-x-4 px-3 py-2 bg-gray-100 rounded-full">
                        <div className="p-1 rounded-full">
                            <ClockIcon className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor"/>
                        </div>
                        <span className="block font-medium">Bookmarks & History</span>
                    </li>
                    <li className="flex items-center space-x-4 px-3 py-2 bg-gray-100 rounded-full">
                        <div className="p-1 rounded-full">
                            <CloudDownloadIcon className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor"/>
                        </div>
                        <span className="block font-medium">Manage downloads</span>
                    </li>
                    <li className="flex items-center space-x-4 px-3 py-2 bg-gray-100 rounded-full">
                        <div className="p-1 rounded-full">
                            <ShareIcon className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor"/>
                        </div>
                        <span className="block font-medium">Share</span>
                    </li>
                    <li className="flex items-center space-x-4 px-3 py-2 bg-gray-100 rounded-full">
                        <div className="p-1 rounded-full">
                            <EyeOffIcon className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor"/>
                        </div>
                        <span className="block font-medium">Incognito mode</span>
                    </li>
                    <li className="flex items-center space-x-4 px-3 py-2 bg-gray-100 rounded-full">
                        <div className="bg-creation1 p-1 rounded-full">
                            <PhotographIcon className="h-5 w-5 text-white" fill="none" stroke="currentColor"/>
                        </div>
                        <span className="block font-medium">Picture Tab</span>
                    </li>
                    <li className="flex items-center space-x-4 px-3 py-2 bg-gray-100 rounded-full">
                        <div className="p-1 rounded-full">
                            <MoonIcon className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor"/>
                        </div>
                        <span className="block font-medium">Text contents</span>
                    </li>
                </ul>
            </div>
            <div className="my-4 px-6 py-6 shadow-md border border-gray-100 border-opacity-50 bg-creation1 rounded-3xl space-y-6">
                <div className="flex space-x-4 items-center">
                    <div onClick={() => onPlay('Tri Suaka - Aku Bukan Jodohnya.mp3')}
                        className="relative w-16 h-16 cursor-pointer">
                        <img className="w-full h-full object-cover rounded-xl"
                            src="/assets/icons/mp3.jfif"
                            alt="song images" loading="lazy"
                        />
                        {
                            (song === 'Tri Suaka - Aku Bukan Jodohnya.mp3' && play === true) && <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 rounded-xl">
                                <PlayIcon className="h-7 w-7 text-gray-100" fill="none" stroke="currentColor"/>
                            </div>
                        }
                    </div>
                    <div className="text-white">
                        <h1 className="font-semibold text-lg">Aku bukan jodohnya</h1>
                        <span className="block">Tri Suaka</span>
                    </div>
                </div>
                <div className="flex space-x-4 items-center">
                    <div onClick={() => onPlay('Mahalini - Bawa Dia Kembali.mp3')}
                        className="relative w-16 h-16 cursor-pointer">
                        <img className="w-16 h-16 object-cover rounded-xl"
                            src="/assets/icons/mahalini.jfif"
                            alt="song images" loading="lazy"
                        />
                        {
                            (song === 'Mahalini - Bawa Dia Kembali.mp3' && play === true) && <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 rounded-xl">
                                <PlayIcon className="h-7 w-7 text-gray-100" fill="none" stroke="currentColor"/>
                            </div>
                        }
                    </div>
                    <div className="text-white">
                        <h1 className="font-semibold text-lg">Bawa dia kembali</h1>
                        <span className="block">Mahalini Atmaja</span>
                    </div>
                </div>
                {
                    play &&
                    <div className="rounded-t-3xl fixed px-4 bg-white bottom-0 left-0 right-0 border-t border-gray-100 border-opacity-50 shadow-md">
                        <AudioPlayer
                            src={`/assets/musics/${song}`}
                            autoPlay={play}
                            showSkipControls={true}
                            showJumpControls={false}
                            onClickNext={() => song === ('Mahalini - Bawa Dia Kembali.mp3') ? setSong('Tri Suaka - Aku Bukan Jodohnya.mp3') : setSong('Mahalini - Bawa Dia Kembali.mp3')}
                            onClickPrevious={() => song === ('Mahalini - Bawa Dia Kembali.mp3') ? setSong('Tri Suaka - Aku Bukan Jodohnya.mp3') : setSong('Mahalini - Bawa Dia Kembali.mp3')}
                        />
                    </div>
                }
            </div>
        </div>
  )
}

export default creation
