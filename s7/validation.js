let alert = document.querySelector(".alert");

function champ_requis() {
  let r = document.querySelectorAll(".requis");

  let vide = false;

  for (let i = 0; i < r.length; i++) {
    if (r[i].value.trim() == "") {
      vide = true;
    }
  }
  if (vide) {
    alert.innerHTML += "tous les champs sont requis<br>";
    alert.className = "alert alert-danger";
  }
}

function validerEmail() {
  const email = document.querySelector("#email");
  const model = /^[a-z]{1,}\w+@ifiag[.]ma$/;
  let correct = model.test(email.value);
  if (!correct) {
    alert.innerHTML += "Email incorrect<br>";
    alert.className = "alert alert-danger";
  }
}
function colorer(x) {
  console.log(x.value);
  const r = document.querySelector(".row");
  r.style.backgroundColor = x.value == "homme" ? "blue" : "pink";
}

function valider() {
  alert.innerHTML = "";
  alert.className = "d-none";
  champ_requis();
  validerEmail();
}
