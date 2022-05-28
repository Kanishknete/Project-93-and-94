const firebaseConfig = {
      apiKey: "AIzaSyDM2_610FcBwBmEaLOdChyZ5_9BjzDTRzk",
      authDomain: "kanishk-s-kwitter.firebaseapp.com",
      databaseURL: "https://kanishk-s-kwitter-default-rtdb.firebaseio.com",
      projectId: "kanishk-s-kwitter",
      storageBucket: "kanishk-s-kwitter.appspot.com",
      messagingSenderId: "677204731113",
      appId: "1:677204731113:web:5af56cea8578e03cbb3c78"
    };
    
    // Initialize Firebase
    //const app = initializeApp(firebaseConfig);
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;/*  */
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();
