function valider() {
  let inputs = document.querySelectorAll("input");
  let alert = document.querySelector(".alert");
  let email = document.getElementById("email");
  const modelEmail = /^\w+@ifiag\.ma$/;

  let vide = false;
  for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i];
    if (element.value.trim() == "") {
      vide = true;
    }
  }
  alert.innerHTML = vide ? "tous les champs Requis" : "";
  alert.className = !vide ? "d-none alert" : "alert alert-danger";
  if (email.value != "" && !modelEmail.test(email.value)) {
    alert.innerHTML = "Email incorrect";
    alert.className = "alert alert-danger";
  }
}
