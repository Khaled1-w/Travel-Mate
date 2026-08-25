document.addEventListener("DOMContentLoaded", () => {

  const noBookings = document.querySelector("#no-bookings");
  const plannerWrap = document.querySelector("#planner-wrap");
  const tripSelector = document.querySelector("#trip-selector");
  const planArea = document.querySelector("#plan-area");
  const planTitle = document.querySelector("#plan-title");

  const allPlans = JSON.parse(localStorage.getItem("tripPlans")) || {};
  const planKeys = Object.keys(allPlans);

  if (planKeys.length === 0) {
    noBookings.style.display = "block";
    return;
  }

  plannerWrap.style.display = "block";

  tripSelector.innerHTML = planKeys.map(key => {
    const plan = allPlans[key];
    return `
      <div class="value-card" style="cursor:pointer;display:flex;align-items:center;gap:14px;" data-key="${key}">
        <img src="${plan.image}" alt="${plan.tripTitle}" style="width:80px;height:60px;object-fit:cover;border-radius:6px;flex-shrink:0;">
        <div>
          <h3 style="margin-bottom:4px;">${plan.tripTitle}</h3>
          <p style="margin:0;color:#6b665e;">${plan.country} · ${Object.keys(plan.days).length} days</p>
        </div>
      </div>
    `;
  }).join("");

  let currentKey = null;
  let activeDay = null;

  tripSelector.querySelectorAll("[data-key]").forEach(card => {
    card.addEventListener("click", () => {
      currentKey = card.dataset.key;
      activeDay = Object.keys(allPlans[currentKey].days)[0]; // أول يوم في الخطة
      planTitle.textContent = allPlans[currentKey].tripTitle + " — " + allPlans[currentKey].country;
      planArea.style.display = "block";
      renderDayList();
      renderActivities();
      planArea.scrollIntoView({ behavior: "smooth" });
    });
  });

  function savePlans() {
    localStorage.setItem("tripPlans", JSON.stringify(allPlans));
  }

  function renderDayList() {
    const days = Object.keys(allPlans[currentKey].days);
    const list = document.querySelector("#day-list");
    list.innerHTML = days.map(d => `
      <button class="day-btn ${d === activeDay ? "active" : ""}" data-day="${d}">
        ${d} <span style="font-family:var(--mono);font-size:.7rem;color:#6b665e;">(${allPlans[currentKey].days[d].length})</span>
      </button>
    `).join("");

    list.querySelectorAll(".day-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        activeDay = btn.dataset.day;
        renderDayList();
        renderActivities();
      });
    });
  }

  function renderActivities() {
    document.querySelector("#active-day-label").textContent = activeDay;
    const activities = allPlans[currentKey].days[activeDay];
    const listEl = document.querySelector("#activity-list");
    const emptyEl = document.querySelector("#empty-day");

    if (activities.length === 0) {
      listEl.innerHTML = "";
      emptyEl.style.display = "block";
      return;
    }
    emptyEl.style.display = "none";

    listEl.innerHTML = activities.map((a, i) => `
      <div class="activity-row">
        <span class="time">${a.time || "—"}</span>
        <span class="name">${a.name}</span>
        <button class="btn btn-danger btn-sm" data-idx="${i}">Delete</button>
      </div>
    `).join("");

    listEl.querySelectorAll("button[data-idx]").forEach(btn => {
      btn.addEventListener("click", () => {
        allPlans[currentKey].days[activeDay].splice(parseInt(btn.dataset.idx, 10), 1);
        savePlans();
        renderDayList();
        renderActivities();
      });
    });
  }

  document.querySelector("#add-activity").addEventListener("click", () => {
    const nameInput = document.querySelector("#name-input");
    const timeInput = document.querySelector("#time-input");
    const name = nameInput.value.trim();
    if (!name || !currentKey) return;

    allPlans[currentKey].days[activeDay].push({ name, time: timeInput.value.trim() });
    savePlans();
    nameInput.value = "";
    timeInput.value = "";
    renderDayList();
    renderActivities();
  });

});