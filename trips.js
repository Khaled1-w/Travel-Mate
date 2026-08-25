let myBookings = JSON.parse(localStorage.getItem("bookings")) || [];

document.addEventListener("DOMContentLoaded", () => {

  const countryList = document.querySelector("#country-list");
  const tripList = document.querySelector("#trip-list");
  const selectedLabel = document.querySelector("#selected-country-label");
  const bookingsList = document.querySelector("#bookings-list");

  const countries = Object.keys(TRIP_PACKAGES);

  countryList.innerHTML = countries.map(country => `
    <button class="country-btn" data-country="${country}" style="background-image: url('${COUNTRY_INFO[country].image}')">
      <span class="country-name">${country}</span>
    </button>
  `).join("");

  countryList.querySelectorAll(".country-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const country = btn.dataset.country;
      selectedLabel.textContent = `Trips to ${country}`;
      renderTrips(country);
    });
  });

  function renderTrips(country) {
    const trips = TRIP_PACKAGES[country];

    tripList.innerHTML = trips.map(trip => `
      <div class="trip-card">
        ${trip.popular ? '<span class="badge">Popular</span>' : ''}
        <img src="${trip.image}" alt="${trip.title}">
        <h3>${trip.title}</h3>
        <p>Duration: ${trip.duration}</p>
        <p>Price: $${trip.price}</p>
        <button class="book-btn" data-id="${trip.id}" data-country="${country}">
          Book this trip
        </button>
      </div>
    `).join("");

    tripList.querySelectorAll(".book-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        bookTrip(btn.dataset.id, btn.dataset.country);
      });
    });
  }

  function saveBookings() {
    localStorage.setItem("bookings", JSON.stringify(myBookings));
  }

  function bookTrip(tripId, country) {
  const trip = TRIP_PACKAGES[country].find(t => t.id === tripId);

  const alreadyBooked = myBookings.some(
    b => b.id === tripId && b.country === country
  );

  if (alreadyBooked) {
    alert("You already booked this trip!");
    return;
  }

  myBookings.push({ ...trip, country: country });
  saveBookings();
  generateTripPlan(trip, country);
  renderBookings();
}

function generateTripPlan(trip, country) {
  const plan = {};

  trip.activities.forEach((dayActivities, i) => {
    plan[`Day ${i + 1}`] = dayActivities.map(name => ({ name, time: "" }));
  });

  const planKey = `${trip.id}-${country}`;

  const allPlans = JSON.parse(localStorage.getItem("tripPlans")) || {};
  allPlans[planKey] = {
    tripTitle: trip.title,
    country: country,
    image: trip.image,
    days: plan
  };

  localStorage.setItem("tripPlans", JSON.stringify(allPlans));
}

function removeTripPlan(tripId, country) {
  const planKey = `${tripId}-${country}`;
  const allPlans = JSON.parse(localStorage.getItem("tripPlans")) || {};
  delete allPlans[planKey];
  localStorage.setItem("tripPlans", JSON.stringify(allPlans));
}

  function renderBookings() {
    if (myBookings.length === 0) {
      bookingsList.innerHTML = `<p>You haven't booked any trips yet.</p>`;
      return;
    }

    const total = myBookings.reduce((total, b) => total + b.price, 0);

    const cardsHtml = myBookings.map((b, index) => `
      <div class="booking-card">
        <strong>${b.title}</strong> — ${b.country} (${b.duration}) — $${b.price}
        <button class="cancel-btn" data-index="${index}">Cancel</button>
      </div>
    `).join("");

    bookingsList.innerHTML = cardsHtml + `<p><strong>Total: $${total}</strong></p>`;

    bookingsList.querySelectorAll(".cancel-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const indexToRemove = parseInt(btn.dataset.index, 10);
        const removedBooking = myBookings[indexToRemove];
        myBookings.splice(indexToRemove, 1);
        saveBookings();
        removeTripPlan(removedBooking.id, removedBooking.country);
        renderBookings();
      });
    });
  }

  renderBookings();

});