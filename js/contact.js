const form = document.querySelector(".contact");
form.addEventListener("submit", validateForm);

const names = document.querySelector ("input#name");
const subject = document.querySelector ("input#subject");
const email = document.querySelector ("input#email");
const address = document.querySelector ("input#address");

const namesTxt = document.querySelector ("span.namesTxt");
const subTxt = document.querySelector ("span.subTxt");
const emailTxt = document.querySelector ("span.emailTxt");
const addressTxt = document.querySelector ("span.addressTxt");

function validateForm(e) {
  e.preventDefault();
    let submittedName = names.value.trim();
    console.log("Name: " + submittedName);
    namesTxt.innerHTML = "";
      
    if (submittedName.length < 5) {
        namesTxt.innerHTML += "Name has to be a minimum of 5 characters!";
    }
    if (/\d/.test(submittedName)) {
        namesTxt.innerHTML += "The name cant contain numbers!";
    }
    
  let submittedSub = subject.value.trim();
  console.log("subject: " + submittedSub);
  subTxt.innerHTML = "";
  if (submittedSub.length < 15) {
      subTxt.innerHTML += "Must be at least 15 characters."
  }

    let submittedEmail = email.value.trim();
    console.log("Email: " + submittedEmail);
    emailTxt.innerHTML = "";
    let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailPattern.test(submittedEmail)) {
    emailTxt.innerHTML += "Please enter a valid email";
  }

  let submittedAddress = address.value.trim();
  console.log("Adress " + submittedAddress);
  addressTxt.innerHTML = "";
  if (submittedAddress.length < 25) {
    addressTxt.innerHTML += "must be at least 25 characters."
  }


  

}