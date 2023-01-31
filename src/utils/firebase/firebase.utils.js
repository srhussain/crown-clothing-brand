
import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup, 
    GoogleAuthProvider} 
from 'firebase/auth'

import { 
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyB35pjEjdxqlmVFPkhCijTDYvMrn1r4CQw",
  authDomain: "crwn-clothing-db-ea317.firebaseapp.com",
  projectId: "crwn-clothing-db-ea317",
  storageBucket: "crwn-clothing-db-ea317.appspot.com",
  messagingSenderId: "397603556462",
  appId: "1:397603556462:web:51642d0c5a1886ae08aa7f"
};

const firebaseapp = initializeApp(firebaseConfig);


const provider= new GoogleAuthProvider();
provider.setCustomParameters({
  prompt:"select_account"  
})

export const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider)  ///GOOGLE POPUP METHOD

export const db=getFirestore()  ///DATABASE IN FIREBASE


export const createUserDocumentFromAuth=async(userAuth)=>{
    const userDocRef=doc(db,'users',userAuth.uid);

    console.log(userDocRef);

    const userSnapshot=await getDoc(userDocRef);
    console.log(userSnapshot);

    if(!userSnapshot.exists()){
        const { displayName,email}=userAuth;
        const createdAt= new Date();
        

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
            })
        }
        catch(error){
            console.log('error created',error.message);

        }
    }

    return  userDocRef;

    
    //if user data no t exists

    //if user data exists

    // return userDocRed

}

