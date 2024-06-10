import Img3 from '../../public/Img3.png';

function Secondary(){
    return (
    <section className='md-72'>
      <div className=''>
      <h1 className='text-center font-semi-bold text-2xl hidden lg:block'>How the app works</h1>
    <div className='grid grid-cols-1 place-items-center lg:grid-cols-2 my-20 justify-items-center'>

      <div className='-mt-5 lg:-mt-24 hidden lg:block'>
        <img src={Img3} alt="" />
      </div>

     <div className=''>
     <p className='text-center lg:text-left text-orange-600 text-2xl font-bold mb-4'>Create an account</p> 
     <h1 className='text-center lg:text-left font-bold text-2xl leading-normal mb-8 lg:hidden'>Create/login to <br /> an existing <br /> account to get <br /> started</h1>
     <h1 className='text-center lg:text-left text-3xl leading-normal mb-8 font-bold hidden lg:block'>Create/login to an existing <br /> account to get started</h1>
     <p className='text-center lg:text-left text-slate-600 font-light hidden lg:block'>An account is created with your  email  <br /> and desired password</p>
     <p className='text-center lg:text-left text-slate-600 font-light lg:hidden'>An account is <br /> created with your <br />  email and desired <br /> password</p>
     </div>

      <div className='-mt-10 lg:-mt-24 lg:hidden'>
        <img src={Img3} alt="" />
      </div> 

    </div>
      </div>
    </section>
    )
}

export default Secondary;
