/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react'

export const CarouselItem = ({ children }:any) => {
  return (
      <div className="carousel-item w-full">
      {children}
      </div>
  )
}

const Carousel = ({ children }:any) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [classNamex, setClassnamex] = useState(0)

  const updateIndex = (newIndex:any) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0
    }
    setActiveIndex(newIndex)
    setClassnamex(newIndex * 100)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1)
      }
    }, 3000)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  })

  return (
      <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      >
      <div
          className={`inner-carousel transform translate-x-[${classNamex === 0 ? '' : '-'}${classNamex}%]`}
          // className={`inner-carousel transform translate-x-[-400%]`}
          // style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
          {React.Children.map(children, (child) => {
            return React.cloneElement(child)
          })}
      </div>
      <div className="indicators">
          <button
          onClick={() => {
            updateIndex(activeIndex - 1)
          }}
          >
          Prev
          </button>
          {React.Children.map(children, (child, index) => {
            return (
                <button
                className={`${index === activeIndex ? 'active' : ''}`}
                onClick={() => {
                  updateIndex(index)
                }}
                >
                {index + 1}
                </button>
            )
          })}
          <button
          onClick={() => {
            updateIndex(activeIndex + 1)
          }}
          >
          Next
          </button>
      </div>
      </div>
  )
}

export default Carousel
