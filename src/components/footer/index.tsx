import FooterForm from './form';
import Gallery from '../sliders/gallery';
import { Link } from 'react-router-dom';
const images = [
  "/assets/images/1.jpg",
  "/assets/images/2.jpg",
  "/assets/images/3.jpg",
  "/assets/images/4.jpg",
  "/images/home/3.webp",
  "/assets/images/9.jpg",
  "/assets/images/7.jpg",
  "/assets/images/8.jpg",
];
const Footer = () => {
  return (
    <footer className="bg-[#01362A]">
      <div className="flex flex-col-reverse lg:flex-row items-center max-w-[1600px] mx-auto">
        <FooterForm />
        <Gallery className="lg:w-1/2" images={images} size="narrow" />
      </div>
      <div className="bg-[#023D30] text-hotel-off-white pt-10 lg:pt-20 pb-8">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-0">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10 lg:mb-20 font-smoothing-auto">
            {/* Navigation Column */}
            <div className="flex flex-col gap-8">
              <div className="border-b border-hotel-off-white border-opacity-10 pb-4">
                <h3 className="text-xl uppercase font-tt-norms">Карта сайта</h3>
              </div>
              <nav className="flex flex-col gap-5">
                <Link to="/" className="text-hotel-off-white hover:opacity-80 transition-opacity">Главная</Link>
                <Link to="/about" className="text-hotel-off-white hover:opacity-80 transition-opacity">О нас</Link>
                <Link to="/rooms" className="text-hotel-off-white hover:opacity-80 transition-opacity">Номера</Link>
                <Link to="/promotions" className="text-hotel-off-white hover:opacity-80 transition-opacity">Акции</Link>
                <Link to="/services" className="text-hotel-off-white hover:opacity-80 transition-opacity">Услуги</Link>
                <Link to="/contacts" className="text-hotel-off-white hover:opacity-80 transition-opacity">Контакты</Link>
                <Link to="/faq" className="text-hotel-off-white hover:opacity-80 transition-opacity">FAQ</Link>
              </nav>
            </div>

            {/* Services Column */}
            <div className="flex flex-col gap-8">
              <div className="border-b border-hotel-off-white border-opacity-10 pb-4">
                <h3 className="text-xl uppercase font-tt-norms">Услуги</h3>
              </div>
              <nav className="flex flex-col gap-5">
                <Link to="/services/cafeteria" className="text-hotel-off-white hover:opacity-80 transition-opacity">Уютное кафе</Link>
                <Link to="/services/eco-park" className="text-hotel-off-white hover:opacity-80 transition-opacity">Экопарк "Авангард"</Link>
                <Link to="/services/laundry" className="text-hotel-off-white hover:opacity-80 transition-opacity">Прачечная</Link>
                <Link to="/services/parking" className="text-hotel-off-white hover:opacity-80 transition-opacity">Бесплатная парковка</Link>
                <Link to="/services/private-terrace" className="text-hotel-off-white hover:opacity-80 transition-opacity">Приватная территория</Link>
                <Link to="/services/room-service" className="text-hotel-off-white hover:opacity-80 transition-opacity">Обслуживание номеров</Link>
                <Link to="/services/check-in" className="text-hotel-off-white hover:opacity-80 transition-opacity">Ранний заезд / поздний выезд</Link>
              </nav>
            </div>

            {/* Rooms Column */}
            <div className="flex flex-col gap-8">
              <div className="border-b border-hotel-off-white border-opacity-10 pb-4">
                <h3 className="text-xl uppercase font-tt-norms">Номера</h3>
              </div>
              <nav className="flex flex-col gap-5">
                <Link to="/rooms" className="text-hotel-off-white hover:opacity-80 transition-opacity">Стандарт одноместный</Link>
                <Link to="/rooms" className="text-hotel-off-white hover:opacity-80 transition-opacity">Стандарт</Link>
                <Link to="/rooms" className="text-hotel-off-white hover:opacity-80 transition-opacity">Стандарт +</Link>
                <Link to="/rooms" className="text-hotel-off-white hover:opacity-80 transition-opacity">Полулюкс</Link>
                <Link to="/rooms" className="text-hotel-off-white hover:opacity-80 transition-opacity">Полулюкс +</Link>
                <Link to="/rooms" className="text-hotel-off-white hover:opacity-80 transition-opacity">Люкс</Link>
              </nav>
            </div>
          </div>

          {/* Contact Information */}
          <div className="border-t border-hotel-off-white border-opacity-10 pt-10 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Phone Numbers */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col gap-3">
                  <a href="tel:+74965744272" className="text-2xl font-tt-drugs-trial">+7 496 574 42 72</a>
                  <p className="text-sm text-hotel-off-white tracking-wider font-smoothing-auto">Звоните по бронированию отеля</p>
                </div>
                <div className="flex flex-col gap-3">
                  <a href="https://wa.clck.bar/79963652330?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9C%D0%BE%D0%B6%D0%BD%D0%BE%20%D0%BB%D0%B8%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%BD%D0%BE%D0%BC%D0%B5%D1%80%20%D0%BD%D0%B0%20" className="text-2xl font-tt-drugs-trial" target="_blank" rel="noopener noreferrer">+7 996 365 23 30</a>
                  <p className="text-sm text-hotel-off-white tracking-wider font-smoothing-auto">Пишите в WhatsApp и Telegram</p>
                </div>
              </div>

              {/* Email and Address */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col gap-3">
                  <a href="mailto:UTShotel@yandex.ru" className="text-2xl font-tt-drugs-trial">UTShotel@yandex.ru</a>
                  <p className="text-sm text-hotel-off-white tracking-wider font-smoothing-auto">Пишите по любым вопросам</p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-2xl font-tt-drugs-trial">г. Электросталь, ул. <br/>Расковой, д. 6</p>
                  <p className="text-sm text-hotel-off-white tracking-wider font-smoothing-auto">Приезжайте в наш отель</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-hotel-off-white border-opacity-10 pt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 text-sm">
              <p>Гостиница «Электросталь» © 2006 – 2025</p>
              <Link to="/privacy" className="hover:opacity-80 transition-opacity">Политика обработки персональных данных</Link>
              <Link to="/terms" className="hover:opacity-80 transition-opacity">Правила использования сайта</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
