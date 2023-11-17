import React from 'react'
import Card from './Card'
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'


const MobileCardSlider = ({heading, products, mobileIndex, setMobileIndex, visible, setVisible}) => {


     const handleClick = (type) => {
        setVisible(false)

       setTimeout(() => {
        if(type === 'increase'){
            setMobileIndex((prevIndex) => prevIndex === products.length - 1 ? 0 : prevIndex + 1);
        }

        if(type === 'decrease'){
            setMobileIndex((prevIndex) => prevIndex === 0 ? products.length - 1 : prevIndex - 1);
        }

         setVisible(true)
 
       }, 500)
    }


  return (
    <>
    <h2 className='heading'>{heading}</h2>
    <div className='mobile-card-slider'>


       <div className={`${visible ? 'visible' : 'hidden'} card-slider-container`}><Card {...products[mobileIndex]}/></div>

        <div className="slider-info-flex">
            <p>{mobileIndex + 1} / {products.length}</p>

            <div className="slider-btns-flex">
                <button onClick={() => handleClick('decrease')} disabled={!visible}><BiChevronLeft/></button>
                <button onClick={() => handleClick('increase')} disabled={!visible}><BiChevronRight/></button>
            </div>
        </div>
    
    </div>
     </>
  )
}

export default MobileCardSlider