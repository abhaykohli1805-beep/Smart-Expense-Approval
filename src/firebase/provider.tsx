
'use client';

import {
  type ReactNode,
  createContext,
  useContext,
  useMemo,
  type FC,
} from 'react';
import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';

interface FirebaseContextValue {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
}

const FirebaseContext = createContext<FirebaseContextValue | undefined>(
  undefined,
);

export const FirebaseProvider: FC<{
  value: FirebaseContextValue;
  children: ReactNode;
}> = ({ value, children }) => {
  const contextValue = useMemo(() => value, [value]);
  return (
    <FirebaseContext.Provider value={contextValue}>
      {children}
    </FirebaseContext.Provider>
  );
};

export function useFirebase() {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
}

export function useFirebaseApp(): FirebaseApp {
  return useFirebase().app;
}

export function useAuth(): Auth {
  return useFirebase().auth;
}

export function useFirestore(): Firestore {
  return useFirebase().firestore;
}
