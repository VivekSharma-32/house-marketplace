import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8895Yuzk_pCyejs4dVe6yp-ybqQfhuHM",
  authDomain: "house-marketplace-fd1dc.firebaseapp.com",
  projectId: "house-marketplace-fd1dc",
  storageBucket: "house-marketplace-fd1dc.appspot.com",
  messagingSenderId: "543458807914",
  appId: "1:543458807914:web:4ceb1894e6a56ce9c1fa13",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
