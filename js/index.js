const validateLogin = () => {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "admin" && password === "123") {
    window.location.href = "html/home_page.html?t=" + new Date().getTime();
    return true;
  }

  alert("Login failed!");
  return false;
};
