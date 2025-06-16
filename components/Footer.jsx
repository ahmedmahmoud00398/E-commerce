import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12">
      {/* المحتوى العلوي */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* الشعار */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src="/10001.svg" alt="Logo" width={40} height={40} />
            <span className="text-xl font-bold">ARCADE</span>
          </div>
        </div>

        {/* روابط المنتجات */}
        <div>
          <h3 className="font-semibold mb-2">Products</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#">Games</a></li>
            <li><a href="#">Consoles</a></li>
            <li><a href="#">Controllers</a></li>
            <li><a href="#">Accessories</a></li>
          </ul>
        </div>

        {/* معلومات المتجر */}
        <div>
          <h3 className="font-semibold mb-2">Store</h3>
          <p className="text-sm">500 Terry Francine Street<br />San Francisco, CA 94158</p>
          <p className="text-sm mt-2">Mon - Fri: 9am - 9pm</p>
          <p className="text-sm mt-2">info@mysite.com</p>
          <p className="text-sm mt-2">123-456-7890</p>
        </div>

        {/* السياسات */}
        <div>
          <h3 className="font-semibold mb-2">Policy</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
      </div>

      {/* خط فاصل */}
      <hr className="my-8 border-gray-700" />

      {/* الدفع ووسائل التواصل */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* الدفع */}
        <div className="text-sm">
          <p className="font-semibold mb-2">Payment Methods</p>
          <div className="flex gap-2 flex-wrap ">
            <Image className="me-3" src="/10030.png" alt="Visa" width={50} height={25} />
            <Image className="me-3" src="/10031.png" alt="Mastercard" width={50} height={25} />
            <Image className="me-3" src="/10032.png" alt="Amex" width={50} height={25} />
            <Image className="me-3" src="/10074.png" alt="PayPal" width={50} height={25} />
            <Image className="me-3" src="/10034.png" alt="Discover" width={50} height={25} />
            {/* يمكنك إضافة باقي الأيقونات بنفس الطريقة */}
          </div>
        </div>

        {/* وسائل التواصل */}
        <div className="text-center md:text-right">
          <p className="font-semibold mb-2">Join the Community</p>
          <div className="flex justify-center md:justify-end gap-4 text-xl">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaTiktok /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
