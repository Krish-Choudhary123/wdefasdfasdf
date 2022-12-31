
var firebaseConfig = {
  apiKey: "AIzaSyCPiiHo5niH8_RoTQVwwWJXxDg6BAdTeDM",
  authDomain: "kwitter-94a7e.firebaseapp.com",
  databaseURL: "https://kwitter-94a7e-default-rtdb.firebaseio.com",
  projectId: "kwitter-94a7e",
  storageBucket: "kwitter-94a7e.appspot.com",
  messagingSenderId: "1005176847014",
  appId: "1:1005176847014:web:9ab7907ce434183bf19267"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);


//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id);' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();


function logout(){
  window.location = "index.html";
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");

}

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";


function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}     
