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
room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0,
    });

    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
    } });  }); }
getData();