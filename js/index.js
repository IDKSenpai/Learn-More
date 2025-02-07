const validateLogin = () => {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "admin" && password === "123") {
    history.replaceState(null, null, "../html/home_page.html");
    window.location.href =
      "https://your-username.github.io/repository-name/html/home_page.html";
    return true;
  }

  alert("Login failed!");
  return false;
};
