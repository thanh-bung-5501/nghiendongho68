import background from "../assets/icons/background.jpg";

const Home = () => {
    return (
        <div className="flex flex-col items-center text-center bg-black text-yellow-300 min-h-screen font-sans">
            {/* Header */}
            <div className="w-full max-w-[420px] mt-5 mb-7">
                <h1 className="font-extrabold text-yellow-300 tracking-[0.5px] leading-snug text-3xl sm:text-4xl">
                    TRUNG KIÊN WATCH <br /> LUXURY - JEWELRY
                </h1>
            </div>

            <p className="text-[1.05rem] opacity-95 underline">
                Tư vấn nhanh chóng qua
            </p>

            {/* Arrow */}
            <div className="relative w-[5px] h-[50px] bg-white rounded-[2px] my-7 animate-bounce">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rotate-45 w-[12px] h-[12px] border-r-[5px] border-b-[5px] border-white"></div>
            </div>

            {/* CTA Button */}
            <a href="https://zalo.me/0976511946">
                <button className="bg-gradient-to-tr from-[#ff4b2b] to-[#ff416c] text-white font-bold text-[1.15rem] px-10 py-3 rounded-full border-none cursor-pointer shadow-[0_0_18px_rgba(255,65,108,0.8)] transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-[0_0_28px_rgba(255,65,108,1)] underline animate-[pulse_1.4s_infinite] mb-6">
                    NHẬN TƯ VẤN
                </button>
            </a>

            {/* Info box */}
            <div className="text-[0.95rem] opacity-90 leading-relaxed">
                <b>ĐỒNG HỒ – TRANG SỨC MOISSANITE</b>
                <p className="italic">Uy tín – Chất lượng – Trách nhiệm – Nhiệt tình</p>
                <p>Zalo: Kiên Đỗ Watch</p>
                <p className="underline">Call: 0976.511.946</p>
            </div>

            {/* Background image */}
            <div>
                <img
                    src={background}
                    alt="background"
                    className="my-5 w-full h-auto block"
                />
            </div>

            {/* Footer Info */}
            <div className="text-[0.95rem] opacity-90 leading-relaxed">
                <i>
                    SHIP HÀNG TOÀN QUỐC <br />
                    Quý khách nhận hàng kiểm tra lên tay ưng mới nhận <br />
                    Đổi trả 7 ngày – Bảo Hành sản phẩm 3 năm
                </i>
            </div>

            {/* CTA 2 */}
            <div className="mt-5">
                <a href="https://zalo.me/0976511946">
                    <button className="bg-gradient-to-tr from-[#ff4b2b] to-[#ff416c] text-white font-bold text-[1.15rem] px-10 py-3 rounded-full border-none cursor-pointer shadow-[0_0_18px_rgba(255,65,108,0.8)] transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-[0_0_28px_rgba(255,65,108,1)] underline animate-[pulse_1.4s_infinite] mb-6">
                        ĐẶT MUA NGAY
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Home;
