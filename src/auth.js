// src/authService.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.js";

// Sign Up
const signUp = async (email, password) => {
    console.log("Sign Up called with email:", email, "and password:", password);
    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);


    try{
        return await createUserWithEmailAndPassword(auth, email, password);
    }catch(error){
        console.error("Error signing up:", error);
        throw error; // Rethrow the error to handle it in the calling function
    }
  
};

// Login
const login = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export { signUp, login };
