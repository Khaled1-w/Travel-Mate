/* Shared destination content — used by explore.html, destinations.html
   and destination-details.html. Uses the same /images/*.jpg files
   already referenced by trips-data.js, so nothing extra to download. */

let DESTINATIONS = [
  {
    id: "egypt",
    name: "Egypt",
    image: "images/egypt.jpg",
    type: "historical",
    budget: "medium",
    tagline: "Where the pyramids meet the Nile skyline",
    about: "Egypt blends ancient wonders with fast-moving modern cities. Expect crowded souks, the call to prayer echoing over rooftops, and the last standing wonder of the ancient world just outside Cairo.",
    bestTime: "October – April",
    attractions: [
      { name: "Egyptian Museum", desc: "Home to the Tutankhamun treasures and thousands of pharaonic artifacts." },
      { name: "Khan el-Khalili", desc: "A centuries-old bazaar for spices, lanterns and handmade crafts." },
      { name: "Giza Pyramids & Sphinx", desc: "The last standing wonder of the ancient world." },
      { name: "Karnak Temple, Luxor", desc: "A vast temple complex built up over 2,000 years." }
    ],
    thingsToDo: ["Visit museums", "Explore historical areas", "Try local food", "Nile felucca ride"]
  },
  {
    id: "jordan",
    name: "Jordan",
    image: "images/jordan.jpg",
    type: "desert",
    budget: "medium",
    tagline: "Rose-red ruins and floating in the Dead Sea",
    about: "Jordan is a compact, welcoming country built around one of the world's great archaeological sites, with the Dead Sea, desert canyons and Roman ruins all within a short drive of Amman.",
    bestTime: "March – May, September – November",
    attractions: [
      { name: "Petra", desc: "The rose-red city carved into the cliffs, reached through the narrow Siq." },
      { name: "Dead Sea", desc: "Float effortlessly in the saltiest water on earth." },
      { name: "Amman Citadel", desc: "Ruins overlooking the capital's rooftops." },
      { name: "Wadi Rum", desc: "A dramatic desert of red sand and towering rock formations." }
    ],
    thingsToDo: ["Explore historical areas", "Float in the Dead Sea", "Desert camping", "Try local food"]
  },
  {
    id: "morocco",
    name: "Morocco",
    image: "images/morocco.jpg",
    type: "adventure",
    budget: "low",
    tagline: "Souks, mountains and the edge of the Sahara",
    about: "Morocco moves from the maze-like medinas of Marrakech to the peaks of the Atlas Mountains and the dunes of the Sahara, all within a few hours of each other.",
    bestTime: "October – April",
    attractions: [
      { name: "Jemaa el-Fnaa", desc: "Marrakech's legendary main square, alive from morning to midnight." },
      { name: "Bahia Palace", desc: "19th-century palace famed for its tilework and gardens." },
      { name: "Majorelle Garden", desc: "A cobalt-blue garden retreat in the middle of the city." },
      { name: "Sahara Desert", desc: "Camel treks and camping under some of the clearest skies around." }
    ],
    thingsToDo: ["Explore historical areas", "Desert safari", "Try local food", "Photography"]
  },
  {
    id: "turkey",
    name: "Turkey",
    image: "images/turkey.jpg",
    type: "historical",
    budget: "medium",
    tagline: "Istanbul's skyline and Cappadocia's balloons",
    about: "Turkey spans two continents — Istanbul's mosques and bazaars on one side, and the otherworldly rock formations of Cappadocia a short flight away.",
    bestTime: "April – June, September – November",
    attractions: [
      { name: "Hagia Sophia", desc: "A Byzantine cathedral turned mosque turned museum turned mosque again." },
      { name: "Blue Mosque", desc: "Six minarets and thousands of hand-painted blue tiles." },
      { name: "Grand Bazaar", desc: "One of the oldest and largest covered markets in the world." },
      { name: "Cappadocia balloon ride", desc: "Sunrise views over the fairy chimneys of central Anatolia." }
    ],
    thingsToDo: ["Visit museums", "Explore historical areas", "Bosphorus cruise", "Hot air ballooning"]
  },
  {
    id: "greece",
    name: "Greece",
    image: "images/greece.jpg",
    type: "beach",
    budget: "high",
    tagline: "Whitewashed islands and ancient ruins",
    about: "Greece pairs the Acropolis and Athens' museums with the postcard-perfect islands of the Aegean — a mix of history, food and sea that's hard to beat.",
    bestTime: "May – June, September – October",
    attractions: [
      { name: "Acropolis & Parthenon", desc: "The symbol of ancient Athens, overlooking the modern city." },
      { name: "Oia, Santorini", desc: "Whitewashed houses and blue domes over the caldera." },
      { name: "Plaka district", desc: "Athens' old town, cobblestoned streets beneath the Acropolis." },
      { name: "Red Beach, Santorini", desc: "Volcanic red cliffs meeting the Aegean Sea." }
    ],
    thingsToDo: ["Visit museums", "Explore historical areas", "Island hopping", "Try local food"]
  }
];
const storedDestinations = JSON.parse(localStorage.getItem("adminDestinations"));
if (storedDestinations) DESTINATIONS = storedDestinations;