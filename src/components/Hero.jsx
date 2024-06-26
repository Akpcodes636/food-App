import Image from '../../public/Image.png'

function Hero(){
    return (
      <section className='pt-6  md:pt-24 md:px-8 lg:pt-20 bg-desktop lg:h-screen'>
         <div className='container mx-auto grid grid-cols-1'>
            <div className='z-100'>
                <p className='text-center font-bold mb-6 text-slate-400 md:text-black lg:text-white'>Food app</p>
                 <h1 className='text-center font-semibold text-3xl mb-4 md:hidden lg:hidden'>Why stay hungry <br /> when you can order <br /> from bella Onojie </h1>
                 <h1 className='hidden text-center text-6xl md:text-5xl font-bold lg:text-white md:text-black leading-normal md:leading-normal md:block mb-8 lg:block'>Why stay hungry when <br /> you can order from bella Onojie</h1>
                 <p className='text-center text-2xl font-light text-slate-500 mb-12 md:hidden lg:hidden'>Download the bella onojie's <br /> food app now on</p>
                 <p className='text-center text-2xl font-light lg:text-white md:text-black mb-12 md:block hidden'>Download the bella onojie's food app now on</p>
                 <div className='flex flex-col items-center lg:w-full md:flex-row md:items-center md:justify-center'>
                  <a href="#" className='inline-block font-bold text-2xl px-16 py-5 md:px-14 md:py-4 bg-orange-600 text-center rounded-full text-white hover:bg-orange-700 md:mr-3 my-5'>Playstore</a>
                  <a href="#" className='inline-block font-bold text-2xl px-16 py-5 md:px-14 md:py-4 border-2 border-orange-600 text-center text-orange-500 lg:border-white lg:text-white rounded-full hover:bg-orange-700'>App store</a>
                 </div>
            </div>
            {/* <div className='flex items-center justify-center py-24 mb-12 lg:mb-0 -mt-56 md:-mt-64 lg:-border-b-2 lg:border-slate-900'>
                <img src={Image} alt="Photo of the app on the hero section" className='absolute -bottom-full right-12 md:top-96 md:right-24 lg:top-80 lg:left-20' />
            </div> */}
         </div>
      </section>
    );
}

export default Hero;