import { FaHome, FaQrcode, FaShoppingBag, FaThLarge, FaUser } from "react-icons/fa";

const BottomNavBar = () => (
  <nav className="fixed bottom-0 left-0 w-full bg-black flex justify-between items-center h-20 z-50 px-2">
    {/* Home */}
    <div className="flex flex-col items-center flex-1">
      <FaHome className="text-2xl mb-1 text-cyan-500" />
      <span className="text-xs text-white">Home</span>
    </div>
    {/* Dashboard */}
    <div className="flex flex-col items-center flex-1">
      <FaThLarge className="text-2xl mb-1 text-white" />
      <span className="text-xs text-white">Dashboard</span>
    </div>
    {/* Center QR Button */}
    <div className="relative flex-1 flex justify-center">
      <div className="absolute -top-8 bg-black rounded-full border-4 border-gray-800 w-16 h-16 flex items-center justify-center shadow-lg z-10">
        <FaQrcode className="text-3xl text-white" />
      </div>
    </div>
    {/* Shop */}
    <div className="flex flex-col items-center flex-1">
      <FaShoppingBag className="text-2xl mb-1 text-white" />
      <span className="text-xs text-white">Shop</span>
    </div>
    {/* Profile */}
    <div className="flex flex-col items-center flex-1">
      <FaUser className="text-2xl mb-1 text-white" />
      <span className="text-xs text-white">Profile</span>
    </div>
  </nav>
);

export default BottomNavBar; 