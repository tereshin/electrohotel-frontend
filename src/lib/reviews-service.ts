import axios from 'axios';

interface YandexReview {
  name: string;
  text: string;
  date: string;
  image: string;
  rating: number;
}

const CACHE_KEY = 'yandexReviewsCache';
const CACHE_EXPIRY_KEY = 'yandexReviewsCacheExpiry';
const CACHE_DURATION = 2 * 24 * 60 * 60 * 1000; // 2 days in milliseconds
const YANDEX_REVIEWS_URL = '/fetch-reviews.php';
const BLACKLISTED_NAMES = ['Борис Бритва', '尤金胖的', 'Алексей Пронин'];

// Функция для парсинга HTML с использованием регулярных выражений
// Это запасной вариант, если DOMParser недоступен
const parseHTMLWithRegex = (htmlString: string): YandexReview[] => {
  const reviews: YandexReview[] = [];
  
  // Регулярные выражения для извлечения данных
  const reviewRegex = /<div[^>]*class="[^"]*business-reviews-card-view__review[^"]*"[^>]*>(.*?)<\/div>/gs;
  const nameRegex = /<span[^>]*itemProp="name"[^>]*>(.*?)<\/span>/s;
  const textRegex = /<div[^>]*class="[^"]*business-review-view__body-text[^"]*"[^>]*>(.*?)<\/div>/s;
  const dateRegex = /<span[^>]*class="[^"]*business-review-view__date[^"]*"[^>]*>.*?<span[^>]*>(.*?)<\/span>/s;
  const imageRegex = /<img[^>]*itemprop="image"[^>]*content="([^"]*)"[^>]*>/s;
  const ratingRegex = /<span[^>]*itemProp="ratingValue"[^>]*content="([^"]*)"[^>]*>/s;
  
  let match;
  while ((match = reviewRegex.exec(htmlString)) !== null) {
    const reviewHtml = match[1];
    
    const nameMatch = reviewHtml.match(nameRegex);
    const textMatch = reviewHtml.match(textRegex);
    const dateMatch = reviewHtml.match(dateRegex);
    const imageMatch = reviewHtml.match(imageRegex);
    const ratingMatch = reviewHtml.match(ratingRegex);
    
    if (nameMatch && textMatch && dateMatch && ratingMatch) {
      const name = nameMatch[1].trim();
      
      // Skip blacklisted names
      if (BLACKLISTED_NAMES.includes(name)) {
        continue;
      }
      
      const review: YandexReview = {
        name,
        text: textMatch[1].trim(),
        date: dateMatch[1].trim(),
        image: imageMatch ? imageMatch[1] : '/images/testimonials/avatar1.jpg',
        rating: parseInt(ratingMatch[1] || '0', 10),
      };
      
      reviews.push(review);
    }
  }
  
  return reviews;
};

const parseYandexReviews = (htmlString: string): YandexReview[] => {
  // Проверяем, доступен ли DOMParser
  if (typeof window !== 'undefined' && window.DOMParser) {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlString, 'text/html');
      const reviewElements = doc.querySelectorAll('.business-reviews-card-view__review');
      const reviews: YandexReview[] = [];

      reviewElements.forEach((element) => {
        const nameElement = element.querySelector('[itemProp="name"]');
        const textElement = element.querySelector('.business-review-view__body-text');
        const dateElement = element.querySelector('.business-review-view__date span');
        const imageElement = element.querySelector('[itemprop="image"]');
        const ratingElement = element.querySelector('[itemProp="ratingValue"]');

        if (nameElement && textElement && dateElement && ratingElement) {
          const name = nameElement.textContent?.trim() || '';
          
          // Skip blacklisted names
          if (BLACKLISTED_NAMES.includes(name)) {
            return;
          }

          const review: YandexReview = {
            name,
            text: textElement.textContent?.trim() || '',
            date: dateElement.textContent?.trim() || '',
            image: imageElement?.getAttribute('content') || '/images/testimonials/avatar1.jpg',
            rating: parseInt(ratingElement.getAttribute('content') || '0', 10),
          };

          reviews.push(review);
        }
      });

      return reviews;
    } catch (error) {
      console.error('Error parsing HTML with DOMParser:', error);
      // Fallback to regex parsing
      return parseHTMLWithRegex(htmlString);
    }
  } else {
    // Если DOMParser недоступен, используем парсинг с регулярными выражениями
    return parseHTMLWithRegex(htmlString);
  }
};

export const fetchYandexReviews = async (): Promise<YandexReview[]> => {
  // Check if we have cached reviews that haven't expired
  const cachedData = localStorage.getItem(CACHE_KEY);
  const cacheExpiry = localStorage.getItem(CACHE_EXPIRY_KEY);
  
  if (cachedData && cacheExpiry) {
    const expiryDate = new Date(cacheExpiry);
    if (expiryDate > new Date()) {
      return JSON.parse(cachedData);
    }
  }

  try {
    // Fetch fresh data from our PHP endpoint
    const response = await axios.get(YANDEX_REVIEWS_URL);
    
    if (response.data.error) {
      throw new Error(response.data.error);
    }
    
    const reviews = parseYandexReviews(response.data.html);
    
    // Cache the results
    localStorage.setItem(CACHE_KEY, JSON.stringify(reviews));
    const expiryDate = new Date(Date.now() + CACHE_DURATION);
    localStorage.setItem(CACHE_EXPIRY_KEY, expiryDate.toISOString());
    
    return reviews;
  } catch (error) {
    console.error('Error fetching Yandex reviews:', error);
    
    // Return cached data if available, even if expired
    if (cachedData) {
      return JSON.parse(cachedData);
    }
    
    // Fallback to empty array if no cache
    return [];
  }
};

// Format the Yandex reviews to match the testimonial format used in the application
export const formatYandexReviewsAsTestimonials = (reviews: YandexReview[]) => {
  return reviews.map((review, index) => ({
    id: `yandex-${index}`,
    name: review.name,
    date: review.date,
    text: review.text,
    image: review.image,
    rating: review.rating,
    source: '/images/testimonials/source1.png' // Yandex logo
  }));
}; 