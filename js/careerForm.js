var messagesRef = firebase.database().ref("messages/CareerForm");
$("#form").validate({
  rules: {
    email: { required: true, email: true },
    first_name: { required: true },
    last_name: { required: true },
    custom_title: { required: true },
    custom_company: { required: true },
    custom_phone_novalid: { required: true },
    custom_state: { required: true },
    custom_natureofyourinquiry: { required: true },
    custom_country: { required: true },
    "custom_consent[]": { required: true },
  },
  messages: {
    email: "Enter Your Email Address",
    first_name: "Come on, you don't even know your own first name",
    last_name: "Come on, you don't even know your own last name",
    custom_title: "What is your title",
    custom_company: "Don't make me ask again",
    custom_phone_novalid: "Can I get your number",
    custom_country: "What country do you live in",
  },
});

document.getElementById("form").addEventListener("submit", submitCareerForm);

// Submit form
function submitCareerForm(e) {
  e.preventDefault();

  // Get values
  var email = getInputVal("email");
  var first_name = getInputVal("first_name");
  var last_name = getInputVal("last_name");
  var custom_company = getInputVal("custom_company");
  var custom_title = getInputVal("custom_title");
  var custom_phone_novalid = getInputVal("custom_phone_novalid");
  var custom_country = getInputVal("custom_country");
  var custom_state = getInputVal("custom_state");
  var myFile = getInputVal("myFile");
  // Save message
  saveMessage(
    email,
    first_name,
    last_name,
    custom_company,
    custom_title,
    custom_phone_novalid,
    custom_country,
    custom_state,
    myFile
  );

  // Show alert
  $(function () {
    $("#form").validate();
    $("#form").on("submit", function (e) {
      var isvalid = $("#form").valid();
      if (isvalid) {
        document.querySelector(".alert").style.display = "block";
      }
    });
  });

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Clear form
  document.getElementById("form").reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(
  email,
  first_name,
  last_name,
  custom_company,
  custom_title,
  custom_phone_novalid,
  custom_country,
  custom_state,
  myFile
) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    email: email,
    first_name: first_name,
    last_name: last_name,
    custom_company: custom_company,
    custom_title: custom_title,
    custom_phone_novalid: custom_phone_novalid,
    custom_country: custom_country,
    custom_state: custom_state,
    myFile: myFile,
  });
}
