
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyAzfrH5vTmrZIkRYVFzA1HX5XqOsF-cumQ",
    authDomain: "kwitter-79b72.firebaseapp.com",
    databaseURL: "https://kwitter-79b72-default-rtdb.firebaseio.com",
    projectId: "kwitter-79b72",
    storageBucket: "kwitter-79b72.appspot.com",
    messagingSenderId: "627193598103",
    appId: "1:627193598103:web:e9144230309a41be11d9d2",
    measurementId: "G-KWJT1PVTM2"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
});
}