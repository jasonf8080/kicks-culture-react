import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import MobileCardSlider from './MobileCardSlider';
import Loader from './Loader';

const RelatedProducts = () => {
    const {relatedProducts, productLoading} = useSelector((store) => store.filter);
    const [mobileIndex, setMobileIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    if(productLoading){
      return <Loader classProp={'medium-loader'}/>
    }

  return (
    <>
    <div className='container related-products'>
        <div className="underline"></div>
         <h1 className="heading">Related Products</h1>
        {relatedProducts.length > 0 && 
            <div className="cards-grid-container">
            {relatedProducts.map((item, index) => {
                 return <Card key={index} {...item}/>
            })}
            </div>
        }
    </div>


      
    <div className="container mobile-related-products">
      <MobileCardSlider heading={'Related Products'}products={relatedProducts} mobileIndex={mobileIndex} setMobileIndex={setMobileIndex} visible={visible} setVisible={setVisible}/>
    </div>
   
    

    </>
  )
}

export default RelatedProducts