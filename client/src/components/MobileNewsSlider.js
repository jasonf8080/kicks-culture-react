import React from 'react'
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { handleLinkClick } from '../utils/helpers'


const MobileNewsSlider = ({articles, mobileIndex, setMobileIndex, visible, setVisible}) => {

 const handleClick = (type) => {
     setVisible(false)

    setTimeout(() => {
     if(type === 'increase'){
         setMobileIndex((prevIndex) => prevIndex === articles.length - 1 ? 0 : prevIndex + 1);
     }

     if(type === 'decrease'){
         setMobileIndex((prevIndex) => prevIndex === 0 ? articles.length - 1 : prevIndex - 1);
     }

      setVisible(true)
 
    }, 500)
 }

  


  return (
    <div className={`${visible ? 'visible' : 'hidden'} mobile-articles`}>

        <div className="articles-grid">
            <Link to='/' onClick={handleLinkClick}>
                <div className="article-item">
                    <div className="img-container"><img src={`./images/article${articles.find((item) => item.index === mobileIndex).index}.png`} alt="articleImg" /></div>

                    <div className="article-item-content">
                        <h3 className="text-sm">{articles.find((item) => item.index === mobileIndex).title}</h3>
                        <p className='text-xs'>{articles.find((item) => item.index === mobileIndex).content.substring(0, 85).trim().replace(/[\s]+[^\s]*$/, '') + '...'}</p>
                    </div>
                </div>
            </Link>
        </div>

       
            <div className="slider-info-flex">
                <p>{mobileIndex + 1} / {articles.length}</p>

                <div className="slider-btns-flex">
                    <button onClick={() => handleClick('decrease')} disabled={!visible}><BiChevronLeft/></button>
                    <button onClick={() => handleClick('increase')} disabled={!visible}><BiChevronRight/></button>
                </div>
            </div>
       
    </div>
  )
}

export default MobileNewsSlider