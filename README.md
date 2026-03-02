<p align="center">
  <img src="./img.png" alt="Kerala Medicine Price & Location Finder Banner" width="100%">
</p>

# Kerala Medicine Price & Location Finder 🎯

## Basic Details

### Team Name: BrainWave

### Team Members
- Member 1: Alphonsa Antex - MBCCET

### Hosted Project Link
https://medicine-prices.vercel.app/

### Project Description
This project helps people across Kerala find the most affordable medicines at the nearest medical shop. Users can search for any medicine by name, see the lowest price available across all 14 Kerala districts, and instantly get directions to the nearest pharmacy — all from their browser, without any login or app download.

### The Problem Statement
Many medical shops charge inflated prices for medicines, making them unaffordable for common people. Patients often have no way of knowing if a cheaper option exists nearby, and end up overpaying at whichever shop is closest to them.

### The Solution
This website lets anyone search for a medicine and instantly compare prices from pharmacies across all 14 Kerala districts. It auto-detects the user's GPS location and shows a smart **"Best Pick Near You"** — the pharmacy that offers the best combination of lowest price and shortest distance. A **Get Directions** button opens Google Maps navigation directly to the chosen shop.

---

## Technical Details

### Technologies / Components Used

**For Software:**
- **Languages used:** HTML5, CSS3, JavaScript (ES6+)
- **Frameworks used:** None — pure vanilla frontend (no React, no Vue, no build tools)
- **Libraries used:**
  - Browser Geolocation API (built-in) — auto-detects user GPS coordinates
  - Google Maps URL Integration — for one-click navigation to pharmacy
  - Google Fonts (Inter) — CDN typography only
- **Tools used:**
  - Visual Studio Code (VS Code) — Code Editor
  - Google Chrome — Testing and debugging
  - Git — Version control

---

## Features

- 🔍 **Medicine Search** — Search any medicine by name (Paracetamol, Ibuprofen, Amoxicillin, Azithromycin, Metformin, Cetirizine, and more)
- ⭐ **Best Pick Near You** — Automatically combines distance (40%) + price (60%) into a single match score to recommend the single best pharmacy for your location
- 🏆 **Lowest Price in State** — Shows the top 3 cheapest pharmacies statewide so you can compare
- 📍 **Nearest Shops** — Lists all available pharmacies sorted by real GPS distance from your location
- 🌴 **All 14 Kerala Districts** — Covers pharmacies in specific towns across all districts: Thiruvananthapuram, Kollam, Pathanamthitta, Alappuzha, Kottayam, Idukki, Ernakulam, Thrissur, Palakkad, Malappuram, Kozhikode, Wayanad, Kannur, and Kasaragod
- 🗺️ **One-click Directions** — Each pharmacy card has a Get Directions button that opens Google Maps navigation
- 📡 **Auto GPS Detection** — Location is silently detected when you search; no manual steps needed
- 🏙️ **Manual District Picker** — If GPS is denied, choose your district from a visual grid modal with icons
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop

---

## Implementation

### For Software:

#### Installation

No installation needed. This is a static frontend project.

```bash
# Clone the repository
git clone https://github.com/your-username/kerala-medicine-finder.git

# Navigate into the project folder
cd kerala-medicine-finder
```

#### Run

```bash
# Simply open index.html in your browser
# Option 1: Double-click index.html
# Option 2: Use VS Code Live Server extension
# Option 3: Use any local HTTP server

npx serve .
# Then open http://localhost:3000
```

No npm install, no build step, no backend server required.

---

## Project Documentation

### For Software:

#### Screenshots

![Homepage]https://drive.google.com/file/d/1uJa29Q2XinLZO7FMZe94BGZBEw1P2_q-/view?usp=drive_link
*Homepage with search bar, suggestion chips, and Kerala stats banner showing 14 districts covered*

![Search Results]https://drive.google.com/file/d/1tdXCDmRBJmdiryyjh3PtsFrc1BjeAdoS/view?usp=drive_link
*Search results for Paracetamol — showing Best Pick card, Lowest Price section, and Nearest Shops with real distances*

![Location Picker]https://drive.google.com/file/d/1Ug1aqpP09OmJCg_qvTfmK3xcxrLq8W_3/view?usp=drive_link
*District picker modal — users can choose from all 14 Kerala districts with emoji icons or use GPS*

#### Diagrams

**System Architecture:**

```
┌─────────────────────────────────────────────────┐
│                  Browser (Client)                │
│                                                  │
│  index.html ──► style.css  (Light theme UI)      │
│       │                                          │
│       └──► app.js                                │
│              │                                   │
│              ├── MEDICINES_DB (local JSON data)  │
│              ├── CITY_COORDS  (14 districts)     │
│              ├── Geolocation API  ◄── GPS        │
│              ├── Haversine Formula (distance)    │
│              ├── Weighted Scorer  (Best Pick)    │
│              └── Google Maps URL API (directions)│
└─────────────────────────────────────────────────┘
```
*Fully client-side — no backend, no database, no API keys required*

