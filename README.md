# Table Of Contents
1. [Overview](#Overview)
1. [Technologies](#Technologies)
1. [Installation](#Installation)
1. [Setup](#Setup)
1. [Start](#Start)

# Overview
Citizens United is a web app that bridges tech into the community by connecting volunteers with individuals that require assistance with day-to-day activities (senior citizens, single-mothers, etc.) around the Los Angeles area. Users can sign up as "requesters" or "volunteers" and request or accept tasks posted to neighborhood boards.

![](Home.gif)

Once a requester and volunteer are matched, they can talk to each other in realtime to arrange a rendevous with each other. After the task is complete, each user can leave a rating for the other, that affects their community credit score seen by other users on CitizensUnited.

# Technologies
- HTML + CSS
- React
- JavaScript
- Express
- MongoDB
- [Firebase Storage](https://firebase.google.com/docs/storage) (Photos)
- [Firebase Authentication](https://firebase.google.com/docs/auth) (User Authentication)

# Installation
1. Clone down the latest version of CitizensUnited from GitHub and navigate to the project directory.
```
$ git clone https://github.com/liamohkay/CitizensUnited
$ cd CitizensUnited
```
2. Using install project dependencies inside the CitizensUnited directory.
```
$ npm install
```

# Setup

## Firebase/Firestore
1. Sign up for a [Firebase](https://firebase.google.com/) account and create a new project.

2. Add Firebase to your web app and copy and paste the Firebase SDK configuration settings to `/client/src/firebaseConfig-ex.js`
```
// Firebase + Firestore SDK config
const config = {
  apiKey: "FILL_ME_IN",
  authDomain: "FILL_ME_IN",
  projectId: "FILL_ME_IN",
  storageBucket: "FILL_ME_IN",
  messagingSenderId: "FILL_ME_IN",
  appId: "FILL_ME_IN"
};
```

3.  Rename `/client/src/firebaseConfig-ex.js` to `/client/src/firebaseConfig.js`. Renaming the file will cause it to become git ignored and is the correct filepath for the front-end to import your Firebase configuration.

## MongoDB
1. Add your MongoDB credentials and URL to the `/database/mongoConfig-ex.js`. Note the URL can be for your local machine or a [Compass](https://www.mongodb.com/products/compass) cluster (CitizensUnited used a Compass Cluster).

```
// MongoDB/Compass config
module.exports = {
  user: 'FILL ME IN',
  pass: 'FILL ME IN',
  url: 'FILL ME IN'
};
```

2. Rename `/database/mongoConfig-ex.js` to `/database/mongoConfig-ex.js`. Renaming the file will cause it to become git ignored and is the correct filepath for the back-end to import the database credentials.


# Start
1. Compile the project build.
```
$ npm run build
```
2. Start the express server.
```
$ npm start
```
3. Navigate to the localhost port in your browser. The project default is `localhost:3000`.
