import Img3 from '../../public/Img3.png';
import img2 from '../../public/img2.png';
import Img  from '../../public/Img.png';

function Secondary(){
    return (
      <section className='pt-12 px-3 md:pt-96 lg:pt-20'>
      <div className='container mx-auto'>
        <span className='text-center text-3xl hidden lg:block'>How the app works</span>
    
        <div className='container grid grid-cols-1 lg:grid-cols-2 items-center mx-auto lg:gap-8'>
          {/* <!-- Section 1 --> */}
          <div className='order-2 lg:order-1'>
            <img src={Img} alt="photo of the image" className='w-full' />
          </div>
    
          <div className='order-1 lg:order-2 px-20 lg:px-10'>
            <p className='text-center text-orange-600 font-bold text-xl mb-4 lg:text-left'>Create an account</p>
            <h3 className='text-center font-semibold text-2xl lg:text-3xl mb-8 lg:text-left'>Create/login to an existing account to get started</h3>
            <p className='text-center px-5 text-slate-500 lg:text-left lg:px-0 text-sm lg:text-xl'>An account is created with your email <br /> and a desired password</p>
          </div>
    
          {/* <!-- Section 2 --> */}
          <div className='order-3 lg:order-3 px-2 lg:px-10'>
            <p className='text-center text-orange-600 font-bold text-xl mb-4 hidden lg:block lg:text-left'>Explore varieties</p>
            <p className='text-center text-orange-600 font-bold text-xl mb-4 lg:hidden'>Explore while shopping</p>
            <h3 className='px-20 lg:px-0 text-center font-semibold text-2xl lg:text-3xl mb-8 lg:text-left'>Shop for your favorite meals as e dey hot.</h3>
            <p className='px-28 lg:px-0 text-center text-slate-500 text-sm lg:text-xl lg:text-left'>Shop for your favorite meals or drinks and enjoy while doing it</p>
          </div>
          <div className='order-4 lg:order-4'>
            <img src={Img} alt="photo of the image" className='w-full' />
          </div>
    
          {/* <!-- Section 3 --> */}
          <div className='order-6 lg:order-5'>
            <img src={img2} alt="photo of the image" className='w-full' />
          </div>
          <div className='order-5 lg:order-6 px-24 lg:px-10'>
            <p className='text-center text-orange-600 font-bold text-xl mb-4 lg:text-left'>Checkout</p>
            <h3 className='text-center font-semibold text-2xl lg:text-3xl mb-8 lg:text-left'>When you done check out and get it delivered</h3>
            <p className='px-8 lg:px-0 text-center text-slate-500 text-sm lg:text-xl lg:text-left'>When you’re done, check out and get it delivered with ease.</p>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Secondary;
