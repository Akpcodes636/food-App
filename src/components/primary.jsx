import Image from '/Users/macbook/foodify/public/Image.png';

const Primary = () => {
  return (
    <section className="border-b-2 lg:w-70 mx-auto">
      <div className='flex items-center justify-center container'>
        <img src={Image} alt="An image of the hero section" className='-mt-10 lg:-mt-60 -ml-20 lg:-ml-28'/>
      </div>
      <p className='text-center text-xl lg:hidden pb-8'>How the app works</p>
    </section>
  );
};

export default Primary;
