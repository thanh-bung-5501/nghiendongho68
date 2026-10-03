import background from "../assets/icons/background.jpg";

const zaloUrl = "https://zalo.me/0976511946";
const ArrowIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;

const Home = () => (
    <main className="site-shell">
        <header className="topbar">
            <a className="header-contact" href="tel:0976511946"><span>Hotline</span><strong>0976 511 946</strong></a>
            <a className="brand" href="#top" aria-label="Trung Kiên Watch Luxury - Trang chủ">
                <span className="brand-copy"><strong>Trung Kiên</strong><small>Watch · Luxury · Jewelry</small></span>
                <span className="brand-mark"><span>TK</span></span>
            </a>
        </header>

        <section className="hero" id="top">
            <div className="hero-visual">
                <div className="image-frame"><img src={background} alt="Không gian trưng bày đồng hồ và trang sức Trung Kiên" /></div>
                <div className="floating-note"><span>✦</span><p><strong>Uy tín tạo nên giá trị</strong>Chất lượng · Trách nhiệm · Tận tâm</p></div>
                <span className="vertical-label">PREMIUM SELECTION · VIETNAM</span>
            </div>
            <div className="hero-content">
                <p className="eyebrow">Đồng hồ & trang sức cao cấp <span /></p>
                <h1>Vẻ đẹp vượt thời gian,<br /><em>dành riêng cho bạn.</em></h1>
                <p className="hero-lead">Tuyển chọn đồng hồ và trang sức Moissanite tinh tế — đồng hành cùng bạn trong mọi khoảnh khắc đáng nhớ.</p>
                <div className="hero-actions">
                    <a className="text-link" href="tel:0976511946">Gọi ngay: 0976 511 946</a>
                    <a className="button button-primary" href={zaloUrl} target="_blank" rel="noreferrer">Tư vấn qua Zalo <ArrowIcon /></a>
                </div>
                <div className="trust-row" aria-label="Cam kết dịch vụ">
                    <div><strong>Toàn quốc</strong><span>Giao hàng tận nơi</span></div>
                    <div><strong>07 ngày</strong><span>Hỗ trợ đổi trả</span></div>
                    <div><strong>03 năm</strong><span>Bảo hành sản phẩm</span></div>
                </div>
            </div>
        </section>

        <section className="promise-section">
            <div className="promise-grid">
                <article><span className="promise-number">01</span><h3>Kiểm tra trước khi nhận</h3><p>Quý khách được kiểm tra và lên tay sản phẩm. Ưng ý mới nhận hàng.</p></article>
                <article><span className="promise-number">02</span><h3>Tư vấn tận tâm</h3><p>Lắng nghe nhu cầu, giúp bạn chọn thiết kế phù hợp phong cách và ngân sách.</p></article>
                <article><span className="promise-number">03</span><h3>Đồng hành dài lâu</h3><p>Chính sách bảo hành 3 năm và hỗ trợ đổi trả trong vòng 7 ngày.</p></article>
            </div>
            <div className="section-heading">
                <p className="eyebrow">Cam kết từ Trung Kiên <span /></p>
                <h2>An tâm trong từng<br /><em>lựa chọn.</em></h2>
            </div>
        </section>

        <section className="closing-cta">
            <p className="eyebrow"><span /> Đặc quyền dành cho bạn</p>
            <h2>Sẵn sàng tìm món trang sức<br />thuộc về riêng bạn?</h2>
            <p>Nhắn cho Trung Kiên để được tư vấn nhanh chóng và hoàn toàn miễn phí.</p>
            <a className="button button-light" href={zaloUrl} target="_blank" rel="noreferrer">Bắt đầu trò chuyện <ArrowIcon /></a>
        </section>

        <footer>
            <p>© 2026 Trung Kiên Watch Luxury.</p>
            <p>Đồng hồ & trang sức Moissanite cao cấp</p>
            <div className="brand footer-brand">
                <span className="brand-copy"><strong>Trung Kiên</strong><small>Watch · Luxury · Jewelry</small></span>
                <span className="brand-mark"><span>TK</span></span>
            </div>
        </footer>
        <a className="mobile-contact" href={zaloUrl} target="_blank" rel="noreferrer">Nhận tư vấn miễn phí <ArrowIcon /></a>
    </main>
);

export default Home;
