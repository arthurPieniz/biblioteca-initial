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

  let btn = document.querySelector("button");

  let title = document.getElementById("title")
  let autor = document.getElementById("autor")
  let history = document.getElementById("history")

  btn.addEventListener("click",()=>{
    // if(title.value == "" || autor.value == "" || history.value == ""){alert("Por favor preencha todos os campos")}
    // else{
    db.collection("historia").add({
        title: "" + title.value,
        autor: "" + autor.value,
        history: "" + history.value
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        alert("Não foi possível enviar a história")
    });

    title.value = "";
    autor.value == "";
    history.value == "";

    // alert("História publicada com sucesso! Obrigado pela contribuição");
    // location.href = "index.html"

// }
  })