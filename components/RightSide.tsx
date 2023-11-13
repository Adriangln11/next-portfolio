import React from 'react'

const RightSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-6 text-textLight'>
      <a href='mailto:cesarqqu@gmail.com'>
        <p className='my-10 text-sm rotate-90 w-72 tracking-widest text-textLight hover:text-textGreen hover:-translate-y-2 transition-all duration-300'>
          cesarqqu@gmail.com
        </p>
      </a>
      <span className='w-[2px] h-32 bg-textDark inline-flex'></span>
    </div>
  )
}

export default RightSide
