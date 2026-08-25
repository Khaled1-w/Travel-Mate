/* Renders a destination card. Shared shape used by explore.html,
   destinations.html and favorites.html (each page includes this file
   or repeats this function inline where noted). */
function destinationCard(d) {
  const fav = isFavorite(d.id);
  return `
  <article class="dest-card" data-id="${d.id}">
    <a href="destination-details.html?id=${d.id}">
      <div class="dest-art" style="background-image:url('${d.image}')"></div>
    </a>
    <div class="dest-body">
      <div class="dest-meta">${d.type} · ${d.budget} budget</div>
      <h3><a href="destination-details.html?id=${d.id}">${d.name}</a></h3>
      <p>${d.tagline}</p>
      <div class="dest-foot">
        <span class="chip">${d.bestTime}</span>
        <button class="fav-btn ${fav ? "active" : ""}" title="Save to favorites" aria-label="Save to favorites">♥</button>
      </div>
    </div>
  </article>`;
}

function wireFavButtons(container) {
  container.querySelectorAll(".fav-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const card = btn.closest("[data-id]");
      const nowFav = toggleFavorite(card.dataset.id);
      btn.classList.toggle("active", nowFav);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const q = document.querySelector("#q");
  // This file is shared by destinations.html, which has no filter bar —
  // only run the search/filter logic on pages that actually have one (explore.html).
  if (!q) return;

  const type = document.querySelector("#type");
  const budget = document.querySelector("#budget");
  const results = document.querySelector("#results");
  const count = document.querySelector("#count");

  function render() {
    const term = q.value.trim().toLowerCase();
    const list = DESTINATIONS.filter(d => {
      const matchesTerm = !term || d.name.toLowerCase().includes(term) || d.tagline.toLowerCase().includes(term);
      const matchesType = !type.value || d.type === type.value;
      const matchesBudget = !budget.value || d.budget === budget.value;
      return matchesTerm && matchesType && matchesBudget;
    });

    count.textContent = `${list.length} destination${list.length === 1 ? "" : "s"} found`;
    results.innerHTML = list.length
      ? list.map(destinationCard).join("")
      : `<div class="empty-state" style="grid-column:1/-1;">No destinations match those filters yet.</div>`;
    wireFavButtons(results);
  }

  [q, type, budget].forEach(el => el.addEventListener("input", render));
  document.querySelector("#reset").addEventListener("click", () => {
    q.value = ""; type.value = ""; budget.value = "";
    render();
  });

  render();
});
