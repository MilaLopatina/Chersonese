function visit() {
  let email = prompt("What is your email address?");
  if (email) {
    alert(
      "Thank you, we sent you all travel information. With open hearts and hugs, after our victory, we will happy to see you in Ukraine!๐๐"
    );
  } else {
    alert(
      "You can find all travel information in Ukraine State agency for the development of tourism๐"
    );
  }
}
let changeButton = document.querySelector("button");
changeButton.addEventListener("click", visit);
