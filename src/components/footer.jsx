import footer from '../../public/footer.png';
import facebook from '../../public/facebook.png';
import instagram from '../../public/instagram.png';
import twitter from '../../public/twitter.png'


function Footer(){
    return (
     <footer className="h-40 grid grid-cols-1 lg:grid-cols-3 items-center mx-auto container">
     <div className='hidden md:block lg:block'>
        <img src={footer} alt="logo image" />
     </div>
     <div className='flex items-center justify-center gap-4'>
        <img src={facebook} alt="facebook logo" className='transition-all hover:scale-50' />
        <img src={instagram} alt="instagram logo" className='transition-all hover:scale-50' />
        <img src={twitter} alt="twitter logo" className='transition-all hover:scale-50' />
     </div>
       <p className='text-2xl lg:text-xl hidden md:block lg:block'>copywright 2020 Bella Onojie.com</p>
       <p className='text-center hidden lg:hidden'>just type whats on your mind and we'll</p>
     </footer>
    );
};

export default Footer;