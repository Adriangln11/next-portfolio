import { TbBrandGithub } from 'react-icons/tb'
import { SlSocialYoutube } from 'react-icons/sl'
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from 'react-icons/sl'

const Footer = () => {
  return (
    <div>
      <div className='inline-flex xl:hidden items-center justify-center w-full py-6 gap-4'>
        <a href='https://github.com/Adriangln11' target='_blank'>
          <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <TbBrandGithub />
          </span>
        </a>
        <a
          href='https://www.linkedin.com/in/adri%C3%A1n-d%C3%ADaz-08738922a/'
          target='_blank'
        >
          <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <SlSocialLinkedin />
          </span>
        </a>
      </div>

      <div className='bg-bodyColor text-center text-textLight text-xs py-3'>
        Design inspired by{' '}
        <a href='https://github.com/bchiang7' className='text-textGreen'>
          Brittany Chiang
        </a>
      </div>
    </div>
  )
}

export default Footer
