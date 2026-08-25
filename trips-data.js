const COUNTRY_INFO = {
  "Egypt":   { image: "images/egypt.jpg" },
  "Jordan":  { image: "images/jordan.jpg" },
  "Morocco": { image: "images/morocco.jpg" },
  "Turkey":  { image: "images/turkey.jpg" },
  "Greece":  { image: "images/greece.jpg" }
};

let TRIP_PACKAGES = {
  "Egypt": [
    {
      id: "eg1", title: "Cairo Highlights", duration: "3 days", price: 250,
      image: "images/cairo.jpg",
      activities: [
        ["Egyptian Museum", "Khan el-Khalili bazaar"],
        ["Cairo Tower", "Nile felucca ride"],
        ["Giza Pyramids", "Sphinx"]
      ]
    },
    {
      id: "eg2", title: "Luxor & Aswan Discovery", duration: "5 days", price: 480,
      image: "images/luxor.jpg", popular: true,
      activities: [
        ["Karnak Temple"],
        ["Valley of the Kings"],
        ["Hot air balloon ride"],
        ["Philae Temple"],
        ["Nubian village visit"]
      ]
    }
  ],
  "Jordan": [
    {
      id: "jo1", title: "Petra Express", duration: "2 days", price: 300,
      image: "images/petra.jpg", popular: true,
      activities: [
        ["Petra Treasury", "Siq walk"],
        ["Monastery hike"]
      ]
    },
    {
      id: "jo2", title: "Dead Sea & Amman", duration: "4 days", price: 420,
      image: "images/deadsea.jpg",
      activities: [
        ["Dead Sea floating"],
        ["Amman Citadel"],
        ["Rainbow Street"],
        ["Roman Theatre"]
      ]
    }
  ],
  "Morocco": [
    {
      id: "ma1", title: "Marrakech Getaway", duration: "3 days", price: 260,
      image: "images/marrakech.jpg", popular: true,
      activities: [
        ["Jemaa el-Fnaa square"],
        ["Bahia Palace"],
        ["Majorelle Garden"]
      ]
    },
    {
      id: "ma2", title: "Sahara Desert Tour", duration: "5 days", price: 510,
      image: "images/sahara.jpg",
      activities: [
        ["Drive to desert camp"],
        ["Camel trek"],
        ["Sandboarding"],
        ["Stargazing"],
        ["Return to Marrakech"]
      ]
    }
  ],
  "Turkey": [
    {
      id: "tr1", title: "Istanbul City Break", duration: "3 days", price: 270,
      image: "images/istanbul.jpg",
      activities: [
        ["Hagia Sophia", "Blue Mosque"],
        ["Grand Bazaar"],
        ["Bosphorus cruise"]
      ]
    },
    {
      id: "tr2", title: "Cappadocia Balloon Trip", duration: "4 days", price: 450,
      image: "images/cappadocia.jpg", popular: true,
      activities: [
        ["Goreme Open Air Museum"],
        ["Hot air balloon sunrise"],
        ["Underground city tour"],
        ["Pottery workshop"]
      ]
    }
  ],
  "Greece": [
    {
      id: "gr1", title: "Athens & History", duration: "3 days", price: 300,
      image: "images/athens.jpg", popular: true,
      activities: [
        ["Acropolis & Parthenon"],
        ["National Archaeological Museum"],
        ["Plaka district walk"]
      ]
    },
    {
      id: "gr2", title: "Santorini Escape", duration: "4 days", price: 520,
      image: "images/santorini.jpg",
      activities: [
        ["Oia sunset walk"],
        ["Red Beach"],
        ["Wine tasting tour"],
        ["Boat trip to volcano"]
      ]
    }
  ]
};
const storedTrips = JSON.parse(localStorage.getItem("adminTripPackages"));
if (storedTrips) TRIP_PACKAGES = storedTrips;