import { useState, useEffect } from "react";
import { 
  Users, MapPin, Phone, ArrowRight, ShieldCheck, ChevronRight, CheckCircle2, TrendingUp, AlertCircle, MessageSquare, Star, Target
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// 🔴 DANH SÁCH ẢNH - Sử dụng đường dẫn chính xác
const HERO_IMAGES = [
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image2.jpg",
  "/images/z7765783048504_619174259ccf8be4c2028bd1581e3f23.jpg",
  "/images/z7765783033469_5b78c7bf43c3380a83230def2507d016.jpg",
  "/images/z7765783028917_0623ac60f2674f7671bc8e372b3a4891.jpg",
  "/images/z7765783025889_d0988b7b46d9fac5a35f702e11adcdb1.jpg",
  "/images/z7765782966572_05572c08316e7da1e03dd5f6f5c680d3.jpg",
  "/images/z6557578605836_9357106eec4fb684dff551b65b25b030.jpg",
  "/images/z6730866664962_bcf083bd6bcd93627d3fb986926f9343.jpg",
  "/images/484247512_621142764242034_7397556158135232027_n.jpg",
  "/images/484487070_621142770908700_1850750272548256462_n.jpg",
  "/images/BetterImage_1777202319380.jpeg",
  "/images/BetterImage_1777202306271.jpeg",
  "/images/2.png",
  "/images/16.png",
  "/images/17.png"
];

const TEACHING_MODELS = [
  { title: "Mô hình lớp Toán 8", icon: "📐", subjects: "3-6 HỌC SINH / LỚP", img: "/images/BetterImage_1777202306271.jpeg" },
  { title: "Mô hình lớp Toán 9", icon: "🔤", subjects: "3-6 HỌC SINH / LỚP", img: "/images/BetterImage_1777202319380.jpeg" },
  { title: "Mô hình lớp KHTN 8", icon: "🧪", subjects: "3-6 HỌC SINH / LỚP", img: "/images/16.png" },
  { title: "Mô hình lớp KHTN 9", icon: "🧲", subjects: "3-6 HỌC SINH / LỚP", img: "/images/z7765783048504_619174259ccf8be4c2028bd1581e3f23.jpg" }
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.2 } }
};

