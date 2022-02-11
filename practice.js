const firebaseConfig = {
    apiKey: "AIzaSyAqJF4yryr06S5FZ273zXh97dCZHTnkG9U",
    authDomain: "covid-bxwx.firebaseapp.com",
    databaseURL: "https://covid-bxwx-default-rtdb.firebaseio.com",
    projectId: "covid-bxwx",
    storageBucket: "covid-bxwx.appspot.com",
    messagingSenderId: "460303889426",
    appId: "1:460303889426:web:9b95fa18e418289c11d4cb",
    measurementId: "G-E3XK729PMS"
  };
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child("user_name").update({
      purpose:"adding user"  
    });

}