import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Menutup menu jika ada klik di luar area hamburger
  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  // Menambahkan event listener untuk klik luar saat komponen di-mount dan membersihkannya saat komponen di-unmount
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 shadow-md bg-white sticky top-0 z-50">
      {/* Logo */}
      <div className="text-3xl font-bold text-blue-600">MyLogo</div>

      {/* Navigation Menu */}
      <ul className="hidden md:flex gap-10 text-lg text-gray-700 font-semibold mx-auto">
        <li className="hover:text-blue-600 transition-colors cursor-pointer">
          Home
        </li>
        <li className="hover:text-blue-600 transition-colors cursor-pointer">
          About
        </li>
        <li className="hover:text-blue-600 transition-colors cursor-pointer">
          Gallery
        </li>
        <li className="hover:text-blue-600 transition-colors cursor-pointer">
          Contact
        </li>
      </ul>

      {/* Pesan Tiket Button (Desktop) */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-xl shadow transition-shadow"
      >
        Pesan Tiket
      </motion.button>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 hover:text-blue-600 focus:outline-none"
        >
          <svg
            className={`w-8 h-8 ${
              isMenuOpen ? "text-blue-600" : "text-gray-700"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-all ${
          isMenuOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsMenuOpen(false)} // Close the menu if the background is clicked
      >
        <div className="flex justify-center items-center w-full h-full">
          <div className="bg-white p-6 rounded-lg w-4/5">
            <ul className="flex flex-col items-center gap-4">
              <li className="text-xl text-gray-700 hover:text-blue-600 cursor-pointer">
                Home
              </li>
              <li className="text-xl text-gray-700 hover:text-blue-600 cursor-pointer">
                About
              </li>
              <li className="text-xl text-gray-700 hover:text-blue-600 cursor-pointer">
                Gallery
              </li>
              <li className="text-xl text-gray-700 hover:text-blue-600 cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
// Hero component
export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-screen flex flex-col items-center justify-center bg-white text-center px-4 pt-8 pb-20 md:pt-12 md:pb-24" // Mengurangi padding atas
    >
      <h1 className="text-6xl md:text-7xl font-bold text-blue-600 mb-4 md:mb-8">
        Selamat Datang di Website Kami
      </h1>
      <p className="text-lg md:text-xl text-blue-500 max-w-3xl mb-8 md:mb-6 mx-auto">
        Kami menyediakan informasi lengkap dan galeri menarik untuk Anda.
        Jelajahi lebih lanjut dan hubungi kami jika ada pertanyaan.
      </p>

      {/* Tombol Aksi */}
      <div className="flex gap-6 flex-wrap justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 rounded-xl transition-shadow shadow"
        >
          Lihat Wahana
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-xl shadow transition-shadow"
        >
          Pesan Tiket
        </motion.button>
      </div>
    </motion.section>
  );
}

// Home1 component

export function Home1() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-blue-600 rounded-t-3xl px-6 py-16 z-10"
    >
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {["ss1.png", "ss2.png", "ss3.png", "ss4.png"].map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-lg overflow-hidden shadow-md cursor-zoom-in"
            onClick={() => openModal(img)}
          >
            <img
              src={img}
              alt={`Foto ${i + 1}`}
              className="w-full object-contain"
            />
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-60 cursor-zoom-out"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white p-2 rounded-xl relative max-w-5xl w-full mx-6"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full max-h-[90vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export function AboutSection() {
  return (
    <section className="w-full min-h-screen bg-white py-20 px-6 flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Kolom Foto */}
        <motion.div
          className="relative w-full h-full flex justify-center md:pl-0 pl-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Gambar Utama */}
          <img
            src="ss3.png"
            alt="Wahana 1"
            className="rounded-2xl shadow-lg w-[90%] object-cover"
          />
          {/* Gambar Tumpang Tindih - pojok kiri bawah */}
          <img
            src="ss2.png"
            alt="Wahana 2"
            className="absolute bottom-[-40px] left-[-10px] md:left-[-40px] w-[45%] md:w-[40%] rounded-2xl shadow-xl border-4 border-white"
          />
        </motion.div>

        {/* Kolom Teks */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-blue-600 mb-6">
            Tentang Wahana Kami
          </h2>
          <p className="text-xl md:text-2xl text-black leading-relaxed">
            Kami menghadirkan berbagai wahana edukatif dan menghibur untuk
            segala usia. Dari pengalaman interaktif hingga petualangan luar
            biasa, setiap sudut wahana dirancang untuk menciptakan kenangan yang
            tak terlupakan. Jelajahi serunya wahana kami dan rasakan petualangan
            seru bersama keluarga.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function TicketSection() {
  ``;
  const tickets = [
    { name: "Dino Park", weekday: "Rp 100.000", weekend: "Rp 120.000" },
    { name: "Legend Star", weekday: "Rp 80.000", weekend: "Rp 100.000" },
    { name: "Fun Tech Plaza", weekday: "Rp 70.000", weekend: "Rp 90.000" },
    {
      name: "Milenial Glow Garden",
      weekday: "Rp 85.000",
      weekend: "Rp 110.000",
    },
  ];

  return (
    <section className="w-full  bg-blue-600 text-white px-4 py-20">
      <div className="max-w-6xl mx-auto mt-24">
        {/* Header Text */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Harga Tiket Wahana
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-white/90 text-base md:text-lg"
          >
            Nikmati berbagai wahana seru dengan harga terjangkau
          </motion.p>
        </div>

        {/* Desktop Table: full weekday & weekend */}
        <div className="hidden md:block overflow-x-auto">
          <motion.div
            className="bg-white/90 rounded-2xl shadow-xl overflow-hidden max-w-full"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <table className="w-full text-left border-collapse text-lg">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="px-6 py-4">Nama Wahana</th>
                  <th className="px-6 py-4">Weekday</th>
                  <th className="px-6 py-4">Weekend</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className={
                      idx % 2 === 0
                        ? "bg-white text-gray-800"
                        : "bg-blue-50 text-gray-800"
                    }
                  >
                    <td className="px-6 py-4 border-t border-blue-200">
                      {ticket.name}
                    </td>
                    <td className="px-6 py-4 border-t border-blue-200">
                      {ticket.weekday}
                    </td>
                    <td className="px-6 py-4 border-t border-blue-200">
                      {ticket.weekend}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>

        {/* Mobile Table: only Weekday */}
        <div className="md:hidden overflow-x-auto mt-10">
          <motion.div
            className="bg-white/90 rounded-2xl shadow-lg overflow-hidden max-w-full"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="px-3 py-3">Nama Wahana</th>
                  <th className="px-3 py-3">Weekday</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket, idx) => (
                  <tr
                    key={idx}
                    className={
                      idx % 2 === 0
                        ? "bg-white text-gray-800"
                        : "bg-blue-50 text-gray-800"
                    }
                  >
                    <td className="px-3 py-3 border-t border-blue-200">
                      {ticket.name}
                    </td>
                    <td className="px-3 py-3 border-t border-blue-200">
                      {ticket.weekday}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>

        {/* Mobile Table: only Weekend */}
        <div className="md:hidden overflow-x-auto mt-6">
          <motion.div
            className="bg-white/90 rounded-2xl shadow-lg overflow-hidden max-w-full"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="px-3 py-3">Nama Wahana</th>
                  <th className="px-3 py-3">Weekend</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket, idx) => (
                  <tr
                    key={idx}
                    className={
                      idx % 2 === 0
                        ? "bg-white text-gray-800"
                        : "bg-blue-50 text-gray-800"
                    }
                  >
                    <td className="px-3 py-3 border-t border-blue-200">
                      {ticket.name}
                    </td>
                    <td className="px-3 py-3 border-t border-blue-200">
                      {ticket.weekend}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
      {/* Tombol Pesan Sekarang */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-12 flex justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 font-semibold text-lg px-8 py-4 rounded-xl shadow-lg border border-blue-600 w-full max-w-md transition-all"
        >
          Pesan Sekarang
        </motion.button>
      </motion.div>
    </section>
  );
}

// Main App component
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Home1 />
      <AboutSection />
      <TicketSection />
    </div>
  );
}

export default App;
