var config = {
  apiKey: "AIzaSyDhBJ7h-unNiQJnYwbH8V35sW_9YHSdD1U",
  authDomain: "baza-11903.firebaseapp.com",
  databaseURL: "https://baza-11903.firebaseio.com",
  projectId: "baza-11903",
  storageBucket: "baza-11903.appspot.com",
  messagingSenderId: "1036071276696"
};
firebase.initializeApp(config);
let postavek = "<h3>JES<h3>";
let ostalo;
let dbRefObject = firebase
  .database()
  .ref()
  .child("images");
function getDta() {
  dbRefObject.on("value", snap => {
    snap.forEach(element => {
      console.log(element);
      console.log(element.node_.children_.root_.value.value_);
      console.log(typeof element.node_.children_.root_.value.value_);
      document.getElementById("ovde").innerHTML += `
      <div class="card-deck">
      <div class="card" style="width: 18rem;">
      <img src="${
        element.node_.children_.root_.left.value.value_
      }class="card-img-top"  height=256vw>
      <div class="card-body">
    <p class="card-text">${element.node_.children_.root_.value.value_}</p>
  </div>
  <div>
      
      `;
    });
  });
}

getDta();
