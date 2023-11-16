import Link from 'next/link'

const Contact = () => {
  return (
    <section
      id='contact'
      className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'
    >
      <p className='font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide'>
        04. What’s Next?
      </p>
      <h2 className='font-titleFont text-5xl font-semibold'>Get In Touch</h2>
      <p className='max-w-[600px] text-center text-textDark'>
        If you have a project in mind that you would like to build, send me a
        message to get it started.
      </p>

      <a href='mailto:cesarqqu@gmail.com'>
        <button className='w-40 h-14 border-2 border-textGreen mt-6 font-titleFont text-sm text-textLight tracking-wider  hover:bg-hoverColor hover:text-bodyColor duration-300'>
          Contact
        </button>
      </a>
    </section>
  )
}

export default Contact
