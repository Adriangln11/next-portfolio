import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const LeftSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textGreen'>
      <div className='flex flex-col gap-4'>
        <a href='https://github.com/Adriangln11' target='_blank'>
          <span className='w-10 h-10 text-xl text-textLight bg-bodyColor border-textGreen border-2 inline-flex items-center justify-center  hover:bg-textGreen hover:text-bodyColor cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <FaGithub />
          </span>
        </a>

        <a
          href='https://www.linkedin.com/in/adri%C3%A1n-d%C3%ADaz-08738922a/'
          target='_blank'
        >
          <span className='w-10 h-10 text-xl text-textLight bg-bodyColor border-textGreen border-2 inline-flex items-center justify-center  hover:bg-textGreen hover:text-bodyColor cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <FaLinkedinIn />
          </span>
        </a>
      </div>
      <div className='w-[2px] h-32 bg-textDark'></div>
    </div>
  )
}

export default LeftSide
