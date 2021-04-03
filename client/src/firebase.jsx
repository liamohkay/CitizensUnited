import config from './firebaseConfig.js';
import firebase from 'firebase/app';
import "firebase/storage";
import 'firebase/auth';

const fb = firebase.initializeApp({
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId
});

export const storage = fb.storage();
export const auth = fb.auth();
export default fb;
