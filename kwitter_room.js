
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyATIudDSFza0QRTGBkYviRhR-CXXpACzcg",
      authDomain: "kwitter-e172b.firebaseapp.com",
      projectId: "kwitter-e172b",
      storageBucket: "kwitter-e172b.appspot.com",
      messagingSenderId: "514822933740",
      appId: "1:514822933740:web:391ae8d64307cf678229c9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_names -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick = redirectToRoomName(this.id)>" +Room_names+ "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
      
getData();
function addroom(){
     room_name = document.getElementById("room_name").value; 
     firebase.database(). ref("/").child ("room_name").update({
           purpose : "adding room name"
     })
     localStorage.setItem("room_name", room_name);
     window.location = "kwitter_room.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_room.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
      }
        function send(){
              msg = document.getElementById("msg").value;
              firebase.database().ref(room_name).push({
                    name:user_name,
                    message:msg,
                    like:0
              });
              document.getElementById("msg").value= "";
        }