export default function App() {
  const [currentImage, setCurrentImage] = useState(0);

  // 🔴 AUTO CHẠY 10 GIÂY
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION - DÀN TRẢI TOÀN MÀN HÌNH */}
      <section className="relative min-h-screen flex flex-col items-center justify-center py-10 bg-[#020617] text-white overflow-hidden">
        
        {/* Advanced Background Design */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Main Gradient Mesh */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-950 via-slate-900 to-blue-900 opacity-80"></div>
          
          {/* Animated Circles/Blobs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] right-[-5%] w-[1200px] h-[1200px] bg-red-600/10 rounded-full blur-[180px]"
          ></motion.div>
          
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -80, 0],
              y: [0, 60, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-15%] left-[-10%] w-[1000px] h-[1000px] bg-blue-600/15 rounded-full blur-[150px]"
          ></motion.div>
          
          <motion.div 
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [0.8, 1.1, 0.8]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] left-[10%] w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-[140px]"
          ></motion.div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-100"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="w-full relative z-10 text-center flex flex-col items-center px-4">
          
          {/* TITLE AREA - CỰC ĐẠI */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8 space-y-4"
          >
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 mb-4">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-black uppercase tracking-[0.5em] text-blue-200">Tuyển sinh khóa hè 2026-2027</span>
            </div>

            <h1 
              className="font-black heading-font tracking-tighter leading-[0.85] uppercase text-white drop-shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
              style={{ fontSize: '94.75px' }}
            >
              TOÁN HÓA CHUYÊN<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-blue-400">NQD EDUCATION</span>
            </h1>
            
            <div className="flex items-center justify-center gap-8 pt-6">
              <div className="h-2 w-48 bg-red-600 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)]"></div>
              <p 
                className="font-black uppercase tracking-[0.7em] italic drop-shadow-2xl px-10 py-4 border-y-4"
                style={{ color: '#ff001e', borderColor: '#ffbec7', fontSize: '27px' }}
              >
                Thầy Tận Tâm - Trò Tiến Bộ
              </p>
              <div className="h-2 w-48 bg-red-600 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)]"></div>
            </div>
          </motion.div>

          {/* THREE BIG CIRCLES AREA */}
          <div className="relative w-full flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 mb-12 px-2">
            {[0, 1, 2].map((offset) => (
              <motion.div
                key={offset}
                initial={false}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="group relative"
              >
                <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[31vw] lg:h-[31vw] rounded-full border-[12px] md:border-[20px] border-white overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.7)] z-10 bg-slate-200 transition-all duration-700 group-hover:border-red-600 group-hover:scale-105">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.img
                      key={`${currentImage}-${offset}`}
                      src={HERO_IMAGES[(currentImage + offset) % HERO_IMAGES.length]}
                      initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]"
                    />
                  </AnimatePresence>
                </div>
                <div className="absolute inset-[-15%] bg-blue-500 rounded-full blur-[120px] opacity-0 group-hover:opacity-30 transition-opacity"></div>
              </motion.div>
            ))}

            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-30">
              {HERO_IMAGES.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${currentImage === i ? 'w-16 bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.8)]' : 'w-3 bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>
          </div>

          {/* CONTACT & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="w-full max-w-[98vw] space-y-10"
          >
            <div className="grid md:grid-cols-2 gap-6 lg:px-12">
              <a href="https://zalo.me/g/cnuvgb927" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-6 bg-white/5 backdrop-blur-2xl p-6 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all group shadow-2xl">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-3xl flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform shrink-0">
                  <Phone className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <div className="text-left">
                  <p className="text-blue-200 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-1 opacity-70">GỌI NGAY ĐỂ ĐƯỢC TƯ VẤN</p>
                  <p className="text-3xl md:text-5xl font-black heading-font tracking-tight">093.902.1718</p>
                </div>
              </a>
              <div className="flex items-center justify-center gap-6 bg-white/5 backdrop-blur-2xl p-6 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all group shadow-2xl">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-xl group-hover:-rotate-12 transition-transform shrink-0">
                  <MapPin className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <div className="text-left">
                  <p className="text-blue-200 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-1 opacity-70">TRỤ SỞ CHÍNH QUẬN 3</p>
                  <p className="text-2xl md:text-3xl font-black leading-tight uppercase tracking-tighter">812/21 Trường Sa, HCM</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <a href="https://www.facebook.com/profile.php?id=100090389460990" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-blue-900 px-12 py-6 md:px-20 md:py-8 rounded-full font-black text-2xl md:text-3xl shadow-[0_30px_60px_rgba(255,255,255,0.2)] transition-all hover:bg-red-600 hover:text-white hover:scale-105 active:scale-95 group uppercase tracking-[0.2em] relative overflow-hidden">
                <span className="relative z-10">ĐĂNG KÝ NGAY</span>
                <ArrowRight className="ml-6 w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-3 transition-transform relative z-10" />
              </a>
              <div className="flex -space-x-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-14 h-14 md:w-20 md:h-20 rounded-full border-4 border-blue-900 overflow-hidden shadow-2xl bg-slate-100">
                    <img src={`/images/image${i}.jpg`} className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border-4 border-blue-900 bg-red-600 flex items-center justify-center text-white font-black text-xs md:text-sm shadow-2xl">
                  +500
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLEMS SECTION */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="w-full px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl heading-font font-bold mb-6">Con bạn có đang gặp những rào cản này?</h2>
            <div className="w-24 h-1.5 bg-red-600 mx-auto"></div>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { 
                icon: <Users className="w-8 h-8"/>, 
                title: "Lớp đông bị ngợp", 
                desc: "Học tại các trung tâm lớn 30-50 học sinh, con không được giải đáp thắc mắc kịp thời." 
              },
              { 
                icon: <Target className="w-8 h-8"/>, 
                title: "Học 1:1 thiếu động lực", 
                desc: "Gia sư tại nhà đôi khi làm con ỷ lại, thiếu môi trường cạnh tranh lành mạnh để tiến bộ." 
              },
              { 
                icon: <AlertCircle className="w-8 h-8"/>, 
                title: "Học tủ, học sai cách", 
                desc: "Mất gốc kiến thức nền tảng, chỉ học mẹo để đi thi nhưng không hiểu bản chất KHTN." 
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className="mb-6 text-red-600">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 heading-font">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. MÔ HÌNH GIẢNG DẠY */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="w-full px-6 md:px-20">
          <div className="flex items-center gap-8 mb-20 px-4">
            <div className="w-24 h-2 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.3)]"></div>
            <h2 className="text-5xl md:text-7xl font-black heading-font text-slate-900 uppercase tracking-tighter">Mô hình giảng dạy</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {TEACHING_MODELS.map((model, i) => (
              <motion.a 
                key={i}
                href="https://zalo.me/g/cnuvgb927"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border-2 border-slate-100 shadow-xl hover:border-red-600 transition-all cursor-pointer block"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-12 bg-red-600 text-white flex items-center justify-center font-black text-sm uppercase tracking-widest z-10">
                    LỚP: 3-6 HỌC SINH / LỚP
                  </div>
                  <img src={model.img} alt={model.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent"></div>
                </div>
                <div className="p-6 text-center bg-white">
                  <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter">{model.title}</h4>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THỜI KHÓA BIỂU */}
      <section className="py-24 bg-slate-50 overflow-hidden" id="schedule">
        <div className="w-full px-6 md:px-20 text-center mb-16">
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="w-24 h-2 bg-blue-600 rounded-full"></div>
            <h2 className="text-5xl md:text-7xl font-black heading-font text-slate-900 uppercase tracking-tighter">Thời khóa biểu</h2>
            <div className="w-24 h-2 bg-blue-600 rounded-full"></div>
          </div>
          <p className="text-xl font-bold text-slate-500 uppercase tracking-[0.3em] mb-4">Năm học 2026 - 2027</p>
          <div className="w-48 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="w-full px-2 md:px-10 max-w-[98vw] mx-auto">
          <div className="bg-white rounded-[2rem] md:rounded-[4rem] overflow-hidden border-2 border-slate-100 shadow-[0_40px_100px_rgba(0,0,0,0.1)] p-4 md:p-10">
            <div className="overflow-x-auto lg:overflow-x-visible">
              <table className="w-full text-center border-collapse table-fixed">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 md:p-6 border border-slate-700 font-black text-sm md:text-xl uppercase tracking-widest w-[100px] md:w-[150px]">Giờ</th>
                    <th className="p-4 md:p-6 border border-slate-700 font-black text-sm md:text-xl uppercase tracking-widest">Thứ 2</th>
                    <th className="p-4 md:p-6 border border-slate-700 font-black text-sm md:text-xl uppercase tracking-widest">Thứ 3</th>
                    <th className="p-4 md:p-6 border border-slate-700 font-black text-sm md:text-xl uppercase tracking-widest">Thứ 4</th>
                    <th className="p-4 md:p-6 border border-slate-700 font-black text-sm md:text-xl uppercase tracking-widest">Thứ 5</th>
                    <th className="p-4 md:p-6 border border-slate-700 font-black text-sm md:text-xl uppercase tracking-widest">Thứ 6</th>
                  </tr>
                </thead>
                <tbody className="text-slate-900">
                  {/* Row 1: 17g30 - 19g00 */}
                  <tr>
                    <td className="p-2 md:p-6 border border-slate-100 bg-slate-50 font-black text-sm md:text-2xl text-slate-400">17g30-19g00</td>
                    {/* Thứ 2 */}
                    <td className="p-1 md:p-3 border border-slate-100">
                      <div className="bg-[#FBDF7E] p-2 md:p-4 rounded-xl md:rounded-[1.5rem] mb-1 md:mb-2 font-black text-[10px] md:text-lg shadow-sm">TOÁN 9</div>
                      <div className="bg-[#FDBE81] p-2 md:p-4 rounded-xl md:rounded-[1.5rem] font-black text-[10px] md:text-lg shadow-sm">KHTN 7</div>
                    </td>
                    {/* Thứ 3 */}
                    <td className="p-1 md:p-3 border border-slate-100">
                      <div className="bg-[#BEE3F8] p-2 md:p-4 rounded-xl md:rounded-[1.5rem] mb-1 md:mb-2 font-black text-[10px] md:text-lg shadow-sm">TOÁN 11</div>
                      <div className="bg-[#FED7D7] p-2 md:p-4 rounded-xl md:rounded-[1.5rem] font-black text-[10px] md:text-lg shadow-sm">KHTN 8</div>
                    </td>
                    {/* Thứ 4 */}
                    <td className="p-1 md:p-3 border border-slate-100">
                      <div className="bg-[#FBDF7E] p-2 md:p-4 rounded-xl md:rounded-[1.5rem] mb-1 md:mb-2 font-black text-[10px] md:text-lg shadow-sm">TOÁN 9</div>
                      <div className="bg-[#FDBE81] p-2 md:p-4 rounded-xl md:rounded-[1.5rem] font-black text-[10px] md:text-lg shadow-sm">KHTN 7</div>
                    </td>
                    {/* Thứ 5 */}
                    <td className="p-1 md:p-3 border border-slate-100">
                      <div className="bg-[#BEE3F8] p-2 md:p-4 rounded-xl md:rounded-[1.5rem] mb-1 md:mb-2 font-black text-[10px] md:text-lg shadow-sm">TOÁN 11</div>
                      <div className="bg-[#FED7D7] p-2 md:p-4 rounded-xl md:rounded-[1.5rem] font-black text-[10px] md:text-lg shadow-sm">KHTN 8</div>
                    </td>
                    {/* Thứ 6 */}
                    <td className="p-1 md:p-3 border border-slate-100">
                      <div className="bg-[#FBB6CE] p-2 md:p-4 rounded-xl md:rounded-[1.5rem] mb-1 md:mb-2 font-black text-[10px] md:text-lg shadow-sm">TOÁN 6</div>
                      <div className="bg-[#E288E2] p-2 md:p-4 rounded-xl md:rounded-[1.5rem] font-black text-[10px] md:text-lg shadow-sm text-white">HÓA 10</div>
                    </td>
                  </tr>
                  {/* Row 2: 19g30 - 21g00 */}
                  <tr>
                    <td className="p-2 md:p-6 border border-slate-100 bg-slate-50 font-black text-sm md:text-2xl text-slate-400">19g30-21g00</td>
                    {/* Thứ 2 */}
                    <td className="p-1 md:p-3 border border-slate-100">
                      <div className="bg-[#90CDF4] p-2 md:p-4 rounded-xl md:rounded-[1.5rem] mb-1 md:mb-2 font-black text-[10px] md:text-lg shadow-sm">TOÁN 7</div>
                      <div className="bg-[#FEFCBF] p-2 md:p-4 rounded-xl md:rounded-[1.5rem] font-black text-[10px] md:text-lg shadow-sm">KHTN 9</div>
                    </td>
                    {/* Thứ 3 */}
                    <td className="p-1 md:p-3 border border-slate-100">
                      <div className="bg-[#C6F6D5] p-2 md:p-4 rounded-xl md:rounded-[1.5rem] mb-1 md:mb-2 font-black text-[10px] md:text-lg shadow-sm">TOÁN 8</div>
                      <div className="bg-[#FBB6CE] p-2 md:p-4 rounded-xl md:rounded-[1.5rem] font-black text-[10px] md:text-lg shadow-sm">TOÁN 6</div>
                    </td>
                    {/* Thứ 4 */}
                    <td className="p-1 md:p-3 border border-slate-100">
                      <div className="bg-[#90CDF4] p-2 md:p-4 rounded-xl md:rounded-[1.5rem] mb-1 md:mb-2 font-black text-[10px] md:text-lg shadow-sm">TOÁN 7</div>
                      <div className="bg-[#FEFCBF] p-2 md:p-4 rounded-xl md:rounded-[1.5rem] font-black text-[10px] md:text-lg shadow-sm">KHTN 9</div>
                    </td>
                    {/* Thứ 5 */}
                    <td className="p-1 md:p-3 border border-slate-100">
                      <div className="bg-[#C6F6D5] p-2 md:p-4 rounded-xl md:rounded-[1.5rem] mb-1 md:mb-2 font-black text-[10px] md:text-lg shadow-sm">TOÁN 8</div>
                      <div className="bg-[#F6AD55] p-2 md:p-4 rounded-xl md:rounded-[1.5rem] font-black text-[10px] md:text-lg shadow-sm">HÓA 11C</div>
                    </td>
                    {/* Thứ 6 */}
                    <td className="p-1 md:p-3 border border-slate-100">
                      <div className="bg-[#F8D7DA] p-4 rounded-xl md:rounded-[1.5rem] font-black text-[10px] md:text-lg shadow-sm">TOÁN 10</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-16 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1 p-8 bg-blue-50 rounded-[2.5rem] border-l-8 border-blue-600">
                <p className="font-black text-blue-900 mb-2 uppercase tracking-widest">Khai giảng</p>
                <p className="text-xl font-bold text-slate-700 leading-tight">Các lớp đồng loạt khai giảng vào tuần đầu tiên của tháng 6. Riêng lớp 10 khai giảng vào tháng 8.</p>
              </div>
              <div className="flex-1 p-8 bg-red-50 rounded-[2.5rem] border-l-8 border-red-600">
                <p className="font-black text-red-900 mb-2 uppercase tracking-widest">Lưu ý</p>
                <p className="text-xl font-bold text-slate-700 leading-tight">Thời gian biểu có thể được điều chỉnh linh hoạt theo nhu cầu thực tế của nhóm học sinh.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ĐỘI NGŨ GIÁO VIÊN */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="w-full px-6 md:px-20">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-[8vw] font-black heading-font text-slate-900 mb-10 flex items-center justify-center gap-10 uppercase tracking-tighter">
              <span className="text-5xl md:text-[6vw]">👨‍🏫</span> Đội ngũ giáo viên
            </h2>
            <div className="w-96 h-4 bg-red-600 mx-auto rounded-full shadow-[0_10px_30px_rgba(220,38,38,0.4)]"></div>
          </div>

          <div className="bg-slate-50 rounded-[4rem] p-8 md:p-20 border border-slate-100 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-30 mt-[-100px] mr-[-50px]"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col xl:flex-row gap-16 items-start mb-24">
                 <motion.div 
                   whileHover={{ scale: 1.02, rotate: -1 }}
                   className="w-full xl:w-[450px] aspect-square rounded-[4rem] overflow-hidden border-[15px] border-white shadow-2xl shrink-0 bg-white"
                 >
                    <img src="/images/image4.jpg" alt="BS. Nguyễn Quốc Đạt" className="w-full h-full object-cover" />
                 </motion.div>
                 
                 <div className="flex-1 space-y-10">
                    <div className="space-y-4">
                      <h3 className="text-4xl md:text-6xl font-black text-slate-900 flex items-center gap-4 heading-font uppercase">
                        <ChevronRight className="w-12 h-12 text-red-600 shrink-0" />
                        Bác sĩ Nguyễn Quốc Đạt
                      </h3>
                      <div className="inline-flex gap-4">
                        <span className="bg-red-600 text-white px-6 py-2 rounded-xl font-black text-sm uppercase tracking-widest shadow-lg">BV NHÂN DÂN 115</span>
                        <span className="bg-blue-900 text-white px-6 py-2 rounded-xl font-black text-sm uppercase tracking-widest shadow-lg">FOUNDER & MENTOR</span>
                      </div>
                    </div>

                    <div className="relative">
                      <p className="text-2xl md:text-3xl text-slate-800 leading-relaxed font-medium italic border-l-8 border-red-600 pl-10 bg-white py-12 rounded-r-[3rem] pr-12 shadow-xl border border-slate-100">
                        \"Ở giai đoạn này học sinh cần có cho mình một <span className="text-red-600 font-black relative">
                          MENTOR
                          <span className="absolute bottom-0 left-0 w-full h-2 bg-red-100 -z-10"></span>
                        </span> để hướng dẫn, chia sẻ và định hướng nghề nghiệp nhất là đối với con đường Y tế mà các em chọn.\"
                      </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6 pt-6">
                       {[
                         "Cố vấn chuyên môn cao cấp tại NQD Education",
                         "Nghiên cứu phương pháp giảng dạy KHTN thực tiễn",
                         "Đồng hành tâm lý & Động lực học tập cho HS cuối cấp",
                         "Tư vấn lộ trình xét tuyển khối B & ngành Y Dược"
                       ].map((item, i) => (
                         <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-3xl shadow-md border border-slate-50 hover:border-blue-200 transition-colors group">
                            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors">
                              <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <span className="font-black text-lg text-slate-700 leading-tight">{item}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="h-1 w-full bg-slate-200/50 my-24"></div>
              
              <div className="flex flex-col xl:flex-row gap-16 items-start">
                 <motion.div 
                   whileHover={{ scale: 1.02, rotate: -1 }}
                   className="w-full xl:w-[450px] aspect-square rounded-[4rem] overflow-hidden border-[15px] border-white shadow-2xl shrink-0 bg-white"
                 >
                    <img src="/images/image2.jpg" alt="Dược sĩ Nguyễn Khánh Chi" className="w-full h-full object-cover" />
                 </motion.div>
                 
                 <div className="flex-1 space-y-10">
                    <div className="space-y-4">
                      <h3 className="text-4xl md:text-6xl font-black text-slate-900 flex items-center gap-4 heading-font uppercase">
                        <ChevronRight className="w-12 h-12 text-green-600 shrink-0" />
                        Dược sĩ Nguyễn Khánh Chi
                      </h3>
                      <div className="inline-flex gap-4">
                        <span className="bg-green-600 text-white px-6 py-2 rounded-xl font-black text-sm uppercase tracking-widest shadow-lg">KHOA DƯỢC Y DƯỢC</span>
                        <span className="bg-slate-900 text-white px-6 py-2 rounded-xl font-black text-sm uppercase tracking-widest shadow-lg">CHUYÊN GIA MENTOR</span>
                      </div>
                    </div>

                    <div className="relative">
                      <p className="text-2xl md:text-3xl text-slate-800 leading-relaxed font-medium italic border-l-8 border-green-600 pl-10 bg-white py-12 rounded-r-[3rem] pr-12 shadow-xl border border-slate-100">
                        \"Ở giai đoạn này học học sinh cần có cho mình một <span className="text-green-600 font-black relative">
                          MENTOR
                          <span className="absolute bottom-0 left-0 w-full h-2 bg-green-100 -z-10"></span>
                        </span> để hướng dẫn, chia sẻ và định hướng nghề nghiệp nhất là đối với con đường Y tế mà các em chọn.\"
                      </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6 pt-6">
                       {[
                         "Cựu sinh viên khoa Dược Đại học Y Dược TpHCM",
                         "Cựu học sinh chuyên Hoá trường THPT chuyên Trần Đại Nghĩa",
                         "Chuyên gia cố vấn lộ trình ôn thi ngành Y Dược",
                         "Kinh nghiệm hướng dẫn đạt Huy chương Toán học"
                       ].map((item, i) => (
                         <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-3xl shadow-md border border-slate-50 hover:border-green-200 transition-colors group">
                            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                              <ShieldCheck className="w-6 h-6" />
                            </div>
                            <span className="font-black text-lg text-slate-700 leading-tight">{item}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="space-y-12 mt-24">
                 <div className="flex items-center gap-6 mb-12">
                   <div className="h-1 flex-1 bg-slate-200"></div>
                   <h4 className="text-3xl font-black text-slate-900 flex items-center gap-4 uppercase tracking-[0.2em] px-8 bg-blue-50 py-4 rounded-2xl border border-blue-100 shadow-sm">
                      <TrendingUp className="w-10 h-10 text-blue-600" />
                      Tổng quan tâm huyết
                   </h4>
                   <div className="h-1 flex-1 bg-slate-200"></div>
                 </div>
                 
                 <div className="grid md:grid-cols-3 gap-12">
                    {[
                      { img: "/images/image3.jpg", title: "HUY CHƯƠNG TOÁN", desc: "Thành tích rực rỡ từ học viên" },
                      { img: "/images/image2.jpg", title: "Dược sĩ Y Dược", desc: "Hành trình chuyên môn tận tụy" },
                      { img: "/images/image1.jpg", title: "Trần Đại Nghĩa", desc: "Nền tảng chuyên hóa vững chắc" }
                    ].map((item, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="group"
                      >
                        <div className="aspect-[4/3] rounded-[3.5rem] overflow-hidden border-[15px] border-white shadow-2xl bg-white group-hover:scale-[1.05] transition-all duration-700 relative cursor-pointer">
                          <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:brightness-110 transition-all" />
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                             <p className="text-white font-black text-3xl leading-none mb-2 uppercase tracking-tighter">{item.title}</p>
                             <p className="text-blue-200 font-bold text-lg leading-tight italic">{item.desc}</p>
                          </div>
                        </div>
                        <div className="mt-10 space-y-3 text-center">
                           <h5 className="text-3xl font-black text-slate-900 leading-none uppercase tracking-tighter group-hover:text-red-600 transition-colors">
                              {item.title}
                           </h5>
                           <p className="text-xl font-bold text-slate-500 italic max-w-[280px] mx-auto leading-tight">
                              {item.desc}
                           </p>
                        </div>
                      </motion.div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BẢNG VÀNG THÀNH TÍCH */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden text-center">
        <div className="w-full px-6 md:px-20">
          <div className="mb-24">
            <h2 className="text-6xl md:text-[9vw] heading-font font-black mb-8 uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 via-yellow-500 to-yellow-700 drop-shadow-[0_20px_40px_rgba(234,179,8,0.3)]">BẢNG VÀNG THÀNH TÍCH</h2>
            <p className="text-yellow-500 text-3xl font-black italic uppercase tracking-[0.5em] opacity-80">Nơi vinh danh những nỗ lực không ngừng nghỉ</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { img: "/images/image5.jpg", title: "Thủ Khoa Khối B", name: "Nguyễn Văn A" },
              { img: "/images/image6.jpg", title: "Giải Nhất Chuyên Hóa", name: "Trần Thị B" },
              { img: "/images/image1.jpg", title: "Đậu Y ĐH Y Dược", name: "Lê Văn C" },
              { img: "/images/image2.jpg", title: "9.5 Toán Tuyển Sinh 10", name: "Phạm Minh D" },
              { img: "/images/image3.jpg", title: "HSG Hoá Thành Phố", name: "Hoàng An E" },
              { img: "/images/image4.jpg", title: "Top 1 Lớp Chuyên", name: "Đặng Thu F" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                className="bg-white/5 border-2 border-yellow-500/30 p-4 rounded-[3rem] shadow-[0_20px_50px_rgba(234,179,8,0.1)] relative group cursor-pointer"
              >
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 border-4 border-white/10">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="space-y-2">
                  <p className="text-yellow-500 font-black text-sm uppercase tracking-widest">{item.title}</p>
                  <h4 className="text-2xl font-black uppercase text-white tracking-tighter">{item.name}</h4>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center shadow-xl border-4 border-slate-900 group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-slate-900 fill-slate-900" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FEEDBACK SECTION */}
      <section className="py-20 bg-blue-900 text-white relative">
        <div className="w-full px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl heading-font font-black mb-6 uppercase tracking-tight">Phụ huynh nói gì về NQD?</h2>
            <div className="flex justify-center gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400 drop-shadow-lg" />)}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[3rem] shadow-2xl">
              <div className="aspect-[16/9] bg-white/10 rounded-2xl mb-8 flex flex-col items-center justify-center text-white/30 italic p-6 border border-white/5 text-center">
                <MessageSquare className="w-12 h-12 mb-3 opacity-20" />
                <span className="text-xs uppercase font-black tracking-widest">Ảnh chụp màn hình <br/> Zalo feedback phụ huynh</span>
              </div>
              <p className="text-xl italic text-blue-100 leading-relaxed font-medium">"Từ khi theo học lớp NQD, con đã không còn sợ môn Toán nữa. Điểm kiểm tra trên lớp của con đã tăng từ 5 lên 8.5 chỉ sau 2 tháng."</p>
              <div className="mt-8 flex items-center gap-4">
                 <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-black">M</div>
                 <div>
                    <p className="font-black text-white">Phụ huynh em Tấn Minh</p>
                    <p className="text-blue-300 text-sm">Học sinh lớp 9</p>
                 </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[3rem] shadow-2xl">
              <div className="aspect-[16/9] bg-white/10 rounded-2xl mb-8 flex flex-col items-center justify-center text-white/30 italic p-6 border border-white/5 text-center">
                < MessageSquare className="w-12 h-12 mb-3 opacity-20" />
                <span className="text-xs uppercase font-black tracking-widest">Ảnh chụp màn hình <br/> Zalo feedback phụ huynh</span>
              </div>
              <p className="text-xl italic text-blue-100 leading-relaxed font-medium">"Mô hình lớp nhỏ rất hợp với các bạn tính cách nhút nhát. Cô giáo rất kiên nhẫn và giải thích rất dễ hiểu kiến thức mới, con tự tin hẳn."</p>
              <div className="mt-8 flex items-center gap-4">
                 <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-black">A</div>
                 <div>
                    <p className="font-black text-white">Phụ huynh em Phương Anh</p>
                    <p className="text-blue-300 text-sm">Học sinh lớp 11</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section id="cta" className="py-24 relative overflow-hidden bg-white flex items-center justify-center min-h-[70vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[5rem] border-[8px] border-red-600 p-12 md:p-24 shadow-[0_80px_150px_rgba(220,38,38,0.2)] relative overflow-hidden"
          >
            <div className="absolute top-[-20%] right-[-20%] w-[400px] h-[400px] bg-red-50 rounded-full opacity-50 blur-[100px]"></div>
            <div className="absolute bottom-[-20%] left-[-20%] w-[400px] h-[400px] bg-blue-50 rounded-full opacity-50 blur-[100px]"></div>

            <span className="inline-block px-8 py-3 rounded-full bg-red-100 text-red-600 font-black text-sm mb-10 uppercase tracking-[0.3em] border-2 border-red-200">
               GIỚI HẠN SĨ SỐ
            </span>
            <h2 className="text-5xl md:text-7xl heading-font font-black text-slate-900 mb-10 uppercase tracking-tighter leading-tight">
              Chỉ nhận <span className="text-red-600">30 học sinh</span>
            </h2>
            <p className="text-2xl text-slate-500 mb-14 leading-relaxed font-bold px-4 max-w-2xl mx-auto">
              Đừng để con bị tụt lại phía sau. Hãy đăng ký ngay để nhận bài test năng lực và lộ trình học tập miễn phí trị giá 500.000đ.
            </p>
            <div className="flex flex-col items-center gap-10">
              <a href="tel:0939021718" className="inline-flex items-center justify-center bg-red-600 hover:bg-black text-white px-16 py-8 rounded-full font-black text-3xl shadow-[0_20px_60px_rgba(220,38,38,0.4)] transition-all hover:scale-110 group active:scale-95 leading-none">
                <Phone className="mr-5 w-11 h-11 animate-bounce" />
                093.902.1718
              </a>
              <div className="flex flex-col md:flex-row items-center gap-12 opacity-60">
                 <div className="flex items-center gap-3 font-black text-xs uppercase tracking-[0.2em] text-slate-500">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                    BẢO MẬT THÔNG TIN
                 </div>
                 <div className="flex items-center gap-3 font-black text-xs uppercase tracking-[0.2em] text-slate-500">
                    <Users className="w-6 h-6 text-blue-600" />
                    HỌC THỬ MIỄN PHÍ
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-slate-950 text-white pt-20 pb-16 border-t border-white/5 relative overflow-hidden">
        <div className="w-full px-8 relative z-10">
          <div className="grid lg:grid-cols-4 gap-20 mb-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-20 h-20 bg-red-600 rounded-3xl flex items-center justify-center shadow-[0_20px_40px_rgba(220,38,38,0.3)]">
                  <span className="text-white font-black heading-font text-4xl">NQD</span>
                </div>
                <div>
                  <h2 className="text-4xl font-black heading-font leading-none uppercase tracking-tighter">NQD EDUCATION</h2>
                  <p className="text-red-500 font-black text-sm uppercase tracking-[0.3em] mt-2 ml-1">Luyện thi chuyên nghiệp Quận 3</p>
                </div>
              </div>
              <p className="text-slate-400 max-w-sm mb-10 leading-relaxed font-bold text-lg italic">
                Cùng con chinh phục khối B & Chuyên Hóa tuyển sinh 10 HCM với phương pháp dạy cá nhân hóa từ tâm.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-black mb-10 heading-font uppercase tracking-[0.2em] text-red-600 underline underline-offset-[12px] decoration-white/10">LIÊN HỆ</h4>
              <ul className="space-y-10">
                <li className="flex items-start gap-4 text-slate-300 font-bold group">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all shadow-lg">
                    <MapPin className="w-7 h-7 " />
                  </div>
                  <span className="text-lg leading-tight pt-1">812/21 Trường Sa, Phường 14, Quận 3, TP. Hồ Chí Minh</span>
                </li>
                <li className="flex items-center gap-4 text-white font-black text-3xl group">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all shadow-lg">
                    <Phone className="w-7 h-7" />
                  </div>
                  <a href="tel:0939021718" className="tracking-tighter hover:text-red-600 transition-colors">093.902.1718</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-black mb-10 heading-font uppercase tracking-[0.2em] text-red-600 underline underline-offset-[12px] decoration-white/10">NAVIGATE</h4>
              <ul className="space-y-5 text-slate-400 font-black text-xs uppercase tracking-[0.25em]">
                {['Giới thiệu', 'Lộ trình', 'Thành tích', 'Feedback', 'Đăng ký'].map((nav, i) => (
                  <li key={i} className="hover:text-white cursor-pointer flex items-center gap-3 transition-colors group">
                    <div className="w-2 h-2 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {nav}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm font-bold text-slate-600">
            <p className="uppercase tracking-[0.2em] mb-4 md:mb-0">© 2024 NQD Education. TRÂN TRỌNG TỪ TÂM - GIỮ TRỌN TIẾN BỘ.</p>
            <div className="flex gap-10 uppercase tracking-[0.15em] text-[10px]">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
      
      {/* 10. STICKY MOBILE CTA */}
      <div className="fixed bottom-6 left-6 right-6 z-50 md:hidden">
        <a href="https://zalo.me/g/cnuvgb927" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white w-full py-6 rounded-3xl font-black flex items-center justify-center gap-4 shadow-[0_20px_50px_rgba(59,130,246,0.5)] border-2 border-white/30 active:scale-95 transition-transform uppercase tracking-[0.15em] text-xl">
          <MessageSquare className="w-7 h-7 animate-[pulse_1.5s_infinite]" />
          Nhận tư vấn qua Zalo
        </a>
      </div>

      {/* 11. FLOATING DESKTOP ZALO */}
      <div className="fixed bottom-10 right-10 z-50 hidden md:block">
        <motion.a 
          href="https://zalo.me/g/cnuvgb927"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl border-4 border-white/20 relative"
        >
          <MessageSquare className="w-10 h-10" />
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-600 rounded-full border-2 border-white animate-bounce flex items-center justify-center text-[10px] font-black">1</span>
        </motion.a>
      </div>
    </div>
  );
}
