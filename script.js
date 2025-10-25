document.addEventListener('DOMContentLoaded', () => {
  const signupBtn = document.getElementById("signup");
  if (signupBtn) {
    signupBtn.addEventListener("click", () => {
      window.location.href = "index2.html";
    });
  }

  const loginLink = document.getElementById("login");
  if (loginLink) {
    loginLink.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  const logout = document.getElementById("logout");
  if (logout) {
    logout.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
  
  const loginToHomepage = document.getElementById("loginbtn");
  if (loginToHomepage) {
    loginToHomepage.addEventListener("click", () => {
      window.location.href = "homepage.html";
    });
  }
  
  if (window.location.pathname.includes("index2.html")) {
    const signupBtnEl = document.getElementById("loginbtn");
    if (signupBtnEl) {
      signupBtnEl.addEventListener("click", () => {
        const emailEl = document.getElementById("inputemail");
        const passwordEl = document.getElementById("inputpassword");
        const email = document.getElementById("name").value;
       
        localStorage.setItem("email", email);
      });
    }
  }

  if (window.location.pathname.includes("index.html")) {
    const loginBtn = document.getElementById("loginbtn");
    if (loginBtn) {
      loginBtn.addEventListener("click", () => {
        const email = document.getElementById("inputemail").value;
        const password = document.getElementById("inputpassword");
  
        localStorage.setItem("email", email);
      });
    }
  }

  if (window.location.pathname.includes("homepage.html")) {
    const namme = document.getElementById("game");
    const storedEmail = localStorage.getItem("email");
    if (namme) {
      namme.innerText = storedEmail ? storedEmail : "Guest";
    }
  }
});
