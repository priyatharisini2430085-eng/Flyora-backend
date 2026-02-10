document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Demo validation only
  if (email && password) {
    // Redirect to dashboard
    window.location.href = "dashboard.html";
  } else {
    alert("Please enter email and password");
  }
});
