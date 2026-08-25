
const packingItems = document.querySelectorAll(".packing-item");
packingItems.forEach((item) => {
    const header = item.querySelector(".packing-header");
    const arrow = item.querySelector(".arrow");
    if (!header) {
        return;
    }
    header.addEventListener("click", () => {
        const isCurrentlyActive = item.classList.contains("active");

        packingItems.forEach((otherItem) => {
            otherItem.classList.remove("active");
            const otherArrow = otherItem.querySelector(".arrow");
            if (otherArrow) {
                otherArrow.classList.remove("fa-chevron-up");
                otherArrow.classList.add("fa-chevron-down");
            }

        });


        if (!isCurrentlyActive) {
            item.classList.add("active");
            if (arrow) {
                arrow.classList.remove("fa-chevron-down");
                arrow.classList.add("fa-chevron-up");
            }
        }

    });

});

const destinationData = {
    egypt: {
        name: "Egypt",
        country: "",
        culture: {
            title: "Culture & Etiquette in Egypt",
            description: "Egyptians are known for their hospitality and warmth. It is important to respect local customs and traditions to have a pleasant experience.",
            list: [
                "Dress modestly, especially when visiting religious places.",
                "Greetings: A friendly handshake is common.",
                "Respect prayer times: Some shops may close during prayer times.",
                "Tipping is appreciated in restaurants and for services."
            ]
        },
        language: {
            title: "Language in Egypt",
            description: "Arabic is the official language of Egypt. English is widely understood in hotels, tourist attractions and many restaurants.",
            list: [
                "Official language: Arabic.",
                "English is commonly used in tourist areas.",
                "Learning a few Arabic words is appreciated.",
                "Useful word: Shukran means Thank You."
            ]
        },
        currency: {
            title: "Currency in Egypt",
            description: "The official currency of Egypt is the Egyptian Pound (EGP).",
            list: [
                "Currency: Egyptian Pound (EGP).",
                "Credit cards are accepted in many hotels and large stores.",
                "Carry some cash for small shops and local transportation.",
                "ATMs are available throughout major cities."
            ]
        },
        weather: {
            title: "Weather in Egypt",
            description: "Egypt has a hot desert climate with very warm summers and mild winters.",
            list: [
                "Summer can be very hot and dry.",
                "Winters are generally mild.",
                "Wear light and breathable clothing.",
                "Carry sunscreen and drink plenty of water."
            ]
        },
        safety: {
            title: "Safety in Egypt",
            description: "Egypt's cities are busy. Staying aware of your surroundings and keeping your belongings secure can make your trip more comfortable.",
            list: [
                "Keep your valuables secure.",
                "Use trusted transportation services.",
                "Be careful when crossing busy streets.",
                "Keep copies of important travel documents."
            ]
        },
        emergency: {
            title: "Emergency Numbers in Egypt",
            description: "Save these important numbers before traveling around Egypt.",
            list: ["Police: 122", "Ambulance: 123", "Fire Department: 180", "Tourist Police: 126"]
        },
        emergencyNumbers: [
            { icon: "fa-shield-halved", title: "Police", number: "122" },
            { icon: "fa-truck-medical", title: "Ambulance", number: "123" },
            { icon: "fa-fire", title: "Fire Department", number: "180" },
            { icon: "fa-shield", title: "Tourist Police", number: "126" },
            { icon: "fa-phone", title: "Country Code", number: "+20" }
        ]
    },

    jordan: {
        name: "Jordan",
        country: "",
        culture: {
            title: "Culture & Etiquette in Jordan",
            description: "Jordanians are known for their warmth and generosity toward guests. Respecting local traditions goes a long way here.",
            list: [
                "Dress modestly, especially outside tourist resorts.",
                "Accept tea or coffee if offered — it's a sign of hospitality.",
                "Ask before photographing people, especially in smaller towns.",
                "Use your right hand for eating and giving/receiving items."
            ]
        },
        language: {
            title: "Language in Jordan",
            description: "Arabic is the official language of Jordan. English is widely spoken in Amman and tourist areas like Petra.",
            list: [
                "Official language: Arabic.",
                "English is common in hotels and tourist sites.",
                "A few Arabic greetings are always appreciated.",
                "Useful word: Shukran means Thank You."
            ]
        },
        currency: {
            title: "Currency in Jordan",
            description: "The official currency of Jordan is the Jordanian Dinar (JOD).",
            list: [
                "Currency: Jordanian Dinar (JOD).",
                "Cards are accepted in hotels and larger restaurants.",
                "Carry cash for markets, taxis and smaller vendors.",
                "ATMs are widely available in Amman and Petra."
            ]
        },
        weather: {
            title: "Weather in Jordan",
            description: "Jordan has a mostly arid climate with hot summers and cool, sometimes cold, winters.",
            list: [
                "Summers are hot, especially in the Dead Sea and desert areas.",
                "Winters can be chilly, particularly at night.",
                "Bring layers if visiting in winter — Amman can be cold.",
                "Sun protection is a must year-round in the desert."
            ]
        },
        safety: {
            title: "Safety in Jordan",
            description: "Jordan is considered one of the more stable and safe countries in the region for travelers.",
            list: [
                "Keep valuables secure in crowded markets.",
                "Use licensed taxis or arranged transport for desert trips.",
                "Carry water when visiting Petra or Wadi Rum.",
                "Keep copies of your passport and visa."
            ]
        },
        emergency: {
            title: "Emergency Numbers in Jordan",
            description: "Save these important numbers before traveling around Jordan.",
            list: ["Police: 911", "Ambulance: 911", "Civil Defense: 911", "Tourist Police: 192"]
        },
        emergencyNumbers: [
            { icon: "fa-shield-halved", title: "Police", number: "911" },
            { icon: "fa-truck-medical", title: "Ambulance", number: "911" },
            { icon: "fa-fire", title: "Civil Defense", number: "911" },
            { icon: "fa-shield", title: "Tourist Police", number: "192" },
            { icon: "fa-phone", title: "Country Code", number: "+962" }
        ]
    },

    morocco: {
        name: "Morocco",
        country: "",
        culture: {
            title: "Culture & Etiquette in Morocco",
            description: "Morocco blends Arab, Berber and French influences. Politeness and modesty are valued, especially outside major cities.",
            list: [
                "Dress modestly, particularly in medinas and rural areas.",
                "Bargaining is expected and normal in souks.",
                "Ask permission before taking photos of people.",
                "Remove shoes when entering someone's home."
            ]
        },
        language: {
            title: "Language in Morocco",
            description: "Arabic and Amazigh (Berber) are the official languages. French is widely used in business and tourism, with some English in tourist areas.",
            list: [
                "Official languages: Arabic and Amazigh.",
                "French is common in cities and with older generations.",
                "English is increasingly spoken in tourist hubs.",
                "Useful word: Shukran means Thank You."
            ]
        },
        currency: {
            title: "Currency in Morocco",
            description: "The official currency of Morocco is the Moroccan Dirham (MAD).",
            list: [
                "Currency: Moroccan Dirham (MAD).",
                "Cash is preferred in souks and smaller riads.",
                "Cards are accepted in hotels and larger restaurants.",
                "ATMs are common in cities like Marrakech and Fez."
            ]
        },
        weather: {
            title: "Weather in Morocco",
            description: "Morocco's climate varies widely — coastal cities are mild, while the Sahara can be extreme.",
            list: [
                "Coastal cities have a mild Mediterranean climate.",
                "The Sahara is very hot by day and cold at night.",
                "Pack layers if combining cities and desert trips.",
                "Spring and autumn are the most comfortable seasons."
            ]
        },
        safety: {
            title: "Safety in Morocco",
            description: "Morocco is generally safe for tourists, though busy medinas call for normal street-smart precautions.",
            list: [
                "Keep bags close in crowded souks and medinas.",
                "Agree on taxi fares before the ride, or use the meter.",
                "Only join desert tours through trusted operators.",
                "Keep a copy of your passport separate from the original."
            ]
        },
        emergency: {
            title: "Emergency Numbers in Morocco",
            description: "Save these important numbers before traveling around Morocco.",
            list: ["Police: 19", "Gendarmerie Royale: 177", "Ambulance / Fire: 15"]
        },
        emergencyNumbers: [
            { icon: "fa-shield-halved", title: "Police", number: "19" },
            { icon: "fa-truck-medical", title: "Ambulance / Fire", number: "15" },
            { icon: "fa-shield", title: "Gendarmerie", number: "177" },
            { icon: "fa-phone", title: "Country Code", number: "+212" }
        ]
    },

    turkey: {
        name: "Turkey",
        country: "",
        culture: {
            title: "Culture & Etiquette in Turkey",
            description: "Turkey combines Turkish traditions with a modern city lifestyle. Respect for local customs is important.",
            list: [
                "Dress modestly when visiting mosques.",
                "Remove shoes when entering mosques.",
                "Be respectful during religious occasions.",
                "Hospitality is an important part of Turkish culture."
            ]
        },
        language: {
            title: "Language in Turkey",
            description: "Turkish is the official language. English is commonly understood in tourist areas.",
            list: [
                "Official language: Turkish.",
                "English is common in tourist locations.",
                "Learn a few Turkish greetings.",
                "Merhaba means Hello."
            ]
        },
        currency: {
            title: "Currency in Turkey",
            description: "Turkey uses the Turkish Lira as its official currency.",
            list: [
                "Currency: Turkish Lira (₺).",
                "Cards are accepted in many places.",
                "Carry cash for smaller businesses.",
                "ATMs are widely available."
            ]
        },
        weather: {
            title: "Weather in Turkey",
            description: "Turkey has warm summers and cool, sometimes snowy, winters, with regional variation.",
            list: [
                "Summers are generally warm, especially on the coast.",
                "Winters can be cold in central Anatolia and Cappadocia.",
                "Bring comfortable walking shoes.",
                "Carry a light jacket during cooler seasons."
            ]
        },
        safety: {
            title: "Safety in Turkey",
            description: "Turkey's big cities are busy. Normal precautions can help you enjoy your visit safely.",
            list: [
                "Keep your belongings secure.",
                "Be careful in crowded tourist areas.",
                "Use official taxis and transportation.",
                "Keep important documents safely stored."
            ]
        },
        emergency: {
            title: "Emergency Numbers in Turkey",
            description: "Turkey uses 112 as the main emergency number.",
            list: ["General Emergency: 112", "Police: 112", "Ambulance: 112", "Fire Department: 112"]
        },
        emergencyNumbers: [
            { icon: "fa-shield-halved", title: "Police", number: "112" },
            { icon: "fa-truck-medical", title: "Ambulance", number: "112" },
            { icon: "fa-fire", title: "Fire Department", number: "112" },
            { icon: "fa-phone", title: "Emergency", number: "112" },
            { icon: "fa-globe", title: "Country Code", number: "+90" }
        ]
    },

    greece: {
        name: "Greece",
        country: "",
        culture: {
            title: "Culture & Etiquette in Greece",
            description: "Greek culture values hospitality (philoxenia), family and a relaxed pace of life, especially on the islands.",
            list: [
                "A warm greeting and some small talk are appreciated.",
                "Dress modestly when visiting churches and monasteries.",
                "Tipping is not mandatory but appreciated for good service.",
                "Meals are social — don't be surprised if they run long."
            ]
        },
        language: {
            title: "Language in Greece",
            description: "Greek is the official language. English is widely spoken in Athens, Santorini and most tourist areas.",
            list: [
                "Official language: Greek.",
                "English is common in hotels, restaurants and shops.",
                "Signs in major sites are usually bilingual.",
                "Useful word: Efharisto means Thank You."
            ]
        },
        currency: {
            title: "Currency in Greece",
            description: "Greece uses the Euro (€) as its official currency.",
            list: [
                "Currency: Euro (€).",
                "Cards are widely accepted, even on smaller islands.",
                "Carry some cash for small tavernas and local shops.",
                "ATMs are common in towns and tourist areas."
            ]
        },
        weather: {
            title: "Weather in Greece",
            description: "Greece has a Mediterranean climate with hot, dry summers and mild, wetter winters.",
            list: [
                "Summers are hot and sunny, especially on the islands.",
                "Winters are mild but can be rainy and windy.",
                "Light clothing and sun protection are essential in summer.",
                "Ferries can be affected by strong winds — check schedules."
            ]
        },
        safety: {
            title: "Safety in Greece",
            description: "Greece is generally very safe for tourists, with the usual precautions in busy areas.",
            list: [
                "Keep an eye on belongings in crowded tourist spots.",
                "Book ferries and island transport with licensed operators.",
                "Wear sturdy shoes on uneven ancient sites.",
                "Stay hydrated when exploring in summer heat."
            ]
        },
        emergency: {
            title: "Emergency Numbers in Greece",
            description: "Save these important numbers before traveling around Greece.",
            list: ["General Emergency: 112", "Police: 100", "Ambulance: 166", "Fire Department: 199"]
        },
        emergencyNumbers: [
            { icon: "fa-shield-halved", title: "Police", number: "100" },
            { icon: "fa-truck-medical", title: "Ambulance", number: "166" },
            { icon: "fa-fire", title: "Fire Department", number: "199" },
            { icon: "fa-phone", title: "Emergency", number: "112" },
            { icon: "fa-globe", title: "Country Code", number: "+30" }
        ]
    }
};

