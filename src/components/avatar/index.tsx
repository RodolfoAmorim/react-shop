export function Avatar() {
  return (
    <>
      <img
        src='/images/users/default.svg'
        className='w-12 rounded-full outline outline-2 outline-offset-2 outline-sky-300/20 xl:w-10'
      />
      <p className='text-lg leading-relaxed tracking-wider font-normal text-sky-50/80 xl:text-base xl:font-light xl:tracking-widest'>
        Login
      </p>
    </>
  )
}
