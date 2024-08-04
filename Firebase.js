// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
   createUserWithEmailAndPassword,
   getAuth,
    signInWithEmailAndPassword, 
    signOut} from "firebase/auth";
import { 
  addDoc,
   collection,
    getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsm5RFMRv_X2BW_ed5riNXi3n1-OrLjrY",
  authDomain: "netflix-clone-7c78c.firebaseapp.com",
  projectId: "netflix-clone-7c78c",
  storageBucket: "netflix-clone-7c78c.appspot.com",
  messagingSenderId: "424422344306",
  appId: "1:424422344306:web:22ea2d2ead60e31bf964eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//auth
const auth = getAuth(app);
const db = getFirestore(app);
const signUp = async(name , email,password)=>{
  try{
  const res =  await createUserWithEmailAndPassword(auth,email,password);
  const user = res.user;
  await addDoc(collection(db,"user"),{
    uid:user.uid,
    name,
    authProvider:"local",
    email,
  })
  }catch (error){
console.log(error)
toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}
const login = async (email,password)=>{
  try{
    signInWithEmailAndPassword(auth, email,password)
  }catch(error){
console.log(error)
toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}
const logOut = ()=>{
  signOut(auth);
}
export {auth,db,login,signUp,logOut}