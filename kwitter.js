const Config = {
    apiKey: "AIzaSyCviQp44u0abmWvziJ9FM5wkEBiB4soNkA",
    authDomain: "kwitter-334df.firebaseapp.com",
    databaseURL: "https://kwitter-334df-default-rtdb.firebaseio.com",
    projectId: "kwitter-334df",
    storageBucket: "kwitter-334df.appspot.com",
    messagingSenderId: "434479309344",
    appId: "1:434479309344:web:4bd5c5418be297b67dd245",
    measurementId: "G-VBYM9ZVFXM"
};
// Initialize Firebase
firebase.initializeApp(Config);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML = row;
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}