// Reference messages collection
var messagesRef2 = firebase.database().ref("messages/contactUs");

document
  .getElementById("contactform")
  .addEventListener("submit", submitContactUsForm);

function submitContactUsForm(e) {
  e.preventDefault();
  // Get values
  var email = getInputVal("email");
  var first_name = getInputVal("first_name");
  var last_name = getInputVal("last_name");
  var phone = getInputVal("phone");
  var date = getInputVal("date");
  var select_date = getInputVal("select_date");
  var select_service = getInputVal("select_date");
  var comments = getInputVal("comments");
  // console.log(phone, date);

  // Contact Form
  saveMessage2(
    email,
    first_name,
    last_name,
    phone,
    date,
    select_date,
    select_service,
    comments
  );

  // Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Clear form

  document.getElementById("contactform").reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase

function saveMessage2(
  email,
  first_name,
  last_name,
  phone,
  date,
  select_date,
  select_service,
  comments
) {
  var newMessageRef2 = messagesRef2.push();
  newMessageRef2.set({
    email: email,
    first_name: first_name,
    last_name: last_name,
    phone: phone,
    date: date,
    select_date: select_date,
    select_service: select_service,
    comments: comments,
  });
}
