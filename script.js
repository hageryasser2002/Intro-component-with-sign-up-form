var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var mail = document.getElementById("e-mail");
var password = document.getElementById("password");
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  var check = 1;
  document.querySelectorAll("p.error").forEach((msg) => msg.remove());
  [fname, lname, mail, password].forEach((input) => {
    input.classList.remove("error");
  });


  if (fname.value.trim() === "") {
    fname.classList.add("error");
    fname.placeholder = "";
    var p1 = document.createElement("p");
    p1.textContent = "First name can't be empty";
    p1.className = "error";
    p1.style.color = "hsl(0, 100%, 74%)";
    fname.insertAdjacentElement("afterend", p1);
    check = 0;
  }

 
  if (lname.value.trim() === "") {
    lname.classList.add("error");
    lname.placeholder = "";
    var p2 = document.createElement("p");
    p2.textContent = "Last name can't be empty";
    p2.className = "error";
    p2.style.color = "hsl(0, 100%, 74%)";
    lname.insertAdjacentElement("afterend", p2);
    check = 0;
  }


  if (mail.value.trim() === "" || !mail.value.includes("@")) {
    mail.classList.add("error");
    mail.placeholder = "email@example/com";
    var p3 = document.createElement("p");
    p3.textContent = "Looks like this is not an email";
    p3.className = "error";
    p3.style.color = "hsl(0, 100%, 74%)";
    mail.insertAdjacentElement("afterend", p3);
    check = 0;
  }

  // Password validation
  if (password.value.trim() === "") {
    password.classList.add("error");
    password.placeholder = "";
    var p4 = document.createElement("p");
    p4.textContent = "Password can't be empty";
    p4.className = "error";
    p4.style.color = "hsl(0, 100%, 74%)";
    password.insertAdjacentElement("afterend", p4);
    check = 0;
  }


});


[fname, lname, mail, password].forEach((input) => {
  input.addEventListener("input", function () {
    if (input.classList.contains("error")) {
      input.classList.remove("error");
      var errorMsg = input.nextElementSibling;
      if (errorMsg && errorMsg.tagName.toLowerCase() === "p" && errorMsg.classList.contains("error")) {
        errorMsg.remove();
      }
    }
  });
});
