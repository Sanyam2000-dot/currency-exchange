import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyCivT5Q4-B_iN6TJsnebHjR2E-SZfp7hFg",
    authDomain: "cure-67887.firebaseapp.com",
    projectId: "cure-67887",
    storageBucket: "cure-67887.appspot.com",
    messagingSenderId: "900895886697",
    appId: "1:900895886697:web:77ea2237ef790f650301f8",
};
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);