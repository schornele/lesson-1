import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDxkO6gi8JP00wGw2oL0FsHXV1c6jI3KtY",
  authDomain: "crown-db-2f095.firebaseapp.com",
  projectId: "crown-db-2f095",
  storageBucket: "crown-db-2f095.appspot.com",
  messagingSenderId: "984186505254",
  appId: "1:984186505254:web:1b97a510c93858e2b5bee7",
  measurementId: "G-8N4MFGD1LS"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth)
    return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

