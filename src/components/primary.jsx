import Img3 from '../../public/Img.png';

function Primary(){
return (
  <section className='-mt-56 lg:-mt-72'>
  <div className='place-items-center grid grid-cols-1 lg:grid-cols-2 w-full'>
    <div className=''>
      <p className='text-orange-600 font-bold text-2xl mb-4 text-center lg:text-left hidden lg:block'>Explore varities</p>
      <p className='text-orange-600 font-bold text-2xl mb-4 text-center lg:text-left lg:hidden'>Explore while shopping</p>
      <h1 className='text-3xl font-bold mb-4 text-center lg:text-left hidden lg:block'>Shop for your favorites <br /> meal as e dey hot.</h1>
      <h1 className='text-3xl font-bold mb-4 text-center lg:text-left lg:hidden'>Shop for your <br /> favorites meal <br /> as e dey hot.</h1>
      <p className='leading-normal text-slate-500 text-center lg:text-left hidden lg:block'>Shop for your favorite meals or drinks <br /> and enjoy while doing it.</p>
      <p className='leading-relaxed text-slate-500 text-center lg:text-left lg:hidden'>Shop for your <br /> favorite meals or <br /> drinks and enjoy <br /> while doing it.</p>
    </div>
    <div className=''>
      <img src={Img3} alt="the app photo" className='w-full' />
    </div>
  </div>
</section>

)
}
export default Primary;