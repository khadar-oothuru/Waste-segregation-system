// Firebase fetch function to handle multiple entries
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBNmkd6BS7xeVfaIWHff3BPyFvu-Z_Ek40",
  authDomain: "waste-dry-wet.firebaseapp.com",
  databaseURL: "https://waste-dry-wet-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "waste-dry-wet",
  storageBucket: "waste-dry-wet.firebasestorage.app",
  messagingSenderId: "7011489702",
  appId: "1:7011489702:web:6b3f60081195f3e63d6167"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to fetch waste data from Firebase Realtime Database
export const fetchWasteData = (callback) => {
  const wasteDataRef = ref(database, "wasteData");
  onValue(wasteDataRef, (snapshot) => {
    const data = snapshot.val();
    const wasteArray = data ? Object.values(data) : [];  // Convert object to array
    callback(wasteArray);  // Pass array to callback
  });
};
