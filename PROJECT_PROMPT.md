# 🇮🇳 Explore India — Modern Indian Tourism Website

Create a modern, premium and fully responsive **Indian Tourism Website** called **"Explore India"** using **React + Vite**.

The website should look like a professional tourism/travel platform and should be suitable for a college full-stack project that will later be connected to a backend and database.

The frontend must be completely functional in VS Code.

---

# 1. Technology Stack

Use:

- React
- Vite
- React Router DOM
- Tailwind CSS
- Framer Motion
- Lucide React
- JavaScript / JSX
- Local JSON/JS mock data initially

Do NOT build the backend yet.

However, structure the project so that a future backend using:

**React → Node.js + Express → PostgreSQL/MongoDB**

can be added easily.

---

# 2. Website Brand

Website Name:

**Explore India**

Tagline:

**"One Country. A Thousand Stories."**

Website purpose:

Help tourists discover Indian destinations, states, heritage sites, beaches, mountains, food, culture, festivals and travel experiences.

---

# 3. Visual Design

Create a premium Indian travel aesthetic.

Use:

- Large destination photography
- Full-width hero sections
- Rounded cards
- Glassmorphism
- Soft shadows
- Clean typography
- Modern spacing
- Editorial-style travel sections
- Subtle Indian cultural visual elements
- Smooth animations

Color palette:

Primary Saffron:
`#FF7A00`

Deep Navy:
`#102A43`

Warm White:
`#FFF9F2`

Forest Green:
`#285943`

Golden:
`#F4B942`

Use the colors professionally and avoid making the website look overly colorful.

---

# 4. Tourism Agent Contact

Add a dedicated **Tourism Agent Contact** feature throughout the website.

Use this placeholder:

**Tourism Agent: +91 XXXXX XXXXX**

Make it easy to replace later from one configuration file.

Create:

`src/config/contact.js`

Example data:

```javascript
export const tourismAgent = {
  name: "Explore India Tourism Agent",
  phone: "+91 XXXXX XXXXX",
  whatsapp: "+91 XXXXX XXXXX",
  email: "info@exploreindia.com"
};

```

Do not hard-code the phone number into multiple components.

Every component should import the contact information from this configuration.

---

# 5. Tourism Agent Navbar

Add a contact area in the desktop navbar:

**📞 Tourism Agent: +91 XXXXX XXXXX**

Add a small:

**Call Now**

button.

On mobile, show:

**📞 Call Tourism Agent**

Use a `tel:` link.

Example behavior:

```text
Call Tourism Agent
        ↓
tel:+91XXXXXXXXXX

```

---

# 6. Floating Contact Button

Create a floating contact button at the bottom-right of the website.

It should contain:

**💬 Contact Tourism Agent**

When clicked, show a small animated contact panel:

```text
Need help planning your trip?

Tourism Agent
+91 XXXXX XXXXX

[ Call Now ]
[ WhatsApp ]

```

Use Framer Motion for the popup animation.

The floating button should remain visible while scrolling but should not cover important content on mobile.

---

# 7. WhatsApp Integration

Create a WhatsApp button using the configured tourism agent number.

Use:

```text
https://wa.me/91XXXXXXXXXX

```

Do not hard-code the number.

Generate the WhatsApp URL from the contact configuration.

Example:

```javascript
const whatsappUrl =
  `https://wa.me/${tourismAgent.whatsapp}`;

```

Add a pre-filled message:

"Hello, I want help planning my trip to India."

---

# 8. Homepage

Create:

`/`

The homepage should have the following sections.

## Hero Section

Create a full-screen Indian tourism hero section.

Use a beautiful India travel image/video.

Headline:

**Discover India**

Subheading:

**One Country. A Thousand Stories.**

Search bar:

**"Where do you want to go?"**

Popular searches:

- Goa
- Rajasthan
- Kerala
- Kashmir
- Himachal Pradesh
- Varanasi

Buttons:

**Explore Destinations**

**Plan My Trip**

Add a small tourism agent CTA:

**Need help? Talk to our Tourism Agent**

`+91 XXXXX XXXXX`

---

# 9. Hero Animations

Use Framer Motion.

Add:

- Background image slow zoom
- Heading fade-in
- Heading slide-up
- Search bar slide-up
- Destination chips stagger animation
- Button hover animation
- Floating travel cards

Keep animations smooth and professional.

---

# 10. Explore India

Create a section:

**Explore India**

Subtitle:

"From the Himalayas to the Indian Ocean."

Create destination cards for:

- Goa
- Rajasthan
- Kerala
- Kashmir
- Himachal Pradesh
- Gujarat
- Maharashtra
- Karnataka
- Tamil Nadu
- Uttar Pradesh

Each card should have:

- Image
- Destination name
- State
- Category
- Rating
- Short description
- Explore button
- Wishlist heart icon

---

# 11. Explore by Experience

Create large visual cards for:

- 🏔 Mountains
- 🏖 Beaches
- 🏰 Heritage
- 🐅 Wildlife
- 🧘 Spiritual
- 🍛 Food
- 🎉 Festivals
- 🧗 Adventure

Cards should animate on hover.

---

# 12. Trending Destinations

Create a modern section:

**Trending Destinations**

Example:

### Goa

Beach • Nightlife • Food

Rating: 4.8

### Jaipur

Heritage • Culture • Forts

Rating: 4.7

### Kerala

Backwaters • Nature • Culture

Rating: 4.9

### Kashmir

Mountains • Lakes • Adventure

Rating: 4.9

---

# 13. India Interactive Map

Create an interactive India map section.

Title:

**Explore India State by State**

When a user selects a state, display:

- State name
- State image
- Popular destinations
- Popular experiences
- Best time to visit
- Short description

Initially use local mock data.

Structure the component so that it can later consume:

```text
GET /api/states
GET /api/states/:stateId/destinations

