// Tenes que traer a firebase
import * as firebase from "firebase/app";

// Tenes que traer el servicio que vas a usar
import "firebase/firestore" 

// Tenes que inicializar la app
const firebaseConfig = {
  apiKey: "AIzaSyDF-ej72I622FFKyprQ_ckdiP449hPXzHI",
  authDomain: "coderouse-ecommerce.firebaseapp.com",
  projectId: "coderouse-ecommerce",
  storageBucket: "coderouse-ecommerce.appspot.com",
  messagingSenderId: "557374757782",
  appId: "1:557374757782:web:a5cd1fbe10892d87265bb7"
};

const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)