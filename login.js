const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector(".signup-link a");
const loginText = document.querySelector(".title-text .login");
const signupText = document.querySelector(".title-text .signup");
const logoutBtn = document.querySelector("#logoutBtn");

signupBtn.onclick = (() => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
  signupBtn.click();
  return false;
});

// Only wire this up if a #logoutBtn actually exists on the page.
if (logoutBtn) {
  logoutBtn.onclick = (() => {
    window.location.href = "logout.html";
  });
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_RE = /^(?=.*[A-Z])(?=.*\d).{8,}$/; // 8+ chars, at least 1 uppercase, 1 number

// بيانات دخول الأدمن — غيّرهم لأي إيميل وباسورد تحبهم
const ADMIN_EMAIL = "admin@travelmate.com";
const ADMIN_PASSWORD = "Admin123!";

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm.querySelector('input[type="text"]');
  const password = loginForm.querySelector('input[type="password"]');

  if (!EMAIL_RE.test(email.value.trim())) {
    alert("Please enter a valid email address.");
    return;
  }
  if (password.value.trim() === "") {
    alert("Please enter your password.");
    return;
  }

  localStorage.setItem("loggedIn", "true");

  if (email.value.trim() === ADMIN_EMAIL && password.value === ADMIN_PASSWORD) {
    window.location.href = "admin.html";
    return;
  }
  window.location.href = "index.html";
});
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signupForm.querySelectorAll('input[type="text"], input[type="email"]')[0];
  const password = signupForm.querySelectorAll('input[type="password"]')[0];
  const confirm = signupForm.querySelectorAll('input[type="password"]')[1];

  if (!EMAIL_RE.test(email.value.trim())) {
    alert("Please enter a valid email address.");
    return;
  }
  if (!PASSWORD_RE.test(password.value)) {
    alert("Password must be at least 8 characters and include an uppercase letter and a number.");
    return;
  }
  if (password.value !== confirm.value) {
    alert("Passwords do not match.");
    return;
  }
  alert("Account created! You can now log in.");
  loginBtn.click();
});