```

---

# 14. Destination Listing Page

Create:

`/destinations`

Features:

- Search destinations
- State filter
- Category filter
- Rating filter
- Sort by rating
- Sort by popularity
- Responsive grid

Add destination cards.

Each card must include:

- Image
- Name
- Location
- Category
- Rating
- Description
- Wishlist
- Explore button

---

# 15. Destination Details Page

Create dynamic route:

`/destinations/:slug`

Example:

`/destinations/goa`

Display:

- Large hero image
- Destination name
- State
- Rating
- Description
- Best time to visit
- Popular places
- Things to do
- Travel tips
- Image gallery
- Location
- Wishlist button
- Plan Trip button

Add a tourism agent contact box:

```text
Planning a trip to Goa?

Talk to our Tourism Agent

+91 XXXXX XXXXX

[ Call Now ]
[ WhatsApp ]

```

Make this box visually attractive.

---

# 16. Tourism Agent CTA

Add tourism agent contact sections throughout important pages.

For example:

```text
──────────────────────────────

Need help planning your journey?

Our Tourism Agent can help you
choose destinations, experiences
and travel plans.

📞 +91 XXXXX XXXXX

[ Call Tourism Agent ]
[ Chat on WhatsApp ]

──────────────────────────────

```

Use Framer Motion when this section enters the viewport.

---

# 17. Experiences Page

Create:

`/experiences`

Categories:

- Adventure
- Heritage
- Beaches
- Mountains
- Wildlife
- Spiritual
- Food
- Festivals

Clicking a category should show related destinations.

---

# 18. Itinerary Page

Create:

`/itineraries`

Show:

### 3 Days in Goa

Beach • Food • Nightlife

### 5 Days in Rajasthan

Jaipur • Jodhpur • Udaipur

### 7 Days in Kerala

Kochi • Munnar • Alleppey

### 6 Days in Himachal Pradesh

Manali • Kasol • Shimla

Each itinerary should have:

- Duration
- Places
- Highlights
- Estimated budget
- View itinerary button
- Contact tourism agent button

---

# 19. Trip Planner

Create:

`/plan-trip`

Create a multi-step frontend form.

Step 1:

Where do you want to go?

Step 2:

Travel duration

Step 3:

Budget

Step 4:

Travel type

Options:

- Solo
- Couple
- Family
- Friends

Step 5:

Interests

- Adventure
- Beaches
- Heritage
- Food
- Wildlife
- Spiritual
- Nature

Final screen:

**Your trip preferences are ready!**

Buttons:

**Generate My Itinerary**

**Talk to Tourism Agent**

Initially this can use mock data.

Later it can connect to an AI/backend service.

---

# 20. Wishlist

Allow users to click the heart icon on destinations.

Initially use:

```text
localStorage

```

Later this should connect to:

```text
POST /api/wishlist
GET /api/wishlist
DELETE /api/wishlist/:id

```

Create:

`src/services/wishlistService.js`

---

# 21. Login / Signup

Create:

`/login`

and:

`/signup`

Modern UI with:

- Email
- Password
- Name
- Remember me
- Login
- Create account

Do not implement real authentication yet.

Prepare:

`src/services/userService.js`

for future backend authentication.

---

# 22. Data Architecture

Create:

```text
src/data/
├── destinations.js
├── states.js
├── experiences.js
├── places.js
└── itineraries.js

```

Do not hard-code destination information directly inside UI components.

Example:

```javascript
export const destinations = [
  {
    id: 1,
    name: "Goa",
    slug: "goa",
    state: "Goa",
    category: "Beach",
    rating: 4.8,
    image: "/images/goa.jpg",
    description: "Beautiful beaches, culture and nightlife."
  }
];

