import Image from 'next/image'
import SectionTitle from './SectionTitle'
import { AiFillThunderbolt } from 'react-icons/ai'
import {
  BiLogoJavascript,
  BiCodeCurly,
  BiLogoReact,
  BiSolidExtension,
  BiLogoJava,
  BiLogoTypescript,
  BiLogoPostgresql,
} from 'react-icons/bi'
import {
  FaTools,
  FaCss3,
  FaNodeJs,
  FaGithub,
  FaDocker,
  FaPython,
} from 'react-icons/fa'
import { SiExpress, SiNestjs, SiSpring, SiTailwindcss } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const About = () => {
  return (
    <section
      id='about'
      className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'
    >
      <SectionTitle title='About Me' titleNo='01' />
      <div className='flex flex-col lgl:flex-col gap-16'>
        <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
          <p>
            My name is Adrian, currently, I am a computer engineering student at
            the University of Guadalajara. I have participated in programs such
            as Oracle Next Education, Digital NAO Full Stack CORE, and
            CODERHOUSE.
          </p>
          <p>
            I have developed web applications, landing pages, desktop
            applications, and API services.
          </p>
          <p>
            I am interested in participating in projects that allow me to grow
            professionally, where I can develop new skills, and collaborate with
            teams sharing a common goal.
          </p>
          <p className='text-textLight text-lg'>
            Here are a few technologies I have been working with recently:
          </p>
        </div>
        <div className=' text-sm font-titleFont grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-6 '>
          <div className=' h-100 w-100 grid  place-items-center  content-start'>
            <span className='w-20 h-20 text-textDark grid place-content-center text-5xl m-3'>
              <BiCodeCurly />{' '}
            </span>
            <h4 className='text-textLeight text-center text-2xl'>Languages</h4>
            <ul className='grid grid-cols-2 my-10 place-items-stretch'>
              <li>
                <span className='text-textDark flex place-items-center my-3  justify-start'>
                  <BiLogoJavascript className='text-2xl text-textGreen mx-3 ' />
                  JavaScript (ES6)
                </span>
              </li>
              <li>
                <span className='text-textDark flex place-items-center my-3  justify-start'>
                  <FaPython className='text-2xl text-textGreen mx-3 ' />
                  Python
                </span>
              </li>
              <li>
                <span className='text-textDark flex place-items-center my-3 justify-start'>
                  <BiLogoJava className='text-2xl text-textGreen mx-3' />
                  Java
                </span>
              </li>
              <li>
                <span className='text-textDark flex place-items-center my-3  justify-start'>
                  <BiLogoTypescript className='text-2xl  text-textGreen mx-3' />
                  TypeScript
                </span>
              </li>
              <li>
                <span className='text-textDark flex place-items-center my-3  justify-start'>
                  <BiLogoPostgresql className='text-2xl  text-textGreen mx-3' />
                  SQL
                </span>
              </li>
              <li>
                <span className='text-textDark flex place-items-center my-3 justify-start'>
                  <FaCss3 className='text-2xl  text-textGreen mx-3' />
                  CSS
                </span>
              </li>
            </ul>
          </div>
          <div className=' h-100 w-100 grid  content-start place-items-center  '>
            <span className='w-20 h-20 text-textDark grid place-content-center text-5xl m-3'>
              <BiSolidExtension />{' '}
            </span>
            <h4 className='text-textLeight text-center text-2xl'>Frameworks</h4>
            <ul className='grid grid-cols-2 my-10 place-items-stretch'>
              <li>
                <span className='text-textDark flex place-items-center my-3  justify-start'>
                  <BiLogoReact className='text-2xl text-textGreen mx-3 ' />
                  React
                </span>
              </li>
              <li>
                <span className='text-textDark flex place-items-center my-3  justify-start'>
                  <SiExpress className='text-2xl text-textGreen mx-3' />
                  Express
                </span>
              </li>
              <li>
                <span className='text-textDark flex place-items-center my-3  justify-start'>
                  <SiNestjs className='text-2xl  text-textGreen mx-3' />
                  Nest
                </span>
              </li>
              <li>
                <span className='text-textDark flex place-items-center my-3  justify-start'>
                  <TbBrandNextjs className='text-2xl  text-textGreen mx-3' />
                  Next
                </span>
              </li>
              <li>
                <span className='text-textDark flex place-items-center my-3  justify-start'>
                  <SiSpring className='text-2xl  text-textGreen mx-3' />
                  Spring
                </span>
              </li>
              <li>
                <span className='text-textDark flex place-items-center my-3  justify-start'>
                  <SiTailwindcss className='text-2xl  text-textGreen mx-3' />
                  Tailwind
                </span>
              </li>
            </ul>
          </div>
          <div className=' h-100 w-100 grid place-items-center  content-start'>
            <span className='w-20 h-20 text-textDark grid place-content-center text-5xl m-3'>
              <FaTools />{' '}
            </span>
            <h4 className=' text-center text-2xl'>Tools</h4>
            <ul className='grid grid-cols-2 my-10 place-items-stretch'>
              <li>
                <span className='text-textDark flex place-items-center my-3  justify-start '>
                  <FaGithub className='text-2xl text-textGreen mx-3 ' />
                  GitHub
                </span>
              </li>
              <li>
                <span className='text-textDark flex place-items-center my-3  justify-start'>
                  <FaDocker className='text-2xl text-textGreen mx-3' />
                  Docker
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
