import { tattlerImg, chatImg, noorShop } from '@/public/assets'
import Image from 'next/image'
import { AiOutlineYoutube } from 'react-icons/ai'
import { TbBrandGithub } from 'react-icons/tb'
import SectionTitle from './SectionTitle'
import { RxOpenInNewWindow } from 'react-icons/rx'

const Projects = () => {
  return (
    <section id='project' className='max-w-container mx-auto lgl:px-20 py-24'>
      <SectionTitle title='Some Things I have Built' titleNo='03' />
      {/* ============ project One Start here ================ */}
      <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
        <div className='flex flex-col xl:flex-row gap-6'>
          <a
            className='w-full xl:w-1/2 h-auto relative group'
            href='https://tattler-api.onrender.com/'
            target='_blank'
          >
            <div>
              <Image
                className='w-full h-full object-contain'
                src={tattlerImg}
                alt='tattler project image'
              />
              <div className='absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300'></div>
            </div>
          </a>
          <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
            <div>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                Featured Project
              </p>
              <h3 className='text-2xl font-bold'>Tattler API</h3>
            </div>
            <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
              Tattler API used to upload, edit, and delete information about
              restaurants and locals registered on Tattler services. This API
              use <span className='text-textGreen'>Passport </span> for
              authentication through login/signup, and save info in{' '}
              <span className='text-textGreen'>MongoDB</span>.
            </p>
            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
              <li>JavaScript</li>
              <li>Express</li>
              <li>Passport</li>
              <li>Mongo</li>
              <li>Swagger</li>
            </ul>
            <div className='text-2xl flex gap-4'>
              <a
                className='hover:text-textGreen duration-300'
                href='https://github.com/Adriangln11/tattler'
                target='_blank'
              >
                <TbBrandGithub />
              </a>

              <a
                className='hover:text-textGreen duration-300'
                href='https://tattler-api.onrender.com/'
                target='_blank'
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className='flex flex-col xl:flex-row-reverse gap-6'>
          <a
            className='w-full xl:w-1/2 h-auto relative group'
            href='https://node-chat-lakw.onrender.com/'
            target='_blank'
          >
            <div>
              <Image
                className='w-full h-full object-contain'
                src={chatImg}
                alt='chat node websockets image'
              />
              <div className='absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300'></div>
            </div>
          </a>
          <div className='w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10'>
            <div>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                Featured Project
              </p>
              <h3 className='text-2xl font-bold'>Chat Online</h3>
            </div>
            <p className='text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16'>
              Chat online to test with{' '}
              <span className='text-textGreen'>Web Sockets </span> protocol, use
              passport login/signup authentication.
            </p>
            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
              <li>JavaScript</li>
              <li>Express</li>
              <li>Passport</li>
              <li>MongoDB</li>
              <li>Web Sockets</li>
            </ul>
            <div className='text-2xl flex gap-4'>
              <a
                className='hover:text-textGreen duration-300'
                href='https://github.com/Adriangln11/node-chat'
                target='_blank'
              >
                <TbBrandGithub />
              </a>

              <a
                className='hover:text-textGreen duration-300'
                href='https://node-chat-lakw.onrender.com/'
                target='_blank'
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className='flex flex-col xl:flex-row gap-6'>
          <a
            className='w-full xl:w-1/2 h-auto relative group'
            href='https://github.com/Adriangln11/coder-shop'
            target='_blank'
          >
            <div>
              <Image
                className='w-full h-full object-contain'
                src={noorShop}
                alt='noorShop'
              />
              <div className='absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300'></div>
            </div>
          </a>
          <div className='w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10'>
            <div>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                Featured Project
              </p>
              <h3 className='text-2xl font-bold'>CoderShop</h3>
            </div>
            <p className='text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md'>
              Simple E-Commerce made with Js vanilla{' '}
            </p>
            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
              <li>JavaScript</li>
            </ul>
            <div className='text-2xl flex gap-4'>
              <a
                className='hover:text-textGreen duration-300'
                href='https://github.com/Adriangln11/coder-shop'
                target='_blank'
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  )
}

export default Projects
