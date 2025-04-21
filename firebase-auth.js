
// Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBmcp1ZXvS2nLjAa_QkmyDgWvGQqxrZDjw",
  authDomain: "krasley-71e71.firebaseapp.com",
  projectId: "krasley-71e71",
  storageBucket:
"krasley-71e71.firebasestorage.app",
  messagingSenderId: "769651122724",
  appId: "1:769651122724:web:2fa1ad570a68f0b1746eb1",
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
