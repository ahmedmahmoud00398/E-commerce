import { Carousel } from '@/components/ui/carousel';
import BestSellers from '@/components/products';
import UpgradeyourGear from '@/components/products2';
import TrendingGames from '@/components/products3';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Shop from '@/components/ShopCa';
import SpendSave from '@/components/SpenSave';
import Letter from '@/components/Letter';
import ImageSection from '@/components/ImageSection';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Navbar */}
      <Navbar/>

      {/* Hero Section */}
     <Hero/>

      {/* Carousel */}
      <Carousel>
        <BestSellers />
      </Carousel>

      {/* Shop by Category */}
     <Shop/>

      <Carousel>
        <UpgradeyourGear />
      </Carousel>

      {/* Spend & Save Section */}
      <SpendSave/>

      <Carousel>
        <TrendingGames />
      </Carousel>

      {/* Newsletter */}
     <Letter/>
      {/* Games Image Section */}
      <ImageSection />
      {/* Footer */}
      <Footer/>
    </div>
  );
}

