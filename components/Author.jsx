import React from 'react'
import Image from 'next/image'

const Author = ({author}) => {
    return (
        <div className='text-center mt-20 mb-20 p-12 relative rounded-lg bg-black bg-opacity-20'>
           <div className='absolute left-0 right-0 -top-10'>
            <Image 
            alt={author.name} 
            unoptimized
            height="80px"
            width='70px'
            className='align-middle rounded-full'
            src={author.photo.url}
            />      
           </div>
           <h3 className='text-white mt-2 text-xl font-bold'>{author.name}</h3>
            <p className='text-white text-lg' >{author.bio}</p>
        </div>
    )
}

export default Author
