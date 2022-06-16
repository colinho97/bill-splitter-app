// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRhvykLcjfVlie-fnz8W2kLk4qN-FCf58",
    authDomain: "bill-splitter-app-e7ca6.firebaseapp.com",
    projectId: "bill-splitter-app-e7ca6",
    storageBucket: "bill-splitter-app-e7ca6.appspot.com",
    messagingSenderId: "817136112213",
    appId: "1:817136112213:web:5b5d34662ccc267b8d3adc",
    measurementId: "G-EQZX9DWZVD"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

export default firebase;