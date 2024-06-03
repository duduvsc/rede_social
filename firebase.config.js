import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBgcKaG4K9ayCUOeHbg7MUaE3Q2mFlWmSY  ",
  authDomain: "socialappa-ac496.firebaseapp.com",
  projectId: "socialappa-ac496",
  storageBucket: "socialappa-ac496.appspot.com",
  messagingSenderId: "705882414150  ",
  appId: "1:705882414150:web:8b7b3c6aac6916797e3e47",
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const storage = getStorage(app);

export { auth, storage };
