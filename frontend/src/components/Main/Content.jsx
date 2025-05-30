// src/components/MainContent.jsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';

const bannerImages = [
  "/images/banner1.png",
  "/images/banner2.png",
  "/images/banner3.png",
  "/images/banner4.png"
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1
};

const MainContent = ({ homeRef, contactRef, menuRef, aboutUsRef }) => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="banner-slider" ref={homeRef}>
        <Slider {...sliderSettings}>
          {bannerImages.map((src, index) => (
            <img key={index} src={src} alt={`Banner ${index}`} />
          ))}
        </Slider>
      </div>

      <div className="menu-part" ref={menuRef}>
        <div className="menu-image">
          <img src="/images/menu.png" alt="menu" />
        </div>
        <button className="gotoCart" onClick={() => navigate('/home')}>Go to Cart</button>
      </div>

      <div className="aboutUs" ref={aboutUsRef}>
        <div className="aboutUs-image">
          <img src="/images/aboutUs.png" alt="About Us" />
        </div>
        <div className="aboutUs-content">
          <h1>About Us</h1>
          <p>Welcome to OKELA! – your go-to spot for fast, tasty, and high-quality fast food.</p>
          <p>We focus on serving delicious meals made with fresh ingredients, prepared quickly to fit your busy life.</p>
          <p>Our team is committed to great food and excellent service, making every visit memorable.</p>
          <p>At OKELA!, we prioritize your satisfaction and aim to deliver a seamless, enjoyable experience every time!</p>
        </div>
      </div>

      <div className="contactUs" ref={contactRef}>
        <div className="contactUs-section">
          <h3>Customer Support</h3>
          <p>Need help with your order? Contact 24/7 support team.</p>
          <p>Email: Fastfoodokela@gmail.com</p>
          <p>Hotline: 0907 7099</p>
        </div>
        <div className="contactUs-section">
          <h3>Store Locations</h3>
          <p>Visit our stores in Ho Chi Minh city to enjoy delicious meals.</p>
          <p>12X An Duong Vuong Street, Ho Chi Minh City</p>
          <p>23Y Nguyen Van Linh, HCM City</p>
        </div>
        <div className="contactUs-section">
          <h3>Follow Us</h3>
          <p>Facebook: @FastFoodExpress</p>
          <p>Instagram: @fastfood.express</p>
          <p>Twitter: @FastFoodX</p>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
