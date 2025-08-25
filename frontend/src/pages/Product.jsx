import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    
    products.map((item)=> {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);   
        return null;
      }
    })
  }

  useEffect(()=>{
    fetchProductData(); 
  },[productId]);

  return productData? (
    <div className='border-t-2 pt-10 transitition-opacity ease-in duration-500 opactiy-100'>
        {/* ------------product data-------------- */}
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
          {/* ------------Product images------------ */}
          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
            <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
              {
                productData.image.map((item, index)=>(
                  <img onClick={()=> setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shink-0 cursor-pointer' alt="" />
                ))
              }
            </div>
            <div className='w-full sm:w-80%'>
                <img className='w-full h-auto' src={image} alt="" />
            </div>
          </div>
           
          {/* ------------Product info------------ */}
          <div className='flex-1'>
              <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1> 
              <div className='flex items-center gap-1 mt-2'>
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                <p className='pl-2'>(122)</p>
              </div>
              <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
              <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
              <div className='flex flex-col gap-4 my-8'>
                  <p>Select Size</p>
                  <div className='flex gap-2'>
                    {productData.sizes.map((item, index)=>(
                      <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? `border-orange-500`:''}`} key={index}>{item}</button>
                    ))}
                  </div>
              </div>
              <button onClick={()=>addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
              <hr className='mt-8 sm:w-4/5'/>
              <div>
                <p>100% Original Product.</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Easy return and exchange policy within 7 days</p>
              </div>
          </div>
        </div>

        {/* ------------ DESCRIPTION AND REVIEW SECTION ------------ */}
        <div className='mt-20'>
          <div className='flex'>
            <b className='border px-5 py-3 text-sm'>Description</b>
            <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
          </div>
          <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
            <p>Welcome to [Your Brand Name], your premier destination for curated, on-trend fashion. We are dedicated to scouring the globe and the runways to bring you the season's most essential looks, from bold statement pieces to the perfect everyday essentials. Our expertly edited collection is constantly refreshed, ensuring you have immediate access to the styles that are defining the moment, all in one place.</p>
            <p>We believe that fashion is a powerful form of self-expression and that everyone deserves to feel confident and current. That’s why we go beyond just selling clothes; we provide style inspiration and effortless outfitting to seamlessly integrate the latest trends into your unique wardrobe. Our mission is to empower you to embrace what’s new, now, and next with ease and authenticity.</p>
          </div>
        </div>

        {/* ------------ DISPLAY RELATED PRODUCTS ------------ */}
        <RelatedProducts category={productData.category} subcategory={productData.subcategory}/>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product