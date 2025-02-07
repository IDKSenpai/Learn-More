function checkLogin() {
  const loggedIn = sessionStorage.getItem("isLoggedIn");
  if (!loggedIn) {
    window.location.href = "https://idksenpai.github.io/Learn-More-/";
  } else {
    window.location.href =
      "https://idksenpai.github.io/Learn-More-/html/home_page.html";
  }
}

// Example login handling
function login(username, password) {
  if (username === "admin" && password === "123") {
    sessionStorage.setItem("isLoggedIn", "true");
    window.location.href =
      "https://idksenpai.github.io/Learn-More-/html/home_page.html";
  } else {
    alert("Invalid credentials");
  }
}

function logout() {
  sessionStorage.removeItem("isLoggedIn");
  window.location.href = "https://idksenpai.github.io/Learn-More-/";
}
