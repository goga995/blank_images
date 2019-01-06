let slika;
let hh1;
console.log(hh1);
//FIREBASE
var config = {
  apiKey: "AIzaSyDhBJ7h-unNiQJnYwbH8V35sW_9YHSdD1U",
  authDomain: "baza-11903.firebaseapp.com",
  databaseURL: "https://baza-11903.firebaseio.com",
  projectId: "baza-11903",
  storageBucket: "baza-11903.appspot.com",
  messagingSenderId: "1036071276696"
};
//firebase function database
firebase.initializeApp(config);
var database = firebase.database();
function writeUserData(linkr) {
  let d = new Date();
  let t = d.getTime();
  firebase
    .database()
    .ref("images/" + t)
    .set({
      link: linkr,
      text: hh1
    });
}

//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
//FETC POST TO IMGUR
document.getElementById("uup").addEventListener("click", kall);
function pass_data() {
  slika = document.getElementById("avatar").files[0];
  console.log(slika);
}
let cid = "27818decac6fa9b";
let cscr = "003431125b7dd91c05c251810a915f6ef1110369";
function kall(e) {
  e.preventDefault();
  hh1 = document.getElementById("exampleFormControlTextarea1").value;
  document.getElementById("uup").disabled = true;
  fetch("https://api.imgur.com/3/image", {
    method: "POST",
    headers: {
      Accept: "aplication/json",
      Authorization: "Client-ID " + cid
    },
    body: slika
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("STATUS").innerText = "SUCCESS";
      writeUserData(data.data.link);
      document.getElementById("uup").disabled = false;
    });
}
