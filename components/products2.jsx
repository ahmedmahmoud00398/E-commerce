

import Image from 'next/image'
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '@/components/ui/carousel'

const products = [
  {
    id: 1,
    name: 'X-2 Wireless Mouse',
    price: 24.99,
    image: '/10007.jpg',
  },
  {
    id: 2,
    name: 'Blaze Wireless Mouse',
    price: 24.99,
    image: '/100110.jpg',
  },
  {
    id: 3,
    name: 'Spartan Mechanical Keyboard',
    oldPrice:44.99,
    price: 40.49,
    image:'/10008.jpg',
    sale: true,
  },
  {
    id: 4,
    name: 'CO-21 Mechanical Keyboard',
    price: 44.99,
    image: '/100100.jpg',
  },
  {
    id: 5,
    name: 'L503 Headset',
    oldPrice: 29.99,
    price: 26.99,
    image: '/10016.jpg',
    sale:true,
  },
  {
    id: 6,
    name: 'Echo Headset',
    price: 39.99,
    image: '/10047.jpg',
  },
  {
    id: 7,
    name: 'Impact Gaming Chair',
    price: 159.99,
    image: '/10017.jpg',
  },
  {
    id:8,
    name:'Mach Gaming Chair',
    oldPrice:129.99,
    price:116.99,
    image:'/10018.jpg',
    sale:true,
  },
];

export default function UpgradeyourGear() {
  return (
    <section className="bg-neutral-950 py-16 px-6 md:px-16 pt-30">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl font-bold text-white uppercase">Upgrade your gear</h2>
        <button className="bg-white text-purple-700 font-semibold px-6 py-2 rounded-full hover:bg-purple-600 transition hover:text-white delay-10 duration-300 border-2 border-white">
          View All
        </button>
      </div>

      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="bg-transparent-6 rounded-2xl flex flex-col items-center text-center relative">
                  {product.sale && (
                    <span className="absolute top-4 left-4 bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                      SALE
                    </span>
                  )}
                  <div className="mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="object-cover rounded-xl hover:scale-120 delay-10 duration-300 ease-in-out"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
                  <div className="mb-4">
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through mr-2">${product.oldPrice.toFixed(2)}</span>
                    )}
                    <span className="text-white font-bold">${product.price.toFixed(2)}</span>
                  </div>
                  <button className="bg-purple-600  text-white font-semibold px-6 py-2 rounded-full  hover:bg-white hover:text-purple-500 transition duration-300 delay-10">
                    Add to Cart
                  </button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full border bg-neutral-950 text-white " />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full border bg-neutral-950 text-white " />
        </Carousel>
      </div>
    </section>
  )
}
