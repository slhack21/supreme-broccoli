
// Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB1VOg4exTYK8iDGxSx4qw3qausD3CC0rk",
  authDomain: "krasley-29f4b.firebaseapp.com",
  projectId: "krasley-29f4b",
  storageBucket: "krasley-29f4b.appspot.com",
  messagingSenderId: "485818444667",
  appId: "1:485818444667:web:ed1683f02c0e36b62c2bde",
  measurementId: "G-2LPKT40YZM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Connecté !");
      })
      .catch((error) => {
        alert("Erreur: " + error.message);
      });
  });
}

// Signup
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Compte créé !");
      })
      .catch((error) => {
        alert("Erreur: " + error.message);
      });
  });
}

// Google login
const googleBtn = document.getElementById("google-login");
if (googleBtn) {
  const provider = new GoogleAuthProvider();
  googleBtn.addEventListener("click", () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        alert("Connecté avec Google !");
      })
      .catch((error) => {
        alert("Erreur: " + error.message);
      });
  });
}
