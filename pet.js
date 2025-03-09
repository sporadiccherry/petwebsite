import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import { collection, doc, getDoc, getDocs, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";

const firebaseConfig = {
    //replace the following info with your own Firebase info
    apiKey: "AIzaSyBbF4jSotTA9FcR9Vh44z4pbw3yhORoR6s",
    authDomain: "petwebsite-4d795.firebaseapp.com",
    projectId: "petwebsite-4d795",
    storageBucket: "petwebsite-4d795.firebasestorage.app",
    messagingSenderId: "179996516144",
    appId: "1:179996516144:web:fa4c731f9f492c86f332f5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();



/** PET PAGE**/



/** SHOP PAGE**/

async function getPets(db) {
    // this gets the "food_shop" document from firestore
    const userinfoDoc = doc(db, "users", "testuser");
    const userinfoSnap = await getDoc(userinfoDoc);
    var userdetails = document.getElementById('userdetails');
	
	
    // if there's a shopItems id on the page, do the following
    if (userdetails != null && userinfoSnap.exists()) {
		
        // this gets the data from the "food_shop" document
        var petData = userinfoSnap.data();
		console.log(petData);
		
        // this iterates through the items in "food_shop" and displays them on the page
        userdetails.innerHTML += petData["pet"]["petName"] + ": " + petData["pet"]["petType"] + "<br>";
    }
	else
	{	
		console.log(userDetails);
		console.log(userinfoSnap);
	}
}


// this just loads the shop function
getPets(db)