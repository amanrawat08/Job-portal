import React from 'react'

const Banner = ({data}) => {
  return (
    <div className="banner  bg-[url('/breadcrumb-bg.png')] bg-cover bg-center">
        <div className='max-w-7xl mx-auto  px-8 sm:px-6 lg:px-8 py-12 '>
            <div className='text-center'>
               <h1 className='text-3xl font-semibold text-gray-900'> {data}</h1> 
            </div>
        </div>
      
    </div>
  )
}

export default Banner
