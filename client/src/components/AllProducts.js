import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import Loader from './Loader'
import EmptyProducts from './EmptyProducts'
import {PiSneaker} from 'react-icons/pi'

const AllProducts = () => {
     const {loading, products} = useSelector((store) => store.filter)

    if(loading){
        return <Loader classProp={'medium-loader'}/>
    }

    if(products.length > 0){
        return (
             <div className="cards-grid-container">
                {products.map((item, index) => {
                    return <Card key={index} {...item}/>
                })}
            </div>
        )
    } else {
        return <EmptyProducts icon={<PiSneaker/>} message='No Products Matched Your Search Criteria'/>
    }
    
}

export default AllProducts