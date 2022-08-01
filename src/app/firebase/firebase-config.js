import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAk9ojuzNWOfUjesQ6BCvVCXGdntrM5L9k",
  authDomain: "abz-agen-test.firebaseapp.com",
  projectId: "abz-agen-test",
  storageBucket: "abz-agen-test.appspot.com",
  messagingSenderId: "239815061750",
  appId: "1:239815061750:web:46d16a402eee859b34bcd7",
  databaseURL: "https://abz-agen-test-default-rtdb.europe-west1.firebasedatabase.app",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getDatabase(app);

