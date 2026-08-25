/* Shared helpers loaded on every page. */

function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    if (a.getAttribute("href") === here) a.classList.add("active");
  });
  updateFavCount();
}

/* ---------------- Favorites (shared across pages via localStorage) ---------------- */
function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

function isFavorite(id) {
  return getFavorites().includes(id);
}

function toggleFavorite(id) {
  let favs = getFavorites();
  if (favs.includes(id)) {
    favs = favs.filter(f => f !== id);
  } else {
    favs.push(id);
  }
  localStorage.setItem("favorites", JSON.stringify(favs));
  updateFavCount();
  return favs.includes(id);
}

function updateFavCount() {
  const el = document.querySelector(".fav-count");
  if (el) el.textContent = getFavorites().length;
}

/* ---------------- Login state (shared across pages via localStorage) ---------------- */
function isLoggedIn() {
  return localStorage.getItem("loggedIn") === "true";
}

function updateAuthLink() {
  const link = document.querySelector("#auth-link");
  if (!link) return;
  if (isLoggedIn()) {
    link.textContent = "Logout";
    link.setAttribute("href", "logout.html");
  } else {
    link.textContent = "Login";
    link.setAttribute("href", "login.html");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  updateAuthLink();
  const yearEl = document.querySelector("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});