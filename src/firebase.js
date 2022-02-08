import { alertTitleClasses } from '@mui/material';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyAuKC1Q_JMAAPA7i4Rok-mNR_-4CcjwtsQ',

  authDomain: 'codex-website-d5c90.firebaseapp.com',

  projectId: 'codex-website-d5c90',

  storageBucket: 'codex-website-d5c90.appspot.com',

  messagingSenderId: '45394275998',

  appId: '1:45394275998:web:18cedd821d2f7907fdd58f',

  measurementId: 'G-MHS42VR71P',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
