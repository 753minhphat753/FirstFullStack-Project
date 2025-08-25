import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
         <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Founded in 2025, FOREVER was born from a passion for style, creativity, and self-expression. What started as a vision to bring unique pieces into everyday wardrobes has grown into a fashion brand that blends modern trends with timeless elegance. Every design is thoughtfully curated to inspire confidence and help people celebrate their individuality.</p>
            <p>At FOREVER, we believe fashion is more than clothing — it’s a statement of who you are. Our mission is to create high-quality, stylish, and versatile collections that make you feel your best on every occasion. Whether casual or sophisticated, our pieces are designed to empower you to express your true self with confidence and authenticity.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>"Our mission is simple: to empower people to express themselves through fashion. We believe clothes are more than just fabric — they’re a statement, a lifestyle, and a way to tell your story."</p>
         </div>
      </div>

      <div className='text-2xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-6 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quantity Assurance:</b>
              <p className='text-gray-600'>At FOREVER, we take quantity assurance seriously to ensure that every customer receives exactly what they order, without compromise. Our inventory is carefully monitored and managed through strict quality checks, reliable supply processes, and advanced tracking systems. From sourcing to packaging, we maintain consistency and accuracy at every step, so you can trust that the products you love are always available and delivered in the right quantity, every time.</p>
          </div>
          <div className='border px-10 md:px-6 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>At FOREVER, we put convenience at the heart of your shopping experience. From an easy-to-navigate website and seamless checkout process to fast shipping and hassle-free returns, every detail is designed to make fashion more accessible and enjoyable. Whether you’re shopping from home or on the go, we ensure that finding and receiving your perfect style is always simple, quick, and stress-free.</p>
          </div>
          <div className='border px-10 md:px-6 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className='text-gray-600'>At FOREVER, we believe that great fashion deserves equally great service. Our customer support team is dedicated to providing a friendly, responsive, and personalized experience at every step of your journey with us. Whether you need styling advice, help with an order, or assistance with returns, we are here to ensure your shopping experience is smooth, enjoyable, and worry-free.</p>
          </div>
      </div>

      <NewsLetterBox />
        
    </div>
  )
}

export default About