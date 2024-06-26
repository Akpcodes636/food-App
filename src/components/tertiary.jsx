
function Tertiary(){
    return (
     <section className="bg-blue-950 bg-desktops">
     <div className="mx-auto container h-auto p-20">
      <h1 className="text-center text-4xl md:px-10 text-white font-medium mb-8">Download the app now.</h1>
      <p className="text-center hidden lg:block text-white text-2xl">Available on your favorite store. Start your premium experience now</p>
      <p className="text-center text-xl text-white md:px-20 font-thin lg:hidden">Most calenders are designed for teams</p>
       <div className="mt-10 flex items-center justify-center gap-2">
        <a href="#" className="px-3 py-4 md:px-6 md:py-4 lg:px-10 lg:py-5 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-all ease-in-out">Buy now</a>
        <a href="#" className="px-3 py-4 md:px-10 md:py-4 lg:px-8 lg:py-5 border border-white text-white rounded-md hover:bg-orange-700 transition-all ease-in-out">Try for free</a>
        {/* <a href="#" className="lg:hidden px-10 py-4 bg-orange-600">Playstore</a>
        <a href="#" className="lg:hidden px-10 py-4 border-2 border-white">App store</a> */}
       </div>
     </div>
     </section>
    )
};

export default Tertiary;