const validateLogin = (event) => {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "admin" && password === "123") {
    history.replaceState(
      null,
      null,
      "https://github.com/IDKSenpai/Learn-More-/blob/master/html/home_page.html"
    );
    window.location.href =
      "https://github.com/IDKSenpai/Learn-More-/blob/master/html/home_page.html";
    return true;
  }

  alert("Login failed!");
  return false;
};
