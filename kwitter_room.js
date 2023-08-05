var firebaseConfig = {
    apiKey: "AIzaSyBdseEgEs4VzlDlVvG0CVacc8BJdg2AkjQ",
    authDomain: "kwitter-52e59.firebaseapp.com",
    databaseURL: "https://kwitter-52e59-default-rtdb.firebaseio.com",
    projectId: "kwitter-52e59",
    storageBucket: "kwitter-52e59.appspot.com",
    messagingSenderId: "661347955779",
    appId: "1:661347955779:web:3a1320a1743b764f20d0f6"
  };
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name -" + Room_names);
     row = "<div class = 'room_name' id = " +Room_names+"onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
     document.getElementById("output").innerHTML += row;
});});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter_page.html";
}