import Image from 'next/image';
export default function Hero() {
    return(
         <section className="home bg-fixed bg-center bg-cover relative  flex flex-col-reverse md:flex-row items-center justify-center px-6 py-90 gap-8">
                <div className="bg-purple-500 bg-opacity-90 p-6 md:p-12 rounded-2xl w-full md:w-1/2 text-center md:text-left">
                  <p className="text-lg md:text-2xl uppercase mb-2 md:mb-4">Power up your game</p>
                  <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-6 leading-tight">CYBER KID<br />INFINITE</h1>
                  <p className="mb-4 md:mb-6 text-base md:text-lg">Now Available on PC & Console</p>
                  <button className="bg-white text-purple-500 font-semibold px-6 py-3 rounded-full hover:bg-purple-500 hover:text-white transition duration-300 border-2 border-white">
                    Buy Now
                  </button>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <Image src="/10005.jpg" alt="Cyber Kid" width={500} height={500} className="rounded-2xl object-cover" />
                </div>
              </section>
    );
}