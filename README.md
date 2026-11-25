# Charity Hub

A landing page for a fictional charitable foundation with an online museum. Visitors can read about the foundation, browse its collections and see the ways to support it. Users who sign in with Google can join the discussion in a comment section.

This is a pet project built to practice React, responsive layout and Firebase.

## Features

- **Responsive layout**, with a mobile navigation menu and a header that sticks to the top on scroll.
- **Google sign-in** through Firebase Authentication (optional).
- **Live comments** stored in Cloud Firestore (optional). Signed-in users can post, reply, edit and delete their own comments, and updates appear in real time.
- **Content sections**: About, The Power of Giving, Our Collection, Ways to Support and Contacts.

## Tech stack

- [React 18](https://react.dev/) (bootstrapped with [Create React App](https://create-react-app.dev/))
- [Firebase 9](https://firebase.google.com/): Authentication and Cloud Firestore
- [Ionicons](https://ionic.io/ionicons) for icons
- Plain CSS, with media queries for responsiveness

## Getting started

### Prerequisites

- Node.js 16 or later, with npm
- Optionally, a Firebase project (the free Spark plan is enough), if you want sign-in and comments

### 1. Clone and install

```bash
git clone https://github.com/<your-username>/CharityHub.git
cd CharityHub
npm install
```

### 2. Configure Firebase (optional)

Without Firebase the site works as a static landing page: the sign-in button and the comment section are hidden. To enable them:

1. Create a project in the [Firebase Console](https://console.firebase.google.com/).
2. Add a **Web app** and copy its config.
3. Go to **Authentication → Sign-in method** and enable **Google**.
4. Create a **Cloud Firestore** database. The app uses a single collection named `comments`.
5. Copy `.env.example` to `.env` and fill in the values:

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

#### Recommended Firestore security rules

These rules let anyone read comments, let signed-in users create comments, and let users edit or delete only their own comments:

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

### 3. Run

```bash
npm start
```

The app opens at [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command         | Description                                           |
| --------------- | ----------------------------------------------------- |
| `npm start`     | Runs the app in development mode with hot reload.     |
| `npm test`      | Runs the tests in watch mode.                         |
| `npm run build` | Builds an optimized production bundle into `build/`.  |

## Project structure

```
src/
├── components/
│   ├── Authentication/   # Firebase initialization (skipped when not configured)
│   ├── Feedback/         # Comment section (list, single comment, form)
│   ├── hooks/            # React context for the current user
│   ├── Header.js         # Navigation and sign-in button
│   ├── HomePage.js       # Hero section
│   ├── AboutUs.js        # Mission, vision, values
│   ├── Purpose.js        # "The Power of Giving"
│   ├── Collection.js     # Museum collections
│   ├── Donation.js       # Ways to support
│   └── Footer.js
├── css/                  # Global styles and media queries
├── images/
└── App.js
```

## Deployment

`npm run build` produces a static site that can be hosted anywhere, for example on Firebase Hosting, Netlify, Vercel or GitHub Pages. If you use Firebase, add your production domain under **Authentication → Settings → Authorized domains**, or Google sign-in will not work there.

## Notes

All the content (the organization, address, phone number and collections) is placeholder text. Charity Hub is not a real foundation.
