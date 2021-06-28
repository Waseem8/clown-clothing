import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDNMy1Dpq_RFynC4jFRYAKGecitwQe0sEs",
    authDomain: "wasi-crown-db.firebaseapp.com",
    projectId: "wasi-crown-db",
    storageBucket: "wasi-crown-db.appspot.com",
    messagingSenderId: "333512476292",
    appId: "1:333512476292:web:e3d607a7d58e41716da4d1",
    measurementId: "G-143KH2JY6S"
};

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    
    if(!snapShot.exists) {
        const { displayName, email }= userAuth;
        const createdAt = new Date()

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('error creating user',error.massage);
        }
        
    }
    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;