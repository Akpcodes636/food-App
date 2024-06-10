import img2 from '../../public/img2.png';




function Tertary(){
    return (
        <section className='-mt-52'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='hidden lg:block'>
                    <img src={img2} alt="" />
                </div>
                <div className='mt-80'>
                 <p className='text-orange-600 text-2xl font-bold mb-4'>Checkout</p>
                 <h1 className='font-bold text-3xl leading-normal mb-4'>When you done check out <br /> and get it delivered.</h1>
                 <p className='text-slate-500'>When you done check out and get it <br /> delivered with ease <b /> </p>
                </div>
                <div className=' lg:hidden'>
                    <img src={img2} alt="" />
                </div>
            </div>
        </section>
    )
}
export default Tertary;