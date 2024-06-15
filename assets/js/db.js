const firebaseConfig = {
  apiKey: "AIzaSyD-Rl01Heb8s4iYiWqGrqeDXBLHusDbM08",
  authDomain: "bilangan-cacah.firebaseapp.com",
  projectId: "bilangan-cacah",
  storageBucket: "bilangan-cacah.appspot.com",
  messagingSenderId: "583359796819",
  appId: "1:583359796819:web:72cb29c67a32b05945d8a6",
  measurementId: "G-N6TCBMGLWZ"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const storage = firebase.storage();

