var firebaseConfig = {
  apiKey: "AIzaSyB_3Gl16qtumQRZuys2rAV_Ej_2kXYc82s",
  authDomain: "project93work.firebaseapp.com",
  databaseURL: "https://project93work-default-rtdb.firebaseio.com",
  projectId: "project93work",
  storageBucket: "project93work.appspot.com",
  messagingSenderId: "795362417889",
  appId: "1:795362417889:web:0c395fe29783ea5e08eba0",
  measurementId: "G-TDKD1L6G46"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

     document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

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

      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

