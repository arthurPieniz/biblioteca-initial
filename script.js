// Inicialização do Firestore
var firebaseConfig = {
    apiKey: "AIzaSyAFJI10svRKOD7ian9hK_8PZMbLul8xK-s",
    authDomain: "biblioteca-46de8.firebaseapp.com",
    projectId: "biblioteca-46de8",
    storageBucket: "biblioteca-46de8.appspot.com",
    messagingSenderId: "535430783187",
    appId: "1:535430783187:web:f7759deec1434f3cfe3426"
  };

  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

  let colect = db.collection("historia")
  var elemento_pai = document.body;

  colect.onSnapshot(function(querySnapshot){
    querySnapshot.forEach(function(doc) {
      console.log(doc.id, "=>", doc.data())
      let dive = document.createElement("div")
      dive.innerHTML = doc.data().title + "<br>" + doc.data().autor + "<br>" +doc.data().history + "<br>"
    

      elemento_pai.appendChild(dive)

      dive.className = "hist"
    })
  })