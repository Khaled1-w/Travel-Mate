document.addEventListener("DOMContentLoaded", () => {

  let myBookings = JSON.parse(localStorage.getItem("bookings")) || [];

  const bookingsList = document.querySelector("#bookings-list");
  const checkoutSection = document.querySelector("#checkout-section");

  function removeTripPlan(tripId, country) {
    const planKey = `${tripId}-${country}`;
    const allPlans = JSON.parse(localStorage.getItem("tripPlans")) || {};
    delete allPlans[planKey];
    localStorage.setItem("tripPlans", JSON.stringify(allPlans));
  }

  function renderBookings() {
    if (myBookings.length === 0) {
      bookingsList.innerHTML = `<p>You haven't booked any trips yet. <a href="trips.html">Book one now</a>.</p>`;
      checkoutSection.style.display = "none";
      return;
    }

    const total = myBookings.reduce((total, b) => total + b.price, 0);

    const cardsHtml = myBookings.map((b, index) => `
  <div class="booking-card">
    <img src="${b.image}" alt="${b.title}">
    <div class="booking-info">
      <strong>${b.title}</strong>
      <span>${b.country} · ${b.duration} · $${b.price}</span>
    </div>
    <button class="cancel-btn" data-index="${index}">Cancel</button>
  </div>
`).join("");

    bookingsList.innerHTML = cardsHtml + `
      <p><strong>Total: $${total}</strong></p>
      <button class="btn-pay" id="proceed-btn">Proceed to payment</button>
    `;

    bookingsList.querySelectorAll(".cancel-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const indexToRemove = parseInt(btn.dataset.index, 10);
        const removedBooking = myBookings[indexToRemove];
        myBookings.splice(indexToRemove, 1);
        localStorage.setItem("bookings", JSON.stringify(myBookings));
        removeTripPlan(removedBooking.id, removedBooking.country);
        renderBookings();
      });
    });

    document.querySelector("#proceed-btn").addEventListener("click", () => {
      checkoutSection.style.display = "block";
      checkoutSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  const NAME_RE = /^[A-Za-z ]{3,40}$/;
  const CARD_NUMBER_RE = /^\d{4} ?\d{4} ?\d{4} ?\d{4}$/;
  const EXPIRY_RE = /^(0[1-9]|1[0-2])\/\d{2}$/;
  const CVV_RE = /^\d{3}$/;

  function setError(input, msg) {
    input.closest(".field").querySelector(".error-text").textContent = msg || "";
  }

  const paymentForm = document.querySelector("#payment-form");

  paymentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#card-name");
    const number = document.querySelector("#card-number");
    const expiry = document.querySelector("#card-expiry");
    const cvv = document.querySelector("#card-cvv");
    let valid = true;

    if (!NAME_RE.test(name.value.trim())) {
      setError(name, "Enter the name as written on the card.");
      valid = false;
    } else setError(name, "");

    if (!CARD_NUMBER_RE.test(number.value.trim())) {
      setError(number, "Enter a valid 16-digit card number.");
      valid = false;
    } else setError(number, "");

    if (!EXPIRY_RE.test(expiry.value.trim())) {
      setError(expiry, "Use MM/YY format, e.g. 08/28.");
      valid = false;
    } else setError(expiry, "");

    if (!CVV_RE.test(cvv.value.trim())) {
      setError(cvv, "CVV must be exactly 3 digits.");
      valid = false;
    } else setError(cvv, "");

    if (!valid) return;

    myBookings = [];
    localStorage.setItem("bookings", JSON.stringify(myBookings));

    bookingsList.innerHTML = `<p>✅ Payment successful! Thank you for booking with TravelMate.</p>`;
    checkoutSection.style.display = "none";
    paymentForm.reset();
  });

  renderBookings();

});