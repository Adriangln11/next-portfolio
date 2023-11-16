import { motion } from 'framer-motion'
const Banner = () => {
  return (
    <section
      id='home'
      className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className='text-lg font-titleFont tracking-wide text-textLight'
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col text-textGreen'
      >
        Adrian Diaz.
        <span className='text-textLight mt-2 lgl:mt-4'>
          I{"'"}m a{' '}
          <strong className='text-textGreen font-titleFont font-semibold'>
            Back-End
          </strong>{' '}
          Developer.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className='text-base md:max-w-[650px] text-textDark font-medium'
      >
        +3 years of experience developing in JavaScript, focused on building
        secure, scalable Back-End applications and services, built with best
        practices.
      </motion.p>
      <a href='/assets/AdrianDiaz.pdf' target='_blank'>
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className='w-52 h-14 text-sm font-titleFont border-textGreen border-2 text-textLight tracking-wide hover:bg-hoverColor hover:text-bodyColor duration-300'
        >
          Download CV
        </motion.button>
      </a>
    </section>
  )
}

export default Banner
