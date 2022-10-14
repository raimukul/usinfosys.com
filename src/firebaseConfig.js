import firebase from "firebase";

//client_side_rendering
const firebaseConfig = {
  apiKey: "AIzaSyBJ9m7RGEQKKfWQ0HJk6E9Zc9HkR8vpmHA",
  authDomain: "admininfosys-ecec3.firebaseapp.com",
  projectId: "admininfosys-ecec3",
  storageBucket: "admininfosys-ecec3.appspot.com",
  messagingSenderId: "896360756559",
  appId: "1:896360756559:web:b20d3f96d4dc617272013a",
};
firebase.initializeApp(firebaseConfig, "main");

export default firebase;
