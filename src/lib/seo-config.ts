export interface SeoPageConfig {
  title: string;
  description: string;
  keywords: string;
  canonical_url: string;
  og_image?: string;
  json_ld?: object;
}

// Базовая информация об отеле для JSON-LD
const base_hotel_data = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Гостинничный комплекс Электросталь",
  "description": "Уютное и современное пространство для тех, кто ценит комфорт без лишней суеты",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ул. Расковой, д. 6",
    "addressLocality": "Электросталь",
    "addressRegion": "Московская область",
    "addressCountry": "RU"
  },
  "telephone": "+7 496 574 42 72",
  "email": "info@electrohotel.ru",
  "url": "https://electrohotel.ru",
  "image": "https://electrohotel.ru/images/cover.jpg",
  "priceRange": "$$",
  "amenityFeature": [
    {"@type": "LocationFeatureSpecification", "name": "Бесплатный WiFi"},
    {"@type": "LocationFeatureSpecification", "name": "Парковка"},
    {"@type": "LocationFeatureSpecification", "name": "Кафетерий 24/7"},
    {"@type": "LocationFeatureSpecification", "name": "Приватная территория"},
    {"@type": "LocationFeatureSpecification", "name": "Круглосуточная стойка регистрации"}
  ]
};

export const seo_config: Record<string, SeoPageConfig> = {
  home: {
    title: "Гостинничный комплекс «Электросталь»",
    description: "Уютное и современное пространство для тех, кто ценит комфорт без лишней суеты. Отель в центре Электростали с бесплатным WiFi, парковкой и кафетерием 24/7.",
    keywords: "отель электросталь, гостиница электросталь, отель московская область, бронирование номеров, гостиничный комплекс",
    canonical_url: "/",
    json_ld: {
      "@context": "https://schema.org",
      "@graph": [
        base_hotel_data,
        {
          "@type": "WebSite",
          "name": "Гостинничный комплекс Электросталь",
          "url": "https://electrohotel.ru"
        }
      ]
    }
  },
  
  rooms: {
    title: "Номерной фонд",
    description: "Уютные номера с лаконичным дизайном в гостиничном комплексе Электросталь. Стандарт, комфорт, комфорт+, люкс - выберите подходящий номер для отдыха.",
    keywords: "номера отель электросталь, бронирование номеров, стандарт, комфорт, люкс, гостиничные номера",
    canonical_url: "/rooms",
    json_ld: {
      "@context": "https://schema.org",
      "@type": "Hotel",
      ...base_hotel_data,
      "containsPlace": [
        {
          "@type": "HotelRoom",
          "name": "Стандарт",
          "description": "Уютный номер с базовыми удобствами"
        },
        {
          "@type": "HotelRoom", 
          "name": "Комфорт",
          "description": "Комфортабельный номер с улучшенными удобствами"
        },
        {
          "@type": "HotelRoom",
          "name": "Люкс",
          "description": "Роскошный номер с максимальным комфортом"
        }
      ]
    }
  },
  
  about: {
    title: "Об отеле",
    description: "Гостиничный комплекс Электросталь расположен в центре города. Узнайте больше об истории, услугах и особенностях нашего отеля.",
    keywords: "об отеле электросталь, история отеля, услуги гостиницы, отель центр электростали",
    canonical_url: "/about",
    json_ld: base_hotel_data
  },
  
  promotions: {
    title: "Акции и спецпредложения",
    description: "Актуальные акции и спецпредложения гостиничного комплекса Электросталь. Скидки на проживание, групповые тарифы и сезонные предложения.",
    keywords: "акции отель электросталь, скидки на проживание, спецпредложения гостиница, групповые скидки",
    canonical_url: "/promotions",
    json_ld: {
      "@context": "https://schema.org",
      "@type": "Hotel",
      ...base_hotel_data,
      "makesOffer": {
        "@type": "Offer",
        "name": "Специальные предложения",
        "description": "Актуальные акции и скидки на проживание"
      }
    }
  },
  
  services: {
    title: "Услуги отеля",
    description: "Полный спектр услуг гостиничного комплекса Электросталь: кафетерий 24/7, парковка, прачечная, room-service и другие сервисы для комфортного проживания.",
    keywords: "услуги отель электросталь, кафетерий, парковка, прачечная, room service, миграционная поддержка",
    canonical_url: "/services",
    json_ld: base_hotel_data
  },
  
  "services/cafeteria": {
    title: "Кафетерий 24/7 с полным пансионом",
    description: "Круглосуточный кафетерий в гостиничном комплексе Электросталь. Завтраки, обеды, ужины. Выберите тип питания: без питания, только завтраки, полупансион или полный пансион.",
    keywords: "кафетерий отель электросталь, питание 24/7, завтраки, полный пансион, полупансион",
    canonical_url: "/services/cafeteria",
    json_ld: {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Кафетерий Электросталь",
      "description": "Круглосуточный кафетерий с полным пансионом",
      "openingHours": "Mo-Su 00:00-24:00",
      "servesCuisine": "Европейская кухня",
      "containedInPlace": base_hotel_data
    }
  },
  
  "services/parking": {
    title: "Бесплатная парковка",
    description: "Бесплатная охраняемая парковка для гостей гостиничного комплекса Электросталь. Безопасная стоянка для автомобилей круглосуточно.",
    keywords: "парковка отель электросталь, бесплатная парковка, охраняемая стоянка, парковочные места",
    canonical_url: "/services/parking"
  },
  
  "services/eco-park": {
    title: "Экопарк Авангард напротив отеля",
    description: "Гостиничный комплекс Электросталь расположен в 3 минутах ходьбы от экопарка Авангард. Отдых на природе, пешеходные дорожки, игровые площадки.",
    keywords: "экопарк авангард электросталь, парк рядом с отелем, отдых на природе, экопарк",
    canonical_url: "/services/eco-park"
  },
  
  "services/laundry": {
    title: "Прачечная",
    description: "Услуги прачечной в гостиничном комплексе Электросталь. Стирка и доставка чистых вещей прямо в номер. Бережная стирка деликатных тканей.",
    keywords: "прачечная отель электросталь, стирка вещей, доставка в номер, услуги прачечной",
    canonical_url: "/services/laundry"
  },
  
  "services/private-terrace": {
    title: "Приватная территория",
    description: "Приватная территория гостиничного комплекса Электросталь для отдыха гостей. Уютная закрытая зона для комфортного времяпрепровождения.",
    keywords: "приватная территория отель, закрытая территория, зона отдыха электросталь",
    canonical_url: "/services/private-terrace"
  },
  
  "services/room-service": {
    title: "Обслуживание номеров",
    description: "Профессиональное обслуживание номеров в гостиничном комплексе Электросталь. Уборка, смена белья, дополнительные услуги для комфорта гостей.",
    keywords: "room service электросталь, обслуживание номеров, уборка номеров, смена белья",
    canonical_url: "/services/room-service"
  },
  
  "services/check-in": {
    title: "Ранний заезд / поздний выезд",
    description: "Услуги раннего заезда и позднего выезда в гостиничном комплексе Электросталь. Гибкое время регистрации для максимального удобства гостей.",
    keywords: "ранний заезд электросталь, поздний выезд, гибкая регистрация, early check-in",
    canonical_url: "/services/check-in"
  },
  
  "services/migration": {
    title: "Миграционная поддержка",
    description: "Миграционная поддержка для гостей гостиничного комплекса Электросталь. Помощь в оформлении документов и миграционном учете.",
    keywords: "миграционная поддержка электросталь, миграционный учет, оформление документов",
    canonical_url: "/services/migration"
  },
  
  contacts: {
    title: "Контакты",
    description: "Контактная информация гостиничного комплекса Электросталь. Адрес: ул. Расковой, д. 6. Телефон: +7 496 574 42 72. Бронирование и вопросы.",
    keywords: "контакты отель электросталь, телефон гостиницы, адрес отеля, бронирование номеров",
    canonical_url: "/contacts",
    json_ld: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": base_hotel_data
    }
  },
  
  faq: {
    title: "Вопросы и ответы",
    description: "Часто задаваемые вопросы о гостиничном комплексе Электросталь. Ответы на популярные вопросы о бронировании, услугах и проживании.",
    keywords: "faq отель электросталь, часто задаваемые вопросы, ответы гостиница, помощь гостям",
    canonical_url: "/faq"
  },
  
  privacy: {
    title: "Политика персональных данных",
    description: "Политика обработки персональных данных гостиничного комплекса Электросталь. Защита конфиденциальности и безопасность данных гостей.",
    keywords: "политика конфиденциальности, персональные данные, защита данных, приватность",
    canonical_url: "/privacy"
  }
}; 