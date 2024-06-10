import Image from '../../public/Image.png'

function Hero(){
    return (
   <section className='bg-desktop -z-50 relative'>
    <div className=' h-screen w-full py-4 lg:py-20 flex items-start justify-center'>
        {/* text content */}
        <div className='text-center'>
        <p className='text-slate-500 mb-4 lg:text-white  lg:text-2xl '>Food app</p>
        <h1 className='text-5xl text-white leading-tight font-bold hidden md:hidden lg:block mb-4'>Why stay hungry when <br /> you can order food from Bella Onoije</h1>
        <h1 className='text-3xl text-black leading-tight font-bold lg:hidden mb-4'>Why stay hungry <br /> when you can order <br /> food from Bella Onoije</h1>
        <p className='mb-12 text-xl lg:text-white text-black hidden lg:block'>Download the bella onoije&apos; food app now on</p>
        <p className='mb-12 text-xl lg:text-white text-black lg:hidden'>Download the bella onoije&apos; <br /> food app now on</p>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-4 z-50'>
        <a href="#" className='px-16 py-5 lg:px-20 lg:py-5 shadow-lg bg-orange-600  text-white font-medium rounded-full transition-all ease-in-out hover:text-black'>Playstore</a>
        <a href="#" className='px-16 py-5 lg:inline-block shadow-lg lg:px-20 lg:py-5 bg-transparent border-2 border-orange-600 text-black lg:text-white font-medium rounded-full transition-all ease-in-out hover:text-black'>App store</a>
        </div>
        { <div className='lg:-mt-24 z-10 px-5 image-section'>
            <img src={Image} alt="Image of the apps look" />
        <h1 className='lg:hidden text-2xl'>How the app works</h1>
        </div> }
        </div>
        {/* image content */}
        <div>

        </div>
    </div>
   </section>
    );
}

export default Hero;