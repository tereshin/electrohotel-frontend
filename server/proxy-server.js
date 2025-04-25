const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

// Включаем CORS
app.use(cors());

// Настройка для работы с JSON
app.use(express.json());

// Путь к собранному React приложению
const buildPath = path.join(__dirname, '..', '');

// Проверяем существование директории build
if (!fs.existsSync(buildPath)) {
  console.error('Ошибка: Директория build не найдена. Убедитесь, что вы выполнили npm run build');
  process.exit(1);
}

// Обслуживаем статические файлы из директории build
app.use(express.static(buildPath));

// Проксирование запросов к API Яндекс
app.get('/proxy', async (req, res) => {
  const url = req.query.url;
  
  if (!url) {
    return res.status(400).json({ error: 'URL parameter is required' });
  }

  try {
    // Set headers to mimic a regular browser request
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
      'Referer': 'https://yandex.ru/'
    };

    const response = await axios.get(url, { 
      headers,
      timeout: 10000 // 10 секунд таймаут
    });
    
    res.send(response.data);
  } catch (error) {
    console.error('Proxy error:', error.message);
    res.status(500).json({ 
      error: 'Failed to fetch the requested URL',
      details: error.message
    });
  }
});

// Обработка всех остальных маршрутов - возвращаем index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
  console.log(`Откройте http://localhost:${PORT} в браузере`);
});