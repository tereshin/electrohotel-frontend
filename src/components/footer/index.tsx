import FooterForm from './form';
import Gallery from '../sliders/gallery';
const Footer = () => {
  return (
    <footer className="bg-[#01362A]">
      <div className="flex flex-col-reverse md:flex-row items-center ">
        <FooterForm />
        <Gallery />
      </div>
      <div className="bg-[#023D30] text-hotel-off-white pt-10 md:pt-20 pb-8">
        <div className="max-w-site mx-auto px-6 md:px-0">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 md:mb-20 font-smoothing-auto">
            {/* Navigation Column */}
            <div className="flex flex-col gap-8">
              <div className="border-b border-hotel-off-white border-opacity-10 pb-4">
                <h3 className="text-xl uppercase font-tt-norms">Карта сайта</h3>
              </div>
              <nav className="flex flex-col gap-5">
                <a href="/" className="text-hotel-off-white hover:opacity-80 transition-opacity">Главная</a>
                <a href="/about" className="text-hotel-off-white hover:opacity-80 transition-opacity">О нас</a>
                <a href="/rooms" className="text-hotel-off-white hover:opacity-80 transition-opacity">Номера</a>
                <a href="/promotions" className="text-hotel-off-white hover:opacity-80 transition-opacity">Акции</a>
                <a href="/services" className="text-hotel-off-white hover:opacity-80 transition-opacity">Услуги</a>
                <a href="/contacts" className="text-hotel-off-white hover:opacity-80 transition-opacity">Контакты</a>
                <a href="/faq" className="text-hotel-off-white hover:opacity-80 transition-opacity">FAQ</a>
              </nav>
            </div>

            {/* Services Column */}
            <div className="flex flex-col gap-8">
              <div className="border-b border-hotel-off-white border-opacity-10 pb-4">
                <h3 className="text-xl uppercase font-tt-norms">Услуги</h3>
              </div>
              <nav className="flex flex-col gap-5">
                <a href="/services/cafe" className="text-hotel-off-white hover:opacity-80 transition-opacity">Уютное кафе</a>
                <a href="/services/ecopark" className="text-hotel-off-white hover:opacity-80 transition-opacity">Экопарк "Авангард"</a>
                <a href="/services/laundry" className="text-hotel-off-white hover:opacity-80 transition-opacity">Прачечная</a>
                <a href="/services/parking" className="text-hotel-off-white hover:opacity-80 transition-opacity">Бесплатная парковка</a>
                <a href="/services/territory" className="text-hotel-off-white hover:opacity-80 transition-opacity">Приватная территория</a>
                <a href="/services/room-service" className="text-hotel-off-white hover:opacity-80 transition-opacity">Обслуживание номеров</a>
                <a href="/services/early-checkin" className="text-hotel-off-white hover:opacity-80 transition-opacity">Ранний заезд / поздний выезд</a>
              </nav>
            </div>

            {/* Rooms Column */}
            <div className="flex flex-col gap-8">
              <div className="border-b border-hotel-off-white border-opacity-10 pb-4">
                <h3 className="text-xl uppercase font-tt-norms">Номера</h3>
              </div>
              <nav className="flex flex-col gap-5">
                <a href="/rooms/standard-single" className="text-hotel-off-white hover:opacity-80 transition-opacity">Стандарт одноместный</a>
                <a href="/rooms/standard" className="text-hotel-off-white hover:opacity-80 transition-opacity">Стандарт</a>
                <a href="/rooms/standard-plus" className="text-hotel-off-white hover:opacity-80 transition-opacity">Стандарт +</a>
                <a href="/rooms/junior-suite" className="text-hotel-off-white hover:opacity-80 transition-opacity">Полулюкс</a>
                <a href="/rooms/junior-suite-plus" className="text-hotel-off-white hover:opacity-80 transition-opacity">Полулюкс +</a>
                <a href="/rooms/suite" className="text-hotel-off-white hover:opacity-80 transition-opacity">Люкс</a>
              </nav>
            </div>
          </div>

          {/* Contact Information */}
          <div className="border-t border-hotel-off-white border-opacity-10 pt-10 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Phone Numbers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-3">
                  <a href="tel:+74965744272" className="text-2xl font-tt-drugs-trial">+7 496 574 42 72</a>
                  <p className="text-sm text-hotel-off-white tracking-wider font-smoothing-auto">Звоните по бронированию отеля</p>
                </div>
                <div className="flex flex-col gap-3">
                  <a href="tel:+79963652330" className="text-2xl font-tt-drugs-trial">+7 996 365 23 30</a>
                  <p className="text-sm text-hotel-off-white tracking-wider font-smoothing-auto">Пишите в WhatsApp и Telegram</p>
                </div>
              </div>

              {/* Email and Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-sm">
              <p>Гостиница «Электросталь» © 2006 – 2025</p>
              <a href="/privacy" className="hover:opacity-80 transition-opacity">Политика обработки персональных данных</a>
              <a href="/terms" className="hover:opacity-80 transition-opacity">Правила использования сайта</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
