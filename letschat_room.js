const config = {
    apiKey: "AIzaSyCjN5G10n1omf0GsRcjdi7ZvGErVG-bwKc",
    authDomain: "let-s-chat-3df72.firebaseapp.com",
    projectId: "let-s-chat-3df72",
    storageBucket: "let-s-chat-3df72.appspot.com",
    messagingSenderId: "621235520429",
    appId: "1:621235520429:web:5e62235055c31add10d724",
    measurementId: "G-CRFR9VLRCD"
};
// Initialize Firebase
firebase.initializeApp(config);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "index.html";
}