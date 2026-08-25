
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
    cairo: {
        name: "Cairo",
        country: "Egypt",
        culture: {
            title: "Culture & Etiquette in Cairo",
            description:
                "Egyptians are known for their hospitality and warmth. It is important to respect local customs and traditions to have a pleasant experience.",
            list: [
                "Dress modestly, especially when visiting religious places.",
                "Greetings: A friendly handshake is common.",
                "Respect prayer times: Some shops may close during prayer times.",
                "Tipping is appreciated in restaurants and for services."
            ]
        },

        language: {
            title: "Language in Cairo",

            description:
                "Arabic is the official language of Egypt. English is widely understood in hotels, tourist attractions and many restaurants.",

            list: [
                "Official language: Arabic.",
                "English is commonly used in tourist areas.",
                "Learning a few Arabic words is appreciated.",
                "Useful word: Shukran means Thank You."
            ]
        },

        currency: {
            title: "Currency in Cairo",

            description:
                "The official currency of Egypt is the Egyptian Pound (EGP).",

            list: [
                "Currency: Egyptian Pound (EGP).",
                "Credit cards are accepted in many hotels and large stores.",
                "Carry some cash for small shops and local transportation.",
                "ATMs are available throughout Cairo."
            ]
        },

        weather: {
            title: "Weather in Cairo",

            description:
                "Cairo has a hot desert climate with very warm summers and mild winters.",

            list: [
                "Summer can be very hot and dry.",
                "Winters are generally mild.",
                "Wear light and breathable clothing.",
                "Carry sunscreen and drink plenty of water."
            ]
        },

        safety: {
            title: "Safety in Cairo",

            description:
                "Cairo is a busy city. Staying aware of your surroundings and keeping your belongings secure can make your trip more comfortable.",

            list: [
                "Keep your valuables secure.",
                "Use trusted transportation services.",
                "Be careful when crossing busy streets.",
                "Keep copies of important travel documents."
            ]
        },

        emergency: {
            title: "Emergency Numbers in Cairo",

            description:
                "Save these important numbers before traveling around Cairo.",

            list: [
                "Police: 122",
                "Ambulance: 123",
                "Fire Department: 180",
                "Tourist Police: 126"
            ]
        },

        emergencyNumbers: [
            {
                icon: "fa-shield-halved",
                title: "Police",
                number: "122"
            },
            {
                icon: "fa-truck-medical",
                title: "Ambulance",
                number: "123"
            },
            {
                icon: "fa-fire",
                title: "Fire Department",
                number: "180"
            },
            {
                icon: "fa-shield",
                title: "Tourist Police",
                number: "126"
            },
            {
                icon: "fa-phone",
                title: "Country Code",
                number: "+20"
            }
        ]
    },
    barcelona: {
        name: "Barcelona",
        country: "Spain",
        culture: {
            title: "Culture & Etiquette in Barcelona",
            description:
                "Barcelona has a relaxed Mediterranean culture. Respecting local customs and being polite will make your visit more enjoyable.",
            list: [
                "Greet people politely when entering shops.",
                "Avoid being excessively loud in restaurants.",
                "Respect churches and religious sites.",
                "Keep personal belongings secure in crowded areas."
            ]
        },

        language: {
            title: "Language in Barcelona",

            description:
                "Catalan and Spanish are the main languages spoken in Barcelona. English is also common in tourist areas.",

            list: [
                "Catalan is widely spoken.",
                "Spanish is also an official language.",
                "English is common in tourist areas.",
                "Hola means Hello."
            ]
        },

        currency: {
            title: "Currency in Barcelona",

            description:
                "Barcelona uses the Euro as its official currency.",

            list: [
                "Currency: Euro (€).",
                "Cards are widely accepted.",
                "Carry some cash for small purchases.",
                "ATMs are easy to find."
            ]
        },

        weather: {
            title: "Weather in Barcelona",

            description:
                "Barcelona has a Mediterranean climate with warm summers and mild winters.",

            list: [
                "Summers are warm and sunny.",
                "Winters are generally mild.",
                "Bring comfortable walking clothes.",
                "A light jacket can be useful in cooler months."
            ]
        },

        safety: {
            title: "Safety in Barcelona",

            description:
                "Barcelona is generally popular with tourists, but crowded areas can attract pickpockets.",

            list: [
                "Watch your belongings in crowded areas.",
                "Keep your phone and wallet secure.",
                "Use official transportation.",
                "Avoid poorly lit areas late at night."
            ]
        },

        emergency: {
            title: "Emergency Numbers in Barcelona",

            description:
                "The main emergency number in Spain is 112.",

            list: [
                "General Emergency: 112",
                "Police: 091",
                "Fire Department: 080",
                "Ambulance: 061"
            ]
        },

        emergencyNumbers: [
            {
                icon: "fa-shield-halved",
                title: "Police",
                number: "091"
            },
            {
                icon: "fa-truck-medical",
                title: "Ambulance",
                number: "061"
            },
            {
                icon: "fa-fire",
                title: "Fire Department",
                number: "080"
            },
            {
                icon: "fa-phone",
                title: "Emergency",
                number: "112"
            },
            {
                icon: "fa-globe",
                title: "Country Code",
                number: "+34"
            }
        ]
    },
    paris: {
        name: "Paris",
        country: "France",
        culture: {
            title: "Culture & Etiquette in Paris",
            description:
                "Paris has a rich cultural heritage. Simple courtesy and respectful behavior are appreciated.",
            list: [
                "Say Bonjour when entering a shop.",
                "Dress appropriately when visiting churches.",
                "Keep your voice moderate in public places.",
                "Tipping is appreciated but usually not mandatory."
            ]
        },

        language: {
            title: "Language in Paris",

            description:
                "French is the official language. English is commonly spoken in tourist areas.",
            list: [
                "Official language: French.",
                "English is common in tourist locations.",
                "Learning basic French greetings is useful.",
                "Bonjour means Hello."
            ]
        },

        currency: {
            title: "Currency in Paris",

            description:
                "Paris uses the Euro as its official currency.",

            list: [
                "Currency: Euro (€).",
                "Credit cards are widely accepted.",
                "Carry some cash for smaller businesses.",
                "ATMs are widely available."
            ]
        },

        weather: {
            title: "Weather in Paris",

            description:
                "Paris has mild summers and cool winters with rainfall throughout the year.",

            list: [
                "Weather can change quickly.",
                "Bring a light jacket.",
                "An umbrella can be useful.",
                "Comfortable walking shoes are recommended."
            ]
        },

        safety: {
            title: "Safety in Paris",

            description:
                "Paris is a major tourist destination. Staying alert in crowded tourist areas is recommended.",

            list: [
                "Watch for pickpockets.",
                "Keep valuables close to you.",
                "Be careful in crowded metro stations.",
                "Use official taxis and transportation."
            ]
        },

        emergency: {
            title: "Emergency Numbers in Paris",

            description:
                "France has dedicated emergency numbers for police, medical assistance and fire services.",

            list: [
                "Police: 17",
                "Ambulance: 15",
                "Fire Department: 18",
                "European Emergency: 112"
            ]
        },

        emergencyNumbers: [
            {
                icon: "fa-shield-halved",
                title: "Police",
                number: "17"
            },
            {
                icon: "fa-truck-medical",
                title: "Ambulance",
                number: "15"
            },
            {
                icon: "fa-fire",
                title: "Fire Department",
                number: "18"
            },
            {
                icon: "fa-phone",
                title: "Emergency",
                number: "112"
            },
            {
                icon: "fa-globe",
                title: "Country Code",
                number: "+33"
            }
        ]
    },
    tokyo: {
        name: "Tokyo",
        country: "Japan",
        culture: {
            title: "Culture & Etiquette in Tokyo",
            description:
                "Japanese culture places strong importance on politeness, cleanliness and respect for others.",
            list: [
                "Be quiet on public transportation.",
                "Bow slightly when greeting someone.",
                "Remove shoes when required.",
                "Avoid eating while walking in crowded areas."
            ]
        },

        language: {
            title: "Language in Tokyo",
            description:
                "Japanese is the main language in Tokyo. English is available in many tourist locations.",
            list: [
                "Official language: Japanese.",
                "English signs are common in tourist areas.",
                "Learn simple Japanese greetings.",
                "Arigato means Thank You."
            ]
        },

        currency: {
            title: "Currency in Tokyo",
            description:
                "Japan uses the Japanese Yen as its currency.",
            list: [
                "Currency: Japanese Yen (¥).",
                "Cards are increasingly accepted.",
                "Cash is still useful in smaller businesses.",
                "ATMs are widely available."
            ]
        },
        weather: {
            title: "Weather in Tokyo",
            description:
                "Tokyo has four distinct seasons with hot summers and cool winters.",
            list: [
                "Summer can be hot and humid.",
                "Spring is generally mild.",
                "Winter can be cold.",
                "Bring an umbrella during rainy periods."
            ]
        },
        safety: {
            title: "Safety in Tokyo",
            description:
                "Tokyo is known for being a safe major city, but normal travel precautions are still recommended.",
            list: [
                "Keep your belongings secure.",
                "Follow local transportation rules.",
                "Stay aware in crowded stations.",
                "Keep emergency contact information available."
            ]
        },

        emergency: {
            title: "Emergency Numbers in Tokyo",
            description :
                "Japan has dedicated emergency numbers for police and fire or ambulance services.",
            list: [
                "Police: 110",
                "Ambulance: 119",
                "Fire Department: 119",
                "General assistance: Check local services."
            ]
        },

        emergencyNumbers: [
            {
                icon: "fa-shield-halved",
                title: "Police",
                number: "110"
            },
            {
                icon: "fa-truck-medical",
                title: "Ambulance",
                number: "119"
            },
            {
                icon: "fa-fire",
                title: "Fire Department",
                number: "119"
            },
            {
                icon: "fa-phone",
                title: "Emergency",
                number: "119"
            },
            {
                icon: "fa-globe",
                title: "Country Code",
                number: "+81"
            }
        ]
    },
    istanbul: {
        name: "Istanbul",
        country: "Turkey",
        culture: {
            title: "Culture & Etiquette in Istanbul",
            description:
                "Istanbul combines Turkish traditions with a modern city lifestyle. Respect for local customs is important.",
            list: [
                "Dress modestly when visiting mosques.",
                "Remove shoes when entering mosques.",
                "Be respectful during religious occasions.",
                "Hospitality is an important part of Turkish culture."
            ]
        },

        language: {
            title: "Language in Istanbul",
            description:
                "Turkish is the official language. English is commonly understood in tourist areas.",
            list: [
                "Official language: Turkish.",
                "English is common in tourist locations.",
                "Learn a few Turkish greetings.",
                "Merhaba means Hello."
            ]
        },
        currency: {
            title: "Currency in Istanbul",
            description:
                "Turkey uses the Turkish Lira as its official currency.",
            list: [
                "Currency: Turkish Lira (₺).",
                "Cards are accepted in many places.",
                "Carry cash for smaller businesses.",
                "ATMs are widely available."
            ]
        },
        weather: {
            title: "Weather in Istanbul",
            description:
                "Istanbul has warm summers and cool, rainy winters.",
            list: [
                "Summers are generally warm.",
                "Winters can be rainy and cold.",
                "Bring comfortable walking shoes.",
                "Carry a light jacket during cooler seasons."
            ]
        },
        safety: {
            title: "Safety in Istanbul",

            description:
                "Istanbul is a large and busy city. Normal precautions can help you enjoy your visit safely.",
            list: [
                "Keep your belongings secure.",
                "Be careful in crowded tourist areas.",
                "Use official taxis and transportation.",
                "Keep important documents safely stored."
            ]
        },
        emergency: {
            title: "Emergency Numbers in Istanbul",
            description:
                "Turkey uses 112 as the main emergency number.",
            list: [
                "General Emergency: 112",
                "Police: 112",
                "Ambulance: 112",
                "Fire Department: 112"
            ]
        },
        emergencyNumbers: [
            {
                icon: "fa-shield-halved",
                title: "Police",
                number: "112"
            },
            {
                icon: "fa-truck-medical",
                title: "Ambulance",
                number: "112"
            },
            {
                icon: "fa-fire",
                title: "Fire Department",
                number: "112"
            },
            {
                icon: "fa-phone",
                title: "Emergency",
                number: "112"
            },
            {
                icon: "fa-globe",
                title: "Country Code",
                number: "+90"
            }
        ]
    }

};

