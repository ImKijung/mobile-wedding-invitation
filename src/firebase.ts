import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
  apiKey: "AIzaSyCNHvKbC5mTeQPMf1KOyFea9Zf9k5gmjck",
  authDomain: "mywedding-2fe19.firebaseapp.com",
  projectId: "mywedding-2fe19",
  storageBucket: "mywedding-2fe19.appspot.com",
  messagingSenderId: "326427871768",
  appId: "1:326427871768:web:44997f7afcea8c4904116d",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://mywedding-2fe19-default-rtdb.asia-southeast1.firebasedatabase.app",

};

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
