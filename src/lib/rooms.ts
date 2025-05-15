const rooms = [
    {
      id: 1,
      title: "Стандарт",
      description: "Номера категории Стандарт — отличный вариант для категории туристов, которым важно соотношение цены и качества. Идеально для кратковременного размещения.",
      capacity: "Подходит для размещения 1 гостя",
      bed: "Одноместная кровать Smart Slip",
      image: "/images/rooms/1.webp",
      price: "3 500 ₽",
      area: "14",
      gallery: [
        "/images/rooms/standart/1.jpg",
        "/images/rooms/standart/2.jpg",
        "/images/rooms/standart/3.jpg",
        "/images/rooms/standart/4.jpg",
        "/images/rooms/standart/5.jpg",
        "/images/rooms/standart/6.jpg",
        "/images/rooms/standart/7.jpg",
        "/images/rooms/standart/8.jpg"
      ]
    },
    {
      id: 2,
      title: "Комфорт",
      description: "Для Гостей, которые ценят личное пространство и возможность плодотворно работать. При въезде вас будет ждать чай, кофе, круассан и вода. Рекомендуется для длительного пребывания.",
      capacity: "Подходит для размещения 1-2 гостей",
      bed: "Двухместная кровать Premier Lux",
      image: "/images/rooms/2.webp",
      price: "4 400 ₽",
      area: "16",
      gallery: [
        "/images/rooms/comfort/1.jpg",
        "/images/rooms/comfort/2.jpg",
        "/images/rooms/comfort/3.jpg",
        "/images/rooms/comfort/4.jpg",
        "/images/rooms/comfort/5.jpg",
        "/images/rooms/comfort/6.jpg",
        "/images/rooms/comfort/7.jpg",
        "/images/rooms/comfort/8.jpg",
        "/images/rooms/comfort/9.jpg",
        "/images/rooms/comfort/10.jpg"
      ]
    },
    {
      id: 3,
      title: "Комфорт Плюс",
      description: "Номера повышенного комфорта с одной просторной кроватью и уютным диваном. Прекрасный вид на тихий внутренний двор. Больше дневного освещения за счёт большего количества окон.",
      capacity: "Подходит для размещения 1-2 гостей",
      bed: "Двухместная кровать Premier Lux",
      image: "/images/rooms/3.webp",
      price: "4 900 ₽",
      area: "22",
      gallery: [
        "/images/rooms/comfort+/1.jpg",
        "/images/rooms/comfort+/2.jpg",
        "/images/rooms/comfort+/3.jpg",
        "/images/rooms/comfort+/4.jpg",
        "/images/rooms/comfort+/5.jpg",
        "/images/rooms/comfort+/6.jpg",
        "/images/rooms/comfort+/7.jpg",
        "/images/rooms/comfort+/8.jpg",
        "/images/rooms/comfort+/9.jpg",
        "/images/rooms/comfort+/10.jpg"
      ]
    },
    {
      id: 4,
      title: "Комфорт плюс с террасой",
      description: "Комфортабельные номера с террасой отличаются выходом на балкон гостиницы с собственной зоной отдыха, подвесным креслом и уютным столиком. Рекомендуется для длительного...",
      capacity: "Подходит для размещения 1-2 гостей",
      bed: "Двухместная кровать Premier Lux / Две одноместные кровати Smart Slip",
      image: "/assets/images/4.jpg",
      price: "5 400 ₽",
      area: "25",
      gallery: [
        "/images/rooms/comfort+terrace/7.jpg",
        "/images/rooms/comfort+terrace/1.jpg",
        "/images/rooms/comfort+terrace/2.jpg",
        "/images/rooms/comfort+terrace/3.jpg",
        "/images/rooms/comfort+terrace/4.jpg",
        "/images/rooms/comfort+terrace/5.jpg",
        "/images/rooms/comfort+terrace/6.jpg",
        "/images/rooms/comfort+terrace/8.jpg",
        "/images/rooms/comfort+terrace/9.jpg"
      ]
    },
    {
      id: 5,
      title: "Комфорт плюс с террасой 2 кровати",
      description: "Комфортабельные номера с террасой отличаются выходом на балкон гостиницы с собственной зоной отдыха, подвесным креслом и уютным столиком. Рекомендуется для длительного...",
      capacity: "Подходит для размещения 1-2 гостей",
      bed: "Двухместная кровать Premier Lux / Две одноместные кровати Smart Slip",
      image: "/images/rooms/4.webp",
      price: "5 400 ₽",
      area: "25",
      gallery: [
        "/images/rooms/comfort+terrace/5.jpg",
        "/images/rooms/comfort+terrace/6.jpg",
        "/images/rooms/comfort+terrace/2.jpg",
        "/images/rooms/comfort+terrace/1.jpg",
        "/images/rooms/comfort+terrace/4.jpg",
        "/images/rooms/comfort+terrace/3.jpg",
        "/images/rooms/comfort+terrace/8.jpg",
        "/images/rooms/comfort+terrace/10.jpg",
        "/images/rooms/comfort+terrace/7.jpg",
        "/images/rooms/comfort+terrace/9.jpg"
      ]
    },
    {
      id: 6,
      title: "Делюкс",
      description: "Номера «Делюкс» — это элегантные и просторные номера с разными сценариями освещения и подсветки. Ортопедический матрас и эргономичный диван с журнальным столиком позволят...",
      capacity: "Подходит для размещения 1-3 гостей",
      bed: "Двухместная кровать Grand Deluxe + эргономичный диван",
      image: "/images/rooms/5.webp",
      price: "5 900 ₽",
      area: "26",
      gallery: [
        "/images/rooms/deluxe/1.jpg",
        "/images/rooms/deluxe/2.jpg",
        "/images/rooms/deluxe/3.jpg",
        "/images/rooms/deluxe/4.jpg",
        "/images/rooms/deluxe/5.jpg",
        "/images/rooms/deluxe/6.jpg",
        "/images/rooms/deluxe/7.jpg",
        "/images/rooms/deluxe/8.jpg",
        "/images/rooms/deluxe/9.jpg",
        "/images/rooms/deluxe/10.jpg"
      ]
    },
    {
      id: 7,
      title: "Делюкс 2 кровати",
      description: "Номера «Делюкс» — это элегантные и просторные номера с разными сценариями освещения и подсветки. Ортопедический матрас и эргономичный диван с журнальным столиком позволят...",
      capacity: "Подходит для размещения 1-3 гостей",
      bed: "Две одноместные кровати Smart Slip + эргономичный диван",
      image: "/images/rooms/6.webp",
      price: "5 900 ₽",
      area: "26",
      gallery: [
        "/images/rooms/deluxe-2/1.jpg",
        "/images/rooms/deluxe-2/2.jpg",
        "/images/rooms/deluxe-2/3.jpg",
        "/images/rooms/deluxe-2/4.jpg",
        "/images/rooms/deluxe-2/5.jpg",
        "/images/rooms/deluxe-2/6.jpg",
        "/images/rooms/deluxe-2/7.jpg",
        "/images/rooms/deluxe-2/8.jpg",
        "/images/rooms/deluxe-2/9.jpg",
        "/images/rooms/deluxe-2/10.jpg"
      ]
    },
    {
      id: 8,
      title: "Двухкомнатный Люкс",
      description: "Самый большой по площади номер в отеле. Оснащен KingSize кроватью, интерьерной подсветкой и двухместным диваном. Просторная планировка с отдельной гостиной...",
      capacity: "Подходит для размещения 1-4 гостей",
      bed: "Двухместная кровать King Size + двухместный диван",
      image: "/images/rooms/7.webp",
      price: "6 900 ₽",
      area: "35",
      gallery: [
        "/images/rooms/lux/1.jpg",
        "/images/rooms/lux/2.jpg",
        "/images/rooms/lux/3.jpg",
        "/images/rooms/lux/4.jpg",
        "/images/rooms/lux/5.jpg",
        "/images/rooms/lux/6.jpg",
        "/images/rooms/lux/7.jpg",
        "/images/rooms/lux/8.jpg",
        "/images/rooms/lux/9.jpg",
        "/images/rooms/lux/10.jpg",
        "/images/rooms/lux/11.jpg",
        "/images/rooms/lux/12.jpg",
        "/images/rooms/lux/13.jpg"
      ]
    }
  ];    

  export default rooms;