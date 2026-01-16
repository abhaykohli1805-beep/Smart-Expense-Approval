
import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';

import { firebaseConfig } from './config';

interface FirebaseInstances {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
}

export function initializeFirebase(): FirebaseInstances {
  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  // In a real app, you might want to connect to emulators in development
  // if (process.env.NODE_ENV === 'development') {
  //   try {
  //     connectAuthEmulator(auth, 'http://localhost:9099');
  //     connectFirestoreEmulator(firestore, 'localhost', 8080);
  //   } catch (e) {
  //     console.error('Error connecting to Firebase emulators', e);
  //   }
  // }
  
  return { app, auth, firestore };
}

export {
  FirebaseProvider,
  useFirebase,
  useFirebaseApp,
  useAuth,
  useFirestore,
} from './provider';

export { FirebaseClientProvider } from './client-provider';

export { useUser } from './auth/use-user';
