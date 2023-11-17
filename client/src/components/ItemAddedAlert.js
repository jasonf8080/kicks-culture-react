import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import { FaTimes } from 'react-icons/fa'
import { clearItemAdded } from '../features/cartSlice'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/css-wrappers/Alert'

const ItemAddedModal = () => {
    const dispatch = useDispatch();
    const {itemAddedLoading, itemAdded} = useSelector((store) => store.cart)
    
    useEffect(() => {
        if(itemAdded){
            setTimeout(() => {
                dispatch(clearItemAdded())
            }, 5000)
        }

    }, [itemAdded])
   
  return (
    <Wrapper>
        <div className='item-added-alert'>
            {itemAddedLoading ? <Loader classProp={'small-loader'}/>  
            : 
            <>
            <div className='alert-top'>
                <p>Item Added to Cart</p>
                <span onClick={() => dispatch(clearItemAdded())}><FaTimes/></span>
            </div>

            <div className="alert-timer"></div>

            <Link to='/cart'>
            <div className='item-added-alert-container'>
                <div>
                    <img src={`../images/sneaker${itemAdded.imageID}.png`} alt='/'/>
                </div>

                <div className="item-added-alert-content">
                    <p className='item-added-alert-title' style={{fontWeight: 'bold'}}>{itemAdded.title}</p>
                    <p><span>Size: </span>{itemAdded.size}</p>
                    <p>${itemAdded.price}</p>
                    <p><span>QTY: {itemAdded.amount}</span></p>
                </div>
            </div>
            </Link>
            </>
            }
        </div>
    </Wrapper>
  )
}

export default ItemAddedModal