import { FirebaseApp, initializeApp } from 'firebase/app';
import { Database, getDatabase } from "firebase/database";
import { firebaseConfig } from './config';

// TODO: Setup analytics
// import { getAnalytics } from "firebase/analytics";
// const analytics = getAnalytics(app);

export const app = (() => {
  let app: FirebaseApp | null
  let db: Database

  const initApp = () => {
    try {
      console.log('Initialising firebase')
      
      return initializeApp(firebaseConfig)
    } catch (error) {
      console.error('Error initialising firebase:\n', error)
      return null
    }
  }

  return {
    get: () => {
      if (!app) {
        app = initApp()
      }
      return app
    },
    db: () => {
      if (!app) {
        app = initApp()
      }
      if (app && !db) {
        db = getDatabase(app)
      }
      return db
    }
  }
})()