const destinationSelect = document.getElementById("destinationselect");
const gettipsBtn = document.getElementById("getTipsBtn");
const infoTitle = document.getElementById("infoTitle");
const infoDescription = document.getElementById("infoDescription");
const infoList = document.getElementById("infoList");
const emergencyTitle = document.getElementById("emergencyTitle");
const emergencyDescription = document.getElementById("emergencyDescription");
const emergencyContainer = document.getElementById("emergencyContainer");
let currentDestination = "egypt";
let currentTab = "culture";

function updateInformation(destination, tab = currentTab) {
    const data = destinationData[destination];
    if (!data) { return; }
    currentDestination = destination;
    currentTab = tab;
    const tabData = data[tab];
    if (!tabData) { return; }
    infoTitle.textContent = tabData.title;
    infoDescription.textContent = tabData.description;
    infoList.innerHTML = "";
    tabData.list.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        infoList.appendChild(li);
    });
    updateEmergency(data);
}

function updateEmergency(data) {
    if (!data || !data.emergencyNumbers) { return; }
    emergencyTitle.textContent = `Emergency Numbers in ${data.name}`;
    emergencyDescription.textContent = "Save these important numbers in case of an emergency.";
    emergencyContainer.innerHTML = "";
    data.emergencyNumbers.forEach((emergency) => {
        const box = document.createElement("div");
        box.innerHTML = `
            <i class="fa-solid ${emergency.icon}"></i>
            <p>${emergency.title}</p>
            <strong>${emergency.number}</strong>
        `;
        emergencyContainer.appendChild(box);
    });
}

