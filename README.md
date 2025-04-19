**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Запуск в production

Для запуска проекта в production режиме выполните:

```bash
# Сборка проекта и запуск сервера
npm run prod
```

Это выполнит сборку проекта и запустит прокси-сервер, который будет обслуживать статические файлы и обрабатывать запросы к API.

Если вы получаете ошибку о занятом порте, выполните следующие действия:

1. Найдите процесс, который занимает порт 3001:
   ```bash
   lsof -i :3001
   ```

2. Завершите этот процесс:
   ```bash
   kill -9 <PID>
   ```
   где <PID> - идентификатор процесса из предыдущей команды

3. Затем снова запустите проект:
   ```bash
   npm run prod
   ```

## Работа с отзывами Яндекс

Проект настроен на автоматическое получение отзывов с Яндекс.Карт для отеля "Электросталь". Отзывы кешируются на 2 дня и обновляются автоматически.

Для тестирования работы с отзывами:

1. Запустите проект в режиме разработки:
   ```bash
   # Терминал 1 - фронтенд
   npm run dev
   
   # Терминал 2 - прокси-сервер
   npm run server
   ```

2. Откройте приложение в браузере и перейдите на главную страницу, где должны отображаться отзывы.