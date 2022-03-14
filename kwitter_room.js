
var firebaseConfig = {
      apiKey: "AIzaSyDEYWnTeB4u-y74ctkm5cAgcfO8K8RgKFA",
      authDomain: "social-website-bffd6.firebaseapp.com",
      databaseURL: "https://social-website-bffd6-default-rtdb.firebaseio.com",
      projectId: "social-website-bffd6",
      storageBucket: "social-website-bffd6.appspot.com",
      messagingSenderId: "623826508745",
      appId: "1:623826508745:web:d4fdc753f850caf1596618"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}