if (destinationSelect) {
    destinationSelect.addEventListener("change", () => {
        const selectedCountry = destinationSelect.value;
        if (!selectedCountry) {
            infoTitle.textContent = "Choose a destination to see the information";
            infoDescription.textContent = "Select a country from the destination menu to discover important travel information.";
            infoList.innerHTML = "";
            return;
        }
        updateInformation(selectedCountry, "culture");
    });
}

if (getTipsBtn) {
    getTipsBtn.addEventListener("click", () => {
        const selectedCountry = destinationSelect.value;
        if (!selectedCountry) {
            alert("Please choose a destination first.");
            destinationSelect.focus();
            return;
        }
        updateInformation(selectedCountry, "culture");
        const destinationInfo = document.querySelector(".destination-info");
        if (destinationInfo) {
            destinationInfo.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
}

const tabButtons = document.querySelectorAll(".tab-btn");
tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedTab = button.dataset.tab;
        tabButtons.forEach((btn) => { btn.classList.remove("active"); });
        button.classList.add("active");
        currentTab = selectedTab;
        updateInformation(currentDestination, selectedTab);
    });
});

const newsletterForm = document.querySelector(".newsletter form");
if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const emailInput = newsletterForm.querySelector("input[type='email']");
        if (!emailInput) { return; }
        const email = emailInput.value.trim();
        if (email === "") {
            alert("Please enter your email address.");
            return;
        }
        alert("Thank you for subscribing to Travelmate!");
        emailInput.value = "";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    if (destinationSelect) {
        destinationSelect.value = "egypt";
    }
    updateInformation("egypt", "culture");
    tabButtons.forEach((button) => {
        button.classList.remove("active");
        if (button.dataset.tab === "culture") {
            button.classList.add("active");
        }
    });
});