importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyDRf_hfuFMwP2LM0pfN_j79jRno5ykYBGM",
    authDomain: "samosa-firebase.firebaseapp.com",
    databaseURL: "https://samosa-firebase.firebaseio.com",
    projectId: "samosa-firebase",
    storageBucket: "samosa-firebase.appspot.com",
    messagingSenderId: "173782092509",
    appId: "1:173782092509:web:44a76b7384f43e2ad56934",
    measurementId: "G-EGM4QMGEVE"
//  apiKey: “from firebase config”,
//  authDomain: “from firebase config”,
//  databaseURL: “from firebase config”,
//  projectId: “from firebase config”,
//  storageBucket: “from firebase config”,
//  messagingSenderId: “from firebase config”,
//  appId: “from firebase config”,
//  measurementId: “from firebase config”
});
const messaging = firebase.messaging();