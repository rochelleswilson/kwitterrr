
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAqJF4yryr06S5FZ273zXh97dCZHTnkG9U",
      authDomain: "covid-bxwx.firebaseapp.com",
      databaseURL: "https://covid-bxwx-default-rtdb.firebaseio.com",
      projectId: "covid-bxwx",
      storageBucket: "covid-bxwx.appspot.com",
      messagingSenderId: "460303889426",
      appId: "1:460303889426:web:9b95fa18e418289c11d4cb",
      measurementId: "G-E3XK729PMS"
    };
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-"+Room_names);
row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName'(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addRoom()
{
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

