import Image from 'next/image';
export default function Shop() {
    return(
         <section className="bg-neutral-800 py-16 px-4 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase mb-8 text-center md:text-left">SHOP BY CATEGORY</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {[
            { src: '/10077.jpg', label: 'Consoles' },
            { src: '/10043.jpg', label: 'Accessories' },
            { src: '/10061.jpg', label: 'Controllers' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <Image src={item.src} alt={item.label} width={300} height={300} className="rounded-2xl hover:scale-105 transition-transform duration-500" />
              <h2 className="text-2xl mt-4">{item.label}</h2>
            </div>
          ))}
        </div>
      </section>
    );
}