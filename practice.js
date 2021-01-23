var firebaseConfig = {
    apiKey: "AIzaSyBydE1z4Goi4NuLgFKpT_1wfw2-PskJGs4",
    authDomain: "kwitter-bacae.firebaseapp.com",
    databaseURL: "https://kwitter-bacae-default-rtdb.firebaseio.com",
    projectId: "kwitter-bacae",
    storageBucket: "kwitter-bacae.appspot.com",
    messagingSenderId: "462710440200",
    appId: "1:462710440200:web:f5b0c8f105e2bc095aacbd",
    measurementId: "G-3NSM14NJ6T"
  };
  firebase.initializeApp(firebaseConfig);

  function adduser(){
      username=document.getElementById("username").value;
      firebase.database().ref("/").child(username).update({
          purpose:"addingusername"
      });
  }
//ADD YOUR FIREBASE LINKS