**Application Workflow:**

```
User opens site
      │
      ▼
Types medicine name → clicks Search
      │
      ├──► Browser silently requests GPS
      │         │
      │    GPS granted ──► haversine() calculates
      │         │           distance to all shops
      │    GPS denied ──► show cheapest statewide
      │
      ├──► renderBestPick()
      │    Score = 0.6×(price rank) + 0.4×(distance rank)
      │    → Show top-1 pharmacy as ⭐ Best Pick
      │
      ├──► renderLowest() → top 3 by price (statewide)
      │
      └──► renderNearest() → all shops sorted by distance
                │
                └──► "Get Direction" → Google Maps link
```

---

## Additional Documentation

### How the Best Pick Algorithm Works

The **Best Pick Near You** feature ranks every available pharmacy using a weighted score:

```
score = 0.6 × (normalised_price) + 0.4 × (normalised_distance)
```

- Both price and distance are normalised to a 0–1 range
- Lower score = better pick
- The pharmacy with the **lowest score** is shown as Best Pick
- A **Match Score %** (shown on the card) = `(1 - score) × 100`

This means a **Jan Aushadhi Kendra** that is slightly farther but much cheaper will beat a nearby shop with a higher price — giving users the genuinely best value option.

### District & Town Coverage

Each of the 14 Kerala districts contains multiple specific pharmacy locations at real town coordinates:

| District | Towns Covered |
|----------|--------------|
| Thiruvananthapuram | Kesavadasapuram, Vanchiyoor, Pattom |
| Kollam | Chinnakada, Kottiyam, Chavara |
| Pathanamthitta | Thiruvalla, Adoor, Ranni |
| Alappuzha | Cherthala, Kayamkulam, Haripad |
| Kottayam | Changanacherry, Ettumanoor, Pala |
| Idukki | Thodupuzha, Kattappana, Munnar |
| Ernakulam | Kakkanad, Aluva, Perumbavoor |
| Thrissur | Chalakudy, Irinjalakuda, Kunnamkulam |
| Palakkad | Ottapalam, Shoranur, Mannarkkad |
| Malappuram | Manjeri, Tirur, Perinthalmanna |
| Kozhikode | Vadakara, Koyilandy, Feroke |
| Wayanad | Kalpetta, Sulthan Bathery, Mananthavady |
| Kannur | Thalassery, Payyannur, Iritty |
| Kasaragod | Kanhangad, Nileshwaram, Hosdurg |

### File Structure

```
medicine/
├── index.html        ← Page structure, modal, sections
├── style.css         ← Light theme, animations, responsive grid
├── app.js            ← Data, geolocation, scoring, rendering
├── img.png           ← Project banner image
├── README.md         ← This file
└── screenshots/
    ├── homepage.png
    ├── results.png
    └── location-picker.png
```

---

## Project Demo

### Video
https://drive.google.com/drive/folders/1xwCkd20ZPu-QO3eDjCMm1a0vKl_ng4ZF

### Live Demo
https://medicine-prices.vercel.app/

---

## AI Tools Used

**Tool Used:** Google Gemini (Antigravity AI Coding Assistant)

**Purpose:** Full project development assistance
- Generated complete HTML structure, CSS light theme with animations
- Implemented Haversine distance formula in JavaScript
- Built the weighted Best Pick scoring algorithm
- Created the Kerala district picker modal
- Expanded pharmacy data to cover 40+ towns across 14 districts
- Debugged and iterated on UI/UX

**Key Prompts Used:**
- "Create a responsive frontend website called Statewide Medicine Price & Location Finder"
- "Can you remake this code to choose different location"
- "Make this code showing the location in Kerala of different districts"
- "In the 14 districts show different places where the medicines are available"
- "It should show the current location of the person, from that show the nearest place where the medicine is at cheapest rate"
- "Reduce the dark colour into light colour"

**Percentage of AI-generated code:** ~85%

**Human Contributions:**
- Project concept and problem definition
- Medicine selection and Kerala-specific domain knowledge
- Added custom suggestion chips (Levocetirizine, Ambroxol, Spinraza, Zolgensma)
- UI feedback and iteration direction
- Testing across districts and use cases

---

## Team Contributions

- **Alphonsa Antex** — Full project: concept, design direction, feature ideation, testing, and deployment

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

```
MIT License — free to use, modify, and distribute with attribution.
```

---

<p align="center">Made with ❤️ at TinkerHub</p>

