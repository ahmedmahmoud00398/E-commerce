import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
export default function Letter(){
    return(
        <section className="register flex flex-col items-center text-center px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold">NEWSLETTER</h1>
        <p className="mt-4 font-light max-w-xs">Sign up to receive updates on new products and special offers</p>
        <Label htmlFor="email" className="mt-6 w-full max-w-md">
          EMAIL*
          <Input type="email" placeholder="Enter Your Email" className="mt-2 p-4 border-2 rounded-md w-full" />
        </Label>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <label htmlFor="terms" className="text-sm">Yes, subscribe me to your newsletter.</label>
          </div>
          <button className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-purple-600 hover:text-white border-2 border-white transition duration-300">
            Submit
          </button>
        </div>
      </section>
    );
}