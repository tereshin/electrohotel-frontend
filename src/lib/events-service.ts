import axios from 'axios';

interface EventData {
  id: number;
  image: string;
  type: string;
  title: string;
  dates: string;
  price: string;
  link: string;
}

const CACHE_KEY = 'afishaEventsCache';
const CACHE_EXPIRY_KEY = 'afishaEventsCacheExpiry';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 1 day in milliseconds
const AFISHA_URL = 'https://www.afisha.ru/electrostal/';

// Определяем URL прокси в зависимости от окружения
const PROXY_URL = '/proxy.php';

const parseAfishaEvents = (htmlString: string): EventData[] => {
  const events: EventData[] = [];
  
  // Создаем временный DOM для парсинга
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  
  // Получаем все элементы событий
  const eventElements = doc.querySelectorAll('body main>section:first-child>div [data-test="ITEM"]');
  
  eventElements.forEach((element, index) => {
    const imageElement = element.querySelector('img[data-test="IMAGE"]');
    const badgeElement = element.querySelector('[data-test="ITEM-BADGE"]');
    const nameElement = element.querySelector('[data-test="ITEM-NAME"]');
    const metaElement = element.querySelector('[data-test="ITEM-META"]');
    const buttonElement = element.querySelector('a[data-test="LINK LINK-BUTTON"]');
    
    if (imageElement && badgeElement && nameElement && metaElement && buttonElement) {
      const event: EventData = {
        id: index + 1,
        image: imageElement.getAttribute('src') || '',
        type: badgeElement.textContent?.trim() || '',
        title: nameElement.textContent?.trim() || '',
        dates: metaElement.textContent?.trim() || '',
        price: buttonElement.textContent?.trim() || '',
        link: buttonElement.getAttribute('href') || '',
      };
      
      events.push(event);
    }
  });
  
  return events;
};

export const fetchAfishaEvents = async (): Promise<EventData[]> => {
  // Проверяем кэш
  const cachedData = localStorage.getItem(CACHE_KEY);
  const cacheExpiry = localStorage.getItem(CACHE_EXPIRY_KEY);
  
  if (cachedData && cacheExpiry) {
    const expiryDate = new Date(cacheExpiry);
    if (expiryDate > new Date()) {
      return JSON.parse(cachedData);
    }
  }

  try {
    const url = PROXY_URL+'?url='+AFISHA_URL;

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const htmlString = await response.text();
    const events = parseAfishaEvents(htmlString);
    
    // Кэшируем результаты
    localStorage.setItem(CACHE_KEY, JSON.stringify(events));
    const expiryDate = new Date(Date.now() + CACHE_DURATION);
    localStorage.setItem(CACHE_EXPIRY_KEY, expiryDate.toISOString());
    
    return events;
  } catch (error) {
    console.error('Error fetching Afisha events:', error);
    
    // Возвращаем кэшированные данные, если они есть, даже если срок истек
    if (cachedData) {
      return JSON.parse(cachedData);
    }
    
    // Возвращаем пустой массив, если нет кэша
    return [];
  }
}; 