import { motion } from "framer-motion";
export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex items-center justify-between px-8 py-6 shadow-md bg-white sticky top-0 z-50"
    >
      {/* Logo */}
      <div className="text-3xl font-bold text-blue-600">MyLogo</div>

      {/* Navigation Menu */}
      <ul className="hidden md:flex gap-10 text-lg text-gray-700 font-semibold">
        <li className="hover:text-blue-600 transition-colors cursor-pointer">
          Home
        </li>
        <li className="hover:text-blue-600 transition-colors cursor-pointer">
          About
        </li>
        <li className="hover:text-blue-600 transition-colors cursor-pointer">
          Galeri
        </li>
        <li className="hover:text-blue-600 transition-colors cursor-pointer">
          Contact
        </li>
      </ul>

      {/* Contact Us Button */}
      <div className="hidden md:block">
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-5 py-3 rounded-xl shadow">
          Contact Us
        </button>
      </div>

      {/* Mobile Menu Button (Optional) */}
      <div className="md:hidden">
        <button className="border border-gray-300 px-4 py-3 rounded-md text-base">
          Menu
        </button>
      </div>
    </motion.nav>
  );
}
