
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyAzfrH5vTmrZIkRYVFzA1HX5XqOsF-cumQ",
      authDomain: "kwitter-79b72.firebaseapp.com",
      databaseURL: "https://kwitter-79b72-default-rtdb.firebaseio.com",
      projectId: "kwitter-79b72",
      storageBucket: "kwitter-79b72.appspot.com",
      messagingSenderId: "627193598103",
      appId: "1:627193598103:web:e9144230309a41be11d9d2",
      
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" +user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_room.html";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;


      }
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_room.html";
}
