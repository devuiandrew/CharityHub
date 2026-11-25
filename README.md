# Charity Hub

Лендинг вымышленного благотворительного фонда с онлайн-музеем. Посетители могут узнать о фонде, посмотреть его коллекции и выбрать, как его поддержать. Пользователи, вошедшие через Google, могут участвовать в обсуждении в разделе комментариев.

Это пет-проект, сделанный для практики в React, адаптивной вёрстке и Firebase.

## Возможности

- **Адаптивная вёрстка**: мобильное меню и шапка, которая закрепляется при прокрутке.
- **Вход через Google** с помощью Firebase Authentication (необязательно).
- **Комментарии в реальном времени** с хранением в Cloud Firestore (необязательно). Вошедшие пользователи могут писать комментарии, отвечать на них, а также редактировать и удалять свои.
- **Разделы страницы**: «О фонде», «Сила добрых дел», «Наши коллекции», «Как помочь» и «Контакты».

## Технологии

- [React 18](https://react.dev/) (проект создан через [Create React App](https://create-react-app.dev/))
- [Firebase 9](https://firebase.google.com/): Authentication и Cloud Firestore
- [Ionicons](https://ionic.io/ionicons) для иконок
- Обычный CSS с медиазапросами для адаптивности

## Запуск

### Что понадобится

- Node.js 16 или новее и npm
- Проект Firebase, если нужны вход и комментарии (хватит бесплатного тарифа Spark)

### 1. Клонирование и установка

```bash
git clone https://github.com/devuiandrew/CharityHub.git
cd CharityHub
npm install
```

### 2. Настройка Firebase (необязательно)

Без Firebase сайт работает как обычный статический лендинг: кнопка входа и раздел комментариев скрыты. Чтобы включить их:

1. Создайте проект в [консоли Firebase](https://console.firebase.google.com/).
2. Добавьте **Web app** и скопируйте его конфигурацию.
3. В разделе **Authentication → Sign-in method** включите вход через **Google**.
4. Создайте базу **Cloud Firestore**. Приложение использует одну коллекцию — `comments`.
5. Скопируйте `.env.example` в `.env` и заполните значения:

```bash
cp .env.example .env
```

```env
REACT_APP_FIREBASE_API_KEY=...
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=...
REACT_APP_FIREBASE_APP_ID=...
```

#### Рекомендуемые правила безопасности Firestore

С этими правилами читать комментарии может любой посетитель, создавать — только вошедшие пользователи, а редактировать и удалять — только автор комментария:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /comments/{commentId} {
      allow read: if true;
      allow create: if request.auth != null
                    && request.resource.data.userId == request.auth.uid;
      allow update, delete: if request.auth != null
                            && resource.data.userId == request.auth.uid;
    }
  }
}
```

### 3. Запуск

```bash
npm start
```

Приложение откроется по адресу [http://localhost:3000](http://localhost:3000).

## Команды

| Команда         | Что делает                                                     |
| --------------- | -------------------------------------------------------------- |
| `npm start`     | Запускает приложение в режиме разработки с автоперезагрузкой.  |
| `npm test`      | Запускает тесты в режиме отслеживания изменений.               |
| `npm run build` | Собирает оптимизированную продакшен-версию в папку `build/`.   |

## Структура проекта

```
src/
├── components/
│   ├── Authentication/   # Инициализация Firebase (пропускается без конфигурации)
│   ├── Feedback/         # Комментарии: список, отдельный комментарий, форма
│   ├── hooks/            # React-контекст с текущим пользователем
│   ├── Header.js         # Навигация и кнопка входа
│   ├── HomePage.js       # Главный экран
│   ├── AboutUs.js        # Миссия, видение, ценности
│   ├── Purpose.js        # «Сила добрых дел»
│   ├── Collection.js     # Коллекции музея
│   ├── Donation.js       # Как помочь фонду
│   └── Footer.js
├── css/                  # Общие стили и медиазапросы
├── images/
└── App.js
```

## Деплой

`npm run build` собирает статический сайт, который можно разместить где угодно: например, на Firebase Hosting, Netlify, Vercel или GitHub Pages. Если используете Firebase, добавьте домен сайта в **Authentication → Settings → Authorized domains**, иначе вход через Google там работать не будет.

## Примечание

Весь контент (название организации, адрес, телефон, коллекции) — заглушки. Charity Hub не является реальным фондом.
