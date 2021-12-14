// Import the functions you need from the SDKs you need
import {
      initializeApp
  } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
      apiKey: "AIzaSyBgCUMuiSaue10Adhy74kQPR2KaQxtXNOI",
      authDomain: "my-project-62e51.firebaseapp.com",
      databaseURL: "https://my-project-62e51-default-rtdb.firebaseio.com",
      projectId: "my-project-62e51",
      storageBucket: "my-project-62e51.appspot.com",
      messagingSenderId: "675794465657",
      appId: "1:675794465657:web:d808951785313a88e7b5a8"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  
  function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              Room_names = childKey;
  
              //End code
          });
      });
  }
  getData();