const destinationSelect =
    document.getElementById("destinationselect");
const gettipsBtn =
    document.getElementById("getTipsBtn");
const infoTitle =
    document.getElementById("infoTitle");
const infoDescription =
    document.getElementById("infoDescription");
const infoList =
    document.getElementById("infoList");
const emergencyTitle =
    document.getElementById("emergencyTitle");
const emergencyDescription =
    document.getElementById("emergencyDescription");
const emergencyContainer =
    document.getElementById("emergencyContainer");
let currentDestination = "cairo";
let currentTab = "culture";
function updateInformation(destination, tab = currentTab) {
    const data = destinationData[destination];

    if (!data) {
        return;
    }

    currentDestination = destination;
    currentTab = tab;

    const tabData = data[tab];

    if (!tabData) {
        return;
    }
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
    if (!data || !data.emergencyNumbers) {
        return;
    }
    emergencyTitle.textContent =
        `Emergency Numbers in ${data.name}, ${data.country}`;
    emergencyDescription.textContent =
        "Save these important numbers in case of an emergency.";
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
        const selectedCity =
            destinationSelect.value;
        if (!selectedCity) {
            infoTitle.textContent =
                "Choose a destination to see the information";
            infoDescription.textContent =
                "Select a city from the destination menu to discover important travel information.";
            infoList.innerHTML = "";
            return;
        }

        updateInformation(
            selectedCity,
            "culture"
        );

    });

}
if (getTipsBtn) {
    getTipsBtn.addEventListener("click", () => {
        const selectedCity =
            destinationSelect.value;
        if (!selectedCity) {
            alert("Please choose a destination first.");
            destinationSelect.focus();
            return;
        }
        updateInformation(
            selectedCity,
            "culture"
        );
        const destinationInfo =
            document.querySelector(".destination-info");
        if (destinationInfo) {
            destinationInfo.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });
}
const tabButtons =
    document.querySelectorAll(".tab-btn");
tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedTab =
            button.dataset.tab;
        
        tabButtons.forEach((btn) => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
        currentTab = selectedTab;
        updateInformation(
            currentDestination,
            selectedTab
        );
    });
});
const newsletterForm =
    document.querySelector(".newsletter form");
if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const emailInput =
            newsletterForm.querySelector("input[type='email']");
        if (!emailInput) {
            return;
        }
        const email =
            emailInput.value.trim();
        if (email === "") {
            alert("Please enter your email address.");
            return;
        }
        alert(
            "Thank you for subscribing to Travelmate!"
        );
        emailInput.value = "";
    });
}
document.addEventListener("DOMContentLoaded", () => {
    if (destinationSelect) {
        destinationSelect.value = "cairo";

    }
    updateInformation(
        "cairo",
        "culture"
    );
    tabButtons.forEach((button) => {
        button.classList.remove("active");
        if (button.dataset.tab === "culture") {
            button.classList.add("active");
        }
    });
});