```

---

# 23. API Service Architecture

Create:

```text
src/services/
├── api.js
├── destinationService.js
├── stateService.js
├── experienceService.js
├── itineraryService.js
├── userService.js
└── wishlistService.js

```

Example:

```javascript
export async function getDestinations() {
  const response = await fetch("/api/destinations");

  if (!response.ok) {
    throw new Error("Unable to load destinations");
  }

  return response.json();
}

```

The UI components should NOT directly contain API/fetch logic.

Use:

```text
Components
     ↓
Hooks
     ↓
Services
     ↓
API

```

---

# 24. Future Backend Architecture

Prepare the frontend for:

```text
React + Vite
       ↓
React Router
       ↓
Components
       ↓
Hooks
       ↓
Service Layer
       ↓
REST API
       ↓
Node.js + Express
       ↓
Prisma ORM
       ↓
PostgreSQL

```

Future database tables can include:

```text
users
states
destinations
places
experiences
itineraries
reviews
wishlist
bookings

```

---

# 25. Reviews

Prepare the destination details page for future reviews.

UI:

```text
Traveler Reviews

★★★★★ 4.8

"Beautiful destination..."

— Traveler

[ Write a Review ]

```

Future API:

```text
GET /api/destinations/:id/reviews
POST /api/destinations/:id/reviews
DELETE /api/reviews/:id

```

---

# 26. Loading and Error States

Every data-driven section should have:

Loading state:

```text
Loading destinations...

```

Error state:

```text
Unable to load destinations.

[ Try Again ]

```

Empty state:

```text
No destinations found.
Try another search.

```

---

# 27. Responsive Design

The website must work perfectly on:

- Desktop
- Laptop
- Tablet
- Mobile

Mobile requirements:

- Hamburger menu
- Bottom-safe floating contact button
- Responsive cards
- Swipeable destination sections
- Proper typography
- No horizontal scrolling
- Responsive search
- Responsive map

---

# 28. Accessibility

Use:

- Semantic HTML
- Alt text
- Keyboard navigation
- Accessible buttons
- Focus states
- Good color contrast
- ARIA labels where required

---

# 29. Folder Structure

Create:

```text
src/
│
├── assets/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── SearchBar.jsx
│   ├── DestinationCard.jsx
│   ├── ExperienceCard.jsx
│   ├── IndiaMap.jsx
│   ├── TourismAgent.jsx
│   ├── FloatingContact.jsx
│   └── Loading.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Destinations.jsx
│   ├── DestinationDetails.jsx
│   ├── Experiences.jsx
│   ├── Itineraries.jsx
│   ├── PlanTrip.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   └── About.jsx
│
├── data/
│   ├── destinations.js
│   ├── states.js
│   ├── experiences.js
│   └── itineraries.js
│
├── services/
│   ├── api.js
│   ├── destinationService.js
│   ├── stateService.js
│   ├── userService.js
│   └── wishlistService.js
│
├── config/
│   └── contact.js
│
├── hooks/
│   └── useDestinations.js
│
├── utils/
│   └── helpers.js
│
├── App.jsx
├── main.jsx
└── index.css

```

---

# 30. Important Development Rule

Do not create a single huge App.jsx file.

Create reusable components.

Do not duplicate:

- Destination cards
- Tourism agent contact
- Buttons
- Navbar
- Footer
- Search
- API logic

Everything reusable should become a component or service.

---

# 31. Motion Design

Use Framer Motion for:

- Hero entrance
- Scroll reveal
- Destination card hover
- Image zoom
- Navbar transition
- Mobile menu
- Search results
- Modal
- Wishlist animation
- Tourism agent popup
- Page transitions

Keep the motion premium and subtle.

Avoid excessive animations that make the website difficult to use.

---

# 32. Final Requirements

The application must run using:

```bash
npm install
npm run dev

```

It must work correctly in VS Code.

Ensure:

- No broken imports
- No console errors
- No missing components
- Responsive design
- Working navigation
- Working search
- Working filters
- Working destination details
- Working wishlist using localStorage
- Working tourism agent call button
- Working WhatsApp button
- Working mobile navigation
- Working animations

At the end, provide:

1. Complete folder structure
2. Installation commands
3. Run commands
4. All required dependencies
5. Explanation of each major component
6. Explanation of the tourism agent contact system
7. Explanation of how to replace the tourism agent number
8. Future backend API structure
9. Future database structure
10. Instructions for connecting Node.js + Express
11. Instructions for connecting PostgreSQL + Prisma

Build this as a **scalable, professional React tourism frontend**, not a simple static webpage.