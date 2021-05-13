# Table Of Contents
1. [Overview](#Overview)
1. [Technologies](#Technologies)
1. [Installation](#Installation)
1. [Setup](#Setup)
1. [Run SpotiBot](#RunSpotiBot)

# Overview
Citizens United is a web app that bridges tech into the community by connecting volunteers with individuals that require assistance with day-to-day activities (senior citizens, single-mothers, etc.) around the Los Angeles area. Users can sign up as "requesters" or "volunteers" and request or accept tasks posted to neighborhood boards. Once a requester and volunteer are matched, they can talk to each other in realtime to arrange a rendevous with each other. After the task is complete, each user can leave a rating for the other, that affects their community credit score seen by other users on CitizensUnited.

# Technologies
- HTML + CSS
- React
- JavaScript
- Express
- MongoDB
- [Firestore](https://firebase.google.com/docs/firestore) (Cloud NoSQL Database)
- [Firebase Authentication](https://firebase.google.com/docs/auth) (User Authentication)

# Installation
1. Clone down the latest version of CitizensUnited from GitHub and navigate to the project directory.
```
$ git clone https://github.com/liamohkay/CitizensUnited
$ cd CitizensUnited
```
2. Using install project dependencies inside the SpotiBot directory.
```
$ npm install
```

# Setup

## Firebase/Firestore
1. Sign up for a [Firebase](https://firebase.google.com/) account and create a new project.

2. Add Firebase to your web app and copy and paste the Firebase SDK configuration settings to `/client/src/firebase/fbConfig-ex.js`
```
// Firebase + Firestore SDK config
const firebaseConfig = {
  apiKey: "FILL_ME_IN",
  authDomain: "FILL_ME_IN",
  projectId: "FILL_ME_IN",
  storageBucket: "FILL_ME_IN",
  messagingSenderId: "FILL_ME_IN",
  appId: "FILL_ME_IN"
};
```

3.  Rename `/client/src/firebase/fbConfig-ex.js` to `/client/src/firebase/fbConfig.js`. Renaming the file will cause it to become gitignored and is the correct filepath for the front-end to import your Firebase configuration.
