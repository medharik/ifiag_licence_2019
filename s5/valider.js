function valider() {
  //DOM : document object model

  let email = document.getElementById("email");

  if (email.value == "") {
    // alert("email est obligatoire");
    console.log("info ", "email est requis");
  } else {
    console.log("info ", "email est ok");
  }
}

function message_count() {
  let cpt = document.getElementById("cpt");
  let message = document.getElementById("message");
  cpt.innerHTML = message.value.length;
}
